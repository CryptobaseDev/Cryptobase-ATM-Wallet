import { Middleware } from 'redux'

import { Dispatch, RootState } from '../../types/reduxTypes'

export const loginStatusChecker: Middleware<{}, RootState, Dispatch> = store => next => action => {
  const state = store.getState()
  const { loginStatus } = state.ui.settings

  const allowedActions = ['LOGOUT', 'REACT_NATIVE_ROUTER_FLUX_PUSH', 'REACT_NATIVE_ROUTER_FLUX_FOCUS']
  return loginStatus === false && !allowedActions.includes(action.type) ? action : next(action)
}
