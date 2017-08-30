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
        Boundary.fromBoundary = function (boundary) {
            return new Boundary(boundary.top, boundary.left, boundary.bottom, boundary.right);
        };
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
            var boundary = defaultPosition.boundary;
            var offscreen = this.getOffScreen(boundary);
            var top = boundary.top;
            var bottom = boundary.bottom;
            var left = boundary.left;
            var right = boundary.right;
            if (offscreen.right) {
                right = 0;
                left = offscreen.left ? 0 : "";
            }
            else if (offscreen.left) {
                right = "";
                left = 0;
            }
            else {
                right = "";
            }
            if (offscreen.top) {
                top = 0;
                bottom = offscreen.bottom ? 0 : "";
            }
            else if (offscreen.bottom) {
                top = "";
                bottom = 0;
            }
            else {
                bottom = "";
            }
            this.setPosition(defaultPosition, top, left, right, bottom);
        };
        PageContentService.prototype.getOffScreen = function (boundary) {
            var offscreen = {
                right: this.isOffRightScreen(boundary),
                left: this.isOffLeftScreen(boundary),
                top: this.isOffTopScreen(boundary),
                bottom: this.isOffBottomScreen(boundary)
            };
            return offscreen;
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
                var $body = angular.element('body'), $html = angular.element('html'), isVertical = typeof $attrs.popOverHorizontal == 'undefined', xOffset = isVertical ? 27 : 20, yOffset = isVertical ? 16 : 24, pageContentService, content, scrollableContent, position;
                ctrl.positionType = $attrs.positionType || 'mouse';
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
                    if (ctrl.positionType == 'mouse')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wb3BvdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9tb2JpbGUudHMiLCIuLi9zcmMvcGFnZUNvbnRlbnQudHMiLCIuLi9zcmMvcG9wb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQ0NoQyxJQUFPLG9CQUFvQixDQWUxQjtBQWZELFdBQU8sb0JBQW9CLEVBQUMsQ0FBQztJQUV6QjtRQUFBO1FBVUEsQ0FBQztRQVRVLHFCQUFRLEdBQWY7WUFDSSxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZFLElBQUksS0FBSyxHQUFHLDBUQUEwVCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuVixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLEtBQUssR0FBRyx5a0RBQXlrRCxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV4bUQsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDMUIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDOUUsQ0FBQyxFQWZNLG9CQUFvQixLQUFwQixvQkFBb0IsUUFlMUI7QUNoQkQsSUFBVSxvQkFBb0IsQ0EwVTdCO0FBMVVELFdBQVUsb0JBQW9CLEVBQUMsQ0FBQztJQUU1QjtRQUNJLGNBQW1CLEtBQUssRUFBUyxNQUFNO1lBQXBCLFVBQUssR0FBTCxLQUFLLENBQUE7WUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFBO1FBRXZDLENBQUM7UUFDTCxXQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFFRDtRQUNJLGVBQW1CLENBQUMsRUFBUyxDQUFDO1lBQVgsTUFBQyxHQUFELENBQUMsQ0FBQTtZQUFTLE1BQUMsR0FBRCxDQUFDLENBQUE7UUFFOUIsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQUFDLEFBSkQsSUFJQztJQUVEO1FBQ0ksa0JBQW1CLEdBQVcsRUFBUyxJQUFZLEVBQVMsTUFBYyxFQUFTLEtBQWE7WUFBN0UsUUFBRyxHQUFILEdBQUcsQ0FBUTtZQUFTLFNBQUksR0FBSixJQUFJLENBQVE7WUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNoRyxDQUFDO1FBRU0scUJBQVksR0FBbkIsVUFBb0IsUUFBa0I7WUFDbEMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBRU0sb0JBQVcsR0FBbEIsVUFBbUIsS0FBWSxFQUFFLElBQVU7WUFDdkMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUVNLHFCQUFZLEdBQW5CLFVBQW9CLEtBQVksRUFBRSxJQUFVO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFFTSx1QkFBYyxHQUFyQixVQUFzQixLQUFZLEVBQUUsSUFBVTtZQUMxQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RixDQUFDO1FBRU0sd0JBQWUsR0FBdEIsVUFBdUIsS0FBWSxFQUFFLElBQVU7WUFDM0MsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUVELHNCQUFXLDZCQUFPO2lCQUFsQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBVyw4QkFBUTtpQkFBbkI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsZ0NBQVU7aUJBQXJCO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxDQUFDOzs7V0FBQTtRQUVNLCtCQUFZLEdBQW5CLFVBQW9CLFdBQWlCLEVBQUUsV0FBaUI7WUFDcEQsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzFGLENBQUM7UUFFRCxzQkFBVyxpQ0FBVztpQkFBdEI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLENBQUM7OztXQUFBO1FBRU0sMEJBQU8sR0FBZCxVQUFlLEtBQWE7WUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUVNLDRCQUFTLEdBQWhCLFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVNLDRCQUFTLEdBQWhCLFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDeEIsQ0FBQztRQUVNLDZCQUFVLEdBQWpCLFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7UUFDdkIsQ0FBQztRQUNMLGVBQUM7SUFBRCxDQUFDLEFBL0RELElBK0RDO0lBRUQ7UUFDSSx5QkFBbUIsUUFBa0IsRUFBUyxPQUFlLEVBQVMsUUFBZ0I7WUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtZQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ3RGLENBQUM7UUFDTCxzQkFBQztJQUFELENBQUMsQUFIRCxJQUdDO0lBT0Q7UUFFSSw0QkFBb0IsT0FBTyxFQUFVLE9BQU8sRUFBVSxVQUFVLEVBQVUsT0FBTyxFQUFVLE9BQU87WUFBOUUsWUFBTyxHQUFQLE9BQU8sQ0FBQTtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQUE7WUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFBO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBQTtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQUE7WUFJMUYsWUFBTyxHQUFHLGFBQWEsQ0FBQztZQUN4QixRQUFHLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUztnQkFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUztnQkFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVTtnQkFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUztnQkFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYTtnQkFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVTtnQkFDakMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTzthQUM5QixDQUFDO1FBWEYsQ0FBQztRQWFELDhDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFYixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN0QyxJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUV4QyxJQUFJLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5SSxJQUFJLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvSSxJQUFJLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5SSxJQUFJLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqSixJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUM7WUFFbEMsSUFBSSxhQUFhLEdBQUc7Z0JBQ2hCLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFlBQVk7YUFDZixDQUFDO1lBRUYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sQ0FBQztZQUNmLENBQUM7WUFFRCxJQUFJLFFBQVEsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxHQUFHLEdBQW9CLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDeEMsSUFBSSxNQUFNLEdBQW9CLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDOUMsSUFBSSxJQUFJLEdBQW9CLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDMUMsSUFBSSxLQUFLLEdBQW9CLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFNUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ1YsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSyxHQUFHLEVBQUUsQ0FBQTtZQUNkLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDUixNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNmLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLENBQUM7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBRUQseUNBQVksR0FBWixVQUFhLFFBQWtCO1lBQzNCLElBQUksU0FBUyxHQUFHO2dCQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUN0QyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztnQkFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7YUFDM0MsQ0FBQTtZQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUVELGdEQUFtQixHQUFuQixVQUFvQixPQUFPO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUViLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTFGLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTdHLElBQUksV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3SixJQUFJLGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2SSxJQUFJLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3SCxJQUFJLGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNySSxJQUFJLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvSCxJQUFJLGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2SSxJQUFJLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3SCxJQUFJLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2SSxJQUFJLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqSSxJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUM7WUFFbEMsSUFBSSxhQUFhLEdBQUc7Z0JBQ2hCLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxRQUFRO2dCQUNSLGNBQWM7Z0JBQ2QsUUFBUTtnQkFDUixjQUFjO2dCQUNkLFFBQVE7Z0JBQ1IsZUFBZTtnQkFDZixTQUFTO2FBQ1osQ0FBQztZQUVGLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFFNUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sQ0FBQztZQUNmLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDM0UsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDM0UsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUUsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLENBQUM7UUFFRCx3Q0FBVyxHQUFYLFVBQVksUUFBeUI7WUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEYsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsa0NBQUssR0FBTDtZQUNJLElBQUksT0FBTyxHQUFHO2dCQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2dCQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVM7Z0JBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtnQkFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUc7YUFDZixDQUFDO1lBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsd0NBQVcsR0FBWCxVQUFZLFFBQVEsRUFBRSxHQUFhLEVBQUUsSUFBYyxFQUFFLEtBQWUsRUFBRSxNQUFnQjtZQUFoRSxtQkFBYSxHQUFiLFFBQWE7WUFBRSxvQkFBYyxHQUFkLFNBQWM7WUFBRSxxQkFBZSxHQUFmLFVBQWU7WUFBRSxzQkFBZ0IsR0FBaEIsV0FBZ0I7WUFDbEYsSUFBSSxHQUFHLEdBQUc7Z0JBQ04sR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLE1BQU07YUFDakIsQ0FBQztZQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztpQkFDaEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQzFCLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELHdDQUFXLEdBQVgsVUFBWSxRQUFrQjtZQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUVoQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCwyQ0FBYyxHQUFkLFVBQWUsUUFBa0I7WUFDN0IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsNENBQWUsR0FBZixVQUFnQixRQUFrQjtZQUM5QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsUUFBa0I7WUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6RSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsOENBQWlCLEdBQWpCLFVBQWtCLFFBQWtCO1lBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNMLHlCQUFDO0lBQUQsQ0FBQyxBQTlORCxJQThOQztJQU1EO1FBR0ksNEJBQW9CLE9BQU87WUFBUCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzNCLENBQUM7UUFFRCxnQ0FBRyxHQUFILFVBQUksT0FBTyxFQUFFLFVBQWlCLEVBQUUsT0FBVyxFQUFFLE9BQVc7WUFBM0MsMEJBQWlCLEdBQWpCLGlCQUFpQjtZQUFFLHVCQUFXLEdBQVgsV0FBVztZQUFFLHVCQUFXLEdBQVgsV0FBVztZQUNwRCxNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFQTSwwQkFBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFRakMseUJBQUM7SUFBRCxDQUFDLEFBVEQsSUFTQztJQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFbEYsQ0FBQyxFQTFVUyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBMFU3QjtBQzFVRCxJQUFVLG9CQUFvQixDQWlPN0I7QUFqT0QsV0FBVSxvQkFBb0IsRUFBQyxDQUFDO0lBTzVCO1FBR0ksMkJBQVksUUFBUTtZQVVwQixpQkFBWSxHQUFHLGNBQWEsQ0FBQyxDQUFDO1lBQzlCLG9CQUFlLEdBQUcsY0FBYSxDQUFDLENBQUM7WUFFekIsZUFBVSxHQUFHLEtBQUssQ0FBQztZQWlCcEIsaUJBQVksR0FBRyxLQUFLLENBQUM7WUE3QnhCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7UUFXRCxzQkFBSSx3Q0FBUztpQkFBYjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDO2lCQUVELFVBQWMsT0FBZ0I7Z0JBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzVDLE1BQU0sQ0FBQztnQkFFWCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUNSLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEIsSUFBSTtvQkFDQSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEIsQ0FBQzs7O1dBWEE7UUFlTSx3Q0FBWSxHQUFuQjtZQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7UUFFTSx5Q0FBYSxHQUFwQjtZQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLENBQUM7UUF4Q00seUJBQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBeUNsQyx3QkFBQztJQUFELENBQUMsQUExQ0QsSUEwQ0M7SUFFRDtRQUdJLDBCQUFvQixFQUFxQixFQUFVLE1BQTZCLEVBQVUsUUFBUSxFQUFVLE9BQStCLEVBQVUsY0FBNkMsRUFBVSxRQUFpQyxFQUFVLGtCQUF1QztZQUhsUyxpQkEyS0M7WUF4S3VCLE9BQUUsR0FBRixFQUFFLENBQW1CO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7WUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFBO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7WUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBK0I7WUFBVSxhQUFRLEdBQVIsUUFBUSxDQUF5QjtZQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7WUFFOVIsYUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNmLGlEQUFpRDtZQUNqRCxlQUFVLEdBQUcsaUJBQWlCLENBQUM7WUFDL0IsaUJBQVksR0FBRyxTQUFTLENBQUM7WUFDekIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1lBSXhCLFNBQUksR0FBRyxVQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTTtnQkFDNUIsSUFBSSxJQUFJLEdBQXNCLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRXhELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUN0QixJQUFJLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQU0sT0FBQSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztnQkFDMUQsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSxzQkFBc0IsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDakUsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFNLE9BQUEsc0JBQXNCLENBQUMsTUFBTSxDQUFDLEVBQTlCLENBQThCLENBQUM7Z0JBQ2hFLENBQUM7Z0JBRUQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFDL0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQy9CLFVBQVUsR0FBRyxPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxXQUFXLEVBQzNELE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFDOUIsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUM5QixrQkFBdUMsRUFDdkMsT0FBTyxFQUNQLGlCQUFpQixFQUNqQixRQUFRLENBQUM7Z0JBRWIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQztnQkFFbkQsSUFBSSxRQUFRLEdBQUc7b0JBQUMsZUFBUTt5QkFBUixXQUFRLENBQVIsc0JBQVEsQ0FBUixJQUFRO3dCQUFSLDhCQUFROztvQkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFHLElBQUksU0FBSSxNQUFNLENBQUMsR0FBRyxDQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hFLENBQUMsQ0FBQztnQkFFRixJQUFJLE9BQU8sR0FBRztvQkFDVixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQztvQkFFRCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMzQixDQUFDLENBQUM7Z0JBRUYsSUFBSSxNQUFNLEdBQUc7b0JBQ1QsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDckQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7d0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs0QkFDaEIsTUFBTSxDQUFDO3dCQUVYLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDO29CQUVILGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRXBFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RCLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVGLENBQUMsQ0FBQztnQkFFRixJQUFJLFdBQVcsR0FBRztvQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNWLE9BQU8sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFFdkMsbUJBQW1CO3dCQUNuQixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsSUFBSSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN4QyxJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQzs0QkFDckUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLDBCQUEwQixFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQ2hGLENBQUM7d0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs0QkFDbEIsTUFBTSxDQUFDO3dCQUVYLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQzs0QkFDVCxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakUsSUFBSTs0QkFDQSxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNYLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsSUFBSSxHQUFHO29CQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxNQUFNLEVBQUUsQ0FBQztvQkFDYixDQUFDO29CQUVELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDWCxXQUFXLEVBQUUsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUMxQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixDQUFDLENBQUM7Z0JBRUYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQSxDQUFDO29CQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQzt3QkFDN0IsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBQSxDQUFDO29CQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQztvQkFFWCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUM3QyxRQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRXJDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQztvQkFFWCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQztnQkFFSCxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsRUFBRSxVQUFDLENBQUM7b0JBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDaEIsTUFBTSxDQUFDO29CQUVYLFdBQVcsRUFBRSxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztnQkFFSCxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBQSxDQUFDO29CQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQztvQkFFWCxXQUFXLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBQSxDQUFDO29CQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQztvQkFFWCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BCLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7b0JBQ3BCLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDN0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO3dCQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7UUExSmdTLENBQUM7UUE0Sm5TLHdDQUFhLEdBQWIsVUFBYyxPQUFPLEVBQUUsTUFBTTtZQUN6QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ3hELFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLDZLQUFxSyxDQUFDLEVBQ2pNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUzQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFakIsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDO1FBektNLHdCQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUEwS2pILHVCQUFDO0lBQUQsQ0FBQyxBQTNLRCxJQTJLQztJQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsRUFqT1Msb0JBQW9CLEtBQXBCLG9CQUFvQixRQWlPN0IiLCJzb3VyY2VzQ29udGVudCI6WyJBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiLCBbXSk7IiwiXHJcbm1vZHVsZSBBbmd1bGFyUG9wb3Zlck1vZHVsZSB7XHJcblxyXG4gICAgY2xhc3MgTW9iaWxlQ29uZmlnIHtcclxuICAgICAgICBzdGF0aWMgaXNNb2JpbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3dbXCJvcGVyYVwiXTtcclxuICAgICAgICAgICAgdmFyIHRlc3QxID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYWdlbnQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFnZW50UHJlZml4ID0gYWdlbnQuc3Vic3RyKDAsIDQpO1xyXG4gICAgICAgICAgICB2YXIgdGVzdDIgPSAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGFnZW50UHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0MSB8fCB0ZXN0MjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQW5ndWxhci5tb2R1bGUoXCJuZ1BvcG92ZXJcIikuY29uc3RhbnQoJ2lzTW9iaWxlJywgTW9iaWxlQ29uZmlnLmlzTW9iaWxlKCkpO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBBbmd1bGFyUG9wb3Zlck1vZHVsZSB7XHJcblxyXG4gICAgY2xhc3MgU2l6ZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHdpZHRoLCBwdWJsaWMgaGVpZ2h0KSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHgsIHB1YmxpYyB5KSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBCb3VuZGFyeSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHRvcDogbnVtYmVyLCBwdWJsaWMgbGVmdDogbnVtYmVyLCBwdWJsaWMgYm90dG9tOiBudW1iZXIsIHB1YmxpYyByaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbUJvdW5kYXJ5KGJvdW5kYXJ5OiBCb3VuZGFyeSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShib3VuZGFyeS50b3AsIGJvdW5kYXJ5LmxlZnQsIGJvdW5kYXJ5LmJvdHRvbSwgYm91bmRhcnkucmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Ub3BMZWZ0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55LCBwb2ludC54LCBwb2ludC55ICsgc2l6ZS5oZWlnaHQsIHBvaW50LnggKyBzaXplLndpZHRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tVG9wUmlnaHQocG9pbnQ6IFBvaW50LCBzaXplOiBTaXplKTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHBvaW50LnksIHBvaW50LnggLSBzaXplLndpZHRoLCBwb2ludC55ICsgc2l6ZS5oZWlnaHQsIHBvaW50LngpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Cb3R0b21MZWZ0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55IC0gc2l6ZS5oZWlnaHQsIHBvaW50LngsIHBvaW50LnksIHBvaW50LnggKyBzaXplLndpZHRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tQm90dG9tUmlnaHQocG9pbnQ6IFBvaW50LCBzaXplOiBTaXplKTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHBvaW50LnkgLSBzaXplLmhlaWdodCwgcG9pbnQueCAtIHNpemUud2lkdGgsIHBvaW50LnksIHBvaW50LngpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0b3BMZWZ0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdG9wUmlnaHQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMudG9wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgYm90dG9tTGVmdCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm90dG9tQ2VudGVyKGNvbnRlbnRTaXplOiBTaXplLCBlbGVtZW50U2l6ZTogU2l6ZSk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQgKyAoZWxlbWVudFNpemUud2lkdGggLSBjb250ZW50U2l6ZS53aWR0aCkgLyAyLCB0aGlzLmJvdHRvbSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgYm90dG9tUmlnaHQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMuYm90dG9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdFVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50b3AgLT0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tIC09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0RG93bih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvcCArPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdExlZnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgLT0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgLT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnRSaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCArPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQ29udGVudFBvc2l0aW9uIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYm91bmRhcnk6IEJvdW5kYXJ5LCBwdWJsaWMgc2lkZUNzczogc3RyaW5nLCBwdWJsaWMgYXJyb3dDc3M6IHN0cmluZykge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQYWdlQ29udGVudFNlcnZpY2Uge1xyXG4gICAgICAgIHBvc2l0aW9uRnJvbVBvaW50KHgsIHkpO1xyXG4gICAgICAgIHBvc2l0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUGFnZUNvbnRlbnRTZXJ2aWNlIGltcGxlbWVudHMgSVBhZ2VDb250ZW50U2VydmljZSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHdpbmRvdywgcHJpdmF0ZSBjb250ZW50LCBwcml2YXRlIGlzVmVydGljYWwsIHByaXZhdGUgeE9mZnNldCwgcHJpdmF0ZSB5T2Zmc2V0KSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjc3NOYW1lID0gXCJwYWdlY29udGVudFwiO1xyXG4gICAgICAgIHByaXZhdGUgY3NzID0ge1xyXG4gICAgICAgICAgICBiZWxvdzogdGhpcy5jc3NOYW1lICsgJy0tYmVsb3cnLFxyXG4gICAgICAgICAgICBhYm92ZTogdGhpcy5jc3NOYW1lICsgJy0tYWJvdmUnLFxyXG4gICAgICAgICAgICBiZWZvcmU6IHRoaXMuY3NzTmFtZSArICctLWJlZm9yZScsXHJcbiAgICAgICAgICAgIGFmdGVyOiB0aGlzLmNzc05hbWUgKyAnLS1hZnRlcicsXHJcbiAgICAgICAgICAgIGJlZ2lubmluZzogdGhpcy5jc3NOYW1lICsgJy0tYmVnaW5uaW5nJyxcclxuICAgICAgICAgICAgY2VudGVyOiB0aGlzLmNzc05hbWUgKyAnLS1jZW50ZXInLFxyXG4gICAgICAgICAgICBlbmQ6IHRoaXMuY3NzTmFtZSArICctLWVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwb3NpdGlvbkZyb21Qb2ludCh4LCB5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDbGFzcyh0aGlzLmNzc05hbWUpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudFNpemUgPSBuZXcgU2l6ZSh0aGlzLmNvbnRlbnQub3V0ZXJXaWR0aCh0cnVlKSwgdGhpcy5jb250ZW50Lm91dGVySGVpZ2h0KHRydWUpKTtcclxuICAgICAgICAgICAgdmFyIGhhbGZ3aWR0aCA9IGNvbnRlbnRTaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdmFyIGhhbGZIZWlnaHQgPSBjb250ZW50U2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJlbG93Q2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihuZXcgQm91bmRhcnkoeSwgeCAtIGhhbGZ3aWR0aCwgeSArIGNvbnRlbnRTaXplLmhlaWdodCwgeCArIGhhbGZ3aWR0aCksIHRoaXMuY3NzLmJlbG93LCB0aGlzLmNzcy5jZW50ZXIpO1xyXG4gICAgICAgICAgICB2YXIgYWZ0ZXJDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5IC0gaGFsZkhlaWdodCwgeCwgeSArIGhhbGZIZWlnaHQsIHggKyBjb250ZW50U2l6ZS53aWR0aCksIHRoaXMuY3NzLmFmdGVyLCB0aGlzLmNzcy5jZW50ZXIpO1xyXG4gICAgICAgICAgICB2YXIgYWJvdmVDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5IC0gY29udGVudFNpemUuaGVpZ2h0LCB4IC0gaGFsZndpZHRoLCB5LCB4ICsgaGFsZndpZHRoKSwgdGhpcy5jc3MuYWJvdmUsIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmVDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5IC0gaGFsZkhlaWdodCwgeCAtIGNvbnRlbnRTaXplLndpZHRoLCB5ICsgaGFsZkhlaWdodCwgeCksIHRoaXMuY3NzLmJlZm9yZSwgdGhpcy5jc3MuY2VudGVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9zaXRpb24gPSBiZWxvd0NlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbk9yZGVyID0gW1xyXG4gICAgICAgICAgICAgICAgYmVsb3dDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICBhZnRlckNlbnRlcixcclxuICAgICAgICAgICAgICAgIGFib3ZlQ2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlQ2VudGVyXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc2l0aW9uT3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyeVBvc2l0aW9uKHBvc2l0aW9uT3JkZXJbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGJvdW5kYXJ5ID0gZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5O1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2NyZWVuID0gdGhpcy5nZXRPZmZTY3JlZW4oYm91bmRhcnkpO1xyXG4gICAgICAgICAgICB2YXIgdG9wOiBzdHJpbmcgfCBudW1iZXIgPSBib3VuZGFyeS50b3A7XHJcbiAgICAgICAgICAgIHZhciBib3R0b206IHN0cmluZyB8IG51bWJlciA9IGJvdW5kYXJ5LmJvdHRvbTtcclxuICAgICAgICAgICAgdmFyIGxlZnQ6IHN0cmluZyB8IG51bWJlciA9IGJvdW5kYXJ5LmxlZnQ7XHJcbiAgICAgICAgICAgIHZhciByaWdodDogc3RyaW5nIHwgbnVtYmVyID0gYm91bmRhcnkucmlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAob2Zmc2NyZWVuLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gb2Zmc2NyZWVuLmxlZnQgPyAwIDogXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvZmZzY3JlZW4ubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByaWdodCA9IFwiXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG9mZnNjcmVlbi50b3ApIHtcclxuICAgICAgICAgICAgICAgIHRvcCA9IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b20gPSBvZmZzY3JlZW4uYm90dG9tID8gMCA6IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob2Zmc2NyZWVuLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgdG9wID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b20gPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldE9mZlNjcmVlbihib3VuZGFyeTogQm91bmRhcnkpIHtcclxuICAgICAgICAgICAgdmFyIG9mZnNjcmVlbiA9IHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLmlzT2ZmUmlnaHRTY3JlZW4oYm91bmRhcnkpLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5pc09mZkxlZnRTY3JlZW4oYm91bmRhcnkpLFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLmlzT2ZmVG9wU2NyZWVuKGJvdW5kYXJ5KSxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5pc09mZkJvdHRvbVNjcmVlbihib3VuZGFyeSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2NyZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDbGFzcyh0aGlzLmNzc05hbWUpO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudFNpemUgPSBuZXcgU2l6ZShlbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpLCBlbGVtZW50Lm91dGVySGVpZ2h0KGZhbHNlKSk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50U2l6ZSA9IG5ldyBTaXplKHRoaXMuY29udGVudC5vdXRlcldpZHRoKHRydWUpLCB0aGlzLmNvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvcyA9IGVsZW1lbnQub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50Qm94ID0gbmV3IEJvdW5kYXJ5KHBvcy50b3AsIHBvcy5sZWZ0LCBwb3MudG9wICsgZWxlbWVudFNpemUuaGVpZ2h0LCBwb3MubGVmdCArIGVsZW1lbnRTaXplLndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBiZWxvd0NlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcExlZnQoZWxlbWVudEJveC5ib3R0b21DZW50ZXIoY29udGVudFNpemUsIGVsZW1lbnRTaXplKSwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWxvdywgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGJlbG93QmVnaW5uaW5nID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tVG9wTGVmdChlbGVtZW50Qm94LmJvdHRvbUxlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBiZWxvd0VuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcFJpZ2h0KGVsZW1lbnRCb3guYm90dG9tUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmVuZCk7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcExlZnQoZWxlbWVudEJveC50b3BSaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hZnRlciwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGFmdGVyRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tTGVmdChlbGVtZW50Qm94LmJvdHRvbVJpZ2h0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmFmdGVyLCB0aGlzLmNzcy5lbmQpO1xyXG4gICAgICAgICAgICB2YXIgYWJvdmVCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21MZWZ0KGVsZW1lbnRCb3gudG9wTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGFib3ZlRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tUmlnaHQoZWxlbWVudEJveC50b3BSaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuZW5kKTtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZUJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcFJpZ2h0KGVsZW1lbnRCb3gudG9wTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWZvcmUsIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmVFbmQgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21SaWdodChlbGVtZW50Qm94LmJvdHRvbUxlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5lbmQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb3NpdGlvbiA9IGJlbG93Q2VudGVyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uT3JkZXIgPSBbXHJcbiAgICAgICAgICAgICAgICBiZWxvd0NlbnRlcixcclxuICAgICAgICAgICAgICAgIGJlbG93QmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYmVsb3dFbmQsXHJcbiAgICAgICAgICAgICAgICBhZnRlckJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGFmdGVyRW5kLFxyXG4gICAgICAgICAgICAgICAgYWJvdmVCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBhYm92ZUVuZCxcclxuICAgICAgICAgICAgICAgIGJlZm9yZUJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGJlZm9yZUVuZFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb25PcmRlci5zcGxpY2UocG9zaXRpb25PcmRlci5pbmRleE9mKGRlZmF1bHRQb3NpdGlvbiksIDEpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbk9yZGVyLnNwbGljZSgwLCAwLCBkZWZhdWx0UG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbk9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlQb3NpdGlvbihwb3NpdGlvbk9yZGVyW2ldKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2ZmUmlnaHRTY3JlZW4oZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS50b3AsIFwiXCIsIDAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZkxlZnRTY3JlZW4oZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS50b3AsIDAsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZlRvcFNjcmVlbihkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgMCwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZkJvdHRvbVNjcmVlbihkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgXCJcIiwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LnRvcCwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5UG9zaXRpb24ocG9zaXRpb246IENvbnRlbnRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPZmZTY3JlZW4ocG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uLCBwb3NpdGlvbi5ib3VuZGFyeS50b3AsIHBvc2l0aW9uLmJvdW5kYXJ5LmxlZnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXQoKSB7XHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYmVsb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5hYm92ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmJlZm9yZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmFmdGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuZW5kXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQ2xhc3ModGhpcy5jc3NOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNsYXNzKGNsYXNzZXMuam9pbihcIiBcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UG9zaXRpb24ocG9zaXRpb24sIHRvcDogYW55ID0gXCJcIiwgbGVmdDogYW55ID0gXCJcIiwgcmlnaHQ6IGFueSA9IFwiXCIsIGJvdHRvbTogYW55ID0gXCJcIikge1xyXG4gICAgICAgICAgICB2YXIgY3NzID0ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b21cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5jc3MoY3NzKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKHBvc2l0aW9uLnNpZGVDc3MpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocG9zaXRpb24uYXJyb3dDc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZTY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2ZmVG9wU2NyZWVuKGJvdW5kYXJ5KSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09mZkxlZnRTY3JlZW4oYm91bmRhcnkpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzT2ZmUmlnaHRTY3JlZW4oYm91bmRhcnkpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzT2ZmQm90dG9tU2NyZWVuKGJvdW5kYXJ5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZUb3BTY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmIChib3VuZGFyeS50b3AgPCAwICsgdGhpcy4kd2luZG93LnNjcm9sbFkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZMZWZ0U2NyZWVuKGJvdW5kYXJ5OiBCb3VuZGFyeSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkubGVmdCA8IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZSaWdodFNjcmVlbihib3VuZGFyeTogQm91bmRhcnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHNjcmVlbiA9IG5ldyBTaXplKHRoaXMuJHdpbmRvdy5pbm5lcldpZHRoLCB0aGlzLiR3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkucmlnaHQgPiBzY3JlZW4ud2lkdGgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNPZmZCb3R0b21TY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzY3JlZW4gPSBuZXcgU2l6ZSh0aGlzLiR3aW5kb3cuaW5uZXJXaWR0aCwgdGhpcy4kd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKGJvdW5kYXJ5LmJvdHRvbSA+IHNjcmVlbi5oZWlnaHQgKyB0aGlzLiR3aW5kb3cuc2Nyb2xsWSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDb250ZW50RmFjdG9yeSB7XHJcbiAgICAgICAgZ2V0KGNvbnRlbnQsIGlzVmVydGljYWw/LCB4T2Zmc2V0PywgeU9mZnNldD8pOiBJUGFnZUNvbnRlbnRTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBhZ2VDb250ZW50RmFjdG9yeSB7XHJcbiAgICAgICAgc3RhdGljICRpbmplY3QgPSBbJyR3aW5kb3cnXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93KSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQoY29udGVudCwgaXNWZXJ0aWNhbCA9IHRydWUsIHhPZmZzZXQgPSAwLCB5T2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBhZ2VDb250ZW50U2VydmljZSh0aGlzLiR3aW5kb3csIGNvbnRlbnQsIGlzVmVydGljYWwsIHhPZmZzZXQsIHlPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5zZXJ2aWNlKCdwYWdlQ29udGVudEZhY3RvcnknLCBQYWdlQ29udGVudEZhY3RvcnkpO1xyXG5cclxufSIsIm5hbWVzcGFjZSBBbmd1bGFyUG9wb3Zlck1vZHVsZSB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUG9wT3ZlckNvbnRyb2xsZXIge1xyXG4gICAgICAgIHBvc2l0aW9uVHlwZTogc3RyaW5nO1xyXG4gICAgICAgIGlzVmlzaWJsZTogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQb3BPdmVyQ29udHJvbGxlciBpbXBsZW1lbnRzIElQb3BPdmVyQ29udHJvbGxlciB7XHJcbiAgICAgICAgc3RhdGljICRpbmplY3QgPSBbJ2lzTW9iaWxlJ107XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gaXNNb2JpbGU7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2hvdzogYW55O1xyXG4gICAgICAgIGhpZGU6IGFueTtcclxuICAgICAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcclxuICAgICAgICBwb3NpdGlvblR5cGU6IHN0cmluZztcclxuICAgICAgICBwb3BPdmVyQ2xpY2sgPSAoKTogYW55ID0+IHsgfTtcclxuICAgICAgICBwb3BPdmVyRGlzYWJsZWQgPSAoKTogYW55ID0+IHsgfTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaXNWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGdldCBpc1Zpc2libGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgaXNWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkIHx8IHRoaXMucG9wT3ZlckRpc2FibGVkKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgICBpZiAodmlzaWJsZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc0Z1bGxzY3JlZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHVibGljIGNsb3NlQ29udGVudCgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0b2dnbGVDb250ZW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9ICF0aGlzLmlzVmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUG9wT3ZlckRpcmVjdGl2ZSB7XHJcbiAgICAgICAgc3RhdGljICRpbmplY3QgPSBbXCIkcVwiLCBcIiRwYXJzZVwiLCBcIiRjb21waWxlXCIsIFwiJHdpbmRvd1wiLCBcIiR0ZW1wbGF0ZUNhY2hlXCIsIFwiJHRpbWVvdXRcIiwgXCJwYWdlQ29udGVudEZhY3RvcnlcIl07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHE6IGFuZ3VsYXIuSVFTZXJ2aWNlLCBwcml2YXRlICRwYXJzZTogYW5ndWxhci5JUGFyc2VTZXJ2aWNlLCBwcml2YXRlICRjb21waWxlLCBwcml2YXRlICR3aW5kb3c6IGFuZ3VsYXIuSVdpbmRvd1NlcnZpY2UsIHByaXZhdGUgJHRlbXBsYXRlQ2FjaGU6IGFuZ3VsYXIuSVRlbXBsYXRlQ2FjaGVTZXJ2aWNlLCBwcml2YXRlICR0aW1lb3V0OiBhbmd1bGFyLklUaW1lb3V0U2VydmljZSwgcHJpdmF0ZSBwYWdlQ29udGVudEZhY3Rvcnk6IElQYWdlQ29udGVudEZhY3RvcnkpIHsgfVxyXG5cclxuICAgICAgICByZXN0cmljdCA9ICdBJztcclxuICAgICAgICAvLyBzY29wZSA9IERPIE5PVCBVU0UgQSBTQ09QRSBPTiBUSElTISAzNjBOT1NDT1BFXHJcbiAgICAgICAgY29udHJvbGxlciA9IFBvcE92ZXJDb250cm9sbGVyO1xyXG4gICAgICAgIGNvbnRyb2xsZXJBcyA9ICdwb3BPdmVyJztcclxuICAgICAgICBiaW5kVG9Db250cm9sbGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgbGluayA9ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpID0+IHtcclxuICAgICAgICAgICAgdmFyIGN0cmw6IFBvcE92ZXJDb250cm9sbGVyID0gJHNjb3BlW3RoaXMuY29udHJvbGxlckFzXTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkYXR0cnMucG9wT3ZlckNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wT3ZlckNsaWNrSW52b2tlciA9IHRoaXMuJHBhcnNlKCRhdHRycy5wb3BPdmVyQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgY3RybC5wb3BPdmVyQ2xpY2sgPSAoKSA9PiBwb3BPdmVyQ2xpY2tJbnZva2VyKCRzY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkYXR0cnMucG9wT3ZlckRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wT3ZlckRpc2FibGVkSW52b2tlciA9IHRoaXMuJHBhcnNlKCRhdHRycy5wb3BPdmVyRGlzYWJsZWQpO1xyXG4gICAgICAgICAgICAgICAgY3RybC5wb3BPdmVyRGlzYWJsZWQgPSAoKSA9PiBwb3BPdmVyRGlzYWJsZWRJbnZva2VyKCRzY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciAkYm9keSA9IGFuZ3VsYXIuZWxlbWVudCgnYm9keScpLFxyXG4gICAgICAgICAgICAgICAgJGh0bWwgPSBhbmd1bGFyLmVsZW1lbnQoJ2h0bWwnKSxcclxuICAgICAgICAgICAgICAgIGlzVmVydGljYWwgPSB0eXBlb2YgJGF0dHJzLnBvcE92ZXJIb3Jpem9udGFsID09ICd1bmRlZmluZWQnLFxyXG4gICAgICAgICAgICAgICAgeE9mZnNldCA9IGlzVmVydGljYWwgPyAyNyA6IDIwLFxyXG4gICAgICAgICAgICAgICAgeU9mZnNldCA9IGlzVmVydGljYWwgPyAxNiA6IDI0LFxyXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRlbnRTZXJ2aWNlOiBJUGFnZUNvbnRlbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb247XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdHJsLnBvc2l0aW9uVHlwZSA9ICRhdHRycy5wb3NpdGlvblR5cGUgfHwgJ21vdXNlJztcclxuXHJcbiAgICAgICAgICAgIHZhciBnZXRFdmVudCA9ICguLi5uYW1lcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVzLm1hcChuYW1lID0+IGAke25hbWV9LiR7JHNjb3BlLiRpZH1gKS5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkYXR0cnMucG9wT3ZlckNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwucG9wT3ZlckNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgY3JlYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IHRoaXMuY3JlYXRlQ29udGVudCgkYXR0cnMucG9wT3ZlciwgJHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdHJsLmlzVmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHJsLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250ZW50ID0gYW5ndWxhci5lbGVtZW50KFwiLnBvcG92ZXItc2Nyb2xsYWJsZVwiLCBjb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkYm9keS5hcHBlbmQoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2UgPSB0aGlzLnBhZ2VDb250ZW50RmFjdG9yeS5nZXQoY29udGVudCwgaXNWZXJ0aWNhbCwgeE9mZnNldCwgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgc2V0UG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENsYXNzKFwicG9wb3Zlci0taXNWaXNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBpdCBzY3JvbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbGFibGVDb250ZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsU2Nyb2xsID0gc2Nyb2xsYWJsZUNvbnRlbnQuZ2V0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzVmVydFNjcm9sbGJhciA9IGVsU2Nyb2xsLnNjcm9sbEhlaWdodCA+IGVsU2Nyb2xsLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRlbnQudG9nZ2xlQ2xhc3MoJ3BvcG92ZXItc2Nyb2xsYWJsZS0tdmVydCcsIGhhc1ZlcnRTY3JvbGxiYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwuaXNGdWxsc2NyZWVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUNvbnRlbnRTZXJ2aWNlLnBvc2l0aW9uRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUNvbnRlbnRTZXJ2aWNlLnBvc2l0aW9uRnJvbUVsZW1lbnQoJGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY3RybC5zaG93ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGN0cmwuaGlkZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJwb3BvdmVyLS1pc1Zpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC5vbihcImNsaWNrLnBvcE92ZXJcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3RybC5wb3NpdGlvblR5cGUgPT0gJ21vdXNlJylcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9O1xyXG4gICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSAhY3RybC5pc1Zpc2libGU7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGh0bWwub24oZ2V0RXZlbnQoXCJjbGlja1wiKSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzVGFyZ2V0ID0gJGVsZW1lbnQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVGFyZ2V0ID0gJGVsZW1lbnQuaXMoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNUYXJnZXQgfHwgaXNUYXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGh0bWwub24oZ2V0RXZlbnQoXCJET01Nb3VzZVNjcm9sbFwiLCBcIm1vdXNld2hlZWxcIiksIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcy4kd2luZG93KS5vbihnZXRFdmVudChcInJlc2l6ZVwiKSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRib2R5Lm9uKGdldEV2ZW50KFwia2V5dXBcIiksIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHJsLmlzVmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnQub24oXCIkZGVzdHJveVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMuJHdpbmRvdykub2ZmKGdldEV2ZW50KFwicmVzaXplXCIpKTtcclxuICAgICAgICAgICAgICAgICRib2R5Lm9mZihnZXRFdmVudChcImtleXVwXCIsIFwiRE9NTW91c2VTY3JvbGxcIiwgXCJtb3VzZXdoZWVsXCIpKTtcclxuICAgICAgICAgICAgICAgICRib2R5Lm9mZihnZXRFdmVudChcImtleXVwXCIpKTtcclxuICAgICAgICAgICAgICAgICRodG1sLm9mZihnZXRFdmVudChcImNsaWNrXCIpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoaHRtbFVybCwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIHZhciBodG1sID0gYW5ndWxhci5lbGVtZW50KHRoaXMuJHRlbXBsYXRlQ2FjaGUuZ2V0KGh0bWxVcmwpKSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gYW5ndWxhci5lbGVtZW50KGA8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIG5nLWNsYXNzPVwieydwb3BvdmVyLS1mdWxsU2NyZWVuJzogcG9wT3Zlci5pc0Z1bGxzY3JlZW59XCI+PGkgY2xhc3M9XCJwb3BvdmVyLWNsb3NlIGljb24gaWNvbi10aW1lc1wiIG5nLWNsaWNrPVwicG9wT3Zlci5jbG9zZUNvbnRlbnQoKVwiPjwvaT48L2Rpdj5gKSxcclxuICAgICAgICAgICAgICAgIGh0bWxMaW5rID0gdGhpcy4kY29tcGlsZShodG1sKSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlTGluayA9IHRoaXMuJGNvbXBpbGUodGVtcGxhdGUpO1xyXG5cclxuICAgICAgICAgICAgdGVtcGxhdGUuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZUxpbmsoJHNjb3BlKTtcclxuICAgICAgICAgICAgaHRtbExpbmsoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQW5ndWxhci5tb2R1bGUoXCJuZ1BvcG92ZXJcIikuZGlyZWN0aXZlKCdwb3BPdmVyJywgUG9wT3ZlckRpcmVjdGl2ZSk7XHJcbn0iXX0=