'use babel'

export const PREFIX = 'atom-ui-tweaks'

/**
 * Kebab case string helper.
 *
 * @example
 *     kebabify('ui.atomLogoSplashScreen')
 *     // => 'ui--atom-logo-splash-screen'
 */
export function kebabify (key) {
  return key
    .toString()
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .replace(/ /g, '--')
    .replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
}

/**
 * Builds class definitions
 */

export function tuplesToClassDefinitions (tuples) {
  return tuples.reduce((result, [key, value]) => {
    const className =
      value === true
        ? `${PREFIX}--${kebabify(key)}`
        : `${PREFIX}--${kebabify(key)}--${kebabify(value)}`

    return {
      ...result,
      [className]: { [key]: value }
    }
  }, {})
}
