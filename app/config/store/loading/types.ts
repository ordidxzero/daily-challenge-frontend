import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type LoadingState = Record<string, boolean>;

export type LoadingAction = ActionType<typeof actions>;
