import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserRegisterApi } from '../../service/operations/userApi';
import { useNavigate } from 'react-router-dom';

function MemberForm() {
    const navigate = useNavigate()
    return (
        <div>
            <Formik
                initialValues={{ name: '', email: '', department: '', password: '', phone: '', shifttime: '', permission: [] }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Plese Write User Name';
                    }
                    if (!values.department) {
                        errors.department = 'Plese select department';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Please enter your password';
                    } else if (values.password.length < 8) {
                        errors.password = 'Password must be at least 8 characters';
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
                    } else if (
                        !/^\d{10}$/.test(values.phone)
                    ) {
                        errors.phone = 'Invalid phone number; must be 10 digits.';
                    }
                    if (!values.shifttime) {
                        errors.shifttime = 'Plese select Shift Time';
                    }

                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {

                    let newvalues = { ...values, "password_confirmation": values.password, "type": 1, status: 1, "phone": String(values.phone) }

                    console.log(values)
                    // UserRegisterApi(newvalues, navigate)
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, values, setFieldValue }) => (
                    <Form className='row w-75 mt-5 mx-auto' >
                        <div className='col-lg-12 col-md-12 pb-3' >
                            <label htmlFor="name" className='recent-project-card-timeleft' style={{ fontSize: "14px" }} >Member Name</label>
                            <br />
                            <Field type="text" name="name" placeholder="Name of the user" className="w-100 np-input" />
                            <ErrorMessage className='error-message' name="name" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='col-lg-12 col-md-12 pb-3' >
                            <label htmlFor="department" className='recent-project-card-timeleft' style={{ fontSize: "14px" }} >Department</label>
                            <br />
                            <Field as="select" name="department" className="w-100 np-input" >
                                <option value="" label="Select department" />
                                <option value="Admin" label="Admin" />
                                <option value="Sales Manager" label="Sales Manager" />
                                <option value="Sales Associate" label="Sales Associate" />
                                <option value="Development Manager" label="Development Manager" />
                                <option value="Developer" label="Developer" />
                                <option value="Content writer" label="Content writer" />
                                <option value="Graghic Designer" label="Graghic Designer" />
                                <option value="Front End Deverloper" label="Front End Deverloper" />
                                <option value="Quality Manager" label="Quality Manager" />
                                <option value="Quality Associate" label="Quality Associate" />
                            </Field>
                            <ErrorMessage className='error-message' name="department" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='col-lg-6 col-md-12 pb-3' >
                            <label htmlFor="email" className='recent-project-card-timeleft' style={{ fontSize: "14px" }} >User Email</label>
                            <br />
                            <Field type="text" name="email" placeholder="abc@eglobalteam.com" className="w-100 np-input" />
                            <ErrorMessage className='error-message' name="email" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='col-lg-6 col-md-12 pb-3' >
                            <label className='recent-project-card-timeleft' style={{ fontSize: "14px" }} htmlFor="password">Password</label>
                            <br />
                            <Field type="password" name="password" placeholder="password" className="w-100 np-input" />
                            <ErrorMessage className='error-message' name="password" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='col-lg-6 col-md-12 pb-3' >
                            <label className='recent-project-card-timeleft' style={{ fontSize: "14px" }} htmlFor="phone">Phone Number</label>
                            <br />
                            <Field type="number" name="phone" placeholder="Enter only 10 digit Phone number" className="w-100 np-input" />
                            <ErrorMessage className='error-message' name="phone" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='col-lg-6 col-md-12 pb-3' >
                            <label htmlFor="shifttime" className='recent-project-card-timeleft' style={{ fontSize: "14px" }} >Shift Time</label>
                            <br />
                            <Field as="select" name="shifttime" className="w-100 np-input" >
                                <option value="" label="Select shift time" />
                                <option value="09:00 AM - 06:30 PM" label="09:00 AM - 06:30 PM" />
                                <option value="12:00 AM - 09:30 PM" label="12:00 AM - 09:30 PM" />
                                <option value="04:00 PM - 01:00 AM" label="04:00 PM - 01:00 AM" />
                                <option value="08:00 PM - 06:00 AM" label="08:00 PM - 06:00 AM" />
                            </Field>
                            <ErrorMessage className='error-message' name="shifttime" component="div" style={{ color: 'red' }} />
                        </div>

                        <div className='col-12 recent-project-card-timeleft py-2' style={{ fontSize: "14px" }}  >
                            Permission
                        </div>
                        {/* Create Project Permission */}
                        <div className="col-5 pb-2 d-flex">
                            <label className="permission-text w-50">Create Project</label>
                            <div className="d-flex gap-3">
                                <label className="permission-text">
                                    <Field
                                        
                                        type="radio"
                                        name="create-project"
                                        value="yes"
                                        checked={values.permission.includes("create-project")}
                                        onChange={() => {
                                            let updatedPermissions = [...values.permission];
                                            if (!updatedPermissions.includes("create-project")) {
                                                updatedPermissions.push("create-project");
                                            }
                                            setFieldValue("permission", updatedPermissions);
                                        }}
                                    />
                                    Yes
                                </label>
                                <label className="permission-text">
                                    <Field
                                        type="radio"
                                        name="create-project"
                                        value="no"
                                        checked={!values.permission.includes("create-project")}
                                        onChange={() => {
                                            let updatedPermissions = values.permission.filter(
                                                (perm) => perm !== "create-project"
                                            );
                                            setFieldValue("permission", updatedPermissions);
                                        }}
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        {/* Create Demo Permission */}
                        <div className="col-5 pb-2 d-flex ms-auto">
                            <label className="permission-text w-50">Create Demo :</label>
                            <div className="d-flex gap-3 ">
                                <label className="permission-text" >
                                    <Field
                                        type="radio"
                                        name="create-demo"
                                        value="yes"
                                        checked={values.permission.includes("create-demo")}
                                        onChange={() => {
                                            let updatedPermissions = [...values.permission];
                                            if (!updatedPermissions.includes("create-demo")) {
                                                updatedPermissions.push("create-demo");
                                            }
                                            setFieldValue("permission", updatedPermissions);
                                        }}
                                    />
                                    Yes
                                </label>
                                <label className="permission-text" >
                                    <Field
                                        type="radio"
                                        name="create-demo"
                                        value="no"
                                        checked={!values.permission.includes("create-demo")}
                                        onChange={() => {
                                            let updatedPermissions = values.permission.filter(
                                                (perm) => perm !== "create-demo"
                                            );
                                            setFieldValue("permission", updatedPermissions);
                                        }}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        <div className='col-12 ' >
                            <button type="submit" className='np-submit-btn mx-auto mt-4' disabled={isSubmitting}>
                                Register
                            </button>
                        </div>
                    </Form>


                )}
            </Formik>
        </div>
    )
}

export default MemberForm




