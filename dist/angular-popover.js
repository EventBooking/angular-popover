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
            this.link = function ($scope, $element, $attrs, ctrls, $transclude) {
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
                    content = _this.createContent($attrs.popOver, $scope, $transclude);
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
        PopOverDirective.prototype.createContent = function (htmlUrl, $scope, $transclude) {
            var html = angular.element(this.$templateCache.get(htmlUrl)), template = angular.element("<div class=\"popover\" ng-class=\"{'popover--fullScreen': popOver.isFullscreen}\"><i class=\"popover-close icon icon-times\" ng-click=\"popOver.closeContent()\"></i></div>"), htmlLink = this.$compile(html), templateLink = this.$compile(template);
            template.append(html);
            var options = {
                parentBoundTranscludeFn: $transclude
            };
            templateLink($scope, null, options);
            htmlLink($scope, null, options);
            return template;
        };
        PopOverDirective.$inject = ["$q", "$parse", "$compile", "$window", "$templateCache", "$timeout", "pageContentFactory"];
        return PopOverDirective;
    }());
    Angular.module("ngPopover").directive('popOver', PopOverDirective);
})(AngularPopoverModule || (AngularPopoverModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wb3BvdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9tb2JpbGUudHMiLCIuLi9zcmMvcGFnZUNvbnRlbnQudHMiLCIuLi9zcmMvcG9wb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQ0NoQyxJQUFVLG9CQUFvQixDQWU3QjtBQWZELFdBQVUsb0JBQW9CO0lBRTFCO1FBQUE7UUFVQSxDQUFDO1FBVFUscUJBQVEsR0FBZjtZQUNJLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkUsSUFBSSxLQUFLLEdBQUcsMFRBQTBULENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRW5WLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksS0FBSyxHQUFHLHlrREFBeWtELENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXhtRCxPQUFPLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDMUIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDOUUsQ0FBQyxFQWZTLG9CQUFvQixLQUFwQixvQkFBb0IsUUFlN0I7QUNoQkQsSUFBVSxvQkFBb0IsQ0EwVTdCO0FBMVVELFdBQVUsb0JBQW9CO0lBRTFCO1FBQ0ksY0FBbUIsS0FBSyxFQUFTLE1BQU07WUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBQTtZQUFTLFdBQU0sR0FBTixNQUFNLENBQUE7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LFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdKLElBQUksY0FBYyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZJLElBQUksUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdILElBQUksY0FBYyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JJLElBQUksUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9ILElBQUksY0FBYyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFD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QUM7WUFFaEMsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztRQTdLTSx3QkFBTyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBOEtqSCx1QkFBQztLQUFBLEFBL0tELElBK0tDO0lBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDdkUsQ0FBQyxFQXBQUyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBb1A3QiIsInNvdXJjZXNDb250ZW50IjpbIkFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIsIFtdKTsiLCJcclxubmFtZXNwYWNlIEFuZ3VsYXJQb3BvdmVyTW9kdWxlIHtcclxuXHJcbiAgICBjbGFzcyBNb2JpbGVDb25maWcge1xyXG4gICAgICAgIHN0YXRpYyBpc01vYmlsZSgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvd1tcIm9wZXJhXCJdO1xyXG4gICAgICAgICAgICB2YXIgdGVzdDEgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhZ2VudCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWdlbnRQcmVmaXggPSBhZ2VudC5zdWJzdHIoMCwgNCk7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0MiA9IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYWdlbnRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRlc3QxIHx8IHRlc3QyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5jb25zdGFudCgnaXNNb2JpbGUnLCBNb2JpbGVDb25maWcuaXNNb2JpbGUoKSk7XHJcbn1cclxuIiwibmFtZXNwYWNlIEFuZ3VsYXJQb3BvdmVyTW9kdWxlIHtcclxuXHJcbiAgICBjbGFzcyBTaXplIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgd2lkdGgsIHB1YmxpYyBoZWlnaHQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeCwgcHVibGljIHkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIEJvdW5kYXJ5IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9wOiBudW1iZXIsIHB1YmxpYyBsZWZ0OiBudW1iZXIsIHB1YmxpYyBib3R0b206IG51bWJlciwgcHVibGljIHJpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tQm91bmRhcnkoYm91bmRhcnk6IEJvdW5kYXJ5KTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KGJvdW5kYXJ5LnRvcCwgYm91bmRhcnkubGVmdCwgYm91bmRhcnkuYm90dG9tLCBib3VuZGFyeS5yaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbVRvcExlZnQocG9pbnQ6IFBvaW50LCBzaXplOiBTaXplKTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHBvaW50LnksIHBvaW50LngsIHBvaW50LnkgKyBzaXplLmhlaWdodCwgcG9pbnQueCArIHNpemUud2lkdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Ub3BSaWdodChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSwgcG9pbnQueCAtIHNpemUud2lkdGgsIHBvaW50LnkgKyBzaXplLmhlaWdodCwgcG9pbnQueCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZnJvbUJvdHRvbUxlZnQocG9pbnQ6IFBvaW50LCBzaXplOiBTaXplKTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHBvaW50LnkgLSBzaXplLmhlaWdodCwgcG9pbnQueCwgcG9pbnQueSwgcG9pbnQueCArIHNpemUud2lkdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Cb3R0b21SaWdodChwb2ludDogUG9pbnQsIHNpemU6IFNpemUpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkocG9pbnQueSAtIHNpemUuaGVpZ2h0LCBwb2ludC54IC0gc2l6ZS53aWR0aCwgcG9pbnQueSwgcG9pbnQueCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHRvcExlZnQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0b3BSaWdodCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy50b3ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBib3R0b21MZWZ0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMuYm90dG9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib3R0b21DZW50ZXIoY29udGVudFNpemU6IFNpemUsIGVsZW1lbnRTaXplOiBTaXplKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCArIChlbGVtZW50U2l6ZS53aWR0aCAtIGNvbnRlbnRTaXplLndpZHRoKSAvIDIsIHRoaXMuYm90dG9tKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBib3R0b21SaWdodCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0VXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gLT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnREb3duKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9wICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0TGVmdCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCAtPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdFJpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBDb250ZW50UG9zaXRpb24ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBib3VuZGFyeTogQm91bmRhcnksIHB1YmxpYyBzaWRlQ3NzOiBzdHJpbmcsIHB1YmxpYyBhcnJvd0Nzczogc3RyaW5nKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDb250ZW50U2VydmljZSB7XHJcbiAgICAgICAgcG9zaXRpb25Gcm9tUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgcG9zaXRpb25Gcm9tRWxlbWVudChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQYWdlQ29udGVudFNlcnZpY2UgaW1wbGVtZW50cyBJUGFnZUNvbnRlbnRTZXJ2aWNlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93LCBwcml2YXRlIGNvbnRlbnQsIHByaXZhdGUgaXNWZXJ0aWNhbCwgcHJpdmF0ZSB4T2Zmc2V0LCBwcml2YXRlIHlPZmZzZXQpIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNzc05hbWUgPSBcInBhZ2Vjb250ZW50XCI7XHJcbiAgICAgICAgcHJpdmF0ZSBjc3MgPSB7XHJcbiAgICAgICAgICAgIGJlbG93OiB0aGlzLmNzc05hbWUgKyAnLS1iZWxvdycsXHJcbiAgICAgICAgICAgIGFib3ZlOiB0aGlzLmNzc05hbWUgKyAnLS1hYm92ZScsXHJcbiAgICAgICAgICAgIGJlZm9yZTogdGhpcy5jc3NOYW1lICsgJy0tYmVmb3JlJyxcclxuICAgICAgICAgICAgYWZ0ZXI6IHRoaXMuY3NzTmFtZSArICctLWFmdGVyJyxcclxuICAgICAgICAgICAgYmVnaW5uaW5nOiB0aGlzLmNzc05hbWUgKyAnLS1iZWdpbm5pbmcnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IHRoaXMuY3NzTmFtZSArICctLWNlbnRlcicsXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5jc3NOYW1lICsgJy0tZW5kJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBvc2l0aW9uRnJvbVBvaW50KHgsIHkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENsYXNzKHRoaXMuY3NzTmFtZSk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50U2l6ZSA9IG5ldyBTaXplKHRoaXMuY29udGVudC5vdXRlcldpZHRoKHRydWUpLCB0aGlzLmNvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG4gICAgICAgICAgICB2YXIgaGFsZndpZHRoID0gY29udGVudFNpemUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICB2YXIgaGFsZkhlaWdodCA9IGNvbnRlbnRTaXplLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgICAgICB2YXIgYmVsb3dDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5LCB4IC0gaGFsZndpZHRoLCB5ICsgY29udGVudFNpemUuaGVpZ2h0LCB4ICsgaGFsZndpZHRoKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBoYWxmSGVpZ2h0LCB4LCB5ICsgaGFsZkhlaWdodCwgeCArIGNvbnRlbnRTaXplLndpZHRoKSwgdGhpcy5jc3MuYWZ0ZXIsIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBhYm92ZUNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBjb250ZW50U2l6ZS5oZWlnaHQsIHggLSBoYWxmd2lkdGgsIHksIHggKyBoYWxmd2lkdGgpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZUNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBoYWxmSGVpZ2h0LCB4IC0gY29udGVudFNpemUud2lkdGgsIHkgKyBoYWxmSGVpZ2h0LCB4KSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5jZW50ZXIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb3NpdGlvbiA9IGJlbG93Q2VudGVyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uT3JkZXIgPSBbXHJcbiAgICAgICAgICAgICAgICBiZWxvd0NlbnRlcixcclxuICAgICAgICAgICAgICAgIGFmdGVyQ2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYWJvdmVDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVDZW50ZXJcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zaXRpb25PcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5UG9zaXRpb24ocG9zaXRpb25PcmRlcltpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYm91bmRhcnkgPSBkZWZhdWx0UG9zaXRpb24uYm91bmRhcnk7XHJcbiAgICAgICAgICAgIHZhciBvZmZzY3JlZW4gPSB0aGlzLmdldE9mZlNjcmVlbihib3VuZGFyeSk7XHJcbiAgICAgICAgICAgIHZhciB0b3A6IHN0cmluZyB8IG51bWJlciA9IGJvdW5kYXJ5LnRvcDtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyID0gYm91bmRhcnkuYm90dG9tO1xyXG4gICAgICAgICAgICB2YXIgbGVmdDogc3RyaW5nIHwgbnVtYmVyID0gYm91bmRhcnkubGVmdDtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSBib3VuZGFyeS5yaWdodDtcclxuXHJcbiAgICAgICAgICAgIGlmIChvZmZzY3JlZW4ucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBvZmZzY3JlZW4ubGVmdCA/IDAgOiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9mZnNjcmVlbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICByaWdodCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gXCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob2Zmc2NyZWVuLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgdG9wID0gMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbSA9IG9mZnNjcmVlbi5ib3R0b20gPyAwIDogXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvZmZzY3JlZW4uYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZGVmYXVsdFBvc2l0aW9uLCB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0T2ZmU2NyZWVuKGJvdW5kYXJ5OiBCb3VuZGFyeSkge1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2NyZWVuID0ge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMuaXNPZmZSaWdodFNjcmVlbihib3VuZGFyeSksXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLmlzT2ZmTGVmdFNjcmVlbihib3VuZGFyeSksXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuaXNPZmZUb3BTY3JlZW4oYm91bmRhcnkpLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLmlzT2ZmQm90dG9tU2NyZWVuKGJvdW5kYXJ5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvZmZzY3JlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3NpdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENsYXNzKHRoaXMuY3NzTmFtZSk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50U2l6ZSA9IG5ldyBTaXplKGVsZW1lbnQub3V0ZXJXaWR0aChmYWxzZSksIGVsZW1lbnQub3V0ZXJIZWlnaHQoZmFsc2UpKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRTaXplID0gbmV3IFNpemUodGhpcy5jb250ZW50Lm91dGVyV2lkdGgodHJ1ZSksIHRoaXMuY29udGVudC5vdXRlckhlaWdodCh0cnVlKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zID0gZWxlbWVudC5vZmZzZXQoKTtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRCb3ggPSBuZXcgQm91bmRhcnkocG9zLnRvcCwgcG9zLmxlZnQsIHBvcy50b3AgKyBlbGVtZW50U2l6ZS5oZWlnaHQsIHBvcy5sZWZ0ICsgZWxlbWVudFNpemUud2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJlbG93Q2VudGVyID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tVG9wTGVmdChlbGVtZW50Qm94LmJvdHRvbUNlbnRlcihjb250ZW50U2l6ZSwgZWxlbWVudFNpemUpLCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmJlbG93LCB0aGlzLmNzcy5jZW50ZXIpO1xyXG4gICAgICAgICAgICB2YXIgYmVsb3dCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BMZWZ0KGVsZW1lbnRCb3guYm90dG9tTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWxvdywgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGJlbG93RW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tVG9wUmlnaHQoZWxlbWVudEJveC5ib3R0b21SaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWxvdywgdGhpcy5jc3MuZW5kKTtcclxuICAgICAgICAgICAgdmFyIGFmdGVyQmVnaW5uaW5nID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tVG9wTGVmdChlbGVtZW50Qm94LnRvcFJpZ2h0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmFmdGVyLCB0aGlzLmNzcy5iZWdpbm5pbmcpO1xyXG4gICAgICAgICAgICB2YXIgYWZ0ZXJFbmQgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21MZWZ0KGVsZW1lbnRCb3guYm90dG9tUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYWZ0ZXIsIHRoaXMuY3NzLmVuZCk7XHJcbiAgICAgICAgICAgIHZhciBhYm92ZUJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbUJvdHRvbUxlZnQoZWxlbWVudEJveC50b3BMZWZ0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmFib3ZlLCB0aGlzLmNzcy5iZWdpbm5pbmcpO1xyXG4gICAgICAgICAgICB2YXIgYWJvdmVFbmQgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21SaWdodChlbGVtZW50Qm94LnRvcFJpZ2h0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmFib3ZlLCB0aGlzLmNzcy5lbmQpO1xyXG4gICAgICAgICAgICB2YXIgYmVmb3JlQmVnaW5uaW5nID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tVG9wUmlnaHQoZWxlbWVudEJveC50b3BMZWZ0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmJlZm9yZSwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZUVuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbUJvdHRvbVJpZ2h0KGVsZW1lbnRCb3guYm90dG9tTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWZvcmUsIHRoaXMuY3NzLmVuZCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGVmYXVsdFBvc2l0aW9uID0gYmVsb3dDZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb25PcmRlciA9IFtcclxuICAgICAgICAgICAgICAgIGJlbG93Q2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYmVsb3dCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBiZWxvd0VuZCxcclxuICAgICAgICAgICAgICAgIGFmdGVyQmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJFbmQsXHJcbiAgICAgICAgICAgICAgICBhYm92ZUJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGFib3ZlRW5kLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlQmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlRW5kXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbk9yZGVyLnNwbGljZShwb3NpdGlvbk9yZGVyLmluZGV4T2YoZGVmYXVsdFBvc2l0aW9uKSwgMSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uT3JkZXIuc3BsaWNlKDAsIDAsIGRlZmF1bHRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc2l0aW9uT3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyeVBvc2l0aW9uKHBvc2l0aW9uT3JkZXJbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPZmZSaWdodFNjcmVlbihkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LnRvcCwgXCJcIiwgMCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2ZmTGVmdFNjcmVlbihkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbiwgZGVmYXVsdFBvc2l0aW9uLmJvdW5kYXJ5LnRvcCwgMCwgXCJcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2ZmVG9wU2NyZWVuKGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZGVmYXVsdFBvc2l0aW9uLCAwLCBkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkubGVmdCwgXCJcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2ZmQm90dG9tU2NyZWVuKGRlZmF1bHRQb3NpdGlvbi5ib3VuZGFyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZGVmYXVsdFBvc2l0aW9uLCBcIlwiLCBkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkubGVmdCwgXCJcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZGVmYXVsdFBvc2l0aW9uLCBkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkudG9wLCBkZWZhdWx0UG9zaXRpb24uYm91bmRhcnkubGVmdCwgXCJcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnlQb3NpdGlvbihwb3NpdGlvbjogQ29udGVudFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc09mZlNjcmVlbihwb3NpdGlvbi5ib3VuZGFyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24sIHBvc2l0aW9uLmJvdW5kYXJ5LnRvcCwgcG9zaXRpb24uYm91bmRhcnkubGVmdCwgXCJcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldCgpIHtcclxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5iZWxvdyxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmFib3ZlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYWZ0ZXIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5iZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5jZW50ZXIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5lbmRcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVDbGFzcyh0aGlzLmNzc05hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5qb2luKFwiIFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQb3NpdGlvbihwb3NpdGlvbiwgdG9wOiBhbnkgPSBcIlwiLCBsZWZ0OiBhbnkgPSBcIlwiLCByaWdodDogYW55ID0gXCJcIiwgYm90dG9tOiBhbnkgPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHZhciBjc3MgPSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmNzcyhjc3MpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocG9zaXRpb24uc2lkZUNzcylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhwb3NpdGlvbi5hcnJvd0Nzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc09mZlNjcmVlbihib3VuZGFyeTogQm91bmRhcnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPZmZUb3BTY3JlZW4oYm91bmRhcnkpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzT2ZmTGVmdFNjcmVlbihib3VuZGFyeSkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPZmZSaWdodFNjcmVlbihib3VuZGFyeSkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPZmZCb3R0b21TY3JlZW4oYm91bmRhcnkpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc09mZlRvcFNjcmVlbihib3VuZGFyeTogQm91bmRhcnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKGJvdW5kYXJ5LnRvcCA8IDAgKyB0aGlzLiR3aW5kb3cuc2Nyb2xsWSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc09mZkxlZnRTY3JlZW4oYm91bmRhcnk6IEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmIChib3VuZGFyeS5sZWZ0IDwgMClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc09mZlJpZ2h0U2NyZWVuKGJvdW5kYXJ5OiBCb3VuZGFyeSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgc2NyZWVuID0gbmV3IFNpemUodGhpcy4kd2luZG93LmlubmVyV2lkdGgsIHRoaXMuJHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgICAgIGlmIChib3VuZGFyeS5yaWdodCA+IHNjcmVlbi53aWR0aClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc09mZkJvdHRvbVNjcmVlbihib3VuZGFyeTogQm91bmRhcnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHNjcmVlbiA9IG5ldyBTaXplKHRoaXMuJHdpbmRvdy5pbm5lcldpZHRoLCB0aGlzLiR3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkuYm90dG9tID4gc2NyZWVuLmhlaWdodCArIHRoaXMuJHdpbmRvdy5zY3JvbGxZKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUGFnZUNvbnRlbnRGYWN0b3J5IHtcclxuICAgICAgICBnZXQoY29udGVudCwgaXNWZXJ0aWNhbD8sIHhPZmZzZXQ/LCB5T2Zmc2V0Pyk6IElQYWdlQ29udGVudFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUGFnZUNvbnRlbnRGYWN0b3J5IHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFsnJHdpbmRvdyddO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICR3aW5kb3cpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldChjb250ZW50LCBpc1ZlcnRpY2FsID0gdHJ1ZSwgeE9mZnNldCA9IDAsIHlPZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFnZUNvbnRlbnRTZXJ2aWNlKHRoaXMuJHdpbmRvdywgY29udGVudCwgaXNWZXJ0aWNhbCwgeE9mZnNldCwgeU9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIpLnNlcnZpY2UoJ3BhZ2VDb250ZW50RmFjdG9yeScsIFBhZ2VDb250ZW50RmFjdG9yeSk7XHJcblxyXG59IiwibmFtZXNwYWNlIEFuZ3VsYXJQb3BvdmVyTW9kdWxlIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQb3BPdmVyQ29udHJvbGxlciB7XHJcbiAgICAgICAgcG9zaXRpb25UeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgaXNWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFBvcE92ZXJDb250cm9sbGVyIGltcGxlbWVudHMgSVBvcE92ZXJDb250cm9sbGVyIHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFsnaXNNb2JpbGUnLCAnJGVsZW1lbnQnXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaXNNb2JpbGU6IGJvb2xlYW4sIHByaXZhdGUgJGVsZW1lbnQ6IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRnVsbHNjcmVlbiA9IGlzTW9iaWxlO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNob3c6IGFueTtcclxuICAgICAgICBoaWRlOiBhbnk7XHJcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XHJcbiAgICAgICAgcG9zaXRpb25UeXBlOiBzdHJpbmcgPSBcIm1vdXNlXCI7XHJcbiAgICAgICAgcG9wT3ZlckNsaWNrID0gKCk6IGFueSA9PiB7IH07XHJcbiAgICAgICAgcG9wT3ZlckRpc2FibGVkID0gKCk6IGJvb2xlYW4gPT4gZmFsc2U7XHJcblxyXG4gICAgICAgICRkb0NoZWNrKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5wb3BPdmVyRGlzYWJsZWQoKTtcclxuICAgICAgICAgICAgaWYgKGlzRGlzYWJsZWQgIT09IHRoaXMuX2lzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3NzID0gJ3BvcG92ZXItLWRpc2FibGVkJztcclxuICAgICAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkKSB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGNzcyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY3NzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaXNWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGdldCBpc1Zpc2libGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgaXNWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkIHx8IHRoaXMuaXNEaXNhYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xvc2VDb250ZW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvZ2dsZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gIXRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQb3BPdmVyRGlyZWN0aXZlIHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFtcIiRxXCIsIFwiJHBhcnNlXCIsIFwiJGNvbXBpbGVcIiwgXCIkd2luZG93XCIsIFwiJHRlbXBsYXRlQ2FjaGVcIiwgXCIkdGltZW91dFwiLCBcInBhZ2VDb250ZW50RmFjdG9yeVwiXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkcTogYW5ndWxhci5JUVNlcnZpY2UsIHByaXZhdGUgJHBhcnNlOiBhbmd1bGFyLklQYXJzZVNlcnZpY2UsIHByaXZhdGUgJGNvbXBpbGUsIHByaXZhdGUgJHdpbmRvdzogYW5ndWxhci5JV2luZG93U2VydmljZSwgcHJpdmF0ZSAkdGVtcGxhdGVDYWNoZTogYW5ndWxhci5JVGVtcGxhdGVDYWNoZVNlcnZpY2UsIHByaXZhdGUgJHRpbWVvdXQ6IGFuZ3VsYXIuSVRpbWVvdXRTZXJ2aWNlLCBwcml2YXRlIHBhZ2VDb250ZW50RmFjdG9yeTogSVBhZ2VDb250ZW50RmFjdG9yeSkgeyB9XHJcblxyXG4gICAgICAgIHJlc3RyaWN0ID0gJ0EnO1xyXG4gICAgICAgIC8vIHNjb3BlID0gRE8gTk9UIFVTRSBBIFNDT1BFIE9OIFRISVMhIDM2ME5PU0NPUEVcclxuICAgICAgICBjb250cm9sbGVyID0gUG9wT3ZlckNvbnRyb2xsZXI7XHJcbiAgICAgICAgY29udHJvbGxlckFzID0gJ3BvcE92ZXInO1xyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICBwcml2YXRlIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICBsaW5rID0gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgY3RybHMsICR0cmFuc2NsdWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjdHJsOiBQb3BPdmVyQ29udHJvbGxlciA9ICRzY29wZVt0aGlzLmNvbnRyb2xsZXJBc107XHJcblxyXG4gICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcE92ZXJDbGlja0ludm9rZXIgPSB0aGlzLiRwYXJzZSgkYXR0cnMucG9wT3ZlckNsaWNrKTtcclxuICAgICAgICAgICAgICAgIGN0cmwucG9wT3ZlckNsaWNrID0gKCkgPT4gcG9wT3ZlckNsaWNrSW52b2tlcigkc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcE92ZXJEaXNhYmxlZEludm9rZXIgPSB0aGlzLiRwYXJzZSgkYXR0cnMucG9wT3ZlckRpc2FibGVkKTtcclxuICAgICAgICAgICAgICAgIGN0cmwucG9wT3ZlckRpc2FibGVkID0gKCkgPT4gcG9wT3ZlckRpc2FibGVkSW52b2tlcigkc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSBhbmd1bGFyLmVsZW1lbnQoJ2JvZHknKSxcclxuICAgICAgICAgICAgICAgICRodG1sID0gYW5ndWxhci5lbGVtZW50KCdodG1sJyksXHJcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsID0gdHlwZW9mICRhdHRycy5wb3BPdmVySG9yaXpvbnRhbCA9PSAndW5kZWZpbmVkJyxcclxuICAgICAgICAgICAgICAgIHhPZmZzZXQgPSBpc1ZlcnRpY2FsID8gMjcgOiAyMCxcclxuICAgICAgICAgICAgICAgIHlPZmZzZXQgPSBpc1ZlcnRpY2FsID8gMTYgOiAyNCxcclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZTogSVBhZ2VDb250ZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGVudCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRhdHRycy5wb3NpdGlvblR5cGUpXHJcbiAgICAgICAgICAgICAgICBjdHJsLnBvc2l0aW9uVHlwZSA9ICRhdHRycy5wb3NpdGlvblR5cGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZ2V0RXZlbnQgPSAoLi4ubmFtZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lcy5tYXAobmFtZSA9PiBgJHtuYW1lfS4keyRzY29wZS4kaWR9YCkuam9pbignICcpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJDbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLnBvcE92ZXJDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGNyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNyZWF0ZUNvbnRlbnQoJGF0dHJzLnBvcE92ZXIsICRzY29wZSwgJHRyYW5zY2x1ZGUpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRlbnQgPSBhbmd1bGFyLmVsZW1lbnQoXCIucG9wb3Zlci1zY3JvbGxhYmxlXCIsIGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICRib2R5LmFwcGVuZChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZSA9IHRoaXMucGFnZUNvbnRlbnRGYWN0b3J5LmdldChjb250ZW50LCBpc1ZlcnRpY2FsLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZXRQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2xhc3MoXCJwb3BvdmVyLS1pc1Zpc2libGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIGl0IHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsYWJsZUNvbnRlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxTY3JvbGwgPSBzY3JvbGxhYmxlQ29udGVudC5nZXQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNWZXJ0U2Nyb2xsYmFyID0gZWxTY3JvbGwuc2Nyb2xsSGVpZ2h0ID4gZWxTY3JvbGwuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGVudC50b2dnbGVDbGFzcygncG9wb3Zlci1zY3JvbGxhYmxlLS12ZXJ0JywgaGFzVmVydFNjcm9sbGJhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybC5pc0Z1bGxzY3JlZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGVudFNlcnZpY2UucG9zaXRpb25Gcm9tRWxlbWVudCgkZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjdHJsLnNob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBnZXREYXRhKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY3RybC5oaWRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmVDbGFzcyhcInBvcG92ZXItLWlzVmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50Lm9uKFwiY2xpY2sucG9wT3ZlclwiLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjdHJsLnBvc2l0aW9uVHlwZSA9PSAnbW91c2UnKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0geyB4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZIH07XHJcbiAgICAgICAgICAgICAgICBjdHJsLmlzVmlzaWJsZSA9ICFjdHJsLmlzVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaHRtbC5vbihnZXRFdmVudChcImNsaWNrXCIpLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoYXNUYXJnZXQgPSAkZWxlbWVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUYXJnZXQgPSAkZWxlbWVudC5pcyhlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RhcmdldCB8fCBpc1RhcmdldClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaHRtbC5vbihnZXRFdmVudChcIkRPTU1vdXNlU2Nyb2xsXCIsIFwibW91c2V3aGVlbFwiKSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzLiR3aW5kb3cpLm9uKGdldEV2ZW50KFwicmVzaXplXCIpLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGJvZHkub24oZ2V0RXZlbnQoXCJrZXl1cFwiKSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwuaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHJsLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC5vbihcIiRkZXN0cm95XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQodGhpcy4kd2luZG93KS5vZmYoZ2V0RXZlbnQoXCJyZXNpemVcIikpO1xyXG4gICAgICAgICAgICAgICAgJGJvZHkub2ZmKGdldEV2ZW50KFwia2V5dXBcIiwgXCJET01Nb3VzZVNjcm9sbFwiLCBcIm1vdXNld2hlZWxcIikpO1xyXG4gICAgICAgICAgICAgICAgJGJvZHkub2ZmKGdldEV2ZW50KFwia2V5dXBcIikpO1xyXG4gICAgICAgICAgICAgICAgJGh0bWwub2ZmKGdldEV2ZW50KFwiY2xpY2tcIikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udGVudChodG1sVXJsLCAkc2NvcGUsICR0cmFuc2NsdWRlKSB7XHJcbiAgICAgICAgICAgIHZhciBodG1sID0gYW5ndWxhci5lbGVtZW50KHRoaXMuJHRlbXBsYXRlQ2FjaGUuZ2V0KGh0bWxVcmwpKSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gYW5ndWxhci5lbGVtZW50KGA8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIG5nLWNsYXNzPVwieydwb3BvdmVyLS1mdWxsU2NyZWVuJzogcG9wT3Zlci5pc0Z1bGxzY3JlZW59XCI+PGkgY2xhc3M9XCJwb3BvdmVyLWNsb3NlIGljb24gaWNvbi10aW1lc1wiIG5nLWNsaWNrPVwicG9wT3Zlci5jbG9zZUNvbnRlbnQoKVwiPjwvaT48L2Rpdj5gKSxcclxuICAgICAgICAgICAgICAgIGh0bWxMaW5rID0gdGhpcy4kY29tcGlsZShodG1sKSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlTGluayA9IHRoaXMuJGNvbXBpbGUodGVtcGxhdGUpO1xyXG5cclxuICAgICAgICAgICAgdGVtcGxhdGUuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Qm91bmRUcmFuc2NsdWRlRm46ICR0cmFuc2NsdWRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlTGluaygkc2NvcGUsIG51bGwsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBodG1sTGluaygkc2NvcGUsIG51bGwsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBBbmd1bGFyLm1vZHVsZShcIm5nUG9wb3ZlclwiKS5kaXJlY3RpdmUoJ3BvcE92ZXInLCBQb3BPdmVyRGlyZWN0aXZlKTtcclxufSJdfQ==