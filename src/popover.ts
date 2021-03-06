namespace AngularPopoverModule {

    export interface IPopOverController {
        positionType: string;
        isVisible: boolean;
    }

    class PopOverController implements IPopOverController {
        static $inject = ['isMobile', '$element'];

        constructor(isMobile: boolean, private $element: angular.IAugmentedJQuery) {
            this.isVisible = false;
            this.isFullscreen = isMobile;
            this.initialized = true;
        }

        show: any;
        hide: any;
        initialized: boolean;
        positionType: string = "mouse";
        popOverClick = (): any => { };
        popOverDisabled = (): boolean => false;

        $doCheck() {
            const isDisabled = this.popOverDisabled();
            if (isDisabled !== this._isDisabled) {
                this._isDisabled = isDisabled;
                const css = 'popover--disabled';
                if (isDisabled) this.$element.addClass(css);
                else this.$element.removeClass(css);
            }
        }

        private _isDisabled: boolean;
        public get isDisabled(): boolean {
            return this._isDisabled;
        }

        private _isVisible = false;

        get isVisible() {
            return this._isVisible;
        }

        set isVisible(visible: boolean) {
            if (!this.initialized || this.isDisabled)
                return;

            this._isVisible = visible;
            if (visible)
                this.show();
            else
                this.hide();
        }

        public isFullscreen = false;

        public closeContent() {
            this.isVisible = false;
        }

        public toggleContent() {
            this.isVisible = !this.isVisible;
        }
    }

    class PopOverDirective {
        static $inject = ["$q", "$parse", "$compile", "$window", "$templateCache", "$timeout", "pageContentFactory"];

        constructor(private $q: angular.IQService, private $parse: angular.IParseService, private $compile, private $window: angular.IWindowService, private $templateCache: angular.ITemplateCacheService, private $timeout: angular.ITimeoutService, private pageContentFactory: IPageContentFactory) { }

        restrict = 'A';
        // scope = DO NOT USE A SCOPE ON THIS! 360NOSCOPE
        controller = PopOverController;
        controllerAs = 'popOver';
        bindToController = true;

        private position;

        link = ($scope, $element, $attrs, ctrls, $transclude) => {
            var ctrl: PopOverController = $scope[this.controllerAs];

            if ($attrs.popOverClick) {
                var popOverClickInvoker = this.$parse($attrs.popOverClick);
                ctrl.popOverClick = () => popOverClickInvoker($scope);
            }

            if ($attrs.popOverDisabled) {
                var popOverDisabledInvoker = this.$parse($attrs.popOverDisabled);
                ctrl.popOverDisabled = () => popOverDisabledInvoker($scope);
            }

            var $body = angular.element('body'),
                $html = angular.element('html'),
                isVertical = typeof $attrs.popOverHorizontal == 'undefined',
                xOffset = isVertical ? 27 : 20,
                yOffset = isVertical ? 16 : 24,
                pageContentService: IPageContentService,
                content,
                scrollableContent,
                position;

            if ($attrs.positionType)
                ctrl.positionType = $attrs.positionType;

            var getEvent = (...names) => {
                return names.map(name => `${name}.${$scope.$id}`).join(' ');
            };

            var getData = () => {
                if ($attrs.popOverClick) {
                    return ctrl.popOverClick();
                }

                var defered = this.$q.defer();
                defered.resolve();
                return defered.promise;
            };

            var create = () => {
                content = this.createContent($attrs.popOver, $scope, $transclude, $element);
                content.on("click", () => {
                    if (!ctrl.isVisible)
                        return;

                    ctrl.isVisible = false;
                    $scope.$apply();
                });

                scrollableContent = angular.element(".popover-scrollable", content);

                $body.append(content);
                pageContentService = this.pageContentFactory.get(content, isVertical, xOffset, yOffset);
            };

            var setPosition = () => {
                this.$timeout(() => {
                    content.addClass("popover--isVisible");

                    // is it scrollable
                    if (scrollableContent.length > 0) {
                        var elScroll = scrollableContent.get(0);
                        var hasVertScrollbar = elScroll.scrollHeight > elScroll.clientHeight;
                        scrollableContent.toggleClass('popover-scrollable--vert', hasVertScrollbar);
                    }

                    if (ctrl.isFullscreen)
                        return;

                    if (position)
                        pageContentService.positionFromPoint(position.x, position.y);
                    else
                        pageContentService.positionFromElement($element);
                }, 50);
            };

            ctrl.show = () => {
                if (!content) {
                    create();
                }

                getData().then(() => {
                    setPosition();
                });
            };

            ctrl.hide = () => {
                content.removeClass("popover--isVisible");
                position = null;
            };

            $element.on("click.popOver", e => {
                if (ctrl.positionType == 'mouse')
                    position = { x: e.pageX, y: e.pageY };
                ctrl.isVisible = !ctrl.isVisible;
                $scope.$apply();
            });

            $html.on(getEvent("click"), e => {
                if (!ctrl.isVisible)
                    return;

                var hasTarget = $element.has(e.target).length > 0,
                    isTarget = $element.is(e.target);

                if (hasTarget || isTarget)
                    return;

                ctrl.isVisible = false;
                $scope.$apply();
            });

            $html.on(getEvent("DOMMouseScroll", "mousewheel"), (e) => {
                if (!ctrl.isVisible)
                    return;

                setPosition();
            });

            $(this.$window).on(getEvent("resize"), e => {
                if (!ctrl.isVisible)
                    return;

                setPosition();
            });

            $body.on(getEvent("keyup"), e => {
                if (!ctrl.isVisible)
                    return;

                if (e.which === 27) {
                    ctrl.isVisible = false;
                    $scope.$apply();
                }
            });

            $element.on("$destroy", () => {
                $(this.$window).off(getEvent("resize"));
                $body.off(getEvent("keyup", "DOMMouseScroll", "mousewheel"));
                $body.off(getEvent("keyup"));
                $html.off(getEvent("click"));
                if (content)
                    content.remove();
            });
        };

        createContent(htmlUrl, $scope, $transclude, $element) {
            var html = angular.element(this.$templateCache.get(htmlUrl)),
                template = angular.element(`<div class="popover" ng-class="{'popover--fullScreen': popOver.isFullscreen}"><i class="popover-close icon icon-times" ng-click="popOver.closeContent()"></i></div>`);

            template.append(html);

            var hash = {};
            function add(data) {
                Object.keys(data).forEach( key => {
                    var [,name] = key.match(/\$(.*)Controller/) || [undefined,undefined];
                    if(!name) return;
                    hash[name] = { instance: data[key] };
                });
            }

            $element.parents().get().reverse().forEach((x) => add(angular.element(x).inheritedData()));

            this.$compile(template)($scope, null, {
                parentBoundTranscludeFn: $transclude,
                transcludeControllers: hash
            });

            return template;
        }
    }

    Angular.module("ngPopover").directive('popOver', PopOverDirective);
}