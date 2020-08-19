import React from 'react';
import { TodoDataType, MoldDataType } from '../../../../@types';
import CreatePanelContent from './CreatePanelContent';
import TodoPanelContent from './TodoPanelContent';
import MoldPanelContent from './MoldPanelContent';

function PanelContent({
  type = 'create',
  data,
}: {
  type?: 'create' | 'todo' | 'mold';
  data?: TodoDataType | MoldDataType;
}) {
  if (type === 'todo' && data) {
    return <TodoPanelContent data={data as TodoDataType} />;
  }
  if (type === 'mold' && data) {
    return <MoldPanelContent data={data as MoldDataType} />;
  }
  return <CreatePanelContent />;
}

export default React.memo(PanelContent);
