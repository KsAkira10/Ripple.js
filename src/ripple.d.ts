/// <reference types="jquery" />

declare namespace JQueryRipples {
  /** Options for the JQuery ripples plugin. */
  export interface RippleOptions {
    /** Enables additional debug logging, default to `false`. */
    debug: boolean;
    /** Events that should trigger the ripple effect, default to `mousedown`. */
    on: string;
    /** Opacity of the ripple effect, between 0 (transparent) and 1 (opaque). Defaults to `0.4`. */
    opacity: number;
    /** Color of the ripple effect, must be a valid CSS color. Defaults to `auto`. */
    color: string;
    /** Whether to allow multiple ripples per element. */
    multi: boolean;
    /** Duration of the ripple effect in seconds, default to `0.7`. */
    duration: number;
    /** Easing for the animation, must be a valid CSS3 easing function. Defaults to `linear`. */
    easing: string;
    /** Filter function for modifying the speed of the ripple. Defauls to the identiy function. */
    rate: (pxPerSecond: number) => number;
  }
}

interface JQueryStatic {
  /**
   * Attaches a ripple effect to all given items.
   * @param selector Selector for the elements to which to attach a ripple
   * effect.
   * @param options Options for the ripple effect. These are all optional and
   * with sensible defaults.
   */
  ripple(selector: string, options?: Partial<JQueryRipples.RippleOptions>): void;
}
