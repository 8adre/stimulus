import { Application } from "./application"
import { ClassPropertiesBlessing } from "./class_properties"
import { Constructor } from "./constructor"
import { Context } from "./context"
import { DataMap } from "./data_map"
import { Scope } from "./scope"
import { TargetPropertiesBlessing } from "./target_properties"
import { TargetSet } from "./target_set"
import { ValuePropertiesBlessing } from "./value_properties"

export type ControllerConstructor = Constructor<Controller>

export class Controller {
  static blessings = [ ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing ]
  static targets: string[] = []

  readonly context: Context

  constructor(context: Context) {
    this.context = context
  }

  get application(): Application {
    return this.context.application
  }

  get scope(): Scope {
    return this.context.scope
  }

  get element(): Element {
    return this.scope.element
  }

  get identifier(): string {
    return this.scope.identifier
  }

  get targets(): TargetSet {
    return this.scope.targets
  }

  get data(): DataMap {
    return this.scope.data
  }

  initialize() {
    // Override in your subclass to set up initial controller state
  }

  connect() {
    // Override in your subclass to respond when the controller is connected to the DOM
  }

  disconnect() {
    // Override in your subclass to respond when the controller is disconnected from the DOM
  }
}
