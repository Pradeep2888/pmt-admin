import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useParams } from 'react-router-dom';
import { UpdateSingleProjectApi } from '../../service/operations/projectApi';
import TextEditor from '../project/TextEditor';
import { useSelector } from 'react-redux';

function ProjectForm() {

  const params=useParams()
  const today = new Date().toISOString().split("T")[0];
  const {data}=useSelector((state)=>state.singleproject)


    return (
        <div>
            <Formik
                initialValues={{ name:data.name?data.name:'', due_date:data.due_date?data.due_date:'', priority:data.priority?data.priority:'', description:data.description?data.description:'', status: 'active', project_type:data.project_type?data.project_type:'new', code:data.code?data.code:'' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Please write project name';
                    }
                    if (!values.due_date) {
                        errors.due_date = 'Please select due date';
                    }
                    if (!values.priority) {
                        errors.priority = 'Please select priority';
                    }
                    if (!values.description) {
                        errors.description = 'Please provide description';
                    }
                    if (!values.project_type) {
                        errors.project_type = 'Please select project type';
                    }
                    if (!values.code) {
                        errors.code = 'Please provide project code';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    UpdateSingleProjectApi(values, params.id);

                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='row w-75 mt-5 mx-auto'>
                        <div className='col-12 pb-2'>
                            <label htmlFor="name" className='recent-project-card-timeleft' style={{ fontSize: "14px" }}>Project Name</label>
                            <br />
                            <Field type="text" name="name" placeholder="Name of the project" className="w-100 np-input" />
                            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                        </div>

                        <div className='col-lg-6 col-md-12 pb-2'>
                            <label htmlFor="due_date" className='recent-project-card-timeleft' style={{ fontSize: "14px" }}>Due Date</label>
                            <br />
                            <Field type="date" name="due_date" className="w-100 np-input"  min={today} />
                            <ErrorMessage name="due_date" component="div" style={{ color: 'red' }} />
                        </div>

                        <div className='col-lg-6 col-md-12 pb-2'>
                            <label htmlFor="priority" className='recent-project-card-timeleft' style={{ fontSize: "14px" }}>Priority</label>
                            <br />
                            <Field as="select" name="priority" className="w-100 np-input">
                                <option value="" label="Select project priority" />
                                <option value="low" label="Low" />
                                <option value="medium" label="Moderate" />
                                <option value="high" label="High" />
                            </Field>
                            <ErrorMessage name="priority" component="div" style={{ color: 'red' }} />
                        </div>

                        <div className='col-lg-6 col-md-12 pb-2'>
                            <label htmlFor="project_type" className='recent-project-card-timeleft' style={{ fontSize: "14px" }}>Project Type</label>
                            <br />
                            <Field as="select" name="project_type" className="w-100 np-input">
                                <option value="" label="Select project type" />
                                <option value="old" label="Old" />
                                <option value="new" label="New" />
                                <option value="demo" label="Demo" />
                            </Field>
                            <ErrorMessage name="project_type" component="div" style={{ color: 'red' }} />
                        </div>

                        <div className='col-lg-6 col-md-12 pb-2'>
                            <label htmlFor="code" className='recent-project-card-timeleft' style={{ fontSize: "14px" }}>Project Code</label>
                            <br />
                            <Field type="text" name="code" placeholder="Enter project code" className="w-100 np-input" />
                            <ErrorMessage name="code" component="div" style={{ color: 'red' }} />
                        </div>

                        <div className='col-12 pb-4'>
                            <label className='recent-project-card-timeleft' style={{ fontSize: "14px" }} htmlFor="description">Description</label>
                            <br />
                            <TextEditor name="description" />
                            <ErrorMessage name="description" component="div" style={{ color: 'red' }} />
                        </div>

                        <div className='col-12'>
                            <button type="submit" className='np-submit-btn mx-auto mt-4' disabled={isSubmitting}>
                                Update
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ProjectForm;

