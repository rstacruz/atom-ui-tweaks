'use babel'

/**
 * Tweaks
 */

export const TWEAKS = {
  oneLineCtrlP: {
    className: 'one-ui-tweaks--one-line-ctrl-p',
    title: 'One-line Fuzzy Finder',
    description: 'A compact view for the fuzzy finder (Ctrl+P)',
    type: 'boolean',
    order: 10,
    default: false
  },

  hideEncodingStatus: {
    className: 'one-ui-tweaks--hide-encoding-status',
    title: 'Status bar: Hide encoding status',
    description: 'Hide the encoding dropdown (eg, "UTF-8")',
    type: 'boolean',
    order: 10,
    default: false
  },

  hideLineEndingStatus: {
    className: 'one-ui-tweaks--hide-line-ending-status',
    description: 'Hide the line ending dropdown (eg, "LF")',
    type: 'boolean',
    order: 10,
    default: false
  },

  hideVimModePlusStatus: {
    className: 'one-ui-tweaks--hide-vim-mode-plus-status',
    type: 'boolean',
    order: 10,
    default: false
  },

  stealthIndentGuide: {
    className: 'one-ui-tweaks--stealth-indent-guide',
    type: 'boolean',
    order: 10,
    default: false
  }
}

/**
 * Class names
 */

export const CLASS_NAMES = [
  'one-ui-tweaks',
  ...Object.values(TWEAKS).map(tweak => tweak.className)
]

export default TWEAKS

export const CONFIG = TWEAKS
