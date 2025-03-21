import { Formik, Form, Field, ErrorMessage } from 'formik';
import DropBox from '../dropboxinput/DropBox';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UpdateSingleTask } from '../../../service/operations/taskApi';
import AssignmentUserSearch from './AssignmentUserSearch';

function AssignmentForm(assignment) {
    const assignmentdata = assignment.assignment
    const [selectedFiles, setSelectedFiles] = useState([]);
    const params = useParams();
    const initialValues = {
        taskInput: '' || assignmentdata.task_heading,
        description: '' || assignmentdata.task_description,
        assign_user_id: assignmentdata.assign_user_id,
    };
    const validate = (values) => {
        const errors = {};
        if (!values.taskInput) {
            errors.taskInput = 'Task input is required';
        }
        if (!values.description) {
            errors.description = 'Description is required';
        }
        if (!values.assign_user_id) {
            errors.assign_user_id = 'Assignee is required';
        }
        return errors;
    };

    const handleSubmit = (values) => {
        const formData = new FormData();
        formData.append('task_heading', values.taskInput);
        formData.append('task_description', values.description);
        formData.append('assign_user_id', values.assign_user_id);
        formData.append('project_id', params.id);
        formData.append('_method', "PUT");
        selectedFiles.forEach((file) => {
            formData.append('documents[]', file);
        });
        UpdateSingleTask(formData, assignmentdata.id);
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

    console.log(assignmentdata)

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
                        <AssignmentUserSearch
                            onSelect={(user) => setFieldValue('assign_user_id', user.id)}
                            user_id={assignmentdata.assign_user_id}
                        />
                        <ErrorMessage name="assign_user_id" component="div" style={{ color: 'red' }} />
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
                            data={assignmentdata.task_description ? assignmentdata.task_description : "Please add task description"}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setFieldValue('description', data);
                            }}
                        />

                        <ErrorMessage name="description" component="div" style={{ color: 'red' }} />
                    </div>

                    <div className="col-12 mb-3">
                        <DropBox onFileChange={onFileChange} existingDocuments={assignmentdata.documents} />
                    </div>

                    <div>
                        <button type="submit" className="np-submit-btn mx-auto mt-4">
                            Update Task
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default AssignmentForm