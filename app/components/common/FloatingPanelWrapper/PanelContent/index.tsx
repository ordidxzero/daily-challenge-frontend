import React from 'react';
import {
  TodoDataType,
  MoldDataType,
  PanelContentProps,
} from '../../../../@types';
import CreatePanelContent from './CreatePanelContent';
import TodoPanelContent from './TodoPanelContent';
import MoldPanelContent from './MoldPanelContent';

function PanelContent({ type = 'create', data }: PanelContentProps) {
  if (type === 'todo' && data) {
    return <TodoPanelContent data={data as TodoDataType} />;
  }
  if (type === 'mold' && data) {
    return <MoldPanelContent data={data as MoldDataType} />;
  }
  return <CreatePanelContent />;
}

export default React.memo(PanelContent);
