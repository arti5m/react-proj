export const ACTIVATE_TAB = 'ACTIVATE_TAB'
export const DEACTIVATE_TABS = 'DEACTIVATE_TABS'

export const activateTab = (itemId) => ({
  type: ACTIVATE_TAB,
  payload: itemId
})

export const deactivateTabs = (editedItem) => ({
  type: DEACTIVATE_TABS,
  payload: null
})
