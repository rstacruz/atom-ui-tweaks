'use babel'

import OneUiTweaksView from './one-ui-tweaks-view'
import { CompositeDisposable } from 'atom'

export default {
  view: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.view = new OneUiTweaksView(state.viewState)

    // this.modalPanel = atom.workspace.addModalPanel({
    //   item: this.view.getElement(),
    //   visible: false
    // })

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'one-ui-tweaks:toggle': () => this.toggle()
      })
    )
  },

  deactivate() {
    // this.modalPanel.destroy()
    this.subscriptions.dispose()
    this.view.destroy()
  },

  serialize() {
    return {
      viewState: this.view.serialize()
    }
  },

  toggle() {
    alert('OneUiTweaks was toggled!')

    // return this.modalPanel.isVisible()
    //   ? this.modalPanel.hide()
    //   : this.modalPanel.show()
  }
}
