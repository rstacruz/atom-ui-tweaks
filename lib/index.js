'use babel'
/* @flow */
/* global atom */

// $FlowFixMe$
import { CompositeDisposable } from 'atom'
import { CONFIG } from './config'
import ClassNameManager from './class_name_manager'

export type State = {}

export default {
  subscriptions: null,
  config: CONFIG,

  /**
   * Go go gadget atom-ui-tweaks!
   */

  activate (state: State) {
    this.manager = new ClassNameManager(this.getHooks())

    // So they can all be disposed later
    this.subscriptions = new CompositeDisposable()

    // Register config observers
    const keys = this.manager.getConfigKeys()
    keys.forEach((configKey: string) => {
      const fullConfigKey = `atom-ui-tweaks.${configKey}`

      this.subscriptions.add(
        /* $FlowFixMe$ */
        atom.config.observe(fullConfigKey, value => {
          this.onConfigChange(configKey, value)
        })
      )
    })

    this.subscriptions.add(
      /* $FlowFixMe$ */
      atom.commands.add(
        'atom-workspace',
        'atom-ui-tweaks:open-settings',
        () => {
          atom.workspace.open('atom://config/packages/atom-ui-tweaks')
        }
      )
    )
  },

  /**
   * Handles changes in config keys. Also triggered on the plugin's first
   * activation.
   */

  onConfigChange (configKey: string, value: any) {
    this.manager.handleConfigChange(configKey, value)
  },

  /**
   * Returns hooks to be passed onto `ClassNameManager`.
   */

  getHooks () {
    return {
      onAdd: (className: string) => {
        // $FlowFixMe$
        atom.workspace.element.classList.add(className)
      },

      onRemove: (className: string) => {
        // $FlowFixMe$
        atom.workspace.element.classList.remove(className)
      }
    }
  },

  /**
   * Lies in a deep and dreamless slumber.
   */

  deactivate () {
    this.manager.teardown()
    this.subscriptions.dispose()
  },

  serialize (): State {
    return {}
  }
}
