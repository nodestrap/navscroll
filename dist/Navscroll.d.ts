import { default as React } from 'react';
import { ListItemProps, ListItem } from '@nodestrap/list';
import { OrientationName, OrientationVariant, ListStyle, ListVariant, NavProps } from '@nodestrap/nav';
export declare class Viewport {
    /**
     * Reference of the related `HTMLElement`.
     */
    readonly element: HTMLElement;
    /**
     * Left-position relative to the Navscroll's client rect.
     */
    readonly offsetLeft: number;
    /**
     * Top-position relative to the Navscroll's client rect.
     */
    readonly offsetTop: number;
    /**
     * Left-position of the virtual viewport relative to the Navscroll's client rect.
     */
    readonly viewLeft: number;
    /**
     * Top-position of the virtual viewport relative to the Navscroll's client rect.
     */
    readonly viewTop: number;
    /**
     * Right-position of the virtual viewport relative to the Navscroll's client rect.
     */
    readonly viewRight: number;
    /**
     * Bottom-position of the virtual viewport relative to the Navscroll's client rect.
     */
    readonly viewBottom: number;
    constructor(element: HTMLElement, offsetLeft: number, offsetTop: number, viewLeft: number, viewTop: number, viewRight: number, viewBottom: number);
    static from(element: HTMLElement, viewport?: Viewport | null): Viewport;
    intersect(viewport: Viewport): Viewport;
    get isFirstScroll(): boolean;
    get isLastScroll(): boolean;
    children(targetSelector?: string, targetFilter?: (e: HTMLElement) => boolean): Dimension[];
}
export declare class Dimension {
    /**
     * Reference of the related `Viewport`.
     */
    readonly viewport: Viewport | null;
    /**
     * Reference of the related `HTMLElement`.
     */
    readonly element: HTMLElement;
    /**
     * Left-position of the outer element relative to the Navscroll's client rect.
     */
    readonly offsetLeft: number;
    /**
     * Top-position of the outer element relative to the Navscroll's client rect.
     */
    readonly offsetTop: number;
    /**
     * Right-position of the outer element relative to the Navscroll's client rect.
     */
    readonly offsetRight: number;
    /**
     * Bottom-position of the outer element relative to the Navscroll's client rect.
     */
    readonly offsetBottom: number;
    protected constructor(viewport: Viewport | null, element: HTMLElement, offsetLeft: number, offsetTop: number, offsetRight: number, offsetBottom: number);
    static from(element: HTMLElement, viewport?: Viewport | null): Dimension;
    intersect(viewport: Viewport): Dimension;
    get offsetWidth(): number;
    get offsetHeight(): number;
    within(viewport: Viewport): boolean;
    isPartiallyVisible(viewport: Viewport): Dimension | null;
    isFullyVisible(viewport: Viewport): Dimension | null;
    toViewport(): Viewport;
}
export type { ListItemProps, ListItemProps as NavscrollItemProps, ListItemProps as ItemProps };
export { ListItem, ListItem as NavscrollItem, ListItem as Item };
export interface NavscrollProps<TElement extends HTMLElement = HTMLElement> extends NavProps<TElement> {
    targetRef?: React.RefObject<HTMLElement> | HTMLElement | null;
    targetSelector?: string;
    targetFilter?: (e: HTMLElement) => boolean;
    interpolation?: boolean;
}
export declare function Navscroll<TElement extends HTMLElement = HTMLElement>(props: NavscrollProps<TElement>): JSX.Element;
export declare namespace Navscroll {
    var prototype: any;
}
export { Navscroll as default };
export type { OrientationName, OrientationVariant };
export type { ListStyle, ListVariant };
