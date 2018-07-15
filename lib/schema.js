'use babel'

const BOOL = {
  type: 'boolean',
  order: 1,
  default: false
}

const CATEGORY = {
  type: 'object',
  order: 1,
  collapsed: false
}

/**
 * Status bar configuration
 */

export const STATUS_CONFIG = {
  hideEncodingStatus: {
    ...BOOL,
    title: 'Hide encoding status',
    description: 'Hide the encoding dropdown (eg, "UTF-8")'
  },

  hideLineEndingStatus: {
    ...BOOL,
    title: 'Hide line ending status',
    description: 'Hide the line ending dropdown (eg, "LF")'
  },

  hideVimModePlusStatus: {
    ...BOOL,
    title: 'Hide vim-mode-plus status',
    description: 'Hide the vim mode plus indicator (eg, "N/I")'
  }
}

export const EDITOR_CONFIG = {
  properties: {
    stealthIndentGuides: {
      ...BOOL,
      title: 'Stealth indent guides',
      className: 'one-ui-tweaks--stealth-indent-guides'
    }
  }
}

/**
 * Others
 */

export const OTHER_CONFIG = {
  properties: {
    oneLineCtrlP: {
      ...BOOL,
      title: 'One-line Fuzzy Finder',
      description: 'A compact view for the fuzzy finder (Ctrl+P)'
    }
  }
}

export const CONFIG = {
  status: {
    ...CATEGORY,
    title: 'Status',
    description: 'Status bar tweaks',
    properties: STATUS_CONFIG
  },

  editor: {
    ...CATEGORY,
    title: 'Other',
    description: 'Editor tweaks',
    properties: EDITOR_CONFIG
  },

  other: {
    ...CATEGORY,
    title: 'Other',
    description: 'Other tweaks',
    properties: OTHER_CONFIG
  }
}

export default CONFIG
