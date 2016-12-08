Angular.module("ngPopover", []);
var AngularPopoverModule;
(function (AngularPopoverModule) {
    var MobileConfig = (function () {
        function MobileConfig() {
        }
        MobileConfig.isMobile = function () {
            var agent = navigator.userAgent || navigator.vendor || window["opera"];
            var test1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(agent);
            var agentPrefix = agent.substr(0, 4);
            var test2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agentPrefix);
            return test1 || test2;
        };
        return MobileConfig;
    }());
    Angular.module("ngPopover").constant('isMobile', MobileConfig.isMobile());
})(AngularPopoverModule || (AngularPopoverModule = {}));
var AngularPopoverModule;
(function (AngularPopoverModule) {
    var Size = (function () {
        function Size(width, height) {
            this.width = width;
            this.height = height;
        }
        return Size;
    }());
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    var Boundary = (function () {
        function Boundary(top, left, bottom, right) {
            this.top = top;
            this.left = left;
            this.bottom = bottom;
            this.right = right;
        }
        Boundary.fromTopLeft = function (point, size) {
            return new Boundary(point.y, point.x, point.y + size.height, point.x + size.width);
        };
        Boundary.fromTopRight = function (point, size) {
            return new Boundary(point.y, point.x - size.width, point.y + size.height, point.x);
        };
        Boundary.fromBottomLeft = function (point, size) {
            return new Boundary(point.y - size.height, point.x, point.y, point.x + size.width);
        };
        Boundary.fromBottomRight = function (point, size) {
            return new Boundary(point.y - size.height, point.x - size.width, point.y, point.x);
        };
        Object.defineProperty(Boundary.prototype, "topLeft", {
            get: function () {
                return new Point(this.left, this.top);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Boundary.prototype, "topRight", {
            get: function () {
                return new Point(this.right, this.top);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Boundary.prototype, "bottomLeft", {
            get: function () {
                return new Point(this.left, this.bottom);
            },
            enumerable: true,
            configurable: true
        });
        Boundary.prototype.bottomCenter = function (contentSize, elementSize) {
            return new Point(this.left + (elementSize.width - contentSize.width) / 2, this.bottom);
        };
        Object.defineProperty(Boundary.prototype, "bottomRight", {
            get: function () {
                return new Point(this.right, this.bottom);
            },
            enumerable: true,
            configurable: true
        });
        Boundary.prototype.shiftUp = function (value) {
            this.top -= value;
            this.bottom -= value;
        };
        Boundary.prototype.shiftDown = function (value) {
            this.bottom += value;
            this.top += value;
        };
        Boundary.prototype.shiftLeft = function (value) {
            this.left -= value;
            this.right -= value;
        };
        Boundary.prototype.shiftRight = function (value) {
            this.right += value;
            this.left += value;
        };
        return Boundary;
    }());
    var ContentPosition = (function () {
        function ContentPosition(boundary, sideCss, arrowCss) {
            this.boundary = boundary;
            this.sideCss = sideCss;
            this.arrowCss = arrowCss;
        }
        return ContentPosition;
    }());
    var PageContentService = (function () {
        function PageContentService($window, content, isVertical, xOffset, yOffset) {
            this.$window = $window;
            this.content = content;
            this.isVertical = isVertical;
            this.xOffset = xOffset;
            this.yOffset = yOffset;
            this.cssName = "pagecontent";
            this.css = {
                below: this.cssName + '--below',
                above: this.cssName + '--above',
                before: this.cssName + '--before',
                after: this.cssName + '--after',
                beginning: this.cssName + '--beginning',
                center: this.cssName + '--center',
                end: this.cssName + '--end'
            };
        }
        PageContentService.prototype.positionFromPoint = function (x, y) {
            this.reset();
            this.content.addClass(this.cssName);
            var contentSize = new Size(this.content.outerWidth(true), this.content.outerHeight(true));
            var halfwidth = contentSize.width / 2;
            var halfHeight = contentSize.height / 2;
            var belowCenter = new ContentPosition(new Boundary(y, x - halfwidth, y + contentSize.height, x + halfwidth), this.css.below, this.css.center);
            var afterCenter = new ContentPosition(new Boundary(y - halfHeight, x, y + halfHeight, x + contentSize.width), this.css.after, this.css.center);
            var aboveCenter = new ContentPosition(new Boundary(y - contentSize.height, x - halfwidth, y, x + halfwidth), this.css.above, this.css.center);
            var beforeCenter = new ContentPosition(new Boundary(y - halfHeight, x - contentSize.width, y + halfHeight, x), this.css.before, this.css.center);
            var defaultPosition = belowCenter;
            var positionOrder = [
                belowCenter,
                afterCenter,
                aboveCenter,
                beforeCenter
            ];
            for (var i = 0; i < positionOrder.length; i++) {
                if (this.tryPosition(positionOrder[i]))
                    return;
            }
            if (this.isOffRightScreen(defaultPosition.boundary)) {
                this.setPosition(defaultPosition, defaultPosition.boundary.top, "", 0, "");
                return;
            }
            if (this.isOffLeftScreen(defaultPosition.boundary)) {
                this.setPosition(defaultPosition, defaultPosition.boundary.top, 0, "", "");
                return;
            }
            if (this.isOffTopScreen(defaultPosition.boundary)) {
                this.setPosition(defaultPosition, 0, defaultPosition.boundary.left, "", "");
                return;
            }
            if (this.isOffBottomScreen(defaultPosition.boundary)) {
                this.setPosition(defaultPosition, "", defaultPosition.boundary.left, "", 0);
                return;
            }
            this.setPosition(defaultPosition, defaultPosition.boundary.top, defaultPosition.boundary.left, "", "");
        };
        PageContentService.prototype.positionFromElement = function (element) {
            this.reset();
            this.content.addClass(this.cssName);
            var elementSize = new Size(element.outerWidth(false), element.outerHeight(false));
            var contentSize = new Size(this.content.outerWidth(true), this.content.outerHeight(true));
            var pos = element.offset();
            var elementBox = new Boundary(pos.top, pos.left, pos.top + elementSize.height, pos.left + elementSize.width);
            var belowCenter = new ContentPosition(Boundary.fromTopLeft(elementBox.bottomCenter(contentSize, elementSize), contentSize), this.css.below, this.css.center);
            var belowBeginning = new ContentPosition(Boundary.fromTopLeft(elementBox.bottomLeft, contentSize), this.css.below, this.css.beginning);
            var belowEnd = new ContentPosition(Boundary.fromTopRight(elementBox.bottomRight, contentSize), this.css.below, this.css.end);
            var afterBeginning = new ContentPosition(Boundary.fromTopLeft(elementBox.topRight, contentSize), this.css.after, this.css.beginning);
            var afterEnd = new ContentPosition(Boundary.fromBottomLeft(elementBox.bottomRight, contentSize), this.css.after, this.css.end);
            var aboveBeginning = new ContentPosition(Boundary.fromBottomLeft(elementBox.topLeft, contentSize), this.css.above, this.css.beginning);
            var aboveEnd = new ContentPosition(Boundary.fromBottomRight(elementBox.topRight, contentSize), this.css.above, this.css.end);
            var beforeBeginning = new ContentPosition(Boundary.fromTopRight(elementBox.topLeft, contentSize), this.css.before, this.css.beginning);
            var beforeEnd = new ContentPosition(Boundary.fromBottomRight(elementBox.bottomLeft, contentSize), this.css.before, this.css.end);
            var defaultPosition = belowCenter;
            var positionOrder = [
                belowCenter,
                belowBeginning,
                belowEnd,
                afterBeginning,
                afterEnd,
                aboveBeginning,
                aboveEnd,
                beforeBeginning,
                beforeEnd
            ];
            positionOrder.splice(positionOrder.indexOf(defaultPosition), 1);
            positionOrder.splice(0, 0, defaultPosition);
            for (var i = 0; i < positionOrder.length; i++) {
                if (this.tryPosition(positionOrder[i]))
                    return;
            }
            if (this.isOffRightScreen(defaultPosition.boundary)) {
                this.setPosition(defaultPosition, defaultPosition.boundary.top, "", 0, "");
                return;
            }
            if (this.isOffLeftScreen(defaultPosition.boundary)) {
                this.setPosition(defaultPosition, defaultPosition.boundary.top, 0, "", "");
                return;
            }
            if (this.isOffTopScreen(defaultPosition.boundary)) {
                this.setPosition(defaultPosition, 0, defaultPosition.boundary.left, "", "");
                return;
            }
            if (this.isOffBottomScreen(defaultPosition.boundary)) {
                this.setPosition(defaultPosition, "", defaultPosition.boundary.left, "", 0);
                return;
            }
            this.setPosition(defaultPosition, defaultPosition.boundary.top, defaultPosition.boundary.left, "", "");
        };
        PageContentService.prototype.tryPosition = function (position) {
            if (!this.isOffScreen(position.boundary)) {
                this.setPosition(position, position.boundary.top, position.boundary.left, "", "");
                return true;
            }
            return false;
        };
        PageContentService.prototype.reset = function () {
            var classes = [
                this.css.below,
                this.css.above,
                this.css.before,
                this.css.after,
                this.css.beginning,
                this.css.center,
                this.css.end
            ];
            this.content.removeClass(this.cssName);
            this.content.removeClass(classes.join(" "));
        };
        PageContentService.prototype.setPosition = function (position, top, left, right, bottom) {
            if (top === void 0) { top = ""; }
            if (left === void 0) { left = ""; }
            if (right === void 0) { right = ""; }
            if (bottom === void 0) { bottom = ""; }
            var css = {
                top: top,
                left: left,
                right: right,
                bottom: bottom
            };
            this.content.css(css)
                .addClass(position.sideCss)
                .addClass(position.arrowCss);
        };
        PageContentService.prototype.isOffScreen = function (boundary) {
            if (this.isOffTopScreen(boundary) ||
                this.isOffLeftScreen(boundary) ||
                this.isOffRightScreen(boundary) ||
                this.isOffBottomScreen(boundary))
                return true;
            return false;
        };
        PageContentService.prototype.isOffTopScreen = function (boundary) {
            if (boundary.top < 0 + this.$window.scrollY)
                return true;
            return false;
        };
        PageContentService.prototype.isOffLeftScreen = function (boundary) {
            if (boundary.left < 0)
                return true;
            return false;
        };
        PageContentService.prototype.isOffRightScreen = function (boundary) {
            var screen = new Size(this.$window.innerWidth, this.$window.innerHeight);
            if (boundary.right > screen.width)
                return true;
            return false;
        };
        PageContentService.prototype.isOffBottomScreen = function (boundary) {
            var screen = new Size(this.$window.innerWidth, this.$window.innerHeight);
            if (boundary.bottom > screen.height + this.$window.scrollY)
                return true;
            return false;
        };
        return PageContentService;
    }());
    var PageContentFactory = (function () {
        function PageContentFactory($window) {
            this.$window = $window;
        }
        PageContentFactory.prototype.get = function (content, isVertical, xOffset, yOffset) {
            if (isVertical === void 0) { isVertical = true; }
            if (xOffset === void 0) { xOffset = 0; }
            if (yOffset === void 0) { yOffset = 0; }
            return new PageContentService(this.$window, content, isVertical, xOffset, yOffset);
        };
        PageContentFactory.$inject = ['$window'];
        return PageContentFactory;
    }());
    Angular.module("ngPopover").service('pageContentFactory', PageContentFactory);
})(AngularPopoverModule || (AngularPopoverModule = {}));
var AngularPopoverModule;
(function (AngularPopoverModule) {
    var PopOverController = (function () {
        function PopOverController(isMobile) {
            this.popOverClick = function () { };
            this.popOverDisabled = function () { };
            this._isVisible = false;
            this.isFullscreen = false;
            this.isVisible = false;
            this.isFullscreen = isMobile;
            this.initialized = true;
        }
        Object.defineProperty(PopOverController.prototype, "isVisible", {
            get: function () {
                return this._isVisible;
            },
            set: function (visible) {
                if (!this.initialized || this.popOverDisabled())
                    return;
                this._isVisible = visible;
                if (visible)
                    this.show();
                else
                    this.hide();
            },
            enumerable: true,
            configurable: true
        });
        PopOverController.prototype.closeContent = function () {
            this.isVisible = false;
        };
        PopOverController.prototype.toggleContent = function () {
            this.isVisible = !this.isVisible;
        };
        PopOverController.$inject = ['isMobile'];
        return PopOverController;
    }());
    var PopOverDirective = (function () {
        function PopOverDirective($q, $parse, $compile, $window, $templateCache, $timeout, pageContentFactory) {
            var _this = this;
            this.$q = $q;
            this.$parse = $parse;
            this.$compile = $compile;
            this.$window = $window;
            this.$templateCache = $templateCache;
            this.$timeout = $timeout;
            this.pageContentFactory = pageContentFactory;
            this.restrict = 'A';
            // scope = DO NOT USE A SCOPE ON THIS! 360NOSCOPE
            this.controller = PopOverController;
            this.controllerAs = 'popOver';
            this.bindToController = true;
            this.link = function ($scope, $element, $attrs) {
                var ctrl = $scope[_this.controllerAs];
                if ($attrs.popOverClick) {
                    var popOverClickInvoker = _this.$parse($attrs.popOverClick);
                    ctrl.popOverClick = function () { return popOverClickInvoker($scope); };
                }
                if ($attrs.popOverDisabled) {
                    var popOverDisabledInvoker = _this.$parse($attrs.popOverDisabled);
                    ctrl.popOverDisabled = function () { return popOverDisabledInvoker($scope); };
                }
                var $body = angular.element('body'), $html = angular.element('html'), isVertical = typeof $attrs.popOverHorizontal == 'undefined', positionType = $attrs.positionType || 'mouse', xOffset = isVertical ? 27 : 20, yOffset = isVertical ? 16 : 24, pageContentService, content, scrollableContent, position;
                var getEvent = function () {
                    var names = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        names[_i - 0] = arguments[_i];
                    }
                    return names.map(function (name) { return (name + "." + $scope.$id); }).join(' ');
                };
                var getData = function () {
                    if ($attrs.popOverClick) {
                        return ctrl.popOverClick();
                    }
                    var defered = _this.$q.defer();
                    defered.resolve();
                    return defered.promise;
                };
                var create = function () {
                    content = _this.createContent($attrs.popOver, $scope);
                    content.on("click", function () {
                        if (!ctrl.isVisible)
                            return;
                        ctrl.isVisible = false;
                        $scope.$apply();
                    });
                    scrollableContent = angular.element(".popover-scrollable", content);
                    $body.append(content);
                    pageContentService = _this.pageContentFactory.get(content, isVertical, xOffset, yOffset);
                };
                var setPosition = function () {
                    _this.$timeout(function () {
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
                ctrl.show = function () {
                    if (!content) {
                        create();
                    }
                    getData().then(function () {
                        setPosition();
                    });
                };
                ctrl.hide = function () {
                    content.removeClass("popover--isVisible");
                    position = null;
                };
                $element.on("click.popOver", function (e) {
                    if (positionType == 'mouse')
                        position = { x: e.pageX, y: e.pageY };
                    ctrl.isVisible = !ctrl.isVisible;
                    $scope.$apply();
                });
                $html.on(getEvent("click"), function (e) {
                    if (!ctrl.isVisible)
                        return;
                    var hasTarget = $element.has(e.target).length > 0, isTarget = $element.is(e.target);
                    if (hasTarget || isTarget)
                        return;
                    ctrl.isVisible = false;
                    $scope.$apply();
                });
                $html.on(getEvent("DOMMouseScroll", "mousewheel"), function (e) {
                    if (!ctrl.isVisible)
                        return;
                    setPosition();
                });
                $(_this.$window).on(getEvent("resize"), function (e) {
                    if (!ctrl.isVisible)
                        return;
                    setPosition();
                });
                $body.on(getEvent("keyup"), function (e) {
                    if (!ctrl.isVisible)
                        return;
                    if (e.which === 27) {
                        ctrl.isVisible = false;
                        $scope.$apply();
                    }
                });
                $element.on("$destroy", function () {
                    $(_this.$window).off(getEvent("resize"));
                    $body.off(getEvent("keyup", "DOMMouseScroll", "mousewheel"));
                    $body.off(getEvent("keyup"));
                    $html.off(getEvent("click"));
                    if (content)
                        content.remove();
                });
            };
        }
        PopOverDirective.prototype.createContent = function (htmlUrl, $scope) {
            var html = angular.element(this.$templateCache.get(htmlUrl)), template = angular.element("<div class=\"popover\" ng-class=\"{'popover--fullScreen': popOver.isFullscreen}\"><i class=\"popover-close icon icon-times\" ng-click=\"popOver.closeContent()\"></i></div>"), htmlLink = this.$compile(html), templateLink = this.$compile(template);
            template.append(html);
            templateLink($scope);
            htmlLink($scope);
            return template;
        };
        PopOverDirective.$inject = ["$q", "$parse", "$compile", "$window", "$templateCache", "$timeout", "pageContentFactory"];
        return PopOverDirective;
    }());
    Angular.module("ngPopover").directive('popOver', PopOverDirective);
})(AngularPopoverModule || (AngularPopoverModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wb3BvdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9tb2JpbGUudHMiLCIuLi9zcmMvcGFnZUNvbnRlbnQudHMiLCIuLi9zcmMvcG9wb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQ0NoQyxJQUFPLG9CQUFvQixDQWUxQjtBQWZELFdBQU8sb0JBQW9CLEVBQUMsQ0FBQztJQUV6QjtRQUFBO1FBVUEsQ0FBQztRQVRVLHFCQUFRLEdBQWY7WUFDSSxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZFLElBQUksS0FBSyxHQUFHLDBUQUEwVCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuVixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLEtBQUssR0FBRyx5a0RBQXlrRCxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV4bUQsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDMUIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDOUUsQ0FBQyxFQWZNLG9CQUFvQixLQUFwQixvQkFBb0IsUUFlMUI7QUNoQkQsSUFBTyxvQkFBb0IsQ0FtVDFCO0FBblRELFdBQU8sb0JBQW9CLEVBQUMsQ0FBQztJQUV6QjtRQUNJLGNBQW1CLEtBQUssRUFBUyxNQUFNO1lBQXBCLFVBQUssR0FBTCxLQUFLLENBQUE7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LElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkksSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0gsSUFBSSxjQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckksSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0gsSUFBSSxjQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkksSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0gsSUFBSSxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkksSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakksSUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDO1lBRWxDLElBQUksYUFBYSxHQUFHO2dCQUNoQixXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsUUFBUTtnQkFDUixjQUFjO2dCQUNkLFFBQVE7Z0JBQ1IsY0FBYztnQkFDZCxRQUFRO2dCQUNSLGVBQWU7Z0JBQ2YsU0FBUzthQUNaLENBQUM7WUFFRixhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRTVDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUM7WUFDZixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzNFLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzNFLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUUsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRyxDQUFDO1FBRUQsd0NBQVcsR0FBWCxVQUFZLFFBQXlCO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELGtDQUFLLEdBQUw7WUFDSSxJQUFJLE9BQU8sR0FBRztnQkFDVixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtnQkFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07Z0JBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO2FBQ2YsQ0FBQztZQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELHdDQUFXLEdBQVgsVUFBWSxRQUFRLEVBQUUsR0FBYSxFQUFFLElBQWMsRUFBRSxLQUFlLEVBQUUsTUFBZ0I7WUFBaEUsbUJBQWEsR0FBYixRQUFhO1lBQUUsb0JBQWMsR0FBZCxTQUFjO1lBQUUscUJBQWUsR0FBZixVQUFlO1lBQUUsc0JBQWdCLEdBQWhCLFdBQWdCO1lBQ2xGLElBQUksR0FBRyxHQUFHO2dCQUNOLEdBQUcsRUFBRSxHQUFHO2dCQUNSLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUM7WUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7aUJBQ2hCLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUMxQixRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCx3Q0FBVyxHQUFYLFVBQVksUUFBa0I7WUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO2dCQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFaEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsMkNBQWMsR0FBZCxVQUFlLFFBQWtCO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELDRDQUFlLEdBQWYsVUFBZ0IsUUFBa0I7WUFDOUIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLFFBQWtCO1lBQy9CLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELDhDQUFpQixHQUFqQixVQUFrQixRQUFrQjtZQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDTCx5QkFBQztJQUFELENBQUMsQUEzTUQsSUEyTUM7SUFNRDtRQUdJLDRCQUFvQixPQUFPO1lBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUMzQixDQUFDO1FBRUQsZ0NBQUcsR0FBSCxVQUFJLE9BQU8sRUFBRSxVQUFpQixFQUFFLE9BQVcsRUFBRSxPQUFXO1lBQTNDLDBCQUFpQixHQUFqQixpQkFBaUI7WUFBRSx1QkFBVyxHQUFYLFdBQVc7WUFBRSx1QkFBVyxHQUFYLFdBQVc7WUFDcEQsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RixDQUFDO1FBUE0sMEJBQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBUWpDLHlCQUFDO0lBQUQsQ0FBQyxBQVRELElBU0M7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBRWxGLENBQUMsRUFuVE0sb0JBQW9CLEtBQXBCLG9CQUFvQixRQW1UMUI7QUNuVEQsSUFBTyxvQkFBb0IsQ0EwTjFCO0FBMU5ELFdBQU8sb0JBQW9CLEVBQUMsQ0FBQztJQUV6QjtRQUdJLDJCQUFZLFFBQVE7WUFTcEIsaUJBQVksR0FBRyxjQUFhLENBQUMsQ0FBQztZQUM5QixvQkFBZSxHQUFHLGNBQWEsQ0FBQyxDQUFDO1lBRXpCLGVBQVUsR0FBRyxLQUFLLENBQUM7WUFpQnBCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1lBNUJ4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDO1FBVUQsc0JBQUksd0NBQVM7aUJBQWI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQztpQkFFRCxVQUFjLE9BQWdCO2dCQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUM1QyxNQUFNLENBQUM7Z0JBRVgsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDUixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2hCLElBQUk7b0JBQ0EsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLENBQUM7OztXQVhBO1FBZU0sd0NBQVksR0FBbkI7WUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO1FBRU0seUNBQWEsR0FBcEI7WUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxDQUFDO1FBdkNNLHlCQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQXdDbEMsd0JBQUM7SUFBRCxDQUFDLEFBekNELElBeUNDO0lBRUQ7UUFHSSwwQkFBb0IsRUFBcUIsRUFBVSxNQUE2QixFQUFVLFFBQVEsRUFBVSxPQUErQixFQUFVLGNBQTZDLEVBQVUsUUFBaUMsRUFBVSxrQkFBdUM7WUFIbFMsaUJBMEtDO1lBdkt1QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtZQUFVLFdBQU0sR0FBTixNQUFNLENBQXVCO1lBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBQTtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQXdCO1lBQVUsbUJBQWMsR0FBZCxjQUFjLENBQStCO1lBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBeUI7WUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO1lBRTlSLGFBQVEsR0FBRyxHQUFHLENBQUM7WUFDZixpREFBaUQ7WUFDakQsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1lBQy9CLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLHFCQUFnQixHQUFHLElBQUksQ0FBQztZQUl4QixTQUFJLEdBQUcsVUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU07Z0JBQzVCLElBQUksSUFBSSxHQUFzQixNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUV4RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxtQkFBbUIsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFNLE9BQUEsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQTNCLENBQTJCLENBQUM7Z0JBQzFELENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksc0JBQXNCLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBTSxPQUFBLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxFQUE5QixDQUE4QixDQUFDO2dCQUNoRSxDQUFDO2dCQUVELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQy9CLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUMvQixVQUFVLEdBQUcsT0FBTyxNQUFNLENBQUMsaUJBQWlCLElBQUksV0FBVyxFQUMzRCxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksSUFBSSxPQUFPLEVBQzdDLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFDOUIsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUM5QixrQkFBdUMsRUFDdkMsT0FBTyxFQUNQLGlCQUFpQixFQUNqQixRQUFRLENBQUM7Z0JBRWIsSUFBSSxRQUFRLEdBQUc7b0JBQUMsZUFBUTt5QkFBUixXQUFRLENBQVIsc0JBQVEsQ0FBUixJQUFRO3dCQUFSLDhCQUFROztvQkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFHLElBQUksU0FBSSxNQUFNLENBQUMsR0FBRyxDQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hFLENBQUMsQ0FBQztnQkFFRixJQUFJLE9BQU8sR0FBRztvQkFDVixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQztvQkFFRCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMzQixDQUFDLENBQUM7Z0JBRUYsSUFBSSxNQUFNLEdBQUc7b0JBQ1QsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDckQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7d0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs0QkFDaEIsTUFBTSxDQUFDO3dCQUVYLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDO29CQUVILGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRXBFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RCLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVGLENBQUMsQ0FBQztnQkFFRixJQUFJLFdBQVcsR0FBRztvQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNWLE9BQU8sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFFdkMsbUJBQW1CO3dCQUNuQixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsSUFBSSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN4QyxJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQzs0QkFDckUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLDBCQUEwQixFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQ2hGLENBQUM7d0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs0QkFDbEIsTUFBTSxDQUFDO3dCQUVYLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQzs0QkFDVCxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakUsSUFBSTs0QkFDQSxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNYLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsSUFBSSxHQUFHO29CQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxNQUFNLEVBQUUsQ0FBQztvQkFDYixDQUFDO29CQUVELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDWCxXQUFXLEVBQUUsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUMxQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixDQUFDLENBQUM7Z0JBRUYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQSxDQUFDO29CQUMxQixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDO3dCQUN4QixRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDakMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQztnQkFFSCxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFBLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDaEIsTUFBTSxDQUFDO29CQUVYLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzdDLFFBQVEsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFckMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDO29CQUVYLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxFQUFFLFVBQUMsQ0FBQztvQkFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNoQixNQUFNLENBQUM7b0JBRVgsV0FBVyxFQUFFLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO2dCQUVILENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFBLENBQUM7b0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDaEIsTUFBTSxDQUFDO29CQUVYLFdBQVcsRUFBRSxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztnQkFFSCxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFBLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDaEIsTUFBTSxDQUFDO29CQUVYLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFFSCxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtvQkFDcEIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7d0JBQ1IsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztRQXpKZ1MsQ0FBQztRQTJKblMsd0NBQWEsR0FBYixVQUFjLE9BQU8sRUFBRSxNQUFNO1lBQ3pCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDeEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsNktBQXFLLENBQUMsRUFDak0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQzlCLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqQixNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUF4S00sd0JBQU8sR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQXlLakgsdUJBQUM7SUFBRCxDQUFDLEFBMUtELElBMEtDO0lBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDdkUsQ0FBQyxFQTFOTSxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBME4xQiIsInNvdXJjZXNDb250ZW50IjpbIkFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIsIFtdKTsiLCJcclxubW9kdWxlIEFuZ3VsYXJQb3BvdmVyTW9kdWxlIHtcclxuXHJcbiAgICBjbGFzcyBNb2JpbGVDb25maWcge1xyXG4gICAgICAgIHN0YXRpYyBpc01vYmlsZSgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvd1tcIm9wZXJhXCJdO1xyXG4gICAgICAgICAgICB2YXIgdGVzdDEgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhZ2VudCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWdlbnRQcmVmaXggPSBhZ2VudC5zdWJzdHIoMCwgNCk7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0MiA9IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYWdlbnRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRlc3QxIHx8IHRlc3QyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5jb25zdGFudCgnaXNNb2JpbGUnLCBNb2JpbGVDb25maWcuaXNNb2JpbGUoKSk7XHJcbn1cclxuIiwibW9kdWxlIEFuZ3VsYXJQb3BvdmVyTW9kdWxlIHtcclxuXHJcbiAgICBjbGFzcyBTaXplIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgd2lkdGgsIHB1YmxpYyBoZWlnaHQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeCwgcHVibGljIHkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIEJvdW5kYXJ5IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9wOiBudW1iZXIsIHB1YmxpYyBsZWZ0OiBudW1iZXIsIHB1YmxpYyBib3R0b206IG51bWJlciwgcHVibGljIHJpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tVG9wTGVmdChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSwgcG9pbnQueCwgcG9pbnQueSArIHNpemUuaGVpZ2h0LCBwb2ludC54ICsgc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbVRvcFJpZ2h0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55LCBwb2ludC54IC0gc2l6ZS53aWR0aCwgcG9pbnQueSArIHNpemUuaGVpZ2h0LCBwb2ludC54KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tQm90dG9tTGVmdChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSAtIHNpemUuaGVpZ2h0LCBwb2ludC54LCBwb2ludC55LCBwb2ludC54ICsgc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbUJvdHRvbVJpZ2h0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55IC0gc2l6ZS5oZWlnaHQsIHBvaW50LnggLSBzaXplLndpZHRoLCBwb2ludC55LCBwb2ludC54KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdG9wTGVmdCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHRvcFJpZ2h0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGJvdHRvbUxlZnQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy5ib3R0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvdHRvbUNlbnRlcihjb250ZW50U2l6ZTogU2l6ZSwgZWxlbWVudFNpemU6IFNpemUpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0ICsgKGVsZW1lbnRTaXplLndpZHRoIC0gY29udGVudFNpemUud2lkdGgpIC8gMiwgdGhpcy5ib3R0b20pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGJvdHRvbVJpZ2h0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnRVcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wIC09IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSAtPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdERvd24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50b3AgKz0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnRMZWZ0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0IC09IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0IC09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0UmlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgKz0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIENvbnRlbnRQb3NpdGlvbiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIGJvdW5kYXJ5OiBCb3VuZGFyeSwgcHVibGljIHNpZGVDc3M6IHN0cmluZywgcHVibGljIGFycm93Q3NzOiBzdHJpbmcpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUGFnZUNvbnRlbnRTZXJ2aWNlIHtcclxuICAgICAgICBwb3NpdGlvbkZyb21Qb2ludCh4LCB5KTtcclxuICAgICAgICBwb3NpdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBhZ2VDb250ZW50U2VydmljZSBpbXBsZW1lbnRzIElQYWdlQ29udGVudFNlcnZpY2Uge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICR3aW5kb3csIHByaXZhdGUgY29udGVudCwgcHJpdmF0ZSBpc1ZlcnRpY2FsLCBwcml2YXRlIHhPZmZzZXQsIHByaXZhdGUgeU9mZnNldCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3NzTmFtZSA9IFwicGFnZWNvbnRlbnRcIjtcclxuICAgICAgICBwcml2YXRlIGNzcyA9IHtcclxuICAgICAgICAgICAgYmVsb3c6IHRoaXMuY3NzTmFtZSArICctLWJlbG93JyxcclxuICAgICAgICAgICAgYWJvdmU6IHRoaXMuY3NzTmFtZSArICctLWFib3ZlJyxcclxuICAgICAgICAgICAgYmVmb3JlOiB0aGlzLmNzc05hbWUgKyAnLS1iZWZvcmUnLFxyXG4gICAgICAgICAgICBhZnRlcjogdGhpcy5jc3NOYW1lICsgJy0tYWZ0ZXInLFxyXG4gICAgICAgICAgICBiZWdpbm5pbmc6IHRoaXMuY3NzTmFtZSArICctLWJlZ2lubmluZycsXHJcbiAgICAgICAgICAgIGNlbnRlcjogdGhpcy5jc3NOYW1lICsgJy0tY2VudGVyJyxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLmNzc05hbWUgKyAnLS1lbmQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcG9zaXRpb25Gcm9tUG9pbnQoeCwgeSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2xhc3ModGhpcy5jc3NOYW1lKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRTaXplID0gbmV3IFNpemUodGhpcy5jb250ZW50Lm91dGVyV2lkdGgodHJ1ZSksIHRoaXMuY29udGVudC5vdXRlckhlaWdodCh0cnVlKSk7XHJcbiAgICAgICAgICAgIHZhciBoYWxmd2lkdGggPSBjb250ZW50U2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHZhciBoYWxmSGVpZ2h0ID0gY29udGVudFNpemUuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgICAgIHZhciBiZWxvd0NlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHksIHggLSBoYWxmd2lkdGgsIHkgKyBjb250ZW50U2l6ZS5oZWlnaHQsIHggKyBoYWxmd2lkdGgpLCB0aGlzLmNzcy5iZWxvdywgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGFmdGVyQ2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihuZXcgQm91bmRhcnkoeSAtIGhhbGZIZWlnaHQsIHgsIHkgKyBoYWxmSGVpZ2h0LCB4ICsgY29udGVudFNpemUud2lkdGgpLCB0aGlzLmNzcy5hZnRlciwgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGFib3ZlQ2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihuZXcgQm91bmRhcnkoeSAtIGNvbnRlbnRTaXplLmhlaWdodCwgeCAtIGhhbGZ3aWR0aCwgeSwgeCArIGhhbGZ3aWR0aCksIHRoaXMuY3NzLmFib3ZlLCB0aGlzLmNzcy5jZW50ZXIpO1xyXG4gICAgICAgICAgICB2YXIgYmVmb3JlQ2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihuZXcgQm91bmRhcnkoeSAtIGhhbGZIZWlnaHQsIHggLSBjb250ZW50U2l6ZS53aWR0aCwgeSArIGhhbGZIZWlnaHQsIHgpLCB0aGlzLmNzcy5iZWZvcmUsIHRoaXMuY3NzLmNlbnRlcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGVmYXVsdFBvc2l0aW9uID0gYmVsb3dDZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb25PcmRlciA9IFtcclxuICAgICAgICAgICAgICAgIGJlbG93Q2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICBhYm92ZUNlbnRlcixcclxuICAgICAgICAgICAgICAgIGJlZm9yZUNlbnRlclxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbk9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlQb3NpdGlvbihwb3NpdGlvbk9yZGVyW2ldKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2ZmUmlnaHRTY3JlZW4oZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS50b3AsIFwiXCIsIDAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZkxlZnRTY3JlZW4oZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS50b3AsIDAsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZlRvcFNjcmVlbihkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgMCwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZkJvdHRvbVNjcmVlbihkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgXCJcIiwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LnRvcCwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDbGFzcyh0aGlzLmNzc05hbWUpO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudFNpemUgPSBuZXcgU2l6ZShlbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpLCBlbGVtZW50Lm91dGVySGVpZ2h0KGZhbHNlKSk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50U2l6ZSA9IG5ldyBTaXplKHRoaXMuY29udGVudC5vdXRlcldpZHRoKHRydWUpLCB0aGlzLmNvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvcyA9IGVsZW1lbnQub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50Qm94ID0gbmV3IEJvdW5kYXJ5KHBvcy50b3AsIHBvcy5sZWZ0LCBwb3MudG9wICsgZWxlbWVudFNpemUuaGVpZ2h0LCBwb3MubGVmdCArIGVsZW1lbnRTaXplLndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBiZWxvd0NlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcExlZnQoZWxlbWVudEJveC5ib3R0b21DZW50ZXIoY29udGVudFNpemUsIGVsZW1lbnRTaXplKSwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWxvdywgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGJlbG93QmVnaW5uaW5nID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tVG9wTGVmdChlbGVtZW50Qm94LmJvdHRvbUxlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBiZWxvd0VuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcFJpZ2h0KGVsZW1lbnRCb3guYm90dG9tUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmVuZCk7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcExlZnQoZWxlbWVudEJveC50b3BSaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hZnRlciwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGFmdGVyRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tTGVmdChlbGVtZW50Qm94LmJvdHRvbVJpZ2h0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmFmdGVyLCB0aGlzLmNzcy5lbmQpO1xyXG4gICAgICAgICAgICB2YXIgYWJvdmVCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21MZWZ0KGVsZW1lbnRCb3gudG9wTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGFib3ZlRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tUmlnaHQoZWxlbWVudEJveC50b3BSaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuZW5kKTtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZUJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcFJpZ2h0KGVsZW1lbnRCb3gudG9wTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWZvcmUsIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmVFbmQgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21SaWdodChlbGVtZW50Qm94LmJvdHRvbUxlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5lbmQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb3NpdGlvbiA9IGJlbG93Q2VudGVyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uT3JkZXIgPSBbXHJcbiAgICAgICAgICAgICAgICBiZWxvd0NlbnRlcixcclxuICAgICAgICAgICAgICAgIGJlbG93QmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYmVsb3dFbmQsXHJcbiAgICAgICAgICAgICAgICBhZnRlckJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGFmdGVyRW5kLFxyXG4gICAgICAgICAgICAgICAgYWJvdmVCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBhYm92ZUVuZCxcclxuICAgICAgICAgICAgICAgIGJlZm9yZUJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGJlZm9yZUVuZFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb25PcmRlci5zcGxpY2UocG9zaXRpb25PcmRlci5pbmRleE9mKGRlZmF1bHRQb3NpdGlvbiksIDEpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbk9yZGVyLnNwbGljZSgwLCAwLCBkZWZhdWx0UG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbk9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlQb3NpdGlvbihwb3NpdGlvbk9yZGVyW2ldKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2ZmUmlnaHRTY3JlZW4oZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS50b3AsIFwiXCIsIDAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZkxlZnRTY3JlZW4oZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS50b3AsIDAsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZlRvcFNjcmVlbihkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgMCwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZkJvdHRvbVNjcmVlbihkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgXCJcIiwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LnRvcCwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5UG9zaXRpb24ocG9zaXRpb246IENvbnRlbnRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPZmZTY3JlZW4ocG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uLCBwb3NpdGlvbi5ib3VuZGFyeS50b3AsIHBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXQoKSB7XHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYmVsb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5hYm92ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmJlZm9yZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmFmdGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuZW5kXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQ2xhc3ModGhpcy5jc3NOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNsYXNzKGNsYXNzZXMuam9pbihcIiBcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UG9zaXRpb24ocG9zaXRpb24sIHRvcDogYW55ID0gXCJcIiwgbGVmdDogYW55ID0gXCJcIiwgcmlnaHQ6IGFueSA9IFwiXCIsIGJvdHRvbTogYW55ID0gXCJcIikge1xyXG4gICAgICAgICAgICB2YXIgY3NzID0ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b21cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5jc3MoY3NzKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKHBvc2l0aW9uLnNpZGVDc3MpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocG9zaXRpb24uYXJyb3dDc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZTY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2ZmVG9wU2NyZWVuKGJvdW5kYXJ5KSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09mZkxlZnRTY3JlZW4oYm91bmRhcnkpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzT2ZmUmlnaHRTY3JlZW4oYm91bmRhcnkpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzT2ZmQm90dG9tU2NyZWVuKGJvdW5kYXJ5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZUb3BTY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmIChib3VuZGFyeS50b3AgPCAwICsgdGhpcy4kd2luZG93LnNjcm9sbFkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZMZWZ0U2NyZWVuKGJvdW5kYXJ5OiBCb3VuZGFyeSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkubGVmdCA8IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZSaWdodFNjcmVlbihib3VuZGFyeTogQm91bmRhcnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHNjcmVlbiA9IG5ldyBTaXplKHRoaXMuJHdpbmRvdy5pbm5lcldpZHRoLCB0aGlzLiR3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkucmlnaHQgPiBzY3JlZW4ud2lkdGgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZCb3R0b21TY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzY3JlZW4gPSBuZXcgU2l6ZSh0aGlzLiR3aW5kb3cuaW5uZXJXaWR0aCwgdGhpcy4kd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKGJvdW5kYXJ5LmJvdHRvbSA+IHNjcmVlbi5oZWlnaHQgKyB0aGlzLiR3aW5kb3cuc2Nyb2xsWSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDb250ZW50RmFjdG9yeSB7XHJcbiAgICAgICAgZ2V0KGNvbnRlbnQsIGlzVmVydGljYWw/LCB4T2Zmc2V0PywgeU9mZnNldD8pOiBJUGFnZUNvbnRlbnRTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBhZ2VDb250ZW50RmFjdG9yeSB7XHJcbiAgICAgICAgc3RhdGljICRpbmplY3QgPSBbJyR3aW5kb3cnXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93KSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQoY29udGVudCwgaXNWZXJ0aWNhbCA9IHRydWUsIHhPZmZzZXQgPSAwLCB5T2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBhZ2VDb250ZW50U2VydmljZSh0aGlzLiR3aW5kb3csIGNvbnRlbnQsIGlzVmVydGljYWwsIHhPZmZzZXQsIHlPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5zZXJ2aWNlKCdwYWdlQ29udGVudEZhY3RvcnknLCBQYWdlQ29udGVudEZhY3RvcnkpO1xyXG5cclxufSIsIm1vZHVsZSBBbmd1bGFyUG9wb3Zlck1vZHVsZSB7XHJcblxyXG4gICAgY2xhc3MgUG9wT3ZlckNvbnRyb2xsZXIge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gWydpc01vYmlsZSddO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpc01vYmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRnVsbHNjcmVlbiA9IGlzTW9iaWxlO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNob3c6IGFueTtcclxuICAgICAgICBoaWRlOiBhbnk7XHJcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XHJcbiAgICAgICAgcG9wT3ZlckNsaWNrID0gKCk6IGFueSA9PiB7IH07XHJcbiAgICAgICAgcG9wT3ZlckRpc2FibGVkID0gKCk6IGFueSA9PiB7IH07XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBnZXQgaXNWaXNpYmxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IGlzVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCB8fCB0aGlzLnBvcE92ZXJEaXNhYmxlZCgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaXNGdWxsc2NyZWVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbG9zZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdG9nZ2xlQ29udGVudCgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBvcE92ZXJEaXJlY3RpdmUge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiJHFcIiwgXCIkcGFyc2VcIiwgXCIkY29tcGlsZVwiLCBcIiR3aW5kb3dcIiwgXCIkdGVtcGxhdGVDYWNoZVwiLCBcIiR0aW1lb3V0XCIsIFwicGFnZUNvbnRlbnRGYWN0b3J5XCJdO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRxOiBhbmd1bGFyLklRU2VydmljZSwgcHJpdmF0ZSAkcGFyc2U6IGFuZ3VsYXIuSVBhcnNlU2VydmljZSwgcHJpdmF0ZSAkY29tcGlsZSwgcHJpdmF0ZSAkd2luZG93OiBhbmd1bGFyLklXaW5kb3dTZXJ2aWNlLCBwcml2YXRlICR0ZW1wbGF0ZUNhY2hlOiBhbmd1bGFyLklUZW1wbGF0ZUNhY2hlU2VydmljZSwgcHJpdmF0ZSAkdGltZW91dDogYW5ndWxhci5JVGltZW91dFNlcnZpY2UsIHByaXZhdGUgcGFnZUNvbnRlbnRGYWN0b3J5OiBJUGFnZUNvbnRlbnRGYWN0b3J5KSB7IH1cclxuXHJcbiAgICAgICAgcmVzdHJpY3QgPSAnQSc7XHJcbiAgICAgICAgLy8gc2NvcGUgPSBETyBOT1QgVVNFIEEgU0NPUEUgT04gVEhJUyEgMzYwTk9TQ09QRVxyXG4gICAgICAgIGNvbnRyb2xsZXIgPSBQb3BPdmVyQ29udHJvbGxlcjtcclxuICAgICAgICBjb250cm9sbGVyQXMgPSAncG9wT3Zlcic7XHJcbiAgICAgICAgYmluZFRvQ29udHJvbGxlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcG9zaXRpb247XHJcblxyXG4gICAgICAgIGxpbmsgPSAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjdHJsOiBQb3BPdmVyQ29udHJvbGxlciA9ICRzY29wZVt0aGlzLmNvbnRyb2xsZXJBc107XHJcblxyXG4gICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcE92ZXJDbGlja0ludm9rZXIgPSB0aGlzLiRwYXJzZSgkYXR0cnMucG9wT3ZlckNsaWNrKTtcclxuICAgICAgICAgICAgICAgIGN0cmwucG9wT3ZlckNsaWNrID0gKCkgPT4gcG9wT3ZlckNsaWNrSW52b2tlcigkc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcE92ZXJEaXNhYmxlZEludm9rZXIgPSB0aGlzLiRwYXJzZSgkYXR0cnMucG9wT3ZlckRpc2FibGVkKTtcclxuICAgICAgICAgICAgICAgIGN0cmwucG9wT3ZlckRpc2FibGVkID0gKCkgPT4gcG9wT3ZlckRpc2FibGVkSW52b2tlcigkc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSBhbmd1bGFyLmVsZW1lbnQoJ2JvZHknKSxcclxuICAgICAgICAgICAgICAgICRodG1sID0gYW5ndWxhci5lbGVtZW50KCdodG1sJyksXHJcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsID0gdHlwZW9mICRhdHRycy5wb3BPdmVySG9yaXpvbnRhbCA9PSAndW5kZWZpbmVkJyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVHlwZSA9ICRhdHRycy5wb3NpdGlvblR5cGUgfHwgJ21vdXNlJyxcclxuICAgICAgICAgICAgICAgIHhPZmZzZXQgPSBpc1ZlcnRpY2FsID8gMjcgOiAyMCxcclxuICAgICAgICAgICAgICAgIHlPZmZzZXQgPSBpc1ZlcnRpY2FsID8gMTYgOiAyNCxcclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZTogSVBhZ2VDb250ZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGVudCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgdmFyIGdldEV2ZW50ID0gKC4uLm5hbWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZXMubWFwKG5hbWUgPT4gYCR7bmFtZX0uJHskc2NvcGUuJGlkfWApLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRhdHRycy5wb3BPdmVyQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5wb3BPdmVyQ2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICAgICAgICAgIGRlZmVyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjcmVhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gdGhpcy5jcmVhdGVDb250ZW50KCRhdHRycy5wb3BPdmVyLCAkc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRlbnQgPSBhbmd1bGFyLmVsZW1lbnQoXCIucG9wb3Zlci1zY3JvbGxhYmxlXCIsIGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICRib2R5LmFwcGVuZChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZSA9IHRoaXMucGFnZUNvbnRlbnRGYWN0b3J5LmdldChjb250ZW50LCBpc1ZlcnRpY2FsLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZXRQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2xhc3MoXCJwb3BvdmVyLS1pc1Zpc2libGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIGl0IHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsYWJsZUNvbnRlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxTY3JvbGwgPSBzY3JvbGxhYmxlQ29udGVudC5nZXQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNWZXJ0U2Nyb2xsYmFyID0gZWxTY3JvbGwuc2Nyb2xsSGVpZ2h0ID4gZWxTY3JvbGwuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGVudC50b2dnbGVDbGFzcygncG9wb3Zlci1zY3JvbGxhYmxlLS12ZXJ0JywgaGFzVmVydFNjcm9sbGJhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybC5pc0Z1bGxzY3JlZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tRWxlbWVudCgkZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjdHJsLnNob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBnZXREYXRhKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY3RybC5oaWRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmVDbGFzcyhcInBvcG92ZXItLWlzVmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50Lm9uKFwiY2xpY2sucG9wT3ZlclwiLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvblR5cGUgPT0gJ21vdXNlJylcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9O1xyXG4gICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSAhY3RybC5pc1Zpc2libGU7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGh0bWwub24oZ2V0RXZlbnQoXCJjbGlja1wiKSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzVGFyZ2V0ID0gJGVsZW1lbnQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVGFyZ2V0ID0gJGVsZW1lbnQuaXMoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNUYXJnZXQgfHwgaXNUYXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGh0bWwub24oZ2V0RXZlbnQoXCJET01Nb3VzZVNjcm9sbFwiLCBcIm1vdXNld2hlZWxcIiksIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcy4kd2luZG93KS5vbihnZXRFdmVudChcInJlc2l6ZVwiKSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRib2R5Lm9uKGdldEV2ZW50KFwia2V5dXBcIiksIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHJsLmlzVmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnQub24oXCIkZGVzdHJveVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMuJHdpbmRvdykub2ZmKGdldEV2ZW50KFwicmVzaXplXCIpKTtcclxuICAgICAgICAgICAgICAgICRib2R5Lm9mZihnZXRFdmVudChcImtleXVwXCIsIFwiRE9NTW91c2VTY3JvbGxcIiwgXCJtb3VzZXdoZWVsXCIpKTtcclxuICAgICAgICAgICAgICAgICRib2R5Lm9mZihnZXRFdmVudChcImtleXVwXCIpKTtcclxuICAgICAgICAgICAgICAgICRodG1sLm9mZihnZXRFdmVudChcImNsaWNrXCIpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoaHRtbFVybCwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIHZhciBodG1sID0gYW5ndWxhci5lbGVtZW50KHRoaXMuJHRlbXBsYXRlQ2FjaGUuZ2V0KGh0bWxVcmwpKSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gYW5ndWxhci5lbGVtZW50KGA8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIG5nLWNsYXNzPVwieydwb3BvdmVyLS1mdWxsU2NyZWVuJzogcG9wT3Zlci5pc0Z1bGxzY3JlZW59XCI+PGkgY2xhc3M9XCJwb3BvdmVyLWNsb3NlIGljb24gaWNvbi10aW1lc1wiIG5nLWNsaWNrPVwicG9wT3Zlci5jbG9zZUNvbnRlbnQoKVwiPjwvaT48L2Rpdj5gKSxcclxuICAgICAgICAgICAgICAgIGh0bWxMaW5rID0gdGhpcy4kY29tcGlsZShodG1sKSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlTGluayA9IHRoaXMuJGNvbXBpbGUodGVtcGxhdGUpO1xyXG5cclxuICAgICAgICAgICAgdGVtcGxhdGUuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZUxpbmsoJHNjb3BlKTtcclxuICAgICAgICAgICAgaHRtbExpbmsoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQW5ndWxhci5tb2R1bGUoXCJuZ1BvcG92ZXJcIikuZGlyZWN0aXZlKCdwb3BPdmVyJywgUG9wT3ZlckRpcmVjdGl2ZSk7XHJcbn0iXX0=