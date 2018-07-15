'use babel'

import { CompositeDisposable } from 'atom'
import { CONFIG } from './schema'
import { CONFIG_KEYS } from './class_names'
import { handleConfigChange, deactivate } from './class_name_manager'

export default {
  subscriptions: null,
  config: CONFIG,

  activate(state) {
    // So they can all be disposed later
    this.subscriptions = new CompositeDisposable()

    // Register commands
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-ui-tweaks:about': () => this.about()
      })
    )

    // Register config observers
    // TODO: derive CONFIG_KEYS here
    CONFIG_KEYS.forEach((configKey /*: string */) => {
      const fullConfigKey = `atom-ui-tweaks.${configKey}`

      this.subscriptions.add(
        atom.config.observe(fullConfigKey, value => {
          this.onConfigChange(configKey, value)
        })
      )
    })
  },

  onConfigChange(configKey, value) {
    handleConfigChange(configKey, value, this.getHooks())
  },

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
    deactivate(this.getHooks())
    this.subscriptions.dispose()
  },

  serialize() {
    return {}
  },

  about() {
    alert(':)')
  }
}
