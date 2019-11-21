import {
  ACTIVATE_TAB,
  DEACTIVATE_TABS
} from './tabnavActions'

const defaultState = {
  items: []
}

let index = 1

function tabnavReducer(state = defaultState, action) {
  let newItems

  switch (action.type) {
    case ACTIVATE_TAB:
      newItems = state.items.slice()
      newItems.push({
        ...action.payload,
        id: index++
      })

      return {
        ...state,
        items: newItems
      }

    case DEACTIVATE_TABS:
      newItems = state.items.slice()
      const indexToEdit = state.items.findIndex((item) => item.id === payload.id)
      if (itemToEdit) {
        newItems[indexToEdit] = action.payload
      }
      return {
        ...state,
        items: newItems
      }

    default:
      return state
  }
}

export default itemReducer
