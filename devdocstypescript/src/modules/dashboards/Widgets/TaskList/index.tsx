import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import TaskItem from "./TaskItem";
import AppList from "@devdocs/components/AppList";
import AppCard from "@devdocs/components/AppCard";
import { useIntl } from "react-intl";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import { TaskListType } from "@devdocs/types/models/dashboards/Widgets";

type TaskListProps = {
  data: TaskListType[];
};

const TaskList: React.FC<TaskListProps> = ({ data }) => {
  const taskData = data;

  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["dashboard.taskList"] as string}
      contentStyle={{ px: 0 }}
      action={
        <CloseIcon
          sx={{
            cursor: "pointer",
          }}
        />
      }
    >
      <AppScrollbar
        sx={{
          height: 263,
        }}
      >
        <AppList
          data={taskData}
          renderRow={(item) => {
            return <TaskItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TaskList;
