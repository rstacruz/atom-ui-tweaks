'use babel'

export const CLASS_DEFINITIONS = {
  'one-ui-tweaks': {},
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

export const CLASS_NAMES = Object.keys(CLASS_DEFINITIONS)

export default CLASS_DEFINITIONS
