'use babel'

const BOOL = {
  type: 'boolean',
  default: false
}

const CATEGORY = {
  type: 'object',
  collapsed: false,
  order: 0
}

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
    description:
      'Hide the vim mode plus indicator (eg, "N/I"). Only works with the `vim-mode-plus` extension'
  },

  boldFileName: {
    ...BOOL,
    title: 'Bold file name',
    description:
      'Make the file name more visible in the status bar. Great for when the status bar is placed on top'
  },

  extraPadding: {
    ...BOOL,
    title: 'Extra padding'
  },

  inactiveOpacity: {
    title: 'Inactive opacity',
    description:
      "Fade out the other items in the status bar unless they're hovered",
    type: 'string',
    enum: [
      { value: '60%', description: '60%' },
      { value: '20%', description: '20%' },
      { value: '0%', description: '0%' },
      { value: 'default', description: 'Disabled (default)' }
    ],
    default: 'default'
  }
}

export const EDITOR_CONFIG = {
  stealthIndentGuides: {
    ...BOOL,
    title: 'Stealth indent guides',
    description:
      'Make most indent guides invisible, except for the current block where the cursor is in. Only works with the `indent-guide-improved` extension'
  },

  topPadding: {
    title: 'Top padding',
    description:
      'Add extra padding between the tabs and the editor. Only works with the `vim-mode-plus` extension',
    type: 'string',
    enum: [
      { value: '32px', description: '32px' },
      { value: '16px', description: '16px' },
      { value: 'default', description: '0px (default)' }
    ],
    default: 'default'
  },

  lineNumberStyle: {
    title: 'Line number style',
    description: 'Make editor line numbers a bit more subtle',
    type: 'string',
    default: 'default',
    enum: [
      { value: 'stealth', description: 'Stealth' },
      { value: 'default', description: 'Default' }
    ]
  }
}

export const UI_CONFIG = {
  compactFuzzyFinder: {
    ...BOOL,
    title: 'Compact fuzzy finder',
    description:
      'A compact view for the fuzzy finder (Ctrl+P). Shows more lines by changing the default two-line display into one-line. Requires the `fuzzy-finder` core extension'
  },

  hideFindAndReplaceCloseButton: {
    ...BOOL,
    title: 'Hide "Find and Replace" close button',
    description: 'Hide the close button on Ctrl+F; use `Esc` to close instead'
  },

  hidePaneSeparators: {
    ...BOOL,
    title: 'Hide pane separators',
    description: 'Hide the line between the panels in multi-panel mode'
  }
}

export const TAB_CONFIG = {
  separatorStyle: {
    title: 'Separator style',
    description:
      'Restyle the separators in between tabs in the tab bar. Note that this may be invisible in some syntax themes, and enabling this will remove the 2px line at the left of the active tab',
    type: 'string',
    default: 'default',
    enum: [
      { value: 'slight', description: 'Slight gradient' },
      { value: 'invisible', description: 'Invisible' },
      { value: 'default', description: 'Line (default)' }
    ]
  },

  borderRadius: {
    title: 'Border radius',
    description: 'Round the tabs in the tab bar',
    type: 'string',
    default: 'default',
    enum: [
      { value: 'xsmall', description: 'X-Small' },
      { value: 'small', description: 'Small' },
      { value: 'large', description: 'Large' },
      { value: 'default', description: 'None (default)' }
    ]
  },

  leftMargin: {
    title: 'Left margin',
    description:
      'Add an extra spacing to the left of the tab bar. This prevents tabs from "sticking" to the left side of the window',
    type: 'string',
    default: 'default',
    enum: [
      { value: 'small', description: 'Small' },
      { value: 'large', description: 'Large' },
      { value: 'default', description: 'None (default)' }
    ]
  }
}

