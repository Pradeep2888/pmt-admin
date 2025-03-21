import { useDispatch, useSelector } from "react-redux"
import useTimeAgo from "../../../customHooks/useTimeAgo"
import { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import AssignmentForm from "./AssignmentForm";
import { fetchSingleProjects } from "../../../features/project/singleprojectSlice";
import { useParams } from "react-router-dom";

function TaskList() {


    return (
        <table className="table-section col-12 mt-3">
            <thead className='file-table-heading' >
                <tr >
                    <th className='pe-0' >Task Name</th>
                    <th className='px-0' >Task Asignee</th>
                    <th className='px-0' >Status</th>
                    <th className='px-0' >Created At</th>
                    <th className='ps-0 text-center' >Options</th>
                </tr>
            </thead>

            <TaskListBody />
        </table>
    )
}

export default TaskList


function TaskListBody() {

    const { getTimeAgo } = useTimeAgo();
    const { data } = useSelector((state) => state.singleproject)
    const [visibleRight, setVisibleRight] = useState(false);
    const [assignment,setAssignment]=useState()
     const dispatch=useDispatch()
    const params=useParams()

    useEffect(()=>{
        dispatch(fetchSingleProjects(params.id));
    },[dispatch,params.id,visibleRight])


    const handlesidebarHide=()=>{
        setVisibleRight(false)
    }



    return (
        <>

            <tbody className='file-table-body ' >

                {
                    data.assignments?.map((item, index) =>
                            <tr key={index}     >
                                <td className='pe-0'  >
                                    <div className='d-flex justify-content-start gap-3' style={{ cursor: "pointer" }} onClick={() => {setVisibleRight(true); setAssignment(item);}} >
                                        <div>
                                            <p className='m-0 recent-project-card-timeleft' style={{ fontSize: "14px" }} >{item.task_heading}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-0 file-detail-text' >{item.assigned_user!==null ? item.assigned_user.name : "Project not Assigned"}</td>
                                {/* <td className='px-0 file-detail-text' >ji</td> */}
                                <td className='px-0 file-detail-text' > {item.status === "active" ? <span className="text-success" style={{ "fontSize": "12px", "fontWeight": "700" }}>Active</span> : <span className="text-danger" style={{ "fontSize": "12px", "fontWeight": "700" }}>Pending</span>}  </td>
                                <td className='px-0 file-detail-text' >{getTimeAgo(item.created_at)}</td>
                                <td className='ps-0 d-flex justify-content-center' >
                                    <button style={{ backgroundColor: "#fff" }} className="bg-transparent" onClick={() => {setVisibleRight(true); setAssignment(item);}} >
                                      <i className="fa-regular fa-pen-to-square fs-5 edit-icon"></i>
                                    </button>
                                    <span>

                                    </span>
                                </td>
                            </tr>

                        )
                }
            </tbody>
            <Sidebar className='bg-white task-right-sidebar' visible={visibleRight} position="right" onHide={handlesidebarHide}>
                <p className="my-1 rpc-card-text1 text-black text-start w-100" style={{ "fontSize": "25px" }}>Update Task Details </p>
                <div className='demo-all-border my-3 w-100' ></div>
                <AssignmentForm assignment={assignment}  />
            </Sidebar>

        </>

    )
}

