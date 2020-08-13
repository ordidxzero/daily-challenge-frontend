import React from 'react';
import { TodoType, MoldDataType } from '../../../../@types';
import CreatePanelContent from './CreatePanelContent';
import TodoPanelContent from './TodoPanelContent';

function PanelContent({
  type = 'create',
  data,
}: {
  type?: 'create' | 'todo' | 'mold';
  data?: TodoType | MoldDataType;
}) {
  if (type === 'todo' && data) {
    return <TodoPanelContent data={data} />;
  }
  return <CreatePanelContent />;
}

export default React.memo(PanelContent);
