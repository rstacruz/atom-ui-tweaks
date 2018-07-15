'use babel'

import View from './view'
import { CompositeDisposable } from 'atom'
import { CONFIG } from './schema'

export default {
  view: null,
  subscriptions: null,

  activate(state) {
    console.log('atom-ui-tweaks: activate()')
    this.view = new View(state.viewState)

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-ui-tweaks:about': () => this.about()
      })
    )
  },

  deactivate() {
    this.subscriptions.dispose()
    this.view.destroy()
  },

  serialize() {
    return {
      viewState: this.view.serialize()
    }
  },

  about() {
    alert(':)')
  }
}

export const config = CONFIG

console.log('atom-ui-tweaks: loaded (but not activated!)')
