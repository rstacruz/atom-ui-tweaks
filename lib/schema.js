'use babel'

export const STATUS_CONFIG = {
  title: 'Status',
  type: 'object',
  description: 'Status bar tweaks',
  order: 1,
  collapsed: false,
  properties: {
    hideEncodingStatus: {
      className: 'one-ui-tweaks--hide-encoding-status',
      title: 'Hide encoding status',
      description: 'Hide the encoding dropdown (eg, "UTF-8")',
      type: 'boolean',
      order: 10,
      default: false
    },

    hideLineEndingStatus: {
      className: 'one-ui-tweaks--hide-line-ending-status',
      title: 'Hide line ending status',
      description: 'Hide the line ending dropdown (eg, "LF")',
      type: 'boolean',
      order: 10,
      default: false
    },

    hideVimModePlusStatus: {
      className: 'one-ui-tweaks--hide-vim-mode-plus-status',
      title: 'Hide vim-mode-plus status',
      description: 'Hide the vim mode plus indicator (eg, "N/I")',
      type: 'boolean',
      order: 10,
      default: false
    }
  }
}

export const OTHER_CONFIG = {
  title: 'Other',
  type: 'object',
  description: 'Other tweaks',
  order: 9,
  collapsed: false,
  properties: {
    stealthIndentGuide: {
      className: 'one-ui-tweaks--stealth-indent-guide',
      type: 'boolean',
      order: 10,
      default: false
    },

    oneLineCtrlP: {
      className: 'one-ui-tweaks--one-line-ctrl-p',
      title: 'One-line Fuzzy Finder',
      description: 'A compact view for the fuzzy finder (Ctrl+P)',
      type: 'boolean',
      order: 10,
      default: false
    }
  }
}

export const CONFIG = {
  status: STATUS_CONFIG,
  other: OTHER_CONFIG
}

/**
 * Tweaks
 */

export const TWEAKS = {
  ...STATUS_CONFIG.properties,
  ...OTHER_CONFIG.properties
}

/**
 * Class names
 */

export const CLASS_NAMES = [
  'one-ui-tweaks',
  ...Object.values(TWEAKS).map(tweak => tweak.className)
]

export default TWEAKS
