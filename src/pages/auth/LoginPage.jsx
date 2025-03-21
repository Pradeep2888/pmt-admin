import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { UserLoginApi } from "../../service/operations/userApi";
import { Password } from "primereact/password";
import logo from '../../assets/logo.svg'

function LoginPage() {
    const navigate = useNavigate();

    return (
        <div className="container-full p-0 " style={{ height: "100vh" }}>
            <div className="container  d-flex flex-column justify-content-between h-100" >
                <div className="" >
                <div
                            className="recent-project-card-timeleft text-center mt-4 text-white"
                            style={{ fontSize: "42px",fontWeight:800 }}
                        >
                            Project Management Tool
                        </div>
                </div>
                <div className="" >
                    <div
                        className="p-5 m-auto rounded-2 "
                        style={{ background: "#FFF", width: "fit-content" }}
                    >
                        <div
                            className="recent-project-card-timeleft text-center"
                            style={{ fontSize: "32px" }}
                        >
                            Login
                        </div>
                        <div
                            className="recent-project-card-timeleft text-center my-3"
                            style={{ fontSize: "14px" }}
                        >
                            Sign in to project management tool
                        </div>
                        <div className="my-5">
                            <Formik
                                initialValues={{ email: "", password: "" }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = "Required";
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = "Invalid email address";
                                    }

                                    if (!values.password) {
                                        errors.password = "Required";
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    UserLoginApi(values, navigate);
                                    setSubmitting(false);
                                }}
                            >
                                {({ values, handleChange, handleBlur, isSubmitting }) => (
                                    <Form>
                                        <div className="w-100 mb-2">
                                            <label className="recent-project-card-timeleft">Email</label>
                                            <br />
                                            <Field type="email" name="email" className="np-input w-100" />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger recent-project-card-timeleft"
                                            />
                                        </div>
                                        <div>
                                            <label className="recent-project-card-timeleft">
                                                Password
                                            </label>
                                            <br />
                                            <Password
                                                feedback={false}
                                                toggleMask
                                                className="np-inputpassword p-0 w-100"
                                                name="password"
                                                value={values.password} // Bind to Formik state
                                                onChange={handleChange} // Update Formik state
                                                onBlur={handleBlur} // Mark as touched
                                            />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="text-danger recent-project-card-timeleft"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="np-submit-btn mt-4 w-50 mx-auto"
                                            disabled={isSubmitting}
                                        >
                                            Submit
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="demo-all-border my-4"></div>
                        {/* Uncomment this if you want a signup link */}
                        {/* <div className='nt-botom-text' >
                    <span>Don't have an account?</span>
                    <Link to="/signup" className='fw-bolder'> SignUp</Link>
                </div> */}
                    </div>
                </div>
                <div>
                    <p className=" recent-project-card-timeleft text-center text-white"  ><span >© 2025 All Right Reserved by Project Management Tool</span></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
