'use babel'

import { CompositeDisposable } from 'atom'
import { CONFIG } from './config'
import { CONFIG_KEYS } from './class_names'
import ClassNameManager from './class_name_manager'

export default {
  subscriptions: null,
  config: CONFIG,

  activate(state) {
    this.manager = new ClassNameManager(this.getHooks())

    // So they can all be disposed later
    this.subscriptions = new CompositeDisposable()

    // Register commands
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-ui-tweaks:about': () => this.about()
      })
    )

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

  onConfigChange(configKey, value) {
    this.manager.handleConfigChange(configKey, value)
  },

  /**
   * Returns hooks to be passed onto `ClassNameManager`.
   */

  getHooks() {
    return {
      onAdd: className => {
        atom.workspace.element.classList.add(className)
      },
      onRemove: className => {
        atom.workspace.element.classList.remove(className)
      }
    }
  },

  deactivate() {
    this.manager.teardown()
    this.subscriptions.dispose()
  },

  serialize() {
    return {}
  },

  about() {
    alert(':)')
  }
}
