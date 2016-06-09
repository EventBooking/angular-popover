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
        Boundary.prototype.bottomCenter = function (size) {
            return new Point(this.left + size.width / 2, this.bottom);
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
            var elementSize = new Size(element.outerWidth(false), element.outerHeight(false));
            var contentSize = new Size(this.content.outerWidth(true), this.content.outerHeight(true));
            var pos = element.offset();
            var elementBox = new Boundary(pos.top, pos.left, pos.top + elementSize.height, pos.left + elementSize.width);
            var belowCenter = new ContentPosition(Boundary.fromTopLeft(elementBox.bottomCenter(contentSize), contentSize), this.css.below, this.css.center);
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
    }());
    Angular.module("ngPopover").directive('popOver', PopOverDirective);
})(AngularPopoverModule || (AngularPopoverModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wb3BvdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9tb2JpbGUudHMiLCIuLi9zcmMvcGFnZUNvbnRlbnQudHMiLCIuLi9zcmMvcG9wb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQ0NoQyxJQUFPLG9CQUFvQixDQWUxQjtBQWZELFdBQU8sb0JBQW9CLEVBQUMsQ0FBQztJQUV6QjtRQUFBO1FBVUEsQ0FBQztRQVRVLHFCQUFRLEdBQWY7WUFDSSxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZFLElBQUksS0FBSyxHQUFHLDBUQUEwVCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuVixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLEtBQUssR0FBRyx5a0RBQXlrRCxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV4bUQsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDMUIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDOUUsQ0FBQyxFQWZNLG9CQUFvQixLQUFwQixvQkFBb0IsUUFlMUI7QUNoQkQsSUFBTyxvQkFBb0IsQ0FrUDFCO0FBbFBELFdBQU8sb0JBQW9CLEVBQUMsQ0FBQztJQUV6QjtRQUNJLGNBQW1CLEtBQUssRUFBUyxNQUFNO1lBQXBCLFVBQUssR0FBTCxLQUFLLENBQUE7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QUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0gsSUFBSSxjQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckksSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0gsSUFBSSxjQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkksSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0gsSUFBSSxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkksSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUs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LFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBMkpqSCx1QkFBQztJQUFELENBQUMsQUE1SkQsSUE0SkM7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN2RSxDQUFDLEVBNU1NLG9CQUFvQixLQUFwQixvQkFBb0IsUUE0TTFCIiwic291cmNlc0NvbnRlbnQiOlsiQW5ndWxhci5tb2R1bGUoXCJuZ1BvcG92ZXJcIiwgW10pOyIsIlxyXG5tb2R1bGUgQW5ndWxhclBvcG92ZXJNb2R1bGUge1xyXG5cclxuICAgIGNsYXNzIE1vYmlsZUNvbmZpZyB7XHJcbiAgICAgICAgc3RhdGljIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgYWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93W1wib3BlcmFcIl07XHJcbiAgICAgICAgICAgIHZhciB0ZXN0MSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGFnZW50KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhZ2VudFByZWZpeCA9IGFnZW50LnN1YnN0cigwLCA0KTtcclxuICAgICAgICAgICAgdmFyIHRlc3QyID0gLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhZ2VudFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGVzdDEgfHwgdGVzdDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIpLmNvbnN0YW50KCdpc01vYmlsZScsIE1vYmlsZUNvbmZpZy5pc01vYmlsZSgpKTtcclxufVxyXG4iLCJtb2R1bGUgQW5ndWxhclBvcG92ZXJNb2R1bGUge1xyXG5cclxuICAgIGNsYXNzIFNpemUge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aCwgcHVibGljIGhlaWdodCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4LCBwdWJsaWMgeSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQm91bmRhcnkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0b3A6IG51bWJlciwgcHVibGljIGxlZnQ6IG51bWJlciwgcHVibGljIGJvdHRvbTogbnVtYmVyLCBwdWJsaWMgcmlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Ub3BMZWZ0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55LCBwb2ludC54LCBwb2ludC55ICsgc2l6ZS5oZWlnaHQsIHBvaW50LnggKyBzaXplLndpZHRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tVG9wUmlnaHQocG9pbnQ6IFBvaW50LCBzaXplOiBTaXplKTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHBvaW50LnksIHBvaW50LnggLSBzaXplLndpZHRoLCBwb2ludC55ICsgc2l6ZS5oZWlnaHQsIHBvaW50LngpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZyb21Cb3R0b21MZWZ0KHBvaW50OiBQb2ludCwgc2l6ZTogU2l6ZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShwb2ludC55IC0gc2l6ZS5oZWlnaHQsIHBvaW50LngsIHBvaW50LnksIHBvaW50LnggKyBzaXplLndpZHRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBmcm9tQm90dG9tUmlnaHQocG9pbnQ6IFBvaW50LCBzaXplOiBTaXplKTogQm91bmRhcnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHBvaW50LnkgLSBzaXplLmhlaWdodCwgcG9pbnQueCAtIHNpemUud2lkdGgsIHBvaW50LnksIHBvaW50LngpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0b3BMZWZ0KCk6IFBvaW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdG9wUmlnaHQoKTogUG9pbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMudG9wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgYm90dG9tTGVmdCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm90dG9tQ2VudGVyKHNpemU6IFNpemUpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0ICsgc2l6ZS53aWR0aCAvIDIsIHRoaXMuYm90dG9tKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBib3R0b21SaWdodCgpOiBQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0VXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gLT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2hpZnREb3duKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9wICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNoaWZ0TGVmdCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCAtPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaGlmdFJpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBDb250ZW50UG9zaXRpb24ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBib3VuZGFyeTogQm91bmRhcnksIHB1YmxpYyBzaWRlQ3NzOiBzdHJpbmcsIHB1YmxpYyBhcnJvd0Nzczogc3RyaW5nKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDb250ZW50U2VydmljZSB7XHJcbiAgICAgICAgcG9zaXRpb25Gcm9tUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgcG9zaXRpb25Gcm9tRWxlbWVudChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQYWdlQ29udGVudFNlcnZpY2UgaW1wbGVtZW50cyBJUGFnZUNvbnRlbnRTZXJ2aWNlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93LCBwcml2YXRlIGNvbnRlbnQsIHByaXZhdGUgaXNWZXJ0aWNhbCwgcHJpdmF0ZSB4T2Zmc2V0LCBwcml2YXRlIHlPZmZzZXQpIHtcclxuICAgICAgICAgICAgY29udGVudC5hZGRDbGFzcyh0aGlzLmNzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjc3NOYW1lID0gXCJwYWdlY29udGVudFwiO1xyXG4gICAgICAgIHByaXZhdGUgY3NzID0ge1xyXG4gICAgICAgICAgICBiZWxvdzogdGhpcy5jc3NOYW1lICsgJy0tYmVsb3cnLFxyXG4gICAgICAgICAgICBhYm92ZTogdGhpcy5jc3NOYW1lICsgJy0tYWJvdmUnLFxyXG4gICAgICAgICAgICBiZWZvcmU6IHRoaXMuY3NzTmFtZSArICctLWJlZm9yZScsXHJcbiAgICAgICAgICAgIGFmdGVyOiB0aGlzLmNzc05hbWUgKyAnLS1hZnRlcicsXHJcbiAgICAgICAgICAgIGJlZ2lubmluZzogdGhpcy5jc3NOYW1lICsgJy0tYmVnaW5uaW5nJyxcclxuICAgICAgICAgICAgY2VudGVyOiB0aGlzLmNzc05hbWUgKyAnLS1jZW50ZXInLFxyXG4gICAgICAgICAgICBlbmQ6IHRoaXMuY3NzTmFtZSArICctLWVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwb3NpdGlvbkZyb21Qb2ludCh4LCB5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb250ZW50U2l6ZSA9IG5ldyBTaXplKHRoaXMuY29udGVudC5vdXRlcldpZHRoKHRydWUpLCB0aGlzLmNvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG4gICAgICAgICAgICB2YXIgaGFsZndpZHRoID0gY29udGVudFNpemUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICB2YXIgaGFsZkhlaWdodCA9IGNvbnRlbnRTaXplLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgICAgICB2YXIgYmVsb3dDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKG5ldyBCb3VuZGFyeSh5LCB4IC0gaGFsZndpZHRoLCB5ICsgY29udGVudFNpemUuaGVpZ2h0LCB4ICsgaGFsZndpZHRoKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBoYWxmSGVpZ2h0LCB4LCB5ICsgaGFsZkhlaWdodCwgeCArIGNvbnRlbnRTaXplLndpZHRoKSwgdGhpcy5jc3MuYWZ0ZXIsIHRoaXMuY3NzLmNlbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBhYm92ZUNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBjb250ZW50U2l6ZS5oZWlnaHQsIHggLSBoYWxmd2lkdGgsIHksIHggKyBoYWxmd2lkdGgpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZUNlbnRlciA9IG5ldyBDb250ZW50UG9zaXRpb24obmV3IEJvdW5kYXJ5KHkgLSBoYWxmSGVpZ2h0LCB4IC0gY29udGVudFNpemUud2lkdGgsIHkgKyBoYWxmSGVpZ2h0LCB4KSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5jZW50ZXIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb3NpdGlvbiA9IGJlbG93Q2VudGVyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uT3JkZXIgPSBbXHJcbiAgICAgICAgICAgICAgICBiZWxvd0NlbnRlcixcclxuICAgICAgICAgICAgICAgIGFmdGVyQ2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYWJvdmVDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVDZW50ZXJcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zaXRpb25PcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5UG9zaXRpb24ocG9zaXRpb25PcmRlcltpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGRlZmF1bHRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3NpdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRTaXplID0gbmV3IFNpemUoZWxlbWVudC5vdXRlcldpZHRoKGZhbHNlKSwgZWxlbWVudC5vdXRlckhlaWdodChmYWxzZSkpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudFNpemUgPSBuZXcgU2l6ZSh0aGlzLmNvbnRlbnQub3V0ZXJXaWR0aCh0cnVlKSwgdGhpcy5jb250ZW50Lm91dGVySGVpZ2h0KHRydWUpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBlbGVtZW50Lm9mZnNldCgpO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudEJveCA9IG5ldyBCb3VuZGFyeShwb3MudG9wLCBwb3MubGVmdCwgcG9zLnRvcCArIGVsZW1lbnRTaXplLmhlaWdodCwgcG9zLmxlZnQgKyBlbGVtZW50U2l6ZS53aWR0aCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYmVsb3dDZW50ZXIgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Ub3BMZWZ0KGVsZW1lbnRCb3guYm90dG9tQ2VudGVyKGNvbnRlbnRTaXplKSwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWxvdywgdGhpcy5jc3MuY2VudGVyKTtcclxuICAgICAgICAgICAgdmFyIGJlbG93QmVnaW5uaW5nID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tVG9wTGVmdChlbGVtZW50Qm94LmJvdHRvbUxlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBiZWxvd0VuZCA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcFJpZ2h0KGVsZW1lbnRCb3guYm90dG9tUmlnaHQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVsb3csIHRoaXMuY3NzLmVuZCk7XHJcbiAgICAgICAgICAgIHZhciBhZnRlckJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcExlZnQoZWxlbWVudEJveC50b3BSaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hZnRlciwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGFmdGVyRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tTGVmdChlbGVtZW50Qm94LmJvdHRvbVJpZ2h0LCBjb250ZW50U2l6ZSksIHRoaXMuY3NzLmFmdGVyLCB0aGlzLmNzcy5lbmQpO1xyXG4gICAgICAgICAgICB2YXIgYWJvdmVCZWdpbm5pbmcgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21MZWZ0KGVsZW1lbnRCb3gudG9wTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuYmVnaW5uaW5nKTtcclxuICAgICAgICAgICAgdmFyIGFib3ZlRW5kID0gbmV3IENvbnRlbnRQb3NpdGlvbihCb3VuZGFyeS5mcm9tQm90dG9tUmlnaHQoZWxlbWVudEJveC50b3BSaWdodCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5hYm92ZSwgdGhpcy5jc3MuZW5kKTtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZUJlZ2lubmluZyA9IG5ldyBDb250ZW50UG9zaXRpb24oQm91bmRhcnkuZnJvbVRvcFJpZ2h0KGVsZW1lbnRCb3gudG9wTGVmdCwgY29udGVudFNpemUpLCB0aGlzLmNzcy5iZWZvcmUsIHRoaXMuY3NzLmJlZ2lubmluZyk7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmVFbmQgPSBuZXcgQ29udGVudFBvc2l0aW9uKEJvdW5kYXJ5LmZyb21Cb3R0b21SaWdodChlbGVtZW50Qm94LmJvdHRvbUxlZnQsIGNvbnRlbnRTaXplKSwgdGhpcy5jc3MuYmVmb3JlLCB0aGlzLmNzcy5lbmQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb3NpdGlvbiA9IGJlbG93Q2VudGVyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uT3JkZXIgPSBbXHJcbiAgICAgICAgICAgICAgICBiZWxvd0NlbnRlcixcclxuICAgICAgICAgICAgICAgIGJlbG93QmVnaW5uaW5nLFxyXG4gICAgICAgICAgICAgICAgYmVsb3dFbmQsXHJcbiAgICAgICAgICAgICAgICBhZnRlckJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGFmdGVyRW5kLFxyXG4gICAgICAgICAgICAgICAgYWJvdmVCZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICBhYm92ZUVuZCxcclxuICAgICAgICAgICAgICAgIGJlZm9yZUJlZ2lubmluZyxcclxuICAgICAgICAgICAgICAgIGJlZm9yZUVuZFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb25PcmRlci5zcGxpY2UocG9zaXRpb25PcmRlci5pbmRleE9mKGRlZmF1bHRQb3NpdGlvbiksIDEpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbk9yZGVyLnNwbGljZSgwLCAwLCBkZWZhdWx0UG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbk9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlQb3NpdGlvbihwb3NpdGlvbk9yZGVyW2ldKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZGVmYXVsdFBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeVBvc2l0aW9uKHBvc2l0aW9uOiBDb250ZW50UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT2ZmU2NyZWVuKHBvc2l0aW9uLmJvdW5kYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldCgpIHtcclxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5iZWxvdyxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzLmFib3ZlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3MuYWZ0ZXIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5iZWdpbm5pbmcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5jZW50ZXIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcy5lbmRcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVDbGFzcyhjbGFzc2VzLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBDb250ZW50UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGNzcyA9IHtcclxuICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb24uYm91bmRhcnkudG9wLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24uYm91bmRhcnkubGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuY3NzKGNzcylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhwb3NpdGlvbi5zaWRlQ3NzKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKHBvc2l0aW9uLmFycm93Q3NzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzT2ZmU2NyZWVuKGJvdW5kYXJ5KSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9wU2Nyb2xsID0gdGhpcy4kd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkudG9wIDwgMCArIHRvcFNjcm9sbCB8fCBib3VuZGFyeS5sZWZ0IDwgMClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcmVlbiA9IG5ldyBTaXplKHRoaXMuJHdpbmRvdy5pbm5lcldpZHRoLCB0aGlzLiR3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICBpZiAoYm91bmRhcnkucmlnaHQgPiBzY3JlZW4ud2lkdGggfHwgYm91bmRhcnkuYm90dG9tID4gc2NyZWVuLmhlaWdodCArIHRvcFNjcm9sbClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQYWdlQ29udGVudEZhY3Rvcnkge1xyXG4gICAgICAgIGdldChjb250ZW50LCBpc1ZlcnRpY2FsPywgeE9mZnNldD8sIHlPZmZzZXQ/KTogSVBhZ2VDb250ZW50U2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQYWdlQ29udGVudEZhY3Rvcnkge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckd2luZG93J107XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHdpbmRvdykge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0KGNvbnRlbnQsIGlzVmVydGljYWwgPSB0cnVlLCB4T2Zmc2V0ID0gMCwgeU9mZnNldCA9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQYWdlQ29udGVudFNlcnZpY2UodGhpcy4kd2luZG93LCBjb250ZW50LCBpc1ZlcnRpY2FsLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQW5ndWxhci5tb2R1bGUoXCJuZ1BvcG92ZXJcIikuc2VydmljZSgncGFnZUNvbnRlbnRGYWN0b3J5JywgUGFnZUNvbnRlbnRGYWN0b3J5KTtcclxuXHJcbn0iLCJtb2R1bGUgQW5ndWxhclBvcG92ZXJNb2R1bGUge1xyXG5cclxuICAgIGNsYXNzIFBvcE92ZXJDb250cm9sbGVyIHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFsnaXNNb2JpbGUnXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSBpc01vYmlsZTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaG93OiBhbnk7XHJcbiAgICAgICAgaGlkZTogYW55O1xyXG4gICAgICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xyXG4gICAgICAgIHBvcE92ZXJDbGljayA9ICgpOiBhbnkgPT4geyB9O1xyXG4gICAgICAgIHBvcE92ZXJEaXNhYmxlZCA9ICgpOiBhbnkgPT4geyB9O1xyXG5cclxuICAgICAgICBwcml2YXRlIF9pc1Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZ2V0IGlzVmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBpc1Zpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQgfHwgdGhpcy5wb3BPdmVyRGlzYWJsZWQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xvc2VDb250ZW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHRvZ2dsZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gIXRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQb3BPdmVyRGlyZWN0aXZlIHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFtcIiRxXCIsIFwiJHBhcnNlXCIsIFwiJGNvbXBpbGVcIiwgXCIkd2luZG93XCIsIFwiJHRlbXBsYXRlQ2FjaGVcIiwgXCIkdGltZW91dFwiLCBcInBhZ2VDb250ZW50RmFjdG9yeVwiXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkcTogYW5ndWxhci5JUVNlcnZpY2UsIHByaXZhdGUgJHBhcnNlOiBhbmd1bGFyLklQYXJzZVNlcnZpY2UsIHByaXZhdGUgJGNvbXBpbGUsIHByaXZhdGUgJHdpbmRvdywgcHJpdmF0ZSAkdGVtcGxhdGVDYWNoZSwgcHJpdmF0ZSAkdGltZW91dCwgcHJpdmF0ZSBwYWdlQ29udGVudEZhY3Rvcnk6IElQYWdlQ29udGVudEZhY3RvcnkpIHsgfVxyXG5cclxuICAgICAgICByZXN0cmljdCA9ICdBJztcclxuICAgICAgICAvLyBzY29wZSA9IERPIE5PVCBVU0UgQSBTQ09QRSBPTiBUSElTISAzNjBOT1NDT1BFXHJcbiAgICAgICAgY29udHJvbGxlciA9IFBvcE92ZXJDb250cm9sbGVyO1xyXG4gICAgICAgIGNvbnRyb2xsZXJBcyA9ICdwb3BPdmVyJztcclxuICAgICAgICBiaW5kVG9Db250cm9sbGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgbGluayA9ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpID0+IHtcclxuICAgICAgICAgICAgdmFyIGN0cmw6IFBvcE92ZXJDb250cm9sbGVyID0gJHNjb3BlW3RoaXMuY29udHJvbGxlckFzXTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkYXR0cnMucG9wT3ZlckNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wT3ZlckNsaWNrSW52b2tlciA9IHRoaXMuJHBhcnNlKCRhdHRycy5wb3BPdmVyQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgY3RybC5wb3BPdmVyQ2xpY2sgPSAoKSA9PiBwb3BPdmVyQ2xpY2tJbnZva2VyKCRzY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkYXR0cnMucG9wT3ZlckRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wT3ZlckRpc2FibGVkSW52b2tlciA9IHRoaXMuJHBhcnNlKCRhdHRycy5wb3BPdmVyRGlzYWJsZWQpO1xyXG4gICAgICAgICAgICAgICAgY3RybC5wb3BPdmVyRGlzYWJsZWQgPSAoKSA9PiBwb3BPdmVyRGlzYWJsZWRJbnZva2VyKCRzY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciAkYm9keSA9IGFuZ3VsYXIuZWxlbWVudCgnYm9keScpLFxyXG4gICAgICAgICAgICAgICAgJGh0bWwgPSBhbmd1bGFyLmVsZW1lbnQoJ2h0bWwnKSxcclxuICAgICAgICAgICAgICAgIGlzVmVydGljYWwgPSB0eXBlb2YgJGF0dHJzLnBvcE92ZXJIb3Jpem9udGFsID09ICd1bmRlZmluZWQnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25UeXBlID0gJGF0dHJzLnBvc2l0aW9uVHlwZSB8fCAnbW91c2UnLFxyXG4gICAgICAgICAgICAgICAgeE9mZnNldCA9IGlzVmVydGljYWwgPyAyNyA6IDIwLFxyXG4gICAgICAgICAgICAgICAgeU9mZnNldCA9IGlzVmVydGljYWwgPyAxNiA6IDI0LFxyXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRlbnRTZXJ2aWNlOiBJUGFnZUNvbnRlbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICB2YXIgZ2V0RXZlbnQgPSAoLi4ubmFtZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lcy5tYXAobmFtZSA9PiBgJHtuYW1lfS4keyRzY29wZS4kaWR9YCkuam9pbignICcpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGF0dHJzLnBvcE92ZXJDbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLnBvcE92ZXJDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGNyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNyZWF0ZUNvbnRlbnQoJGF0dHJzLnBvcE92ZXIsICRzY29wZSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50Lm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGVudCA9IGFuZ3VsYXIuZWxlbWVudChcIi5wb3BvdmVyLXNjcm9sbGFibGVcIiwgY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGJvZHkuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRlbnRTZXJ2aWNlID0gdGhpcy5wYWdlQ29udGVudEZhY3RvcnkuZ2V0KGNvbnRlbnQsIGlzVmVydGljYWwsIHhPZmZzZXQsIHlPZmZzZXQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIHNldFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDbGFzcyhcInBvcG92ZXItLWlzVmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZS5wb3NpdGlvbkZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50U2VydmljZS5wb3NpdGlvbkZyb21FbGVtZW50KCRlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGN0cmwuc2hvdyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGdldERhdGEoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjdHJsLmhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNsYXNzKFwicG9wb3Zlci0taXNWaXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnQub24oXCJjbGljay5wb3BPdmVyXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uVHlwZSA9PSAnbW91c2UnKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0geyB4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZIH07XHJcbiAgICAgICAgICAgICAgICBjdHJsLmlzVmlzaWJsZSA9ICFjdHJsLmlzVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaHRtbC5vbihnZXRFdmVudChcImNsaWNrXCIpLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoYXNUYXJnZXQgPSAkZWxlbWVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUYXJnZXQgPSAkZWxlbWVudC5pcyhlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RhcmdldCB8fCBpc1RhcmdldClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAkaHRtbC5vbihnZXRFdmVudChcIkRPTU1vdXNlU2Nyb2xsXCIsIFwibW91c2V3aGVlbFwiKSwgKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChzY3JvbGxhYmxlQ29udGVudCAmJiBzY3JvbGxhYmxlQ29udGVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY3RybC5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkYm9keS5vbihnZXRFdmVudChcImtleXVwXCIpLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5pc1Zpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50Lm9uKFwiJGRlc3Ryb3lcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8kYm9keS5vZmYoZ2V0RXZlbnQoXCJrZXl1cFwiLCBcIkRPTU1vdXNlU2Nyb2xsXCIsIFwibW91c2V3aGVlbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAkYm9keS5vZmYoZ2V0RXZlbnQoXCJrZXl1cFwiKSk7XHJcbiAgICAgICAgICAgICAgICAkaHRtbC5vZmYoZ2V0RXZlbnQoXCJjbGlja1wiKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudClcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjcmVhdGVDb250ZW50KGh0bWxVcmwsICRzY29wZSkge1xyXG4gICAgICAgICAgICB2YXIgaHRtbCA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzLiR0ZW1wbGF0ZUNhY2hlLmdldChodG1sVXJsKSksXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IGFuZ3VsYXIuZWxlbWVudChgPGRpdiBjbGFzcz1cInBvcG92ZXJcIiBuZy1jbGFzcz1cInsncG9wb3Zlci0tZnVsbFNjcmVlbic6IHBvcE92ZXIuaXNGdWxsc2NyZWVufVwiPjxpIGNsYXNzPVwicG9wb3Zlci1jbG9zZSBpY29uIGljb24tdGltZXNcIiBuZy1jbGljaz1cInBvcE92ZXIuY2xvc2VDb250ZW50KClcIj48L2k+PC9kaXY+YCksXHJcbiAgICAgICAgICAgICAgICBodG1sTGluayA9IHRoaXMuJGNvbXBpbGUoaHRtbCksXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUxpbmsgPSB0aGlzLiRjb21waWxlKHRlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVMaW5rKCRzY29wZSk7XHJcbiAgICAgICAgICAgIGh0bWxMaW5rKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFuZ3VsYXIubW9kdWxlKFwibmdQb3BvdmVyXCIpLmRpcmVjdGl2ZSgncG9wT3ZlcicsIFBvcE92ZXJEaXJlY3RpdmUpO1xyXG59Il19