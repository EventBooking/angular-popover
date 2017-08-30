declare module AngularPopoverModule {
}
declare namespace AngularPopoverModule {
    interface IPageContentService {
        positionFromPoint(x: any, y: any): any;
        positionFromElement(element: any): any;
    }
    interface IPageContentFactory {
        get(content: any, isVertical?: any, xOffset?: any, yOffset?: any): IPageContentService;
    }
}
declare namespace AngularPopoverModule {
    interface IPopOverController {
        positionType: string;
        isVisible: boolean;
    }
}
