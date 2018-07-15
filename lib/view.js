'use babel'

import { CLASS_NAMES } from './class_names'

/**
 * The view
 */

export default class UiTweaksView {
  constructor() {
    alert(CLASS_NAMES.join('\n'))
    CLASS_NAMES.forEach(className => {
      atom.workspace.element.classList.add(className)
    })
  }

  /*
   * Tear down any state and detach
   */

  destroy() {
    CLASS_NAMES.forEach(className => {
      atom.workspace.element.classList.remove(className)
    })
  }
}
