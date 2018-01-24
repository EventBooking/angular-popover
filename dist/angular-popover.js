Angular.module("ngPopover", []);
var AngularPopoverModule;
(function (AngularPopoverModule) {
    var MobileConfig = /** @class */ (function () {
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
    var Size = /** @class */ (function () {
        function Size(width, height) {
            this.width = width;
            this.height = height;
        }
        return Size;
    }());
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    var Boundary = /** @class */ (function () {
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
    var ContentPosition = /** @class */ (function () {
        function ContentPosition(boundary, sideCss, arrowCss) {
            this.boundary = boundary;
            this.sideCss = sideCss;
            this.arrowCss = arrowCss;
        }
        return ContentPosition;
    }());
    var PageContentService = /** @class */ (function () {
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
    var PageContentFactory = /** @class */ (function () {
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
    var PopOverController = /** @class */ (function () {
        function PopOverController(isMobile, $element) {
            this.$element = $element;
            this.positionType = "mouse";
            this.popOverClick = function () { };
            this.popOverDisabled = function () { return false; };
            this._isVisible = false;
            this.isFullscreen = false;
            this.isVisible = false;
            this.isFullscreen = isMobile;
            this.initialized = true;
        }
        PopOverController.prototype.$doCheck = function () {
            var isDisabled = this.popOverDisabled();
            if (isDisabled !== this._isDisabled) {
                this._isDisabled = isDisabled;
                var css = 'popover--disabled';
                if (isDisabled)
                    this.$element.addClass(css);
                else
                    this.$element.removeClass(css);
            }
        };
        Object.defineProperty(PopOverController.prototype, "isDisabled", {
            get: function () {
                return this._isDisabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PopOverController.prototype, "isVisible", {
            get: function () {
                return this._isVisible;
            },
            set: function (visible) {
                if (!this.initialized || this.isDisabled)
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
        PopOverController.$inject = ['isMobile', '$element'];
        return PopOverController;
    }());
    var PopOverDirective = /** @class */ (function () {
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
                if ($attrs.positionType)
                    ctrl.positionType = $attrs.positionType;
                var getEvent = function () {
                    var names = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        names[_i] = arguments[_i];
                    }
                    return names.map(function (name) { return name + "." + $scope.$id; }).join(' ');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wb3BvdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9tb2JpbGUudHMiLCIuLi9zcmMvcGFnZUNvbnRlbnQudHMiLCIuLi9zcmMvcG9wb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQ0NoQyxJQUFVLG9CQUFvQixDQWU3QjtBQWZELFdBQVUsb0JBQW9CO0lBRTFCO1FBQUE7UUFVQSxDQUFDO1FBVFUscUJBQVEsR0FBZjtZQUNJLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkUsSUFBSSxLQUFLLEdBQUcsMFRBQTBULENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRW5WLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksS0FBSyxHQUFHLHlrREFBeWtELENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXhtRCxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQUFDLEFBVkQsSUFVQztJQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM5RSxDQUFDLEVBZlMsb0JBQW9CLEtBQXBCLG9CQUFvQixRQWU3QjtBQ2hCRCxJQUFVLG9CQUFvQixDQTBVN0I7QUExVUQsV0FBVSxvQkFBb0I7SUFFMUI7UUFDSSxjQUFtQixLQUFLLEVBQVMsTUFBTTtZQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFBO1lBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUV2QyxDQUFDO1FBQ0wsV0FBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBRUQ7UUFDSSxlQUFtQixDQUFDLEVBQVMsQ0FBQztZQUFYLE1BQUMsR0FBRCxDQUFDLENBQUE7WUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFBO1FBRTlCLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFFRDtRQUNJLGtCQUFtQixHQUFXLEVBQVMsSUFBWSxFQUFTLE1BQWMsRUFBUyxLQUFhO1lBQTdFLFFBQUcsR0FBSCxHQUFHLENBQVE7WUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1lBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDaEcsQ0FBQztRQUVNLHFCQUFZLEdBQW5CLFVBQW9CLFFBQWtCO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUVNLG9CQUFXLEdBQWxCLFVBQW1CLEtBQVksRUFBRSxJQUFVO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFFTSxxQkFBWSxHQUFuQixVQUFvQixLQUFZLEVBQUUsSUFBVTtZQUN4QyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDO1FBRU0sdUJBQWMsR0FBckIsVUFBc0IsS0FBWSxFQUFFLElBQVU7WUFDMUMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUVNLHdCQUFlLEdBQXRCLFVBQXVCLEtBQVksRUFBRSxJQUFVO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFFRCxzQkFBVyw2QkFBTztpQkFBbEI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsOEJBQVE7aUJBQW5CO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQyxDQUFDOzs7V0FBQTtRQUVELHNCQUFXLGdDQUFVO2lCQUFyQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsQ0FBQzs7O1dBQUE7UUFFTSwrQkFBWSxHQUFuQixVQUFvQixXQUFpQixFQUFFLFdBQWlCO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxRixDQUFDO1FBRUQsc0JBQVcsaUNBQVc7aUJBQXRCO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxDQUFDOzs7V0FBQTtRQUVNLDBCQUFPLEdBQWQsVUFBZSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3pCLENBQUM7UUFFTSw0QkFBUyxHQUFoQixVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFTSw0QkFBUyxHQUFoQixVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ3hCLENBQUM7UUFFTSw2QkFBVSxHQUFqQixVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQ3ZCLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FBQyxBQS9ERCxJQStEQztJQUVEO1FBQ0kseUJBQW1CLFFBQWtCLEVBQVMsT0FBZSxFQUFTLFFBQWdCO1lBQW5FLGFBQVEsR0FBUixRQUFRLENBQVU7WUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1lBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUN0RixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQUFDLEFBSEQsSUFHQztJQU9EO1FBRUksNEJBQW9CLE9BQU8sRUFBVSxPQUFPLEVBQVUsVUFBVSxFQUFVLE9BQU8sRUFBVSxPQUFPO1lBQTlFLFlBQU8sR0FBUCxPQUFPLENBQUE7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFBO1lBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBQTtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQUE7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFBO1lBSTFGLFlBQU8sR0FBRyxhQUFhLENBQUM7WUFDeEIsUUFBRyxHQUFHO2dCQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVM7Z0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVM7Z0JBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVU7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVM7Z0JBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWE7Z0JBQ3ZDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVU7Z0JBQ2pDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87YUFDOUIsQ0FBQztRQVhGLENBQUM7UUFhRCw4Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUYsSUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUksSUFBSSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUksSUFBSSxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFakosSUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDO1lBRWxDLElBQUksYUFBYSxHQUFHO2dCQUNoQixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxZQUFZO2FBQ2YsQ0FBQztZQUVGLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUM7WUFDZixDQUFDO1lBRUQsSUFBSSxRQUFRLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUN4QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksR0FBRyxHQUFvQixRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3hDLElBQUksTUFBTSxHQUFvQixRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzlDLElBQUksSUFBSSxHQUFvQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksS0FBSyxHQUFvQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTVDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSyxHQUFHLEVBQUUsQ0FBQTtZQUNkLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDUixNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkMsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsQ0FBQztZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCx5Q0FBWSxHQUFaLFVBQWEsUUFBa0I7WUFDM0IsSUFBSSxTQUFTLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ3RDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztnQkFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO2dCQUNsQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQzthQUMzQyxDQUFBO1lBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixDQUFDO1FBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLE9BQU87WUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFMUYsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLElBQUksVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFN0csSUFBSSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdKLElBQUksY0FBYyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZJLElBQUksUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdILElBQUksY0FBYyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JJLElBQUksUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLFFB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QUMsQ0FBQztZQUNyQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFakIsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDO1FBMUtNLHdCQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUEyS2pILHVCQUFDO0tBQUEsQUE1S0QsSUE0S0M7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN2RSxDQUFDLEVBalBTLG9CQUFvQixLQUFwQixvQkFBb0IsUUFpUDdCIiwic291cmNlc0NvbnRlbnQiOlsiQW5ndWxhci5tb2R1bGUoXCJuZ1BvcG92ZXJcIiwgW10pOyIsIlxyXG5uYW1lc3BhY2UgQW5ndWxhclBvcG92ZXJNb2R1bGUge1xyXG5cclxuICAgIGNsYXNzIE1vYmlsZUNvbmZpZyB7XHJcbiAgICAgICAgc3RhdGljIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgYWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93W1wib3BlcmFcIl07XHJcbiAgICAgICAgICAgIHZhciB0ZXN0MSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGFnZW50KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhZ2VudFByZWZpeCA9IGFnZW50LnN1YnN0cigwLCA0KTtcclxuICAgICAgICAgICAgdmFyIHRlc3QyID0gLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhZ2VudFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGVzdDEgfHwgdGVzdDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIpLmNvbnN0YW50KCdpc01vYmlsZScsIE1vYmlsZUNvbmZpZy5pc01vYmlsZSgpKTtcclxufVxyXG4iLCJuYW1lc3BhY2UgQW5ndWxhclBvcG92ZXJNb2R1bGUge1xyXG5cclxuICAgIGNsYXNzIFNpemUge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aCwgcHVibGljIGhlaWdodCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4LCBwdWJsaWMgeSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQm91bmRhcnkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0b3A6IG51bWJlciwgcHVibGljIGxlZnQ6IG51bWJlciwgcHVibGljIGJvdHRvbTogbnVtYmVyLCBwdWJsaWMgcmlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Cb3VuZGFyeShib3VuZGFyeTogQm91bmRhcnkpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkoYm91bmRhcnkudG9wLCBib3VuZGFyeS5sZWZ0LCBib3VuZGFyeS5ib3R0b20sIGJvdW5kYXJ5LnJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tVG9wTGVmdChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSwgcG9pbnQueCwgcG9pbnQueSArIHNpemUuaGVpZ2h0LCBwb2ludC54ICsgc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbVRvcFJpZ2h0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55LCBwb2ludC54IC0gc2l6ZS53aWR0aCwgcG9pbnQueSArIHNpemUuaGVpZ2h0LCBwb2ludC54KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tQm90dG9tTGVmdChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSAtIHNpemUuaGVpZ2h0LCBwb2ludC54LCBwb2ludC55LCBwb2ludC54ICsgc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbUJvdHRvbVJpZ2h0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55IC0gc2l6ZS5oZWlnaHQsIHBvaW50LnggLSBzaXplLndpZHRoLCBwb2ludC55LCBwb2ludC54KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdG9wTGVmdCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHRvcFJpZ2h0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGJvdHRvbUxlZnQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy5ib3R0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvdHRvbUNlbnRlcihjb250ZW50U2l6ZTogU2l6ZSwgZWxlbWVudFNpemU6IFNpemUpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0ICsgKGVsZW1lbnRTaXplLndpZHRoIC0gY29udGVudFNpemUud2lkdGgpIC8gMiwgdGhpcy5ib3R0b20pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGJvdHRvbVJpZ2h0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnRVcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wIC09IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSAtPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdERvd24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50b3AgKz0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnRMZWZ0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0IC09IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0IC09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0UmlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgKz0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIENvbnRlbnRQb3NpdGlvbiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIGJvdW5kYXJ5OiBCb3VuZGFyeSwgcHVibGljIHNpZGVDc3M6IHN0cmluZywgcHVibGljIGFycm93Q3NzOiBzdHJpbmcpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUGFnZUNvbnRlbnRTZXJ2aWNlIHtcclxuICAgICAgICBwb3NpdGlvbkZyb21Qb2ludCh4LCB5KTtcclxuICAgICAgICBwb3NpdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBhZ2VDb250ZW50U2VydmljZSBpbXBsZW1lbnRzIElQYWdlQ29udGVudFNlcnZpY2Uge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICR3aW5kb3csIHByaXZhdGUgY29udGVudCwgcHJpdmF0ZSBpc1ZlcnRpY2FsLCBwcml2YXRlIHhPZmZzZXQsIHByaXZhdGUgeU9mZnNldCkge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3NzTmFtZSA9IFwicGFnZWNvbnRlbnRcIjtcclxuICAgICAgICBwcml2YXRlIGNzcyA9IHtcclxuICAgICAgICAgICAgYmVsb3c6IHRoaXMuY3NzTmFtZSArICctLWJlbG93JyxcclxuICAgICAgICAgICAgYWJvdmU6IHRoaXMuY3NzTmFtZSArICctLWFib3ZlJyxcclxuICAgICAgICAgICAgYmVmb3JlOiB0aGlzLmNzc05hbWUgKyAnLS1iZWZvcmUnLFxyXG4gICAgICAgICAgICBhZnRlcjogdGhpcy5jc3NOYW1lICsgJy0tYWZ0ZXInLFxyXG4gICAgICAgICAgICBiZWdpbm5pbmc6IHRoaXMuY3NzTmFtZSArICctLWJlZ2lubmluZycsXHJcbiAgICAgICAgICAgIGNlbnRlcjogdGhpcy5jc3NOYW1lICsgJy0tY2VudGVyJyxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLmNzc05hbWUgKyAnLS1lbmQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcG9zaXRpb25Gcm9tUG9pbnQoeCwgeSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2xhc3ModGhpcy5jc3NOYW1lKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRTaXplID0gbmV3IFNpemUodGhpcy5jb250ZW50Lm91dGVyV2lkdGgodHJ1ZSksIHRoaXMuY29udGVudC5vdXRlckhlaWdodCh0cnVlKSk7XHJcbiAgICAgICAgICAgIHZhciBoYWxmd2lkdGggPSBjb250ZW50U2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHZhciBoYWxmSGVpZ2h0ID0gY29udGVudFNpemUuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgICAgIHZhciBiZWxvd0NlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHksIHggLSBoYWxmd2lkdGgsIHkgKyBjb250ZW50U2l6ZS5oZWlnaHQsIHggKyBoYWxmd2lkdGgpLCB0aGlzLmNzcy5iZWxvdywgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGFmdGVyQ2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihuZXcgQm91bmRhcnkoeSAtIGhhbGZIZWlnaHQsIHgsIHkgKyBoYWxmSGVpZ2h0LCB4ICsgY29udGVudFNpemUud2lkdGgpLCB0aGlzLmNzcy5hZnRlciwgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGFib3ZlQ2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihuZXcgQm91bmRhcnkoeSAtIGNvbnRlbnRTaXplLmhlaWdodCwgeCAtIGhhbGZ3aWR0aCwgeSwgeCArIGhhbGZ3aWR0aCksIHRoaXMuY3NzLmFib3ZlLCB0aGlzLmNzcy5jZW50ZXIpO1xyXG4gICAgICAgICAgICB2YXIgYmVmb3JlQ2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihuZXcgQm91bmRhcnkoeSAtIGhhbGZIZWlnaHQsIHggLSBjb250ZW50U2l6ZS53aWR0aCwgeSArIGhhbGZIZWlnaHQsIHgpLCB0aGlzLmNzcy5iZWZvcmUsIHRoaXMuY3NzLmNlbnRlcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGVmYXVsdFBvc2l0aW9uID0gYmVsb3dDZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb25PcmRlciA9IFtcclxuICAgICAgICAgICAgICAgIGJlbG93Q2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICBhYm92ZUNlbnRlcixcclxuICAgICAgICAgICAgICAgIGJlZm9yZUNlbnRlclxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbk9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlQb3NpdGlvbihwb3NpdGlvbk9yZGVyW2ldKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBib3VuZGFyeSA9IGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeTtcclxuICAgICAgICAgICAgdmFyIG9mZnNjcmVlbiA9IHRoaXMuZ2V0T2ZmU2NyZWVuKGJvdW5kYXJ5KTtcclxuICAgICAgICAgICAgdmFyIHRvcDogc3RyaW5nIHwgbnVtYmVyID0gYm91bmRhcnkudG9wO1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tOiBzdHJpbmcgfCBudW1iZXIgPSBib3VuZGFyeS5ib3R0b207XHJcbiAgICAgICAgICAgIHZhciBsZWZ0OiBzdHJpbmcgfCBudW1iZXIgPSBib3VuZGFyeS5sZWZ0O1xyXG4gICAgICAgICAgICB2YXIgcmlnaHQ6IHN0cmluZyB8IG51bWJlciA9IGJvdW5kYXJ5LnJpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYgKG9mZnNjcmVlbi5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IG9mZnNjcmVlbi5sZWZ0ID8gMCA6IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob2Zmc2NyZWVuLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChvZmZzY3JlZW4udG9wKSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tID0gb2Zmc2NyZWVuLmJvdHRvbSA/IDAgOiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9mZnNjcmVlbi5ib3R0b20pIHtcclxuICAgICAgICAgICAgICAgIHRvcCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBib3R0b20gPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRPZmZTY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KSB7XHJcbiAgICAgICAgICAgIHZhciBvZmZzY3JlZW4gPSB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogdGhpcy5pc09mZlJpZ2h0U2NyZWVuKGJvdW5kYXJ5KSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuaXNPZmZMZWZ0U2NyZWVuKGJvdW5kYXJ5KSxcclxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5pc09mZlRvcFNjcmVlbihib3VuZGFyeSksXHJcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMuaXNPZmZCb3R0b21TY3JlZW4oYm91bmRhcnkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9mZnNjcmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc2l0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2xhc3ModGhpcy5jc3NOYW1lKTtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRTaXplID0gbmV3IFNpemUoZWxlbWVudC5vdXRlcldpZHRoKGZhbHNlKSwgZWxlbWVudC5vdXRlckhlaWdodChmYWxzZSkpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudFNpemUgPSBuZXcgU2l6ZSh0aGlzLmNvbnRlbnQub3V0ZXJXaWR0aCh0cnVlKSwgdGhpcy5jb250ZW50Lm91dGVySGVpZ2h0KHRydWUpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBlbGVtZW50Lm9mZnNldCgpO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudEJveCA9IG5ldyBCb3VuZGFyeShwb3MudG9wLCBwb3MubGVmdCwgcG9zLnRvcCArIGVsZW1lbnRTaXplLmhlaWdodCwgcG9zLmxlZnQgKyBlbGVtZW50U2l6ZS53aWR0aCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYmVsb3dDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BMZWZ0KGVsZW1lbnRCb3guYm90dG9tQ2VudGVyKGNvbnRlbnRTaXplLCBlbGVtZW50U2l6ZSksIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBiZWxvd0JlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcExlZnQoZWxlbWVudEJveC5ib3R0b21MZWZ0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmJlbG93LCB0aGlzLmNzcy5iZWdpbm5pbmcpO1xyXG4gICAgICAgICAgICB2YXIgYmVsb3dFbmQgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BSaWdodChlbGVtZW50Qm94LmJvdHRvbVJpZ2h0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmJlbG93LCB0aGlzLmNzcy5lbmQpO1xyXG4gICAgICAgICAgICB2YXIgYWZ0ZXJCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BMZWZ0KGVsZW1lbnRCb3gudG9wUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYWZ0ZXIsIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckVuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbUJvdHRvbUxlZnQoZWxlbWVudEJveC5ib3R0b21SaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hZnRlciwgdGhpcy5jc3MuZW5kKTtcclxuICAgICAgICAgICAgdmFyIGFib3ZlQmVnaW5uaW5nID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tTGVmdChlbGVtZW50Qm94LnRvcExlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYWJvdmUsIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBhYm92ZUVuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbUJvdHRvbVJpZ2h0KGVsZW1lbnRCb3gudG9wUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYWJvdmUsIHRoaXMuY3NzLmVuZCk7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmVCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BSaWdodChlbGVtZW50Qm94LnRvcExlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5iZWdpbm5pbmcpO1xyXG4gICAgICAgICAgICB2YXIgYmVmb3JlRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tUmlnaHQoZWxlbWVudEJveC5ib3R0b21MZWZ0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmJlZm9yZSwgdGhpcy5jc3MuZW5kKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9zaXRpb24gPSBiZWxvd0NlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbk9yZGVyID0gW1xyXG4gICAgICAgICAgICAgICAgYmVsb3dDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICBiZWxvd0JlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGJlbG93RW5kLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBhZnRlckVuZCxcclxuICAgICAgICAgICAgICAgIGFib3ZlQmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYWJvdmVFbmQsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVFbmRcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uT3JkZXIuc3BsaWNlKHBvc2l0aW9uT3JkZXIuaW5kZXhPZihkZWZhdWx0UG9zaXRpb24pLCAxKTtcclxuICAgICAgICAgICAgcG9zaXRpb25PcmRlci5zcGxpY2UoMCwgMCwgZGVmYXVsdFBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zaXRpb25PcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5UG9zaXRpb24ocG9zaXRpb25PcmRlcltpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZlJpZ2h0U2NyZWVuKGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZGVmYXVsdFBvc2l0aW9uLCBkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkudG9wLCBcIlwiLCAwLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPZmZMZWZ0U2NyZWVuKGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZGVmYXVsdFBvc2l0aW9uLCBkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkudG9wLCAwLCBcIlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPZmZUb3BTY3JlZW4oZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIDAsIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS5sZWZ0LCBcIlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPZmZCb3R0b21TY3JlZW4oZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIFwiXCIsIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS5sZWZ0LCBcIlwiLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb24sIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS50b3AsIGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeS5sZWZ0LCBcIlwiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeVBvc2l0aW9uKHBvc2l0aW9uOiBDb250ZW50UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT2ZmU2NyZWVuKHBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbiwgcG9zaXRpb24uYm91bmRhcnkudG9wLCBwb3NpdGlvbi5ib3VuZGFyeS5sZWZ0LCBcIlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0KCkge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmJlbG93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYWJvdmUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5iZWZvcmUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5hZnRlcixcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmNlbnRlcixcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmVuZFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNsYXNzKHRoaXMuY3NzTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVDbGFzcyhjbGFzc2VzLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uLCB0b3A6IGFueSA9IFwiXCIsIGxlZnQ6IGFueSA9IFwiXCIsIHJpZ2h0OiBhbnkgPSBcIlwiLCBib3R0b206IGFueSA9IFwiXCIpIHtcclxuICAgICAgICAgICAgdmFyIGNzcyA9IHtcclxuICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiByaWdodCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuY3NzKGNzcylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhwb3NpdGlvbi5zaWRlQ3NzKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKHBvc2l0aW9uLmFycm93Q3NzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzT2ZmU2NyZWVuKGJvdW5kYXJ5OiBCb3VuZGFyeSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZlRvcFNjcmVlbihib3VuZGFyeSkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPZmZMZWZ0U2NyZWVuKGJvdW5kYXJ5KSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09mZlJpZ2h0U2NyZWVuKGJvdW5kYXJ5KSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09mZkJvdHRvbVNjcmVlbihib3VuZGFyeSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzT2ZmVG9wU2NyZWVuKGJvdW5kYXJ5OiBCb3VuZGFyeSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkudG9wIDwgMCArIHRoaXMuJHdpbmRvdy5zY3JvbGxZKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzT2ZmTGVmdFNjcmVlbihib3VuZGFyeTogQm91bmRhcnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKGJvdW5kYXJ5LmxlZnQgPCAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzT2ZmUmlnaHRTY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzY3JlZW4gPSBuZXcgU2l6ZSh0aGlzLiR3aW5kb3cuaW5uZXJXaWR0aCwgdGhpcy4kd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKGJvdW5kYXJ5LnJpZ2h0ID4gc2NyZWVuLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzT2ZmQm90dG9tU2NyZWVuKGJvdW5kYXJ5OiBCb3VuZGFyeSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgc2NyZWVuID0gbmV3IFNpemUodGhpcy4kd2luZG93LmlubmVyV2lkdGgsIHRoaXMuJHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgICAgIGlmIChib3VuZGFyeS5ib3R0b20gPiBzY3JlZW4uaGVpZ2h0ICsgdGhpcy4kd2luZG93LnNjcm9sbFkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQYWdlQ29udGVudEZhY3Rvcnkge1xyXG4gICAgICAgIGdldChjb250ZW50LCBpc1ZlcnRpY2FsPywgeE9mZnNldD8sIHlPZmZzZXQ/KTogSVBhZ2VDb250ZW50U2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQYWdlQ29udGVudEZhY3Rvcnkge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckd2luZG93J107XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHdpbmRvdykge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0KGNvbnRlbnQsIGlzVmVydGljYWwgPSB0cnVlLCB4T2Zmc2V0ID0gMCwgeU9mZnNldCA9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQYWdlQ29udGVudFNlcnZpY2UodGhpcy4kd2luZG93LCBjb250ZW50LCBpc1ZlcnRpY2FsLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQW5ndWxhci5tb2R1bGUoXCJuZ1BvcG92ZXJcIikuc2VydmljZSgncGFnZUNvbnRlbnRGYWN0b3J5JywgUGFnZUNvbnRlbnRGYWN0b3J5KTtcclxuXHJcbn0iLCJuYW1lc3BhY2UgQW5ndWxhclBvcG92ZXJNb2R1bGUge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVBvcE92ZXJDb250cm9sbGVyIHtcclxuICAgICAgICBwb3NpdGlvblR5cGU6IHN0cmluZztcclxuICAgICAgICBpc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUG9wT3ZlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBJUG9wT3ZlckNvbnRyb2xsZXIge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gWydpc01vYmlsZScsICckZWxlbWVudCddO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpc01vYmlsZTogYm9vbGVhbiwgcHJpdmF0ZSAkZWxlbWVudDogYW5ndWxhci5JQXVnbWVudGVkSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gaXNNb2JpbGU7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2hvdzogYW55O1xyXG4gICAgICAgIGhpZGU6IGFueTtcclxuICAgICAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcclxuICAgICAgICBwb3NpdGlvblR5cGU6IHN0cmluZyA9IFwibW91c2VcIjtcclxuICAgICAgICBwb3BPdmVyQ2xpY2sgPSAoKTogYW55ID0+IHsgfTtcclxuICAgICAgICBwb3BPdmVyRGlzYWJsZWQgPSAoKTogYm9vbGVhbiA9PiBmYWxzZTtcclxuXHJcbiAgICAgICAgJGRvQ2hlY2soKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLnBvcE92ZXJEaXNhYmxlZCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNEaXNhYmxlZCAhPT0gdGhpcy5faXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3MgPSAncG9wb3Zlci0tZGlzYWJsZWQnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRGlzYWJsZWQpIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY3NzKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pc1Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZ2V0IGlzVmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBpc1Zpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQgfHwgdGhpcy5pc0Rpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaXNGdWxsc2NyZWVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbG9zZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdG9nZ2xlQ29udGVudCgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBvcE92ZXJEaXJlY3RpdmUge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiJHFcIiwgXCIkcGFyc2VcIiwgXCIkY29tcGlsZVwiLCBcIiR3aW5kb3dcIiwgXCIkdGVtcGxhdGVDYWNoZVwiLCBcIiR0aW1lb3V0XCIsIFwicGFnZUNvbnRlbnRGYWN0b3J5XCJdO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRxOiBhbmd1bGFyLklRU2VydmljZSwgcHJpdmF0ZSAkcGFyc2U6IGFuZ3VsYXIuSVBhcnNlU2VydmljZSwgcHJpdmF0ZSAkY29tcGlsZSwgcHJpdmF0ZSAkd2luZG93OiBhbmd1bGFyLklXaW5kb3dTZXJ2aWNlLCBwcml2YXRlICR0ZW1wbGF0ZUNhY2hlOiBhbmd1bGFyLklUZW1wbGF0ZUNhY2hlU2VydmljZSwgcHJpdmF0ZSAkdGltZW91dDogYW5ndWxhci5JVGltZW91dFNlcnZpY2UsIHByaXZhdGUgcGFnZUNvbnRlbnRGYWN0b3J5OiBJUGFnZUNvbnRlbnRGYWN0b3J5KSB7IH1cclxuXHJcbiAgICAgICAgcmVzdHJpY3QgPSAnQSc7XHJcbiAgICAgICAgLy8gc2NvcGUgPSBETyBOT1QgVVNFIEEgU0NPUEUgT04gVEhJUyEgMzYwTk9TQ09QRVxyXG4gICAgICAgIGNvbnRyb2xsZXIgPSBQb3BPdmVyQ29udHJvbGxlcjtcclxuICAgICAgICBjb250cm9sbGVyQXMgPSAncG9wT3Zlcic7XHJcbiAgICAgICAgYmluZFRvQ29udHJvbGxlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcG9zaXRpb247XHJcblxyXG4gICAgICAgIGxpbmsgPSAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjdHJsOiBQb3BPdmVyQ29udHJvbGxlciA9ICRzY29wZVt0aGlzLmNvbnRyb2xsZXJBc107XHJcblxyXG4gICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcE92ZXJDbGlja0ludm9rZXIgPSB0aGlzLiRwYXJzZSgkYXR0cnMucG9wT3ZlckNsaWNrKTtcclxuICAgICAgICAgICAgICAgIGN0cmwucG9wT3ZlckNsaWNrID0gKCkgPT4gcG9wT3ZlckNsaWNrSW52b2tlcigkc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcE92ZXJEaXNhYmxlZEludm9rZXIgPSB0aGlzLiRwYXJzZSgkYXR0cnMucG9wT3ZlckRpc2FibGVkKTtcclxuICAgICAgICAgICAgICAgIGN0cmwucG9wT3ZlckRpc2FibGVkID0gKCkgPT4gcG9wT3ZlckRpc2FibGVkSW52b2tlcigkc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSBhbmd1bGFyLmVsZW1lbnQoJ2JvZHknKSxcclxuICAgICAgICAgICAgICAgICRodG1sID0gYW5ndWxhci5lbGVtZW50KCdodG1sJyksXHJcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsID0gdHlwZW9mICRhdHRycy5wb3BPdmVySG9yaXpvbnRhbCA9PSAndW5kZWZpbmVkJyxcclxuICAgICAgICAgICAgICAgIHhPZmZzZXQgPSBpc1ZlcnRpY2FsID8gMjcgOiAyMCxcclxuICAgICAgICAgICAgICAgIHlPZmZzZXQgPSBpc1ZlcnRpY2FsID8gMTYgOiAyNCxcclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZTogSVBhZ2VDb250ZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGVudCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRhdHRycy5wb3NpdGlvblR5cGUpXHJcbiAgICAgICAgICAgICAgICBjdHJsLnBvc2l0aW9uVHlwZSA9ICRhdHRycy5wb3NpdGlvblR5cGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZ2V0RXZlbnQgPSAoLi4ubmFtZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lcy5tYXAobmFtZSA9PiBgJHtuYW1lfS4keyRzY29wZS4kaWR9YCkuam9pbignICcpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJDbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLnBvcE92ZXJDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGNyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNyZWF0ZUNvbnRlbnQoJGF0dHJzLnBvcE92ZXIsICRzY29wZSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50Lm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGVudCA9IGFuZ3VsYXIuZWxlbWVudChcIi5wb3BvdmVyLXNjcm9sbGFibGVcIiwgY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGJvZHkuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRlbnRTZXJ2aWNlID0gdGhpcy5wYWdlQ29udGVudEZhY3RvcnkuZ2V0KGNvbnRlbnQsIGlzVmVydGljYWwsIHhPZmZzZXQsIHlPZmZzZXQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIHNldFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDbGFzcyhcInBvcG92ZXItLWlzVmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgaXQgc2Nyb2xsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxhYmxlQ29udGVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbFNjcm9sbCA9IHNjcm9sbGFibGVDb250ZW50LmdldCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc1ZlcnRTY3JvbGxiYXIgPSBlbFNjcm9sbC5zY3JvbGxIZWlnaHQgPiBlbFNjcm9sbC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250ZW50LnRvZ2dsZUNsYXNzKCdwb3BvdmVyLXNjcm9sbGFibGUtLXZlcnQnLCBoYXNWZXJ0U2Nyb2xsYmFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHJsLmlzRnVsbHNjcmVlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZS5wb3NpdGlvbkZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZS5wb3NpdGlvbkZyb21FbGVtZW50KCRlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGN0cmwuc2hvdyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGdldERhdGEoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjdHJsLmhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNsYXNzKFwicG9wb3Zlci0taXNWaXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnQub24oXCJjbGljay5wb3BPdmVyXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN0cmwucG9zaXRpb25UeXBlID09ICdtb3VzZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7IHg6IGUucGFnZVgsIHk6IGUucGFnZVkgfTtcclxuICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gIWN0cmwuaXNWaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRodG1sLm9uKGdldEV2ZW50KFwiY2xpY2tcIiksIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHJsLmlzVmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGhhc1RhcmdldCA9ICRlbGVtZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoID4gMCxcclxuICAgICAgICAgICAgICAgICAgICBpc1RhcmdldCA9ICRlbGVtZW50LmlzKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzVGFyZ2V0IHx8IGlzVGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHJsLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRodG1sLm9uKGdldEV2ZW50KFwiRE9NTW91c2VTY3JvbGxcIiwgXCJtb3VzZXdoZWVsXCIpLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHJsLmlzVmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMuJHdpbmRvdykub24oZ2V0RXZlbnQoXCJyZXNpemVcIiksIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHJsLmlzVmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkYm9keS5vbihnZXRFdmVudChcImtleXVwXCIpLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50Lm9uKFwiJGRlc3Ryb3lcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLiR3aW5kb3cpLm9mZihnZXRFdmVudChcInJlc2l6ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAkYm9keS5vZmYoZ2V0RXZlbnQoXCJrZXl1cFwiLCBcIkRPTU1vdXNlU2Nyb2xsXCIsIFwibW91c2V3aGVlbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAkYm9keS5vZmYoZ2V0RXZlbnQoXCJrZXl1cFwiKSk7XHJcbiAgICAgICAgICAgICAgICAkaHRtbC5vZmYoZ2V0RXZlbnQoXCJjbGlja1wiKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudClcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjcmVhdGVDb250ZW50KGh0bWxVcmwsICRzY29wZSkge1xyXG4gICAgICAgICAgICB2YXIgaHRtbCA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzLiR0ZW1wbGF0ZUNhY2hlLmdldChodG1sVXJsKSksXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IGFuZ3VsYXIuZWxlbWVudChgPGRpdiBjbGFzcz1cInBvcG92ZXJcIiBuZy1jbGFzcz1cInsncG9wb3Zlci0tZnVsbFNjcmVlbic6IHBvcE92ZXIuaXNGdWxsc2NyZWVufVwiPjxpIGNsYXNzPVwicG9wb3Zlci1jbG9zZSBpY29uIGljb24tdGltZXNcIiBuZy1jbGljaz1cInBvcE92ZXIuY2xvc2VDb250ZW50KClcIj48L2k+PC9kaXY+YCksXHJcbiAgICAgICAgICAgICAgICBodG1sTGluayA9IHRoaXMuJGNvbXBpbGUoaHRtbCksXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUxpbmsgPSB0aGlzLiRjb21waWxlKHRlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVMaW5rKCRzY29wZSk7XHJcbiAgICAgICAgICAgIGh0bWxMaW5rKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIpLmRpcmVjdGl2ZSgncG9wT3ZlcicsIFBvcE92ZXJEaXJlY3RpdmUpO1xyXG59Il19