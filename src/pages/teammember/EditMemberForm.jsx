import { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { GetSingleUserApi, UpdateUserApi } from '../../service/operations/userApi';

function EditMemberForm() {
    const [userstatus, setUserStatus] = useState()
    const [initialValues, setInitialValues] = useState(null);
    const Navigate = useNavigate()
    const params = useParams()


    console.log(params.id )


    useEffect(()=>{
        GetSingleUserApi(params.id)
        .then((res)=>{
            console.log(res)
            const user = res.user;
            setUserStatus(user.status)
            setInitialValues({
                name: user.name || "",
                email: user.email || "",
                department: user.department || "",
                phone: user.phone || "",
                shifttime: user.shifttime || "",
                type:user.type || "",
                permission:user.permission ? JSON.parse(user.permission) : [],
            });
        })
        .catch((err)=>{
            alert(err,"User not found")
        })
    },[params.id])




    // useEffect(() => {
    //     if (data[params.id - 1]) {
    //         const user = data[params.id - 1];
    //         setUserStatus(user.status)
    //         setInitialValues({
    //             name: user.name || "",
    //             email: user.email || "",
    //             department: user.department || "",
    //             phone: user.phone || "",
    //             shifttime: user.shifttime || "",
    //             type:user.type || "",
    //             permission:user.permission ? JSON.parse(user.permission) : [],
    //         });
    //     }
    // }, [data, params]);





    const handleDeleteUser = () => {
         confirm("Do you want to delete user");
    }

    return (

        <div className=' homepage  p-4 gap-3' style={{ height: "calc(100vh - 3rem)" }} >
            <div className='row' >
                <div className='col-12 d-flex justify-content-between' style={{ height: 'fit-content' }} >
                    <div style={{ cursor: 'pointer' }} onClick={() => Navigate("/user/list")} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.043 4.34366C12.5012 4.80188 12.5012 5.54479 12.043 6.00301L7.00601 11.04H19.4267C20.0747 11.04 20.6 11.5653 20.6 12.2133C20.6 12.8613 20.0747 13.3867 19.4267 13.3867H7.00601L12.043 18.4237C12.5012 18.8819 12.5012 19.6248 12.043 20.083C11.5848 20.5412 10.8419 20.5412 10.3837 20.083L3.34366 13.043C2.88545 12.5848 2.88545 11.8419 3.34366 11.3837L10.3837 4.34366C10.8419 3.88545 11.5848 3.88545 12.043 4.34366Z" fill="#212121" />
                        </svg>
                    </div>
                    <div className='d-flex' style={{ cursor: 'pointer' }}  >
                        <button className='me-4 editproject-btn bg-danger' onClick={() => handleDeleteUser()} ><i className="fa-regular fa-trash-can"></i> Delete User</button>
                        <button type="button" className={`editproject-btn ${userstatus ? "bg-success" : "bg-secondary"}`} onClick={() => setUserStatus(userstatus===1?0:1)} >{userstatus===1 ? <i className="fa-solid fa-person-arrow-up-from-line"></i> : <i className="fa-solid fa-person-arrow-down-to-line"></i>}{userstatus===1 ? "Mark Inactive" : "Mark Active"}</button>
                    </div>
                </div>

                <div className='col-12 mt-5' >
                    <div className='demo-heading text-center' style={{ fontSize: "32px" }} >Edit User Details</div>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues || {
                            name: "",
                            email: "",
                            department: "",
                            phone: "",
                            shifttime: "",
                            permission: [],
                            type:"",
                        }}
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
                        onSubmit={(values, { setSubmitting }) => {
                            UpdateUserApi({...values,status:userstatus,phone: String(values.phone)},Navigate,params.id)
                                setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className='row w-75 mt-5 mx-auto' >
                                <div className='col-lg-6 col-md-12 pb-2' >
                                    <label htmlFor="name" className='recent-project-card-timeleft' style={{ fontSize: "14px" }} >User Name</label>
                                    <br />
                                    <Field type="text" name="name" placeholder="Name of the user" className="w-100 np-input" />
                                    <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                                </div>
                                <div className='col-lg-6 col-md-12 pb-2' >
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
                                    <ErrorMessage name="department" component="div" style={{ color: 'red' }} />
                                </div>
                                <div className='col-lg-6 col-md-12 pb-2' >
                                    <label htmlFor="email" className='recent-project-card-timeleft' style={{ fontSize: "14px" }} >User Email</label>
                                    <br />
                                    <Field type="text" name="email" placeholder="abc@eglobalteam.com" className="w-100 np-input" />
                                    <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                                </div>
                              
                                <div className='col-lg-6 col-md-12 pb-2' >
                                    <label className='recent-project-card-timeleft' style={{ fontSize: "14px" }} htmlFor="phone">Phone Number</label>
                                    <br />
                                    <Field type="number" name="phone" placeholder="Enter only 10 digit Phone number" className="w-100 np-input" />
                                    <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
                                </div>
                                <div className='col-lg-6 col-md-12 pb-2' >
                                    <label htmlFor="shifttime" className='recent-project-card-timeleft' style={{ fontSize: "14px" }} >Shift Time</label>
                                    <br />
                                    <Field as="select" name="shifttime" className="w-100 np-input" >
                                        <option value="" label="Select shift time" />
                                        <option value="9:00 - 6:30 PM" label="9:00 - 6:30 PM" />
                                    </Field>
                                    <ErrorMessage name="shifttime" component="div" style={{ color: 'red' }} />
                                </div>
                                <div className='col-12 sidebar-divider my-5' ></div>
                                <div className='col-12 demo-heading text-center mb-5' style={{ fontSize: '32px' }} >
                                    Assessed Permission
                                </div>
                                <div className='col-12 pb-2 ' >
                                    <div className="checkbox-wrapper-44 mb-3">
                                        <label className="toggleButton recent-project-card-timeleft d-flex gap-3" style={{ fontSize: "18px", alignItems: "center" }}>
                                            <Field type="checkbox" name="permission" value="create-project" />
                                            <div>
                                                <svg viewBox="0 0 44 44">
                                                    <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                                                </svg>
                                            </div>
                                            Create Project
                                        </label>
                                    </div>
                                    <div className="checkbox-wrapper-44">
                                        <label className="toggleButton recent-project-card-timeleft d-flex gap-3" style={{ fontSize: "18px", alignItems: "center" }}>
                                            <Field type="checkbox" name="permission" value="create-demo" />
                                            <div>
                                                <svg viewBox="0 0 44 44">
                                                    <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                                                </svg>
                                            </div>
                                            Create Demo
                                        </label>
                                    </div>
                                </div>
                                <div className='col-12 d-flex' >
                                    <button type="submit" className='btn btn-success px-5 mx-auto fw-bolder mt-4' disabled={isSubmitting}>
                                        Update Details
                                    </button>
                                </div>
                            </Form>


                        )}
                    </Formik>
                </div>

            </div>
        </div>

    )
}

export default EditMemberForm
