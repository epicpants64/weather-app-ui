import { SETTING_DESTINATION, SET_DESTINATION, ERROR_SETTING_DESTINATION } from './destination.actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case SETTING_DESTINATION:
      return {
        ...state,
        settingDestination: true,
        selectedDestination: null,
        errorSettingDestination: null
      }
    case SET_DESTINATION:
      return {
        ...state,
        settingDestination: false,
        selectedDestination: action.payload,
        errorSettingDestination: null
      }
    case ERROR_SETTING_DESTINATION:
      return {
        ...state,
        settingDestination: false,
        selectedDestination: null,
        errorSettingDestination: action.payload
      }
    default:
      return state
  }
}
