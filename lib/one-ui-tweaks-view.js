'use babel'

export default class OneUiTweaksView {
  constructor(serializedState) {
    document.body.classList.add('one-ui-tweaks')

    // // Create root element
    // this.element = document.createElement('div')
    // this.element.classList.add('one-ui-tweaks')
    //
    // // Create message element
    // const message = document.createElement('div')
    // message.textContent = "The OneUiTweaks package is Alive! It's ALIVE!"
    // message.classList.add('message')
    // this.element.appendChild(message)
  }

  /*
   * Returns an object that can be retrieved when package is activated
   */

  serialize() {}

  /*
   * Tear down any state and detach
   */

  destroy() {
    // this.element.remove()
    document.body.classList.remove('one-ui-tweaks')
  }

  getElement() {
    // return this.element
  }
}
