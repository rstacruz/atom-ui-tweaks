'use babel'

import { CompositeDisposable } from 'atom'
import { CONFIG } from './config'
import { CONFIG_KEYS } from './class_names'
import ClassNameManager from './class_name_manager'

export default {
  subscriptions: null,
  config: CONFIG,

  /**
   * Go go gadget atom-ui-tweaks!
   */

  activate(state) {
    this.manager = new ClassNameManager(this.getHooks())

    // So they can all be disposed later
    this.subscriptions = new CompositeDisposable()

    // Register config observers
    const keys = this.manager.getConfigKeys()
    keys.forEach((configKey /*: string */) => {
      const fullConfigKey = `atom-ui-tweaks.${configKey}`

      this.subscriptions.add(
        atom.config.observe(fullConfigKey, value => {
          this.onConfigChange(configKey, value)
        })
      )
    })
  },

  /**
   * Handles changes in config keys. Also triggered on the plugin's first
   * activation.
   */

  onConfigChange(configKey, value) {
    this.manager.handleConfigChange(configKey, value)
  },

  /**
   * Returns hooks to be passed onto `ClassNameManager`.
   */

  getHooks() {
    return {
      onAdd: (className /*: string */) => {
        atom.workspace.element.classList.add(className)
      },
      onRemove: (className /*: string */) => {
        atom.workspace.element.classList.remove(className)
      }
    }
  },

  /**
   * Lies in a deep and dreamless slumber.
   */

  deactivate() {
    this.manager.teardown()
    this.subscriptions.dispose()
  },

  serialize() {
    return {}
  }
}
