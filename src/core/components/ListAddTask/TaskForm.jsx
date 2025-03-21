import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserSearch from './UserSearch';
import DropBox from '../dropboxinput/DropBox';
import { CreateTaskApi } from '../../../service/operations/taskApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch } from 'react-redux';
import { fetchSingleProjects } from '../../../features/project/singleprojectSlice';

const TaskForm = () => {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const params = useParams();
  const dispatch = useDispatch()

  const initialValues = {
    taskInput: '',
    description: '',
    assignee: null,
  };

  const validate = (values) => {
    const errors = {};

    if (!values.taskInput) {
      errors.taskInput = 'Task input is required';
    }

    if (!values.description) {
      errors.description = 'Description is required';
    }

    if (!values.assignee) {
      errors.assignee = 'Assignee is required';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('task_heading', values.taskInput);
    formData.append('task_description', values.description);
    formData.append('assign_user_id', values.assignee.id);
    formData.append('project_id', params.id);

    selectedFiles.forEach((file) => {
      formData.append('documents[]', file);
    });

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }

    CreateTaskApi(formData, "/");
  };

  const onFileChange = (files) => {
    if (files) {
      const newFiles = Array.from(files);
      setSelectedFiles((prevFiles) => {
        const updatedFiles = [...prevFiles, ...newFiles];

        if (updatedFiles.length > 10) {
          alert("Please select up to 10 files.");
          return prevFiles;
        }

        let totalSize = 0;
        updatedFiles.forEach((file) => {
          totalSize += file.size;
        });

        totalSize = (totalSize / 1024 / 1024).toFixed(2);

        if (totalSize > 3) {
          alert(`Total file size is greater than 3 MB. Current size: ${totalSize} MB.`);
          return prevFiles;
        }
        return updatedFiles;
      });
    }
  };

  useEffect(() => {
    dispatch(fetchSingleProjects(params.id));
  }, [dispatch, params.id])

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="row w-100">
          {/* User Search */}
          <div className="col-12 mb-3">
            <UserSearch
              onSelect={(user) => setFieldValue('assignee', user)}
            />
            <ErrorMessage name="assignee" component="div" style={{ color: 'red' }} />
          </div>

          <div className="col-12 mb-3">
            <label
              htmlFor="taskInput"
              className="recent-project-card-timeleft"
              style={{ fontSize: '14px' }}
            >
              Task Name
            </label>
            <Field
              type="text"
              id="taskInput"
              name="taskInput"
              placeholder="Enter task name"
              className="w-100 np-input"
            />
            <ErrorMessage name="taskInput" component="div" style={{ color: 'red' }} />
          </div>

          <div className="col-12 mb-3">
            <label
              htmlFor="description"
              className="recent-project-card-timeleft"
              style={{ fontSize: '14px' }}
            >
              Description
            </label>

            <CKEditor
              editor={ClassicEditor}
              data=""
              onChange={(event, editor) => {
                const data = editor.getData();
                setFieldValue('description', data);
              }}
            />

            <ErrorMessage name="description" component="div" style={{ color: 'red' }} />
          </div>

          <div className="col-12 mb-3">
            <DropBox onFileChange={onFileChange} />
          </div>

          <div>
            <button type="submit" className="np-submit-btn mx-auto mt-4">
              Add Task
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
