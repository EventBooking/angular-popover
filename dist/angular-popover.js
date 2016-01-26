/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="../bower_components/angular-typescript-module/dist/angular-typescript-module.d.ts"/>
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
    })();
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
    })();
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    })();
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
    })();
    var ContentPosition = (function () {
        function ContentPosition(boundary, sideCss, arrowCss) {
            this.boundary = boundary;
            this.sideCss = sideCss;
            this.arrowCss = arrowCss;
        }
        return ContentPosition;
    })();
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
            content.addClass(this.cssName);
        }
        PageContentService.prototype.positionFromPoint = function (x, y) {
            this.reset();
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
            this.setPosition(defaultPosition);
        };
        PageContentService.prototype.positionFromElement = function (element) {
            this.reset();
            var elementSize = new Size(element.outerWidth(true), element.outerHeight(true));
            var contentSize = new Size(this.content.outerWidth(true), this.content.outerHeight(true));
            var pos = element.offset();
            var elementBox = new Boundary(pos.top, pos.left, pos.top + elementSize.height, pos.left + elementSize.width);
            var belowBeginning = new ContentPosition(Boundary.fromTopLeft(elementBox.bottomLeft, contentSize), this.css.below, this.css.beginning);
            var belowEnd = new ContentPosition(Boundary.fromTopRight(elementBox.bottomRight, contentSize), this.css.below, this.css.end);
            var afterBeginning = new ContentPosition(Boundary.fromTopLeft(elementBox.topRight, contentSize), this.css.after, this.css.beginning);
            var afterEnd = new ContentPosition(Boundary.fromBottomLeft(elementBox.bottomRight, contentSize), this.css.after, this.css.end);
            var aboveBeginning = new ContentPosition(Boundary.fromBottomLeft(elementBox.topLeft, contentSize), this.css.above, this.css.beginning);
            var aboveEnd = new ContentPosition(Boundary.fromBottomRight(elementBox.topRight, contentSize), this.css.above, this.css.end);
            var beforeBeginning = new ContentPosition(Boundary.fromTopRight(elementBox.topLeft, contentSize), this.css.before, this.css.beginning);
            var beforeEnd = new ContentPosition(Boundary.fromBottomRight(elementBox.bottomLeft, contentSize), this.css.before, this.css.end);
            var defaultPosition = belowBeginning;
            var positionOrder = [
                belowBeginning,
                belowEnd,
                afterBeginning,
                afterEnd,
                aboveBeginning,
                aboveEnd,
                beforeBeginning,
                beforeEnd
            ];
            for (var i = 0; i < positionOrder.length; i++) {
                if (this.tryPosition(positionOrder[i]))
                    return;
            }
            this.setPosition(defaultPosition);
        };
        PageContentService.prototype.tryPosition = function (position) {
            if (!this.isOffScreen(position.boundary)) {
                this.setPosition(position);
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
            this.content.removeClass(classes.join(" "));
        };
        PageContentService.prototype.setPosition = function (position) {
            var css = {
                top: position.boundary.top,
                left: position.boundary.left,
                right: "",
                bottom: ""
            };
            this.content.css(css)
                .addClass(position.sideCss)
                .addClass(position.arrowCss);
        };
        PageContentService.prototype.isOffScreen = function (boundary) {
            var topScroll = this.$window.scrollY;
            if (boundary.top < 0 + topScroll || boundary.left < 0)
                return true;
            var screen = new Size(this.$window.innerWidth, this.$window.innerHeight);
            if (boundary.right > screen.width || boundary.bottom > screen.height + topScroll)
                return true;
            return false;
        };
        return PageContentService;
    })();
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
    })();
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
    })();
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
                var $body = angular.element('body'), $html = angular.element('html'), isVertical = typeof $attrs.popOverHorizontal == 'undefined', xOffset = isVertical ? 27 : 20, yOffset = isVertical ? 16 : 24, pageContentService, content, scrollableContent, position;
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
                    if (scrollableContent && scrollableContent.has(e.target).length > 0) {
                        return;
                    }
                    ctrl.isVisible = false;
                    $scope.$apply();
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
                    $body.off(getEvent("keyup", "DOMMouseScroll", "mousewheel"));
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
    })();
    Angular.module("ngPopover").directive('popOver', PopOverDirective);
})(AngularPopoverModule || (AngularPopoverModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wb3BvdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9tb2JpbGUudHMiLCIuLi9zcmMvcGFnZUNvbnRlbnQudHMiLCIuLi9zcmMvcG9wb3Zlci50cyJdLCJuYW1lcyI6WyJBbmd1bGFyUG9wb3Zlck1vZHVsZSIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLk1vYmlsZUNvbmZpZyIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLk1vYmlsZUNvbmZpZy5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLk1vYmlsZUNvbmZpZy5pc01vYmlsZSIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlNpemUiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5TaXplLmNvbnN0cnVjdG9yIiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9pbnQiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Qb2ludC5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkuY29uc3RydWN0b3IiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Cb3VuZGFyeS5mcm9tVG9wTGVmdCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LmZyb21Ub3BSaWdodCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LmZyb21Cb3R0b21MZWZ0IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkuZnJvbUJvdHRvbVJpZ2h0IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkudG9wTGVmdCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LnRvcFJpZ2h0IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkuYm90dG9tTGVmdCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LmJvdHRvbVJpZ2h0IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkuc2hpZnRVcCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LnNoaWZ0RG93biIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LnNoaWZ0TGVmdCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LnNoaWZ0UmlnaHQiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Db250ZW50UG9zaXRpb24iLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Db250ZW50UG9zaXRpb24uY29uc3RydWN0b3IiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5QYWdlQ29udGVudFNlcnZpY2UiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5QYWdlQ29udGVudFNlcnZpY2UuY29uc3RydWN0b3IiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5QYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tUG9pbnQiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5QYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tRWxlbWVudCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50U2VydmljZS50cnlQb3NpdGlvbiIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50U2VydmljZS5yZXNldCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50U2VydmljZS5zZXRQb3NpdGlvbiIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50U2VydmljZS5pc09mZlNjcmVlbiIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50RmFjdG9yeSIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50RmFjdG9yeS5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50RmFjdG9yeS5nZXQiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Qb3BPdmVyQ29udHJvbGxlciIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBvcE92ZXJDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9wT3ZlckNvbnRyb2xsZXIuaXNWaXNpYmxlIiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9wT3ZlckNvbnRyb2xsZXIuY2xvc2VDb250ZW50IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9wT3ZlckNvbnRyb2xsZXIudG9nZ2xlQ29udGVudCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBvcE92ZXJEaXJlY3RpdmUiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Qb3BPdmVyRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9wT3ZlckRpcmVjdGl2ZS5jcmVhdGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MseUdBQXlHO0FBR3pHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FDSGhDLElBQU8sb0JBQW9CLENBZTFCO0FBZkQsV0FBTyxvQkFBb0IsRUFBQyxDQUFDO0lBRXpCQTtRQUFBQztRQVVBQyxDQUFDQTtRQVRVRCxxQkFBUUEsR0FBZkE7WUFDSUUsSUFBSUEsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDdkVBLElBQUlBLEtBQUtBLEdBQUdBLDBUQUEwVEEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFFblZBLElBQUlBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSx5a0RBQXlrREEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7WUFFeG1EQSxNQUFNQSxDQUFDQSxLQUFLQSxJQUFJQSxLQUFLQSxDQUFDQTtRQUMxQkEsQ0FBQ0E7UUFDTEYsbUJBQUNBO0lBQURBLENBQUNBLEFBVkRELElBVUNB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QSxPQUFPQSxHQUFHQSxPQUFPQTthQUM5QkEsQ0FBQ0E7WUFaRUEsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBYURELDhDQUFpQkEsR0FBakJBLFVBQWtCQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUNsQkUsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7WUFFYkEsSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUZBLElBQUlBLFNBQVNBLEdBQUdBLFdBQVdBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3RDQSxJQUFJQSxVQUFVQSxHQUFHQSxXQUFXQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUV4Q0EsSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsZUFBZUEsQ0FBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsU0FBU0EsRUFBRUEsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsR0FBR0EsU0FBU0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDOUlBLElBQUlBLFdBQVdBLEdBQUdBLElBQUlBLGVBQWVBLENBQUNBLElBQUlBLFFBQVFBLENBQUNBLENBQUNBLEdBQUdBLFVBQVVBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFVBQVVBLEVBQUVBLENBQUNBLEdBQUdBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQy9JQSxJQUFJQSxXQUFXQSxHQUFHQSxJQUFJQSxlQUFlQSxDQUFDQSxJQUFJQSxRQUFRQSxDQUFDQSxDQUFDQSxHQUFHQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxHQUFHQSxTQUFTQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxTQUFTQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUM5SUEsSUFBSUEsWUFBWUEsR0FBR0EsSUFBSUEsZUFBZUEsQ0FBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsVUFBVUEsRUFBRUEsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsR0FBR0EsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFakpBLElBQUlBLGVBQWVBLEdBQUdBLFdBQVdBLENBQUNBO1lBRWxDQSxJQUFJQSxhQUFhQSxHQUFHQTtnQkFDaEJBLFdBQVdBO2dCQUNYQSxXQUFXQTtnQkFDWEEsV0FBV0E7Z0JBQ1hBLFlBQVlBO2FBQ2ZBLENBQUNBO1lBRUZBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLGFBQWFBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUM1Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25DQSxNQUFNQSxDQUFDQTtZQUNmQSxDQUFDQTtZQUVEQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0E7UUFFREYsZ0RBQW1CQSxHQUFuQkEsVUFBb0JBLE9BQU9BO1lBQ3ZCRyxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtZQUViQSxJQUFJQSxXQUFXQSxHQUFHQSxJQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoRkEsSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFMUZBLElBQUlBLEdBQUdBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1lBQzNCQSxJQUFJQSxVQUFVQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFHQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxJQUFJQSxHQUFHQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUU3R0EsSUFBSUEsY0FBY0EsR0FBR0EsSUFBSUEsZUFBZUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBVUEsRUFBRUEsV0FBV0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFDdklBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLGVBQWVBLENBQUNBLFFBQVFBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLEVBQUVBLFdBQVdBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQzdIQSxJQUFJQSxjQUFjQSxHQUFHQSxJQUFJQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxFQUFFQSxXQUFXQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUNySUEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsZUFBZUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsRUFBRUEsV0FBV0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDL0hBLElBQUlBLGNBQWNBLEdBQUdBLElBQUlBLGVBQWVBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLEVBQUVBLFdBQVdBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1lBQ3ZJQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxlQUFlQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxFQUFFQSxXQUFXQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM3SEEsSUFBSUEs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QTtvQkFFREEsT0FBT0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ1hBLFdBQVdBLEVBQUVBLENBQUNBO29CQUNsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBLENBQUNBO2dCQUVGQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQTtvQkFDUkEsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtvQkFDMUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO2dCQUNwQkEsQ0FBQ0EsQ0FBQ0E7Z0JBRUZBLFFBQVFBLENBQUNBLEVBQUVBLENBQUNBLGVBQWVBLEVBQUVBLFVBQUFBLENBQUNBO29CQUMxQkEsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7b0JBQ3RDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtvQkFDakNBLE1BQU1BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUNwQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLFVBQUFBLENBQUNBO29CQUN6QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ2hCQSxNQUFNQSxDQUFDQTtvQkFFWEEsSUFBSUEsU0FBU0EsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFDN0NBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUVyQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsSUFBSUEsUUFBUUEsQ0FBQ0E7d0JB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LGdCQUFnQkEsRUFBRUEsVUFBVUEsRUFBRUEsb0JBQW9CQSxDQUFDQSxDQUFDQTtRQXdKakhBLHVCQUFDQTtJQUFEQSxDQUFDQSxBQXpKRHhDLElBeUpDQTtJQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxnQkFBZ0JBLENBQUNBLENBQUNBO0FBQ3ZFQSxDQUFDQSxFQXpNTSxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBeU0xQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXR5cGVzY3JpcHQtbW9kdWxlL2Rpc3QvYW5ndWxhci10eXBlc2NyaXB0LW1vZHVsZS5kLnRzXCIvPlxyXG5kZWNsYXJlIHZhciBUZXRoZXI6IGFueTtcclxuXHJcbkFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIsIFtdKTsiLCJcclxubW9kdWxlIEFuZ3VsYXJQb3BvdmVyTW9kdWxlIHtcclxuXHJcbiAgICBjbGFzcyBNb2JpbGVDb25maWcge1xyXG4gICAgICAgIHN0YXRpYyBpc01vYmlsZSgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvd1tcIm9wZXJhXCJdO1xyXG4gICAgICAgICAgICB2YXIgdGVzdDEgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhZ2VudCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWdlbnRQcmVmaXggPSBhZ2VudC5zdWJzdHIoMCwgNCk7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0MiA9IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYWdlbnRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRlc3QxIHx8IHRlc3QyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5jb25zdGFudCgnaXNNb2JpbGUnLCBNb2JpbGVDb25maWcuaXNNb2JpbGUoKSk7XHJcbn1cclxuIiwibW9kdWxlIEFuZ3VsYXJQb3BvdmVyTW9kdWxlIHtcclxuXHJcbiAgICBjbGFzcyBTaXplIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgd2lkdGgsIHB1YmxpYyBoZWlnaHQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeCwgcHVibGljIHkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIEJvdW5kYXJ5IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9wOiBudW1iZXIsIHB1YmxpYyBsZWZ0OiBudW1iZXIsIHB1YmxpYyBib3R0b206IG51bWJlciwgcHVibGljIHJpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tVG9wTGVmdChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSwgcG9pbnQueCwgcG9pbnQueSArIHNpemUuaGVpZ2h0LCBwb2ludC54ICsgc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbVRvcFJpZ2h0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55LCBwb2ludC54IC0gc2l6ZS53aWR0aCwgcG9pbnQueSArIHNpemUuaGVpZ2h0LCBwb2ludC54KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tQm90dG9tTGVmdChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSAtIHNpemUuaGVpZ2h0LCBwb2ludC54LCBwb2ludC55LCBwb2ludC54ICsgc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbUJvdHRvbVJpZ2h0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55IC0gc2l6ZS5oZWlnaHQsIHBvaW50LnggLSBzaXplLndpZHRoLCBwb2ludC55LCBwb2ludC54KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdG9wTGVmdCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHRvcFJpZ2h0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGJvdHRvbUxlZnQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy5ib3R0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBib3R0b21SaWdodCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0VXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gLT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnREb3duKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9wICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0TGVmdCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCAtPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdFJpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBDb250ZW50UG9zaXRpb24ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBib3VuZGFyeTogQm91bmRhcnksIHB1YmxpYyBzaWRlQ3NzOiBzdHJpbmcsIHB1YmxpYyBhcnJvd0Nzczogc3RyaW5nKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDb250ZW50U2VydmljZSB7XHJcbiAgICAgICAgcG9zaXRpb25Gcm9tUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgcG9zaXRpb25Gcm9tRWxlbWVudChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQYWdlQ29udGVudFNlcnZpY2UgaW1wbGVtZW50cyBJUGFnZUNvbnRlbnRTZXJ2aWNlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93LCBwcml2YXRlIGNvbnRlbnQsIHByaXZhdGUgaXNWZXJ0aWNhbCwgcHJpdmF0ZSB4T2Zmc2V0LCBwcml2YXRlIHlPZmZzZXQpIHtcclxuICAgICAgICAgICAgY29udGVudC5hZGRDbGFzcyh0aGlzLmNzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjc3NOYW1lID0gXCJwYWdlY29udGVudFwiO1xyXG4gICAgICAgIHByaXZhdGUgY3NzID0ge1xyXG4gICAgICAgICAgICBiZWxvdzogdGhpcy5jc3NOYW1lICsgJy0tYmVsb3cnLFxyXG4gICAgICAgICAgICBhYm92ZTogdGhpcy5jc3NOYW1lICsgJy0tYWJvdmUnLFxyXG4gICAgICAgICAgICBiZWZvcmU6IHRoaXMuY3NzTmFtZSArICctLWJlZm9yZScsXHJcbiAgICAgICAgICAgIGFmdGVyOiB0aGlzLmNzc05hbWUgKyAnLS1hZnRlcicsXHJcbiAgICAgICAgICAgIGJlZ2lubmluZzogdGhpcy5jc3NOYW1lICsgJy0tYmVnaW5uaW5nJyxcclxuICAgICAgICAgICAgY2VudGVyOiB0aGlzLmNzc05hbWUgKyAnLS1jZW50ZXInLFxyXG4gICAgICAgICAgICBlbmQ6IHRoaXMuY3NzTmFtZSArICctLWVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwb3NpdGlvbkZyb21Qb2ludCh4LCB5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb250ZW50U2l6ZSA9IG5ldyBTaXplKHRoaXMuY29udGVudC5vdXRlcldpZHRoKHRydWUpLCB0aGlzLmNvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG4gICAgICAgICAgICB2YXIgaGFsZndpZHRoID0gY29udGVudFNpemUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICB2YXIgaGFsZkhlaWdodCA9IGNvbnRlbnRTaXplLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgICAgICB2YXIgYmVsb3dDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5LCB4IC0gaGFsZndpZHRoLCB5ICsgY29udGVudFNpemUuaGVpZ2h0LCB4ICsgaGFsZndpZHRoKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBoYWxmSGVpZ2h0LCB4LCB5ICsgaGFsZkhlaWdodCwgeCArIGNvbnRlbnRTaXplLndpZHRoKSwgdGhpcy5jc3MuYWZ0ZXIsIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBhYm92ZUNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBjb250ZW50U2l6ZS5oZWlnaHQsIHggLSBoYWxmd2lkdGgsIHksIHggKyBoYWxmd2lkdGgpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZUNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBoYWxmSGVpZ2h0LCB4IC0gY29udGVudFNpemUud2lkdGgsIHkgKyBoYWxmSGVpZ2h0LCB4KSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5jZW50ZXIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb3NpdGlvbiA9IGJlbG93Q2VudGVyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uT3JkZXIgPSBbXHJcbiAgICAgICAgICAgICAgICBiZWxvd0NlbnRlcixcclxuICAgICAgICAgICAgICAgIGFmdGVyQ2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYWJvdmVDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVDZW50ZXJcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zaXRpb25PcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5UG9zaXRpb24ocG9zaXRpb25PcmRlcltpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3NpdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRTaXplID0gbmV3IFNpemUoZWxlbWVudC5vdXRlcldpZHRoKHRydWUpLCBlbGVtZW50Lm91dGVySGVpZ2h0KHRydWUpKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRTaXplID0gbmV3IFNpemUodGhpcy5jb250ZW50Lm91dGVyV2lkdGgodHJ1ZSksIHRoaXMuY29udGVudC5vdXRlckhlaWdodCh0cnVlKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zID0gZWxlbWVudC5vZmZzZXQoKTtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRCb3ggPSBuZXcgQm91bmRhcnkocG9zLnRvcCwgcG9zLmxlZnQsIHBvcy50b3AgKyBlbGVtZW50U2l6ZS5oZWlnaHQsIHBvcy5sZWZ0ICsgZWxlbWVudFNpemUud2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJlbG93QmVnaW5uaW5nID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tVG9wTGVmdChlbGVtZW50Qm94LmJvdHRvbUxlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBiZWxvd0VuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcFJpZ2h0KGVsZW1lbnRCb3guYm90dG9tUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmVuZCk7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcExlZnQoZWxlbWVudEJveC50b3BSaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hZnRlciwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGFmdGVyRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tTGVmdChlbGVtZW50Qm94LmJvdHRvbVJpZ2h0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmFmdGVyLCB0aGlzLmNzcy5lbmQpO1xyXG4gICAgICAgICAgICB2YXIgYWJvdmVCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21MZWZ0KGVsZW1lbnRCb3gudG9wTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGFib3ZlRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tUmlnaHQoZWxlbWVudEJveC50b3BSaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuZW5kKTtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZUJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcFJpZ2h0KGVsZW1lbnRCb3gudG9wTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWZvcmUsIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmVFbmQgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21SaWdodChlbGVtZW50Qm94LmJvdHRvbUxlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5lbmQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb3NpdGlvbiA9IGJlbG93QmVnaW5uaW5nO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uT3JkZXIgPSBbXHJcbiAgICAgICAgICAgICAgICBiZWxvd0JlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGJlbG93RW5kLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBhZnRlckVuZCxcclxuICAgICAgICAgICAgICAgIGFib3ZlQmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYWJvdmVFbmQsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVFbmRcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zaXRpb25PcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5UG9zaXRpb24ocG9zaXRpb25PcmRlcltpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnlQb3NpdGlvbihwb3NpdGlvbjogQ29udGVudFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc09mZlNjcmVlbihwb3NpdGlvbi5ib3VuZGFyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXQoKSB7XHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYmVsb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5hYm92ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmJlZm9yZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmFmdGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuZW5kXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5qb2luKFwiIFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQb3NpdGlvbihwb3NpdGlvbjogQ29udGVudFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBjc3MgPSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLmJvdW5kYXJ5LnRvcCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodDogXCJcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogXCJcIlxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmNzcyhjc3MpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocG9zaXRpb24uc2lkZUNzcylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhwb3NpdGlvbi5hcnJvd0Nzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc09mZlNjcmVlbihib3VuZGFyeSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRvcFNjcm9sbCA9IHRoaXMuJHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJvdW5kYXJ5LnRvcCA8IDAgKyB0b3BTY3JvbGwgfHwgYm91bmRhcnkubGVmdCA8IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JlZW4gPSBuZXcgU2l6ZSh0aGlzLiR3aW5kb3cuaW5uZXJXaWR0aCwgdGhpcy4kd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKGJvdW5kYXJ5LnJpZ2h0ID4gc2NyZWVuLndpZHRoIHx8IGJvdW5kYXJ5LmJvdHRvbSA+IHNjcmVlbi5oZWlnaHQgKyB0b3BTY3JvbGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUGFnZUNvbnRlbnRGYWN0b3J5IHtcclxuICAgICAgICBnZXQoY29udGVudCwgaXNWZXJ0aWNhbD8sIHhPZmZzZXQ/LCB5T2Zmc2V0Pyk6IElQYWdlQ29udGVudFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUGFnZUNvbnRlbnRGYWN0b3J5IHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFsnJHdpbmRvdyddO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICR3aW5kb3cpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldChjb250ZW50LCBpc1ZlcnRpY2FsID0gdHJ1ZSwgeE9mZnNldCA9IDAsIHlPZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFnZUNvbnRlbnRTZXJ2aWNlKHRoaXMuJHdpbmRvdywgY29udGVudCwgaXNWZXJ0aWNhbCwgeE9mZnNldCwgeU9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIpLnNlcnZpY2UoJ3BhZ2VDb250ZW50RmFjdG9yeScsIFBhZ2VDb250ZW50RmFjdG9yeSk7XHJcblxyXG59IiwibW9kdWxlIEFuZ3VsYXJQb3BvdmVyTW9kdWxlIHtcclxuXHJcbiAgICBjbGFzcyBQb3BPdmVyQ29udHJvbGxlciB7XHJcbiAgICAgICAgc3RhdGljICRpbmplY3QgPSBbJ2lzTW9iaWxlJ107XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gaXNNb2JpbGU7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2hvdzogYW55O1xyXG4gICAgICAgIGhpZGU6IGFueTtcclxuICAgICAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcclxuICAgICAgICBwb3BPdmVyQ2xpY2sgPSAoKTogYW55ID0+IHt9O1xyXG4gICAgICAgIHBvcE92ZXJEaXNhYmxlZCA9ICgpOiBhbnkgPT4ge307XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBnZXQgaXNWaXNpYmxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IGlzVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCB8fCB0aGlzLnBvcE92ZXJEaXNhYmxlZCgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaXNGdWxsc2NyZWVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbG9zZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdG9nZ2xlQ29udGVudCgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBvcE92ZXJEaXJlY3RpdmUge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiJHFcIiwgXCIkcGFyc2VcIiwgXCIkY29tcGlsZVwiLCBcIiR3aW5kb3dcIiwgXCIkdGVtcGxhdGVDYWNoZVwiLCBcIiR0aW1lb3V0XCIsIFwicGFnZUNvbnRlbnRGYWN0b3J5XCJdO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRxOiBhbmd1bGFyLklRU2VydmljZSwgcHJpdmF0ZSAkcGFyc2U6IGFuZ3VsYXIuSVBhcnNlU2VydmljZSwgcHJpdmF0ZSAkY29tcGlsZSwgcHJpdmF0ZSAkd2luZG93LCBwcml2YXRlICR0ZW1wbGF0ZUNhY2hlLCBwcml2YXRlICR0aW1lb3V0LCBwcml2YXRlIHBhZ2VDb250ZW50RmFjdG9yeTogSVBhZ2VDb250ZW50RmFjdG9yeSkge31cclxuXHJcbiAgICAgICAgcmVzdHJpY3QgPSAnQSc7XHJcbiAgICAgICAgLy8gc2NvcGUgPSBETyBOT1QgVVNFIEEgU0NPUEUgT04gVEhJUyEgMzYwTk9TQ09QRVxyXG4gICAgICAgIGNvbnRyb2xsZXIgPSBQb3BPdmVyQ29udHJvbGxlcjtcclxuICAgICAgICBjb250cm9sbGVyQXMgPSAncG9wT3Zlcic7XHJcbiAgICAgICAgYmluZFRvQ29udHJvbGxlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcG9zaXRpb247XHJcblxyXG4gICAgICAgIGxpbmsgPSAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjdHJsOiBQb3BPdmVyQ29udHJvbGxlciA9ICRzY29wZVt0aGlzLmNvbnRyb2xsZXJBc107XHJcblxyXG4gICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcE92ZXJDbGlja0ludm9rZXIgPSB0aGlzLiRwYXJzZSgkYXR0cnMucG9wT3ZlckNsaWNrKTtcclxuICAgICAgICAgICAgICAgIGN0cmwucG9wT3ZlckNsaWNrID0gKCkgPT4gcG9wT3ZlckNsaWNrSW52b2tlcigkc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcE92ZXJEaXNhYmxlZEludm9rZXIgPSB0aGlzLiRwYXJzZSgkYXR0cnMucG9wT3ZlckRpc2FibGVkKTtcclxuICAgICAgICAgICAgICAgIGN0cmwucG9wT3ZlckRpc2FibGVkID0gKCkgPT4gcG9wT3ZlckRpc2FibGVkSW52b2tlcigkc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSBhbmd1bGFyLmVsZW1lbnQoJ2JvZHknKSxcclxuICAgICAgICAgICAgICAgICRodG1sID0gYW5ndWxhci5lbGVtZW50KCdodG1sJyksXHJcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsID0gdHlwZW9mICRhdHRycy5wb3BPdmVySG9yaXpvbnRhbCA9PSAndW5kZWZpbmVkJyxcclxuICAgICAgICAgICAgICAgIHhPZmZzZXQgPSBpc1ZlcnRpY2FsID8gMjcgOiAyMCxcclxuICAgICAgICAgICAgICAgIHlPZmZzZXQgPSBpc1ZlcnRpY2FsID8gMTYgOiAyNCxcclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZTogSVBhZ2VDb250ZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGVudCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgdmFyIGdldEV2ZW50ID0gKC4uLm5hbWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZXMubWFwKG5hbWUgPT4gYCR7bmFtZX0uJHskc2NvcGUuJGlkfWApLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRhdHRycy5wb3BPdmVyQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5wb3BPdmVyQ2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICAgICAgICAgIGRlZmVyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjcmVhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gdGhpcy5jcmVhdGVDb250ZW50KCRhdHRycy5wb3BPdmVyLCAkc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRlbnQgPSBhbmd1bGFyLmVsZW1lbnQoXCIucG9wb3Zlci1zY3JvbGxhYmxlXCIsIGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICRib2R5LmFwcGVuZChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZSA9IHRoaXMucGFnZUNvbnRlbnRGYWN0b3J5LmdldChjb250ZW50LCBpc1ZlcnRpY2FsLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZXRQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2xhc3MoXCJwb3BvdmVyLS1pc1Zpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tRWxlbWVudCgkZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjdHJsLnNob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBnZXREYXRhKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY3RybC5oaWRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmVDbGFzcyhcInBvcG92ZXItLWlzVmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50Lm9uKFwiY2xpY2sucG9wT3ZlclwiLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0geyB4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZIH07XHJcbiAgICAgICAgICAgICAgICBjdHJsLmlzVmlzaWJsZSA9ICFjdHJsLmlzVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaHRtbC5vbihnZXRFdmVudChcImNsaWNrXCIpLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoYXNUYXJnZXQgPSAkZWxlbWVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUYXJnZXQgPSAkZWxlbWVudC5pcyhlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RhcmdldCB8fCBpc1RhcmdldClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaHRtbC5vbihnZXRFdmVudChcIkRPTU1vdXNlU2Nyb2xsXCIsIFwibW91c2V3aGVlbFwiKSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxhYmxlQ29udGVudCAmJiBzY3JvbGxhYmxlQ29udGVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkYm9keS5vbihnZXRFdmVudChcImtleXVwXCIpLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50Lm9uKFwiJGRlc3Ryb3lcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGJvZHkub2ZmKGdldEV2ZW50KFwia2V5dXBcIiwgXCJET01Nb3VzZVNjcm9sbFwiLCBcIm1vdXNld2hlZWxcIikpO1xyXG4gICAgICAgICAgICAgICAgJGh0bWwub2ZmKGdldEV2ZW50KFwiY2xpY2tcIikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udGVudChodG1sVXJsLCAkc2NvcGUpIHtcclxuICAgICAgICAgICAgdmFyIGh0bWwgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy4kdGVtcGxhdGVDYWNoZS5nZXQoaHRtbFVybCkpLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSBhbmd1bGFyLmVsZW1lbnQoYDxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgbmctY2xhc3M9XCJ7J3BvcG92ZXItLWZ1bGxTY3JlZW4nOiBwb3BPdmVyLmlzRnVsbHNjcmVlbn1cIj48aSBjbGFzcz1cInBvcG92ZXItY2xvc2UgaWNvbiBpY29uLXRpbWVzXCIgbmctY2xpY2s9XCJwb3BPdmVyLmNsb3NlQ29udGVudCgpXCI+PC9pPjwvZGl2PmApLFxyXG4gICAgICAgICAgICAgICAgaHRtbExpbmsgPSB0aGlzLiRjb21waWxlKGh0bWwpLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVMaW5rID0gdGhpcy4kY29tcGlsZSh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlTGluaygkc2NvcGUpO1xyXG4gICAgICAgICAgICBodG1sTGluaygkc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5kaXJlY3RpdmUoJ3BvcE92ZXInLCBQb3BPdmVyRGlyZWN0aXZlKTtcclxufSJdfQ==