import { SETTING_DESTINATION, SET_DESTINATION, ERROR_SETTING_DESTINATION } from './destination.actions'

export const setLocation = async ({ dispatch, currentLocation }) => {
  dispatch({ type: SET_DESTINATION, payload: currentLocation })
}

export const settingLocation = ({ dispatch }) => {
  dispatch({ type: SETTING_DESTINATION })
}

export const errorSettingLocation = ({ dispatch }) => {
  dispatch({ type: ERROR_SETTING_DESTINATION, payload: 'No location found for this ZIP code due to a technical issue' })
}
