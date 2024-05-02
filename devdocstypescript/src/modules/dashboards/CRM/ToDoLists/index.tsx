import React from 'react';
import AppCard from '@devdocs/components/AppCard';
import AppScrollbar from '@devdocs/components/AppScrollbar';
import AppList from '@devdocs/components/AppList';
import TodoCell from './TodoCell';
import { TodoListType } from '@devdocs/types/models/dashboards/CRM';
import IntlMessages from '@devdocs/helpers/IntlMessages';

type Props = {
  data: TodoListType[];
};
const ToDoLists = ({ data }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id='dashboard.crm.toDoLists' />}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={<IntlMessages id='common.viewAll' />}
    >
      <AppScrollbar style={{ paddingLeft: 20, paddingRight: 20 }}>
        <AppList
          data={data}
          renderRow={(todo) => <TodoCell key={todo.id} todo={todo} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default ToDoLists;
