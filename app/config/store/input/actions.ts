import { createAction } from 'typesafe-actions';
import { OnChangeTextParams, OnChangeMultipleTextsParams } from './types';

export const ON_CHANGE_TEXT = 'input/ON_CHANGE_TEXT';
export const ON_CHANGE_MULTIPLE_TEXTS = 'input/ON_CHANGE_MULTIPLE_TEXTS';
export const RESET_INPUT = 'input/RESET_INPUT';

export const onChangeText = createAction(ON_CHANGE_TEXT)<OnChangeTextParams>();
export const onChangeMultipleTexts = createAction(ON_CHANGE_MULTIPLE_TEXTS)<
  OnChangeMultipleTextsParams
>();
export const resetInput = createAction(RESET_INPUT)();
