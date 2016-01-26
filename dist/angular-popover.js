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
                //             $html.on(getEvent("DOMMouseScroll", "mousewheel"), (e) => {
                //                 if (!ctrl.isVisible)
                //                     return;
                // 
                //                 if (scrollableContent && scrollableContent.has(e.target).length > 0) {
                //                     return;
                //                 }
                // 
                //                 ctrl.isVisible = false;
                //                 $scope.$apply();
                //             });
                $body.on(getEvent("keyup"), function (e) {
                    if (!ctrl.isVisible)
                        return;
                    if (e.which === 27) {
                        ctrl.isVisible = false;
                        $scope.$apply();
                    }
                });
                $element.on("$destroy", function () {
                    //$body.off(getEvent("keyup", "DOMMouseScroll", "mousewheel"));
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
    })();
    Angular.module("ngPopover").directive('popOver', PopOverDirective);
})(AngularPopoverModule || (AngularPopoverModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wb3BvdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9tb2JpbGUudHMiLCIuLi9zcmMvcGFnZUNvbnRlbnQudHMiLCIuLi9zcmMvcG9wb3Zlci50cyJdLCJuYW1lcyI6WyJBbmd1bGFyUG9wb3Zlck1vZHVsZSIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLk1vYmlsZUNvbmZpZyIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLk1vYmlsZUNvbmZpZy5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLk1vYmlsZUNvbmZpZy5pc01vYmlsZSIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlNpemUiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5TaXplLmNvbnN0cnVjdG9yIiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9pbnQiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Qb2ludC5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkuY29uc3RydWN0b3IiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Cb3VuZGFyeS5mcm9tVG9wTGVmdCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LmZyb21Ub3BSaWdodCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LmZyb21Cb3R0b21MZWZ0IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkuZnJvbUJvdHRvbVJpZ2h0IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkudG9wTGVmdCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LnRvcFJpZ2h0IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkuYm90dG9tTGVmdCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LmJvdHRvbVJpZ2h0IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuQm91bmRhcnkuc2hpZnRVcCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LnNoaWZ0RG93biIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LnNoaWZ0TGVmdCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLkJvdW5kYXJ5LnNoaWZ0UmlnaHQiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Db250ZW50UG9zaXRpb24iLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Db250ZW50UG9zaXRpb24uY29uc3RydWN0b3IiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5QYWdlQ29udGVudFNlcnZpY2UiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5QYWdlQ29udGVudFNlcnZpY2UuY29uc3RydWN0b3IiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5QYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tUG9pbnQiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5QYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tRWxlbWVudCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50U2VydmljZS50cnlQb3NpdGlvbiIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50U2VydmljZS5yZXNldCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50U2VydmljZS5zZXRQb3NpdGlvbiIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50U2VydmljZS5pc09mZlNjcmVlbiIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50RmFjdG9yeSIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50RmFjdG9yeS5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBhZ2VDb250ZW50RmFjdG9yeS5nZXQiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Qb3BPdmVyQ29udHJvbGxlciIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBvcE92ZXJDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9wT3ZlckNvbnRyb2xsZXIuaXNWaXNpYmxlIiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9wT3ZlckNvbnRyb2xsZXIuY2xvc2VDb250ZW50IiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9wT3ZlckNvbnRyb2xsZXIudG9nZ2xlQ29udGVudCIsIkFuZ3VsYXJQb3BvdmVyTW9kdWxlLlBvcE92ZXJEaXJlY3RpdmUiLCJBbmd1bGFyUG9wb3Zlck1vZHVsZS5Qb3BPdmVyRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiQW5ndWxhclBvcG92ZXJNb2R1bGUuUG9wT3ZlckRpcmVjdGl2ZS5jcmVhdGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MseUdBQXlHO0FBR3pHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FDSGhDLElBQU8sb0JBQW9CLENBZTFCO0FBZkQsV0FBTyxvQkFBb0IsRUFBQyxDQUFDO0lBRXpCQTtRQUFBQztRQVVBQyxDQUFDQTtRQVRVRCxxQkFBUUEsR0FBZkE7WUFDSUUsSUFBSUEsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDdkVBLElBQUlBLEtBQUtBLEdBQUdBLDBUQUEwVEEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFFblZBLElBQUlBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSx5a0RBQXlrREEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7WUFFeG1EQSxNQUFNQSxDQUFDQSxLQUFLQSxJQUFJQSxLQUFLQSxDQUFDQTtRQUMxQkEsQ0FBQ0E7UUFDTEYsbUJBQUNBO0lBQURBLENBQUNBLEFBVkRELElBVUNB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QSxPQUFPQSxHQUFHQSxPQUFPQTthQUM5QkEsQ0FBQ0E7WUFaRUEsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBYURELDhDQUFpQkEsR0FBakJBLFVBQWtCQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUNsQkUsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7WUFFYkEsSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUZBLElBQUlBLFNBQVNBLEdBQUdBLFdBQVdBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3RDQSxJQUFJQSxVQUFVQSxHQUFHQSxXQUFXQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUV4Q0EsSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsZUFBZUEsQ0FBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsU0FBU0EsRUFBRUEsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsR0FBR0EsU0FBU0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDOUlBLElBQUlBLFdBQVdBLEdBQUdBLElBQUlBLGVBQWVBLENBQUNBLElBQUlBLFFBQVFBLENBQUNBLENBQUNBLEdBQUdBLFVBQVVBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFVBQVVBLEVBQUVBLENBQUNBLEdBQUdBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtB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LENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLEVBQUVBLFdBQVdBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQzdIQSxJQUFJQSxjQUFjQSxHQUFHQSxJQUFJQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxFQUFFQSxXQUFXQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUNySUEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsZUFBZUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsRUFBRUEsV0FBV0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDL0hBLElBQUlBLGNBQWNBLEdBQUdBLElBQUlBLGVBQWVBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLEVBQUVBLFdBQVdBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1lBQ3ZJQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxlQUFlQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxFQUFFQSxXQUFXQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM3SEEsSUFBSUEs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QTtvQkFFREEsT0FBT0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ1hBLFdBQVdBLEVBQUVBLENBQUNBO29CQUNsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBLENBQUNBO2dCQUVGQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQTtvQkFDUkEsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtvQkFDMUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO2dCQUNwQkEsQ0FBQ0EsQ0FBQ0E7Z0JBRUZBLFFBQVFBLENBQUNBLEVBQUVBLENBQUNBLGVBQWVBLEVBQUVBLFVBQUFBLENBQUNBO29CQUMxQkEsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7b0JBQ3RDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtvQkFDakNBLE1BQU1BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUNwQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLFVBQUFBLENBQUNBO29CQUN6QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ2hCQSxNQUFNQSxDQUFDQTtvQkFFWEEsSUFBSUEsU0FBU0EsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFDN0NBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUVyQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsSUFBSUEsUUFBUUEsQ0FBQ0E7d0JB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aW5ncy90c2QuZC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci10eXBlc2NyaXB0LW1vZHVsZS9kaXN0L2FuZ3VsYXItdHlwZXNjcmlwdC1tb2R1bGUuZC50c1wiLz5cclxuZGVjbGFyZSB2YXIgVGV0aGVyOiBhbnk7XHJcblxyXG5Bbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiLCBbXSk7IiwiXHJcbm1vZHVsZSBBbmd1bGFyUG9wb3Zlck1vZHVsZSB7XHJcblxyXG4gICAgY2xhc3MgTW9iaWxlQ29uZmlnIHtcclxuICAgICAgICBzdGF0aWMgaXNNb2JpbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3dbXCJvcGVyYVwiXTtcclxuICAgICAgICAgICAgdmFyIHRlc3QxID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYWdlbnQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFnZW50UHJlZml4ID0gYWdlbnQuc3Vic3RyKDAsIDQpO1xyXG4gICAgICAgICAgICB2YXIgdGVzdDIgPSAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGFnZW50UHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0MSB8fCB0ZXN0MjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQW5ndWxhci5tb2R1bGUoXCJuZ1BvcG92ZXJcIikuY29uc3RhbnQoJ2lzTW9iaWxlJywgTW9iaWxlQ29uZmlnLmlzTW9iaWxlKCkpO1xyXG59XHJcbiIsIm1vZHVsZSBBbmd1bGFyUG9wb3Zlck1vZHVsZSB7XHJcblxyXG4gICAgY2xhc3MgU2l6ZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHdpZHRoLCBwdWJsaWMgaGVpZ2h0KSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHgsIHB1YmxpYyB5KSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBCb3VuZGFyeSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHRvcDogbnVtYmVyLCBwdWJsaWMgbGVmdDogbnVtYmVyLCBwdWJsaWMgYm90dG9tOiBudW1iZXIsIHB1YmxpYyByaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbVRvcExlZnQocG9pbnQ6IFBvaW50LCBzaXplOiBTaXplKTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHBvaW50LnksIHBvaW50LngsIHBvaW50LnkgKyBzaXplLmhlaWdodCwgcG9pbnQueCArIHNpemUud2lkdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Ub3BSaWdodChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSwgcG9pbnQueCAtIHNpemUud2lkdGgsIHBvaW50LnkgKyBzaXplLmhlaWdodCwgcG9pbnQueCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbUJvdHRvbUxlZnQocG9pbnQ6IFBvaW50LCBzaXplOiBTaXplKTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHBvaW50LnkgLSBzaXplLmhlaWdodCwgcG9pbnQueCwgcG9pbnQueSwgcG9pbnQueCArIHNpemUud2lkdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Cb3R0b21SaWdodChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSAtIHNpemUuaGVpZ2h0LCBwb2ludC54IC0gc2l6ZS53aWR0aCwgcG9pbnQueSwgcG9pbnQueCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHRvcExlZnQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0b3BSaWdodCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy50b3ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBib3R0b21MZWZ0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMuYm90dG9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgYm90dG9tUmlnaHQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMuYm90dG9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdFVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50b3AgLT0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tIC09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0RG93bih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvcCArPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdExlZnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgLT0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgLT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnRSaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCArPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQ29udGVudFBvc2l0aW9uIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYm91bmRhcnk6IEJvdW5kYXJ5LCBwdWJsaWMgc2lkZUNzczogc3RyaW5nLCBwdWJsaWMgYXJyb3dDc3M6IHN0cmluZykge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQYWdlQ29udGVudFNlcnZpY2Uge1xyXG4gICAgICAgIHBvc2l0aW9uRnJvbVBvaW50KHgsIHkpO1xyXG4gICAgICAgIHBvc2l0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUGFnZUNvbnRlbnRTZXJ2aWNlIGltcGxlbWVudHMgSVBhZ2VDb250ZW50U2VydmljZSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHdpbmRvdywgcHJpdmF0ZSBjb250ZW50LCBwcml2YXRlIGlzVmVydGljYWwsIHByaXZhdGUgeE9mZnNldCwgcHJpdmF0ZSB5T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2xhc3ModGhpcy5jc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3NzTmFtZSA9IFwicGFnZWNvbnRlbnRcIjtcclxuICAgICAgICBwcml2YXRlIGNzcyA9IHtcclxuICAgICAgICAgICAgYmVsb3c6IHRoaXMuY3NzTmFtZSArICctLWJlbG93JyxcclxuICAgICAgICAgICAgYWJvdmU6IHRoaXMuY3NzTmFtZSArICctLWFib3ZlJyxcclxuICAgICAgICAgICAgYmVmb3JlOiB0aGlzLmNzc05hbWUgKyAnLS1iZWZvcmUnLFxyXG4gICAgICAgICAgICBhZnRlcjogdGhpcy5jc3NOYW1lICsgJy0tYWZ0ZXInLFxyXG4gICAgICAgICAgICBiZWdpbm5pbmc6IHRoaXMuY3NzTmFtZSArICctLWJlZ2lubmluZycsXHJcbiAgICAgICAgICAgIGNlbnRlcjogdGhpcy5jc3NOYW1lICsgJy0tY2VudGVyJyxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLmNzc05hbWUgKyAnLS1lbmQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcG9zaXRpb25Gcm9tUG9pbnQoeCwgeSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGVudFNpemUgPSBuZXcgU2l6ZSh0aGlzLmNvbnRlbnQub3V0ZXJXaWR0aCh0cnVlKSwgdGhpcy5jb250ZW50Lm91dGVySGVpZ2h0KHRydWUpKTtcclxuICAgICAgICAgICAgdmFyIGhhbGZ3aWR0aCA9IGNvbnRlbnRTaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdmFyIGhhbGZIZWlnaHQgPSBjb250ZW50U2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJlbG93Q2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihuZXcgQm91bmRhcnkoeSwgeCAtIGhhbGZ3aWR0aCwgeSArIGNvbnRlbnRTaXplLmhlaWdodCwgeCArIGhhbGZ3aWR0aCksIHRoaXMuY3NzLmJlbG93LCB0aGlzLmNzcy5jZW50ZXIpO1xyXG4gICAgICAgICAgICB2YXIgYWZ0ZXJDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5IC0gaGFsZkhlaWdodCwgeCwgeSArIGhhbGZIZWlnaHQsIHggKyBjb250ZW50U2l6ZS53aWR0aCksIHRoaXMuY3NzLmFmdGVyLCB0aGlzLmNzcy5jZW50ZXIpO1xyXG4gICAgICAgICAgICB2YXIgYWJvdmVDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5IC0gY29udGVudFNpemUuaGVpZ2h0LCB4IC0gaGFsZndpZHRoLCB5LCB4ICsgaGFsZndpZHRoKSwgdGhpcy5jc3MuYWJvdmUsIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmVDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5IC0gaGFsZkhlaWdodCwgeCAtIGNvbnRlbnRTaXplLndpZHRoLCB5ICsgaGFsZkhlaWdodCwgeCksIHRoaXMuY3NzLmJlZm9yZSwgdGhpcy5jc3MuY2VudGVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9zaXRpb24gPSBiZWxvd0NlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbk9yZGVyID0gW1xyXG4gICAgICAgICAgICAgICAgYmVsb3dDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICBhZnRlckNlbnRlcixcclxuICAgICAgICAgICAgICAgIGFib3ZlQ2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlQ2VudGVyXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc2l0aW9uT3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyeVBvc2l0aW9uKHBvc2l0aW9uT3JkZXJbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50U2l6ZSA9IG5ldyBTaXplKGVsZW1lbnQub3V0ZXJXaWR0aCh0cnVlKSwgZWxlbWVudC5vdXRlckhlaWdodCh0cnVlKSk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50U2l6ZSA9IG5ldyBTaXplKHRoaXMuY29udGVudC5vdXRlcldpZHRoKHRydWUpLCB0aGlzLmNvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvcyA9IGVsZW1lbnQub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50Qm94ID0gbmV3IEJvdW5kYXJ5KHBvcy50b3AsIHBvcy5sZWZ0LCBwb3MudG9wICsgZWxlbWVudFNpemUuaGVpZ2h0LCBwb3MubGVmdCArIGVsZW1lbnRTaXplLndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBiZWxvd0JlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcExlZnQoZWxlbWVudEJveC5ib3R0b21MZWZ0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmJlbG93LCB0aGlzLmNzcy5iZWdpbm5pbmcpO1xyXG4gICAgICAgICAgICB2YXIgYmVsb3dFbmQgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BSaWdodChlbGVtZW50Qm94LmJvdHRvbVJpZ2h0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmJlbG93LCB0aGlzLmNzcy5lbmQpO1xyXG4gICAgICAgICAgICB2YXIgYWZ0ZXJCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BMZWZ0KGVsZW1lbnRCb3gudG9wUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYWZ0ZXIsIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckVuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbUJvdHRvbUxlZnQoZWxlbWVudEJveC5ib3R0b21SaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hZnRlciwgdGhpcy5jc3MuZW5kKTtcclxuICAgICAgICAgICAgdmFyIGFib3ZlQmVnaW5uaW5nID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tTGVmdChlbGVtZW50Qm94LnRvcExlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYWJvdmUsIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBhYm92ZUVuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbUJvdHRvbVJpZ2h0KGVsZW1lbnRCb3gudG9wUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYWJvdmUsIHRoaXMuY3NzLmVuZCk7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmVCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BSaWdodChlbGVtZW50Qm94LnRvcExlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5iZWdpbm5pbmcpO1xyXG4gICAgICAgICAgICB2YXIgYmVmb3JlRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tUmlnaHQoZWxlbWVudEJveC5ib3R0b21MZWZ0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmJlZm9yZSwgdGhpcy5jc3MuZW5kKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9zaXRpb24gPSBiZWxvd0JlZ2lubmluZztcclxuXHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbk9yZGVyID0gW1xyXG4gICAgICAgICAgICAgICAgYmVsb3dCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBiZWxvd0VuZCxcclxuICAgICAgICAgICAgICAgIGFmdGVyQmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJFbmQsXHJcbiAgICAgICAgICAgICAgICBhYm92ZUJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGFib3ZlRW5kLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlQmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlRW5kXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc2l0aW9uT3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyeVBvc2l0aW9uKHBvc2l0aW9uT3JkZXJbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5UG9zaXRpb24ocG9zaXRpb246IENvbnRlbnRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPZmZTY3JlZW4ocG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0KCkge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmJlbG93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYWJvdmUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5iZWZvcmUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5hZnRlcixcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmNlbnRlcixcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmVuZFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNsYXNzKGNsYXNzZXMuam9pbihcIiBcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UG9zaXRpb24ocG9zaXRpb246IENvbnRlbnRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgY3NzID0ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvbi5ib3VuZGFyeS50b3AsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5ib3VuZGFyeS5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5jc3MoY3NzKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKHBvc2l0aW9uLnNpZGVDc3MpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocG9zaXRpb24uYXJyb3dDc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZTY3JlZW4oYm91bmRhcnkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0b3BTY3JvbGwgPSB0aGlzLiR3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgICAgICAgIGlmIChib3VuZGFyeS50b3AgPCAwICsgdG9wU2Nyb2xsIHx8IGJvdW5kYXJ5LmxlZnQgPCAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2NyZWVuID0gbmV3IFNpemUodGhpcy4kd2luZG93LmlubmVyV2lkdGgsIHRoaXMuJHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgICAgIGlmIChib3VuZGFyeS5yaWdodCA+IHNjcmVlbi53aWR0aCB8fCBib3VuZGFyeS5ib3R0b20gPiBzY3JlZW4uaGVpZ2h0ICsgdG9wU2Nyb2xsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDb250ZW50RmFjdG9yeSB7XHJcbiAgICAgICAgZ2V0KGNvbnRlbnQsIGlzVmVydGljYWw/LCB4T2Zmc2V0PywgeU9mZnNldD8pOiBJUGFnZUNvbnRlbnRTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBhZ2VDb250ZW50RmFjdG9yeSB7XHJcbiAgICAgICAgc3RhdGljICRpbmplY3QgPSBbJyR3aW5kb3cnXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93KSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQoY29udGVudCwgaXNWZXJ0aWNhbCA9IHRydWUsIHhPZmZzZXQgPSAwLCB5T2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBhZ2VDb250ZW50U2VydmljZSh0aGlzLiR3aW5kb3csIGNvbnRlbnQsIGlzVmVydGljYWwsIHhPZmZzZXQsIHlPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5zZXJ2aWNlKCdwYWdlQ29udGVudEZhY3RvcnknLCBQYWdlQ29udGVudEZhY3RvcnkpO1xyXG5cclxufSIsIm1vZHVsZSBBbmd1bGFyUG9wb3Zlck1vZHVsZSB7XHJcblxyXG4gICAgY2xhc3MgUG9wT3ZlckNvbnRyb2xsZXIge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gWydpc01vYmlsZSddO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpc01vYmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRnVsbHNjcmVlbiA9IGlzTW9iaWxlO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNob3c6IGFueTtcclxuICAgICAgICBoaWRlOiBhbnk7XHJcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XHJcbiAgICAgICAgcG9wT3ZlckNsaWNrID0gKCk6IGFueSA9PiB7fTtcclxuICAgICAgICBwb3BPdmVyRGlzYWJsZWQgPSAoKTogYW55ID0+IHt9O1xyXG5cclxuICAgICAgICBwcml2YXRlIF9pc1Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZ2V0IGlzVmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBpc1Zpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQgfHwgdGhpcy5wb3BPdmVyRGlzYWJsZWQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xvc2VDb250ZW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvZ2dsZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gIXRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQb3BPdmVyRGlyZWN0aXZlIHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFtcIiRxXCIsIFwiJHBhcnNlXCIsIFwiJGNvbXBpbGVcIiwgXCIkd2luZG93XCIsIFwiJHRlbXBsYXRlQ2FjaGVcIiwgXCIkdGltZW91dFwiLCBcInBhZ2VDb250ZW50RmFjdG9yeVwiXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkcTogYW5ndWxhci5JUVNlcnZpY2UsIHByaXZhdGUgJHBhcnNlOiBhbmd1bGFyLklQYXJzZVNlcnZpY2UsIHByaXZhdGUgJGNvbXBpbGUsIHByaXZhdGUgJHdpbmRvdywgcHJpdmF0ZSAkdGVtcGxhdGVDYWNoZSwgcHJpdmF0ZSAkdGltZW91dCwgcHJpdmF0ZSBwYWdlQ29udGVudEZhY3Rvcnk6IElQYWdlQ29udGVudEZhY3RvcnkpIHt9XHJcblxyXG4gICAgICAgIHJlc3RyaWN0ID0gJ0EnO1xyXG4gICAgICAgIC8vIHNjb3BlID0gRE8gTk9UIFVTRSBBIFNDT1BFIE9OIFRISVMhIDM2ME5PU0NPUEVcclxuICAgICAgICBjb250cm9sbGVyID0gUG9wT3ZlckNvbnRyb2xsZXI7XHJcbiAgICAgICAgY29udHJvbGxlckFzID0gJ3BvcE92ZXInO1xyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICBwcml2YXRlIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICBsaW5rID0gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY3RybDogUG9wT3ZlckNvbnRyb2xsZXIgPSAkc2NvcGVbdGhpcy5jb250cm9sbGVyQXNdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRhdHRycy5wb3BPdmVyQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3BPdmVyQ2xpY2tJbnZva2VyID0gdGhpcy4kcGFyc2UoJGF0dHJzLnBvcE92ZXJDbGljayk7XHJcbiAgICAgICAgICAgICAgICBjdHJsLnBvcE92ZXJDbGljayA9ICgpID0+IHBvcE92ZXJDbGlja0ludm9rZXIoJHNjb3BlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRhdHRycy5wb3BPdmVyRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3BPdmVyRGlzYWJsZWRJbnZva2VyID0gdGhpcy4kcGFyc2UoJGF0dHJzLnBvcE92ZXJEaXNhYmxlZCk7XHJcbiAgICAgICAgICAgICAgICBjdHJsLnBvcE92ZXJEaXNhYmxlZCA9ICgpID0+IHBvcE92ZXJEaXNhYmxlZEludm9rZXIoJHNjb3BlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyICRib2R5ID0gYW5ndWxhci5lbGVtZW50KCdib2R5JyksXHJcbiAgICAgICAgICAgICAgICAkaHRtbCA9IGFuZ3VsYXIuZWxlbWVudCgnaHRtbCcpLFxyXG4gICAgICAgICAgICAgICAgaXNWZXJ0aWNhbCA9IHR5cGVvZiAkYXR0cnMucG9wT3Zlckhvcml6b250YWwgPT0gJ3VuZGVmaW5lZCcsXHJcbiAgICAgICAgICAgICAgICB4T2Zmc2V0ID0gaXNWZXJ0aWNhbCA/IDI3IDogMjAsXHJcbiAgICAgICAgICAgICAgICB5T2Zmc2V0ID0gaXNWZXJ0aWNhbCA/IDE2IDogMjQsXHJcbiAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2U6IElQYWdlQ29udGVudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIHZhciBnZXRFdmVudCA9ICguLi5uYW1lcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVzLm1hcChuYW1lID0+IGAke25hbWV9LiR7JHNjb3BlLiRpZH1gKS5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkYXR0cnMucG9wT3ZlckNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwucG9wT3ZlckNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgY3JlYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IHRoaXMuY3JlYXRlQ29udGVudCgkYXR0cnMucG9wT3ZlciwgJHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdHJsLmlzVmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHJsLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250ZW50ID0gYW5ndWxhci5lbGVtZW50KFwiLnBvcG92ZXItc2Nyb2xsYWJsZVwiLCBjb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkYm9keS5hcHBlbmQoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2UgPSB0aGlzLnBhZ2VDb250ZW50RmFjdG9yeS5nZXQoY29udGVudCwgaXNWZXJ0aWNhbCwgeE9mZnNldCwgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgc2V0UG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENsYXNzKFwicG9wb3Zlci0taXNWaXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUNvbnRlbnRTZXJ2aWNlLnBvc2l0aW9uRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUNvbnRlbnRTZXJ2aWNlLnBvc2l0aW9uRnJvbUVsZW1lbnQoJGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY3RybC5zaG93ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGN0cmwuaGlkZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJwb3BvdmVyLS1pc1Zpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC5vbihcImNsaWNrLnBvcE92ZXJcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9O1xyXG4gICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSAhY3RybC5pc1Zpc2libGU7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGh0bWwub24oZ2V0RXZlbnQoXCJjbGlja1wiKSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzVGFyZ2V0ID0gJGVsZW1lbnQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVGFyZ2V0ID0gJGVsZW1lbnQuaXMoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNUYXJnZXQgfHwgaXNUYXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICAgICAgJGh0bWwub24oZ2V0RXZlbnQoXCJET01Nb3VzZVNjcm9sbFwiLCBcIm1vdXNld2hlZWxcIiksIChlKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuLy8gXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsYWJsZUNvbnRlbnQgJiYgc2Nyb2xsYWJsZUNvbnRlbnQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyBcclxuLy8gICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGJvZHkub24oZ2V0RXZlbnQoXCJrZXl1cFwiKSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHJsLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC5vbihcIiRkZXN0cm95XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vJGJvZHkub2ZmKGdldEV2ZW50KFwia2V5dXBcIiwgXCJET01Nb3VzZVNjcm9sbFwiLCBcIm1vdXNld2hlZWxcIikpO1xyXG4gICAgICAgICAgICAgICAgJGJvZHkub2ZmKGdldEV2ZW50KFwia2V5dXBcIikpO1xyXG4gICAgICAgICAgICAgICAgJGh0bWwub2ZmKGdldEV2ZW50KFwiY2xpY2tcIikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udGVudChodG1sVXJsLCAkc2NvcGUpIHtcclxuICAgICAgICAgICAgdmFyIGh0bWwgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy4kdGVtcGxhdGVDYWNoZS5nZXQoaHRtbFVybCkpLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSBhbmd1bGFyLmVsZW1lbnQoYDxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgbmctY2xhc3M9XCJ7J3BvcG92ZXItLWZ1bGxTY3JlZW4nOiBwb3BPdmVyLmlzRnVsbHNjcmVlbn1cIj48aSBjbGFzcz1cInBvcG92ZXItY2xvc2UgaWNvbiBpY29uLXRpbWVzXCIgbmctY2xpY2s9XCJwb3BPdmVyLmNsb3NlQ29udGVudCgpXCI+PC9pPjwvZGl2PmApLFxyXG4gICAgICAgICAgICAgICAgaHRtbExpbmsgPSB0aGlzLiRjb21waWxlKGh0bWwpLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVMaW5rID0gdGhpcy4kY29tcGlsZSh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlTGluaygkc2NvcGUpO1xyXG4gICAgICAgICAgICBodG1sTGluaygkc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5kaXJlY3RpdmUoJ3BvcE92ZXInLCBQb3BPdmVyRGlyZWN0aXZlKTtcclxufSJdfQ==