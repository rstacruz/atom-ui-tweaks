'use babel'

/**
 * Tweaks
 */

export const TWEAKS = {
  'one-line-ctrl-p': {
    className: 'one-ui-tweaks--one-line-ctrl-p',
    title: 'One-line Fuzzy Finder',
    description: 'A compact view for the fuzzy finder (Ctrl+P)'
  },

  'hide-encoding-status': {
    className: 'one-ui-tweaks--hide-encoding-status',
    title: 'Status bar: Hide encoding status',
    description: 'Hide the encoding dropdown (eg, "UTF-8")'
  },

  'hide-line-ending-status': {
    className: 'one-ui-tweaks--hide-line-ending-status',
    description: 'Hide the line ending dropdown (eg, "LF")'
  },

  'hide-vim-mode-plus-status': {
    className: 'one-ui-tweaks--hide-vim-mode-plus-status'
  },

  'stealth-indent-guide': {
    className: 'one-ui-tweaks--stealth-indent-guide'
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
