import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import IntlMessages from '@devdocs/helpers/IntlMessages';
import AddTaskForm from './AddTaskForm';
import AppDialog from '@devdocs/components/AppDialog';
import { useAuthUser } from '@devdocs/hooks/AuthHooks';
import { postDataApi } from '@devdocs/hooks/APIHooks';
import { useInfoViewActionsContext } from '@devdocs/context/AppContextProvider/InfoViewContextProvider';
import { useCalendarActionsContext } from '../../context/CalendarContextProvider';
import { useIntl } from 'react-intl';
import { getDateObject, getFormattedDate } from '@devdocs/helpers/DateHelper';
import { generateRandomUniqueNumber } from '@devdocs/helpers/Common';

type Props = {
  isAddTaskOpen: boolean;
  onCloseAddTask: () => void;
  selectedDate?: string;
};

const AddNewTask = ({ isAddTaskOpen, onCloseAddTask, selectedDate }: Props) => {
  const { messages } = useIntl();
  const validationSchema = yup.object({
    title: yup.string().required(String(messages['validation.titleRequired'])),
  });

  const { reCallAPI } = useCalendarActionsContext();
  const { user } = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();
  const [taskLabels, setTaskLabels] = useState([]);

  return (
    <AppDialog
      dividers
      maxWidth='md'
      open={isAddTaskOpen}
      onClose={() => onCloseAddTask()}
      title={<IntlMessages id='todo.addNewTask' />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          title: '',
          assignedTo: '',
          label: [],
          priority: 3,
          startDate: selectedDate
            ? getDateObject(selectedDate)
            : getDateObject(),
          endDate: selectedDate ? getDateObject(selectedDate) : getDateObject(),
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const newTask = {
            id: generateRandomUniqueNumber(),
            isStarred: false,
            hasAttachments: false,
            isRead: true,
            folderValue: 120,
            createdBy: {
              name: user.displayName ? user.displayName : 'User',
              image: user.photoURL,
            },
            image: '/assets/images/dummy2.jpg',
            status: 1,
            comments: [],
            ...data,
            createdOn: getFormattedDate(undefined),
            startDate: getFormattedDate(data.startDate),
            endDate: getFormattedDate(data.endDate),
            label: taskLabels,
          };

          postDataApi('/calender', infoViewActionsContext, {
            task: newTask,
          })
            .then(() => {
              reCallAPI();
              infoViewActionsContext.showMessage(
                'New Task has been created successfully!',
              );
            })
            .catch((error) => {
              infoViewActionsContext.fetchError(error.message);
            });

          onCloseAddTask();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <AddTaskForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
            setTaskLabels={setTaskLabels}
            taskLabels={taskLabels}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default AddNewTask;
