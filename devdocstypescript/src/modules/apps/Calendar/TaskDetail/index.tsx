import React, { useEffect } from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import { useParams } from 'next/navigation';
import AppsHeader from '@devdocs/components/AppsContainer/AppsHeader';
import AppsContent from '@devdocs/components/AppsContainer/AppsContent';
import { MailDetailSkeleton } from '@devdocs/components/AppSkeleton/MailDetailSkeleton';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import { TodoType } from '@devdocs/types/models/apps/Todo';

const TaskDetail = () => {
  const params = useParams();
  const { all } = params;
  const id = all.slice(-1)[0];
  const [{ apiData: selectedTask }, { setQueryParams, setData }] =
    useGetDataApi<TodoType>('/calender/detail', undefined, { id }, false);

  useEffect(() => {
    setQueryParams({ id });
  }, [id]);

  const onUpdateSelectedTask = (data: TodoType) => {
    setData(data);
  };

  if (!selectedTask) {
    return <MailDetailSkeleton />;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader
          selectedTask={selectedTask}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody
          selectedTask={selectedTask}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
