import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import IntlMessages from '@devdocs/helpers/IntlMessages';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { MenuItem } from '@mui/material';
import { putDataApi } from '@devdocs/hooks/APIHooks';
import { useInfoViewActionsContext } from '@devdocs/context/AppContextProvider/InfoViewContextProvider';
import { useCalendarContext } from '../../../context/CalendarContextProvider';
import { TodoType } from '@devdocs/types/models/apps/Todo';

type Props = {
  selectedTask: TodoType;
  onUpdateSelectedTask: (data: TodoType) => void;
};

const TaskStatus = ({ selectedTask, onUpdateSelectedTask }: Props) => {
  const { statusList } = useCalendarContext();
  const infoViewActionsContext = useInfoViewActionsContext();
  const onChangeStatus = (event: SelectChangeEvent<number>) => {
    const task = selectedTask;
    task.status = event.target.value as number;
    putDataApi<TodoType>('calender', infoViewActionsContext, {
      task: selectedTask,
    })
      .then((data) => {
        onUpdateSelectedTask(data);
        infoViewActionsContext.showMessage('Task Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel id='status-select-outlined-label'>
        <IntlMessages id='common.status' />
      </InputLabel>
      <Select
        labelId='status-select-outlined-label'
        label={<IntlMessages id='common.status' />}
        value={selectedTask.status}
        defaultValue={selectedTask.status}
        onChange={(event) => onChangeStatus(event)}
        sx={{
          cursor: 'pointer',
          width: '117px',
          '& .MuiOutlinedInput-input': {
            paddingBottom: 2.5,
            paddingTop: 2.5,
          },
        }}
      >
        {statusList.map((status) => {
          return (
            <MenuItem
              key={status.type}
              value={status.type}
              sx={{
                padding: 2,
                cursor: 'pointer',
              }}
            >
              {status.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskStatus;