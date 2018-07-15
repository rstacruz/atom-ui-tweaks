'use babel'

import { CompositeDisposable } from 'atom'
import { CONFIG } from './schema'
import { CONFIG_KEYS, CLASS_DEFINITIONS } from './class_names'

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
    const classMap = getClassNameDerivatives(configKey, value)

    Object.keys(classMap).forEach((className /*: string */) => {
      // If the class name is supposed to be present (eg, `true`)
      const newValue = classMap[className]

      if (newValue) {
        atom.workspace.element.classList.add(className)
      } else {
        atom.workspace.element.classList.remove(className)
      }
    })
  },

  deactivate() {
    CLASS_NAMES.forEach((className /*: string */) => {
      atom.workspace.element.classList.remove(className)
    })

    this.subscriptions.dispose()
  },

  serialize() {
    return {}
  },

  about() {
    alert(':)')
  }
}

/**
 * Gets CSS classNames that are derived from a given `configKey`, along with
 * if they're expected to be set or unset.
 *
 * @example
 *     getClassNameDerivatives('editor.slightIndentGuides')
 *     // => { 'atom-ui-tweaks--slight-indent-guides': true }
 */

function getClassNameDerivatives(configKey, value) {
  return Object.keys(CLASS_DEFINITIONS).reduce((result, className) => {
    // Config keys associated with a given className
    // (eg, `{ 'editor.oneLineCtrlP': true }`)
    const definition = CLASS_DEFINITIONS[className]

    if (!definition.hasOwnProperty(configKey)) return result

    // The config is expected to have this value
    const expected = definition[configKey]

    const isMatch = expected === value
    return { ...result, [className]: isMatch }
  }, {})
}