export const TREE_CONFIG = {
  reduceIconSize: {
    ...BOOL,
    title: 'Reduce icon size',
    description:
      'Make file icons in the tree view a little smaller. Best experienced with the `file-icons` package'
  },

  autoHideTabBar: {
    ...BOOL,
    title: 'Auto-hide tab bar',
    description: 'Hide the sidebar tab bars until the sidebar is hovered upon'
  },

  tabBarPosition: {
    type: 'string',
    title: 'Tab bar position',
    enum: [
      { value: 'bottom', description: 'Bottom' },
      { value: 'default', description: 'Top (default)' }
    ],
    default: 'default'
  }
}

export const TERMINAL_CONFIG = {
  hideCloseTerminalButton: {
    ...BOOL,
    title: 'Hide "Close terminal" button',
    description:
      'Hides the &times; icon in the status bar. Requires the `platformio-ide-terminal` extension'
  },

  hideAddNewTerminalButton: {
    ...BOOL,
    title: 'Hide "Add new terminal" button',
    description:
      'Hide the + icon in the status bar. Requires the `platformio-ide-terminal` extension'
  },

  hideInsertTextButton: {
    ...BOOL,
    title: 'Hide "Insert text" button',
    description:
      'Hide the button with the keyboard icon in the terminal toolbar. Requires the `platformio-ide-terminal` extension'
  },

  lineHeight: {
    title: 'Line height',
    type: 'string',
    enum: [
      { value: '1.25em', description: '1.25em' },
      { value: 'default', description: 'Default' }
    ],
    default: 'default'
  },

  stealthToolbar: {
    ...BOOL,
    title: 'Stealth toolbar',
    description:
      'Make the toolbar translucent, and moves it to the bottom for a slimmer profile. Requires the `platformio-ide-terminal` extension'
  },

  cursorColor: {
    title: 'Cursor color',
    description:
      'Make the cursor less attention-grabbing. Requires the `platformio-ide-terminal` extension',
    type: 'string',
    enum: [
      { value: 'teal', description: 'Teal' },
      { value: 'gray', description: 'Gray' },
      { value: 'default', description: 'Default' }
    ],
    default: 'default'
  },

  reduceSeparatorLineIntensity: {
    ...BOOL,
    title: 'Reduce separator line intensity',
    description:
      'Make the line above the terminal blend in better. Makes most difference in light themes. Requires the `platformio-ide-terminal` extension'
  },

  syntaxAdaptiveBackgroundColor: {
    ...BOOL,
    title: 'Syntax-adaptive background color',
    description:
      'Use background colors based on the syntax. Requires the `platformio-ide-terminal` extension'
  }
}

export const MODAL_CONFIG = {
  disableAnimation: {
    ...BOOL,
    title: 'Disable animation',
    description:
      'Show modal dialogs instantly without fading in the overlay screen. Gives the impression of a faster, more responsive UI.'
  },

  simplifyBackdrop: {
    ...BOOL,
    title: 'Simplify backdrop',
    description: 'Fade the editor out instead of dimming the entire screen.'
  }
}

export const OTHER_CONFIG = {
  fakeTrafficLights: {
    ...BOOL,
    title: 'Fake traffic lights in the status bar',
    description: "Nope, they don't work"
  }
}

export const CONFIG = {
  status: {
    ...CATEGORY,
    title: 'Status bar',
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

  modal: {
    ...CATEGORY,
    title: 'Modal dialogs',
    properties: MODAL_CONFIG
  },

  tab: {
    ...CATEGORY,
    title: 'Tab bar',
    properties: TAB_CONFIG
  },

  tree: {
    ...CATEGORY,
    title: 'Tree view',
    properties: TREE_CONFIG
  },

  terminal: {
    ...CATEGORY,
    title: 'Terminal',
    properties: TERMINAL_CONFIG
  },

  other: {
    ...CATEGORY,
    title: 'Experimental tweaks (Unsupported)',
    collapsed: true,
    order: 9,
    properties: OTHER_CONFIG
  }
}

export default CONFIG
