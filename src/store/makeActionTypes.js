// @flow

import actionTypeCreator, {ASYNC as _ASYNC, SYNC as _SYNC} from 'redux-action-types-creator';

export type AsyncAction = {
  REQUEST: string,
  SUCCESS: string,
  FAILURE: string,
};

export const ASYNC = _ASYNC;
export const SYNC = _SYNC;

export default function makeActionTypes(namespace, typeDefinitions) {
  return actionTypeCreator(namespace, {asyncSuffix: ['REQUEST', 'SUCCESS', 'FAILURE']})(typeDefinitions);
}