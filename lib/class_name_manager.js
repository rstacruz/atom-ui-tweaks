'use babel'
/* @flow */

import { CLASS_DEFINITIONS } from './class_names'
import type { ClassDefinitions, ClassNameList } from './types'

export type ConstructorProps = {
  classDefinitions: ClassDefinitions,
  onAdd: (className: string) => any,
  onRemove: (className: string) => any
}

/**
 * Manages class names in an Atom workspace.
 *
 * This class has NO dependencies (not even Atom), so it can be easily tested or
 * repurposed.
 *
 * @example
 *     const manager = new ClassNameManager({
 *       onAdd: (className) => { ... },
 *       onRemove: (className) => { ... }
 *     })
 *
 *     // Will call `onAdd` and `onRemove` hooks as needed
 *     manager.handleConfigChange('status.hideVimModePlusStatus', true)
 *
 *     // Ensures all classes are removed
 *     manager.teardown()
 */

export default class ClassNameManager {
  classDefinitions: ClassDefinitions
  onAdd: (className: string) => any
  onRemove: (className: string) => any

  constructor ({ classDefinitions, onAdd, onRemove }: ConstructorProps) {
    this.classDefinitions = classDefinitions || CLASS_DEFINITIONS
    this.onAdd = onAdd
    this.onRemove = onRemove
  }

  /**
   * Performs tasks needed as a `configKey` changes its value
   */

  handleConfigChange (configKey: string, value: boolean) {
    const classMap = this.getClassNameDerivatives(configKey, value)

    Object.keys(classMap).forEach((className: string) => {
      // If the class name is supposed to be present (eg, `true`)
      const newValue = classMap[className]

      if (newValue) {
        this.onAdd(className)
      } else {
        this.onRemove(className)
      }
    })
  }

  /**
   * Performs cleanups.
   *
   * Removes all class names by calling the `onRemove` hook on every className
   * we know. Returns nothing.
   */

  teardown () {
    Object.keys(this.classDefinitions).forEach((className: string) => {
      this.onRemove(className)
    })
  }

  /**
   * Returns config keys that we want to observe.
   *
   * @example
   *     manager.getConfigKeys()
   *
   *     // => [
   *     //   'status.hideEncodingStatus',
   *     //   'status.hideLineEndingStatus',
   *     //   ...
   *     // ]
   */

  getConfigKeys () {
    const classNames = Object.keys(this.classDefinitions)

    return classNames.reduce((result, className) => {
      const newClassNames = Object.keys(this.classDefinitions[className] || {})
      return [...result, ...newClassNames]
    }, [])
  }

  /**
   * Gets CSS classNames that are derived from a given `configKey`, along with
   * if they're expected to be set or unset.
   *
   * @example
   *     getClassNameDerivatives('editor.slightIndentGuides')
   *     // => { 'atom-ui-tweaks--slight-indent-guides': true }
   */

  getClassNameDerivatives (configKey: string, value: any) {
    return Object.keys(this.classDefinitions).reduce(
      (result: ClassNameList, className: string) => {
        // Config keys associated with a given className
        // (eg, `{ 'editor.oneLineCtrlP': true }`)
        const definition = this.classDefinitions[className]

        if (!definition.hasOwnProperty(configKey)) return result

        // The config is expected to have this value
        const expected = definition[configKey]

        const isMatch = expected === value
        return { ...result, [className]: isMatch }
      },
      {}
    )
  }
}
