import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";
import { StyleType } from "../../objects/types";

@Component({
  tag: "brn-checkbox",
  styleUrl: "checkbox.component.scss"
})
export class CheckboxComponent {
  @Event() changed: EventEmitter<boolean>;
  @Prop() checked: boolean;
  @Prop() type: keyof StyleType = "primary";

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.checked}
          onChange={e => this.OnChangeHandler(e)}
        />
        <span
          class={`brn-checkbox__checkmark brn-checkbox__checkmark--${
            this.type
          }`}
        />
        <span class="brn-checkbox__text">
          <slot />
        </span>
      </label>
    );
  }

  private OnChangeHandler(event: any): any {
    this.changed.emit(event.target.checked);
  }
}
