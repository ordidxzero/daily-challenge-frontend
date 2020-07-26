import { createAction } from 'typesafe-actions';
import { OnChangeTextParams } from './types';

export const ON_CHANGE_TEXT = 'input/ON_CHANGE_TEXT';

export const onChangeText = createAction(ON_CHANGE_TEXT)<OnChangeTextParams>();
