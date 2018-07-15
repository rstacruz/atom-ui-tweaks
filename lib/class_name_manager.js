'use babel'

import { CLASS_DEFINITIONS } from './class_names'

/**
 * Handles config change
 */

export function handleConfigChange(
  configKey /*: string */,
  value /*: boolean */,
  { onAdd, onRemove }
) {
  const classMap = getClassNameDerivatives(configKey, value)

  Object.keys(classMap).forEach((className /*: string */) => {
    // If the class name is supposed to be present (eg, `true`)
    const newValue = classMap[className]

    if (newValue) {
      onAdd(className)
    } else {
      onRemove(className)
    }
  })
}

export function deactivate({ onRemove }) {
  Object.keys(CLASS_DEFINITIONS).forEach((className /*: string */) => {
    onRemove(className)
  })
}

/**
 * Gets CSS classNames that are derived from a given `configKey`, along with
 * if they're expected to be set or unset.
 *
 * @example
 *     getClassNameDerivatives('editor.slightIndentGuides')
 *     // => { 'atom-ui-tweaks--slight-indent-guides': true }
 */

export function getClassNameDerivatives(configKey, value) {
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
