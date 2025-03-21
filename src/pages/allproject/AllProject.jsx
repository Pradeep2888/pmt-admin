import { useEffect, useState } from 'react'
import Button from '../../core/components/FilterBtn/Button'
import TaskSkeleton from '../../core/components/task/TaskSkeleton.jsx'
import { Link, useNavigate } from 'react-router-dom'
import SingleProjectMedia from '../singleprojectdetail/SingleProjectMedia.jsx'
import ProjectCard from './ProjectCard.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProjects } from '../../features/project/projectSlice.js'
import useTop3ClosestDueDates from '../../customHooks/useTop3ClosestDueDates.js'


function AllProject() {

    const navigate = useNavigate()
    const [childstate, setChildState] = useState("Details")
    const dispatch = useDispatch();
    const projectData = useSelector((state) => state.project.data);
    const newprojectdata = projectData?.filter((item) => {
        return item.project_type !== "demo"
    })


    useEffect(() => {
        dispatch(fetchAllProjects());
    }, [dispatch]);

    const top3Projects = useTop3ClosestDueDates(newprojectdata);

    // const getBtnValue = (value) => {
    //     setChildState(value);
    // };
console.log(projectData)
    return (
        <div className=' homepage  p-4 gap-3' style={{ height: "calc(100vh - 3rem)" }}>
            <div className='row' >
                <div className="col-12"><span className="demo-heading">All Projects</span></div>
                <div className='col-12 mt-3 d-flex justify-content-start gap-2 demo-filter-area' >
                    {/* <Button type={"Details"} returnBtnValue={getBtnValue} /> */}
                    {/* <Button type={"Media"} returnBtnValue={getBtnValue} /> */}
                </div>
                <div className='col-12 mt-2 demo-all-border mx-2'  ></div>


                {
                    childstate === "Details" ? <div>
                        <div className='col-12 mt-2 all-project-text mt-3'  >
                            <span>Our Recent Projects </span>
                        </div>
                        <div className='col-12 mt-2 row mt-3 ps-5'  >

                            <div to={"/project/create/new"} className=' col-xl-3 col-lg-4 col-md d-flex justify-content-start mb-4 text-black ' >
                                <Link to={"/project/create/new"} className='recent-project-card text-decoration-none text-black d-flex' >
                                    <div>
                                        <div className="homeproject-card-image-icon d-flex mx-auto"><span className="m-auto fw-bolder fs-1 mt-0 ">+</span></div>
                                    </div>
                                    <div className='  text-center' >
                                        <p className="mb-1 rpc-card-text1 text-black">Create New Project</p>
                                    </div>
                                </Link>
                            </div>


                            {
                                top3Projects?.map((item, index) => <ProjectCard key={index} id={item.id} project_code={item.project_code} duedate={item.due_date} projectcode={item.project_code} data={item} />)
                            }
                        </div>
                        <div className='col-12 mt-2 row mt-3 ps-5 ' >
                            <TaskSkeleton data={newprojectdata.reverse()} />
                        </div>
                    </div> :
                        childstate === "Media" ? <SingleProjectMedia /> :
                            <h1>Something Went Wrong</h1>
                }





            </div>
        </div>
    )
}

export default AllProject

