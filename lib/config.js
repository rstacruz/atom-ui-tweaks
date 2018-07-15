'use babel'

const BOOL = {
  type: 'boolean',
  default: false
}

const CATEGORY = {
  type: 'object',
  collapsed: false
}

/**
 * Status bar configuration
 */

export const STATUS_CONFIG = {
  barPosition: {
    title: 'Status bar position',
    type: 'string',
    enum: [
      { value: 'top', description: 'Top' },
      { value: 'default', description: 'Bottom (default)' }
    ],
    default: 'default'
  },

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
  stealthIndentGuides: {
    ...BOOL,
    title: 'Stealth indent guides',
    description:
      'Makes most indent guides invisible, except for the current block where the cursor is in. <br> Requires `editor.showIndentGuide` to be enabled'
  },

  topPadding: {
    title: 'Top padding',
    description:
      'Extra padding between the tabs and the editor. Only works with the `vim-mode-plus` extension',
    type: 'string',
    enum: [
      { value: '32px', description: '32px' },
      { value: '16px', description: '16px' },
      { value: 'default', description: '0px (default)' }
    ],
    default: 'default'
  }
}

/**
 * Others
 */

export const UI_CONFIG = {
  compactFuzzyFinder: {
    ...BOOL,
    title: 'One-line Fuzzy Finder',
    description:
      'A compact view for the fuzzy finder (Ctrl+P). Shows more lines by changing the default two-line display into one-line. <br> Requires the `fuzzy-finder` core extension'
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
    title: 'Editor',
    description: 'Editor tweaks',
    properties: EDITOR_CONFIG
  },

  ui: {
    ...CATEGORY,
    title: 'User interface',
    description: 'UI tweaks',
    properties: UI_CONFIG
  },

  other: {
    ...CATEGORY,
    title: 'Other',
    description: 'Other tweaks',
    properties: {}
  }
}

export default CONFIG
