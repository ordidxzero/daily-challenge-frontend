import { createAction } from 'typesafe-actions';
import { OnChangeTextParams } from './types';

export const ON_CHANGE_TEXT = 'input/ON_CHANGE_TEXT';
export const RESET_INPUT = 'input/RESET_INPUT';

export const onChangeText = createAction(ON_CHANGE_TEXT)<OnChangeTextParams>();
export const resetInput = createAction(RESET_INPUT)();
