/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  StyleType,
  TabType,
} from './objects/types';

export namespace Components {
  interface BrnCheckbox {
    'checked': boolean;
    'type': keyof StyleType;
  }
  interface BrnCollapse {
    'active': boolean;
  }
  interface BrnColumn {
    'columns': number;
    'total': number;
  }
  interface BrnDropdown {
    'active': boolean;
    'closeable': boolean;
  }
  interface BrnRadio {
    'checked': boolean;
    'name': string;
    'type': keyof StyleType;
  }
  interface BrnRow {}
  interface BrnSlider {}
  interface BrnTab {
    'active': boolean;
    'name': string;
  }
  interface BrnTabs {}
  interface BrnToggle {
    'checked': boolean;
    'type': keyof StyleType;
  }
}

declare global {


  interface HTMLBrnCheckboxElement extends Components.BrnCheckbox, HTMLStencilElement {}
  var HTMLBrnCheckboxElement: {
    prototype: HTMLBrnCheckboxElement;
    new (): HTMLBrnCheckboxElement;
  };

  interface HTMLBrnCollapseElement extends Components.BrnCollapse, HTMLStencilElement {}
  var HTMLBrnCollapseElement: {
    prototype: HTMLBrnCollapseElement;
    new (): HTMLBrnCollapseElement;
  };

  interface HTMLBrnColumnElement extends Components.BrnColumn, HTMLStencilElement {}
  var HTMLBrnColumnElement: {
    prototype: HTMLBrnColumnElement;
    new (): HTMLBrnColumnElement;
  };

  interface HTMLBrnDropdownElement extends Components.BrnDropdown, HTMLStencilElement {}
  var HTMLBrnDropdownElement: {
    prototype: HTMLBrnDropdownElement;
    new (): HTMLBrnDropdownElement;
  };

  interface HTMLBrnRadioElement extends Components.BrnRadio, HTMLStencilElement {}
  var HTMLBrnRadioElement: {
    prototype: HTMLBrnRadioElement;
    new (): HTMLBrnRadioElement;
  };

  interface HTMLBrnRowElement extends Components.BrnRow, HTMLStencilElement {}
  var HTMLBrnRowElement: {
    prototype: HTMLBrnRowElement;
    new (): HTMLBrnRowElement;
  };

  interface HTMLBrnSliderElement extends Components.BrnSlider, HTMLStencilElement {}
  var HTMLBrnSliderElement: {
    prototype: HTMLBrnSliderElement;
    new (): HTMLBrnSliderElement;
  };

  interface HTMLBrnTabElement extends Components.BrnTab, HTMLStencilElement {}
  var HTMLBrnTabElement: {
    prototype: HTMLBrnTabElement;
    new (): HTMLBrnTabElement;
  };

  interface HTMLBrnTabsElement extends Components.BrnTabs, HTMLStencilElement {}
  var HTMLBrnTabsElement: {
    prototype: HTMLBrnTabsElement;
    new (): HTMLBrnTabsElement;
  };

  interface HTMLBrnToggleElement extends Components.BrnToggle, HTMLStencilElement {}
  var HTMLBrnToggleElement: {
    prototype: HTMLBrnToggleElement;
    new (): HTMLBrnToggleElement;
  };
  interface HTMLElementTagNameMap {
    'brn-checkbox': HTMLBrnCheckboxElement;
    'brn-collapse': HTMLBrnCollapseElement;
    'brn-column': HTMLBrnColumnElement;
    'brn-dropdown': HTMLBrnDropdownElement;
    'brn-radio': HTMLBrnRadioElement;
    'brn-row': HTMLBrnRowElement;
    'brn-slider': HTMLBrnSliderElement;
    'brn-tab': HTMLBrnTabElement;
    'brn-tabs': HTMLBrnTabsElement;
    'brn-toggle': HTMLBrnToggleElement;
  }
}

declare namespace LocalJSX {
  interface BrnCheckbox {
    'checked'?: boolean;
    'onChanged'?: (event: CustomEvent<boolean>) => void;
    'type'?: keyof StyleType;
  }
  interface BrnCollapse {
    'active'?: boolean;
  }
  interface BrnColumn {
    'columns'?: number;
    'total'?: number;
  }
  interface BrnDropdown {
    'active'?: boolean;
    'closeable'?: boolean;
  }
  interface BrnRadio {
    'checked'?: boolean;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<boolean>) => void;
    'type'?: keyof StyleType;
  }
  interface BrnRow {}
  interface BrnSlider {}
  interface BrnTab {
    'active'?: boolean;
    'name'?: string;
    'onTabChanged'?: (event: CustomEvent<TabType>) => void;
    'onTabLoaded'?: (event: CustomEvent<TabType>) => void;
  }
  interface BrnTabs {}
  interface BrnToggle {
    'checked'?: boolean;
    'onChanged'?: (event: CustomEvent<boolean>) => void;
    'type'?: keyof StyleType;
  }

  interface IntrinsicElements {
    'brn-checkbox': BrnCheckbox;
    'brn-collapse': BrnCollapse;
    'brn-column': BrnColumn;
    'brn-dropdown': BrnDropdown;
    'brn-radio': BrnRadio;
    'brn-row': BrnRow;
    'brn-slider': BrnSlider;
    'brn-tab': BrnTab;
    'brn-tabs': BrnTabs;
    'brn-toggle': BrnToggle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'brn-checkbox': LocalJSX.BrnCheckbox & JSXBase.HTMLAttributes<HTMLBrnCheckboxElement>;
      'brn-collapse': LocalJSX.BrnCollapse & JSXBase.HTMLAttributes<HTMLBrnCollapseElement>;
      'brn-column': LocalJSX.BrnColumn & JSXBase.HTMLAttributes<HTMLBrnColumnElement>;
      'brn-dropdown': LocalJSX.BrnDropdown & JSXBase.HTMLAttributes<HTMLBrnDropdownElement>;
      'brn-radio': LocalJSX.BrnRadio & JSXBase.HTMLAttributes<HTMLBrnRadioElement>;
      'brn-row': LocalJSX.BrnRow & JSXBase.HTMLAttributes<HTMLBrnRowElement>;
      'brn-slider': LocalJSX.BrnSlider & JSXBase.HTMLAttributes<HTMLBrnSliderElement>;
      'brn-tab': LocalJSX.BrnTab & JSXBase.HTMLAttributes<HTMLBrnTabElement>;
      'brn-tabs': LocalJSX.BrnTabs & JSXBase.HTMLAttributes<HTMLBrnTabsElement>;
      'brn-toggle': LocalJSX.BrnToggle & JSXBase.HTMLAttributes<HTMLBrnToggleElement>;
    }
  }
}


