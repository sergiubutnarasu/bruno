import { Component, Event, EventEmitter, Prop } from "@stencil/core";
import { StyleType } from "../../objects/types";

@Component({
  tag: "brn-toggle",
  styleUrl: "toggle.component.scss"
})
export class ToggleComponent {
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
          class={`brn-toggle__checkmark brn-toggle__checkmark--${this.type}`}
        />
        <span class="brn-toggle__text">
          <slot />
        </span>
      </label>
    );
  }

  private OnChangeHandler(event: any): any {
    this.changed.emit(event.target.checked);
  }
}
