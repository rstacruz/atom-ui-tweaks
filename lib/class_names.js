'use babel'

export const CLASS_DEFINITIONS = {
  'one-ui-tweaks--hide-encoding-status': {
    'status.hideEncodingStatus': true
  },
  'one-ui-tweaks--hide-line-ending-status': {
    'status.hideLineEndingStatus': true
  },
  'one-ui-tweaks--hide-vim-mode-plus-status': {
    'status.hideLineEndingStatus': true
  },
  'one-ui-tweaks--stealth-indent-guides': {
    'editor.stealthIndentGuides': true
  },
  'one-ui-tweaks--one-line-ctrl-p': {
    'other.oneLineCtrlP': true
  }
}

/**
 * Config names to subscribe to changes to.
 *
 * @example
 *     console.log(CLASS_NAMES)
 *     // => [
 *     //   ...
 *     // ]
 */

export const CLASS_NAMES = Object.keys(CLASS_DEFINITIONS)

/**
 * Config names to subscribe to changes to.
 *
 * @example
 *     console.log(CONFIG_KEYS)
 *     // => [
 *     //   'status.hideEncodingStatus',
 *     //   'status.hideLineEndingStatus',
 *     //   ...
 *     // ]
 */

export const CONFIG_KEYS = CLASS_NAMES.reduce((result, className) => {
  return [...result, ...Object.keys(CLASS_DEFINITIONS[className])]
}, [])

export default CLASS_DEFINITIONS
