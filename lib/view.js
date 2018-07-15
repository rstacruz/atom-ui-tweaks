'use babel'

import { TWEAKS, CLASS_NAMES } from './tweaks'

/**
 * The view
 */

export default class UiTweaksView {
  constructor(_state) {
    CLASS_NAMES.forEach(className => {
      document.body.classList.add(className)
    })
  }

  /*
   * Returns an object that can be retrieved when package is activated
   */

  serialize() {
    return {}
  }

  /*
   * Tear down any state and detach
   */

  destroy() {
    CLASS_NAMES.forEach(className => {
      document.body.classList.remove(className)
    })
  }
}
