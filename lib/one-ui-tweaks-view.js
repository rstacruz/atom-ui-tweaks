'use babel'

/**
 * Tweaks
 */

const TWEAKS = {
  'one-line-ctrl-p': {
    className: 'one-ui-tweaks--one-line-ctrl-p'
  },
  'hide-encoding-status': {
    className: 'one-ui-tweaks--hide-encoding-status'
  },
  'hide-line-ending-status': {
    className: 'one-ui-tweaks--hide-line-ending-status'
  },
  'hide-vim-mode-plus-status': {
    className: 'one-ui-tweaks--hide-vim-mode-plus-status'
  }
}

/*
 * Class names
 */

const CLASS_NAMES = [
  'one-ui-tweaks',
  ...Object.values(TWEAKS).map(tweak => tweak.className)
]

export default class OneUiTweaksView {
  constructor(serializedState) {
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
