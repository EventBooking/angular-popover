namespace AngularPopoverModule {

    class Size {
        constructor(public width, public height) {

        }
    }

    class Point {
        constructor(public x, public y) {

        }
    }

    class Boundary {
        constructor(public top: number, public left: number, public bottom: number, public right: number) {
        }

        static fromBoundary(boundary: Boundary): Boundary {
            return new Boundary(boundary.top, boundary.left, boundary.bottom, boundary.right);
        }

        static fromTopLeft(point: Point, size: Size): Boundary {
            return new Boundary(point.y, point.x, point.y + size.height, point.x + size.width);
        }

        static fromTopRight(point: Point, size: Size): Boundary {
            return new Boundary(point.y, point.x - size.width, point.y + size.height, point.x);
        }

        static fromBottomLeft(point: Point, size: Size): Boundary {
            return new Boundary(point.y - size.height, point.x, point.y, point.x + size.width);
        }

        static fromBottomRight(point: Point, size: Size): Boundary {
            return new Boundary(point.y - size.height, point.x - size.width, point.y, point.x);
        }

        public get topLeft(): Point {
            return new Point(this.left, this.top);
        }

        public get topRight(): Point {
            return new Point(this.right, this.top);
        }

        public get bottomLeft(): Point {
            return new Point(this.left, this.bottom);
        }

        public bottomCenter(contentSize: Size, elementSize: Size): Point {
            return new Point(this.left + (elementSize.width - contentSize.width) / 2, this.bottom)
        }

        public get bottomRight(): Point {
            return new Point(this.right, this.bottom);
        }

        public shiftUp(value: number) {
            this.top -= value;
            this.bottom -= value;
        }

        public shiftDown(value: number) {
            this.bottom += value;
            this.top += value;
        }

        public shiftLeft(value: number) {
            this.left -= value;
            this.right -= value;
        }

        public shiftRight(value: number) {
            this.right += value;
            this.left += value;
        }
    }

    class ContentPosition {
        constructor(public boundary: Boundary, public sideCss: string, public arrowCss: string) {
        }
    }

    export interface IPageContentService {
        positionFromPoint(x, y);
        positionFromElement(element);
    }

    class PageContentService implements IPageContentService {

        constructor(private $window, private content, private isVertical, private xOffset, private yOffset) {

        }

        private cssName = "pagecontent";
        private css = {
            below: this.cssName + '--below',
            above: this.cssName + '--above',
            before: this.cssName + '--before',
            after: this.cssName + '--after',
            beginning: this.cssName + '--beginning',
            center: this.cssName + '--center',
            end: this.cssName + '--end'
        };

        positionFromPoint(x, y) {
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
            var top: string | number = boundary.top;
            var bottom: string | number = boundary.bottom;
            var left: string | number = boundary.left;
            var right: string | number = boundary.right;

            if (offscreen.right) {
                right = 0;
                left = offscreen.left ? 0 : "";
            }
            else if (offscreen.left) {
                right = "";
                left = 0;
            } else {
                right = ""
            }

            if (offscreen.top) {
                top = 0;
                bottom = offscreen.bottom ? 0 : "";
            }
            else if (offscreen.bottom) {
                top = "";
                bottom = 0;
            } else {
                bottom = "";
            }

            this.setPosition(defaultPosition, top, left, right, bottom);
        }

        getOffScreen(boundary: Boundary) {
            var offscreen = {
                right: this.isOffRightScreen(boundary),
                left: this.isOffLeftScreen(boundary),
                top: this.isOffTopScreen(boundary),
                bottom: this.isOffBottomScreen(boundary)
            }
            return offscreen;
        }

        positionFromElement(element) {
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
        }

        tryPosition(position: ContentPosition) {
            if (!this.isOffScreen(position.boundary)) {
                this.setPosition(position, position.boundary.top, position.boundary.left, "", "");
                return true;
            }
            return false;
        }

        reset() {
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
        }

        setPosition(position, top: any = "", left: any = "", right: any = "", bottom: any = "") {
            var css = {
                top: top,
                left: left,
                right: right,
                bottom: bottom
            };

            this.content.css(css)
                .addClass(position.sideCss)
                .addClass(position.arrowCss);
        }

        isOffScreen(boundary: Boundary): boolean {
            if (this.isOffTopScreen(boundary) ||
                this.isOffLeftScreen(boundary) ||
                this.isOffRightScreen(boundary) ||
                this.isOffBottomScreen(boundary))
                return true;

            return false;
        }

        isOffTopScreen(boundary: Boundary): boolean {
            if (boundary.top < 0 + this.$window.scrollY)
                return true;
            return false;
        }

        isOffLeftScreen(boundary: Boundary): boolean {
            if (boundary.left < 0)
                return true;
            return false;
        }

        isOffRightScreen(boundary: Boundary): boolean {
            var screen = new Size(this.$window.innerWidth, this.$window.innerHeight);
            if (boundary.right > screen.width)
                return true;
            return false;
        }

        isOffBottomScreen(boundary: Boundary): boolean {
            var screen = new Size(this.$window.innerWidth, this.$window.innerHeight);
            if (boundary.bottom > screen.height + this.$window.scrollY)
                return true;
            return false;
        }
    }

    export interface IPageContentFactory {
        get(content, isVertical?, xOffset?, yOffset?): IPageContentService;
    }

    class PageContentFactory {
        static $inject = ['$window'];

        constructor(private $window) {
        }

        get(content, isVertical = true, xOffset = 0, yOffset = 0) {
            return new PageContentService(this.$window, content, isVertical, xOffset, yOffset);
        }
    }

    Angular.module("ngPopover").service('pageContentFactory', PageContentFactory);

}