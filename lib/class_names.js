'use babel'

import { tuplesToClassDefinitions } from './helpers'

export const CLASS_TUPLES = [
  ['editor.cursorLineStyle', 'disabled'],
  ['editor.cursorLineStyle', 'brighten'],
  ['editor.forceCommentFontStyle', 'normal'],
  ['editor.forceCommentFontStyle', 'italic'],
  ['editor.lineNumberStyle', 'stealth'],
  ['editor.stealthIndentGuides', true],
  ['editor.topPadding', '10px'],
  ['editor.topPadding', '16px'],
  ['editor.topPadding', '20px'],
  ['editor.topPadding', '32px'],
  ['findInProject.subtleHeaderRows', true],
  ['findInProject.subtleMatchCount', true],
  ['findInProject.subtleHighlights', true],
  ['findInProject.subtleLineNumbers', true],
  ['findInProject.subtleSeparators', true],
  ['modal.disableAnimation', true],
  ['modal.simplifyBackdrop', true],
  ['other.enableStagingTweaks', true],
  ['other.fakeTrafficLights', true],
  ['status.barPosition', 'top'],
  ['status.boldFileName', true],
  ['status.extraPadding', true],
  ['status.hideEncodingStatus', true],
  ['status.hideLineEndingStatus', true],
  ['status.hideVimModePlusStatus', true],
  ['status.inactiveOpacity', '0%'],
  ['status.inactiveOpacity', '20%'],
  ['status.inactiveOpacity', '60%'],
  ['tab.borderRadius', 'large'],
  ['tab.borderRadius', 'small'],
  ['tab.borderRadius', 'xsmall'],
  ['tab.leftMargin', 'large'],
  ['tab.leftMargin', 'small'],
  ['tab.separatorStyle', 'invisible'],
  ['tab.separatorStyle', 'slight'],
  ['tab.style', 'aqua'],
  ['terminal.cursorColor', 'gray'],
  ['terminal.cursorColor', 'teal'],
  ['terminal.hideAddNewTerminalButton', true],
  ['terminal.hideCloseTerminalButton', true],
  ['terminal.hideInsertTextButton', true],
  ['terminal.lineHeight', '1.25em'],
  ['terminal.reduceSeparatorLineIntensity', true],
  ['terminal.stealthToolbar', true],
  ['terminal.syntaxAdaptiveBackgroundColor', true],
  ['tree.autoHideTabBar', true],
  ['tree.reduceIconSize', true],
  ['tree.tabBarPosition', 'bottom'],
  ['ui.atomLogoSplashScreen', true],
  ['ui.compactFuzzyFinder', true],
  ['ui.compactSymbolsView', true],
  ['ui.hideFindAndReplaceCloseButton', true],
  ['ui.hidePaneSeparators', true]
]

/**
 * CSS class names, and the config keys associated with them
 */

export const CLASS_DEFINITIONS = tuplesToClassDefinitions(CLASS_TUPLES)

export default CLASS_DEFINITIONS
