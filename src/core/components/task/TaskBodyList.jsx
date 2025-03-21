import { useNavigate } from "react-router-dom";
import useFormatDateRange from "../../../customHooks/formatTimeline";
import useTimeAgo from "../../../customHooks/useTimeAgo";
import { useEffect, useState } from "react";
import { GetSingleUserApi } from "../../../service/operations/userApi";
import { SplitButton } from 'primereact/splitbutton';
import { UpdateSingleProjectApi } from "../../../service/operations/projectApi";
import { useDispatch, useSelector } from "react-redux";
import { updateProjectStatus } from "../../../features/project/projectSlice";
import { UpdateSingleTask } from "../../../service/operations/taskApi";


function TaskBodyList({ id, name, status, duedate, priority, notes, timeline, lastupdate, createdat, code, user_id }) {

    const { formatDateRange } = useFormatDateRange();
    const formattedDateRange = formatDateRange(createdat, duedate);
    const navigate = useNavigate()
    const { getTimeAgo } = useTimeAgo();
    const timeAgo = getTimeAgo(lastupdate);
    const items = [
        {
            label: "Completed",
            icon: 'fa-solid fa-check',
            command: () => handleClick({ status: "completed" }, id),
        },
        {
            label: 'WIP',
            icon: 'fa-solid fa-sitemap',
            command: () => handleClick({ status: "active" }, id),
        },


    ];

    const dispatch = useDispatch();

    const handleClick = (detail, id) => {
         console.log(detail, id)
        UpdateSingleProjectApi(detail, id)
            .then(() => {
                dispatch(updateProjectStatus({ id, status: detail.status }));
            })
            .catch((error) => console.error("Error updating project:", error));
    };


    const user = useSelector((state) => state.user.data);    
    const matchedUser = user.find((u) => u.id === user_id);



    return (
        <tr id={id}    >
        
            <td scope="row"><i className="fa-regular fa-circle-check fs-6" style={status==="active"?{color:"#F8C460"}:status==="completed"?{color:"#5ECCAE"}:{color:"#000"}}  ></i></td>
            <td onClick={() => navigate(`/single/project/detail/${id}`)} style={{ cursor: "pointer" }} >{name} </td>
            <td >{code} </td>
            <td>
                <div className='d-flex position-relative ts-avatar-group justify-content-center' >
                    <span className="my-auto text-capitalize" >
                   {matchedUser.name }
                    </span>
                </div>
            </td>
            <td>
                <SplitButton className={`status-splitbutton ${status==="completed"?"completed":"active"}`} aria-hidden={false} label={status==="completed"?"completed":"WIP"} model={items} />
            </td>
            <td>{duedate}</td>
            <td><button className='ts-wip-priority mx-auto' style={priority === "high" ? { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #3954A5", borderColor: "#3954A5" } : priority === "medium" ? { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%), #3954A5", borderColor: "#3954A5" } : { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #3954A5", borderColor: "#3954A5" }} >{priority === "high" ? "High" : priority === "medium" ? "Medium" : "Low"}</button></td>
            <td><button className='ts-wip-date mx-auto' >{formattedDateRange}</button></td>
            <td >
                <div className=' my-auto d-flex justify-content-center gap-2 ' >
                    <span className=' my-auto'>
                    <i className="fa-regular fa-clock"></i>
                    </span>
                    <span className=' my-auto' >
                        {timeAgo}
                    </span>
                </div>
            </td>
        </tr>
    )
}

export default TaskBodyList






// <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 29 28" fill="none">
//                 <path d="M9.00024 14L13.7145 17.9286L20.0002 10.0714M14.5002 25C13.0557 25 11.6253 24.7155 10.2907 24.1627C8.95615 23.6099 7.74351 22.7996 6.72207 21.7782C5.70062 20.7567 4.89037 19.5441 4.33757 18.2095C3.78477 16.8749 3.50024 15.4445 3.50024 14C3.50024 12.5555 3.78477 11.1251 4.33757 9.79048C4.89037 8.4559 5.70062 7.24327 6.72207 6.22183C7.74351 5.20038 8.95615 4.39013 10.2907 3.83733C11.6253 3.28452 13.0557 3 14.5002 3C17.4176 3 20.2155 4.15893 22.2784 6.22183C24.3413 8.28473 25.5002 11.0826 25.5002 14C25.5002 16.9174 24.3413 19.7153 22.2784 21.7782C20.2155 23.8411 17.4176 25 14.5002 25Z" stroke="#5A5A5A" strokeWidth="1.5" />
//             </svg>


{/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M10.4999 19.6004C8.6012 19.6004 6.74514 19.0374 5.16643 17.9825C3.58772 16.9276 2.35726 15.4283 1.63066 13.6742C0.904062 11.92 0.71395 9.98974 1.08437 8.12753C1.45479 6.26531 2.3691 4.55475 3.71168 3.21217C5.05427 1.86959 6.76482 0.955274 8.62704 0.584856C10.4893 0.214438 12.4195 0.40455 14.1737 1.13115C15.9278 1.85775 17.4272 3.08821 18.482 4.66692C19.5369 6.24563 20.0999 8.10169 20.0999 10.0004C20.0999 12.5465 19.0885 14.9883 17.2881 16.7886C15.4878 18.589 13.046 19.6004 10.4999 19.6004ZM10.4999 1.77182C8.87245 1.77182 7.28154 2.25442 5.92836 3.15859C4.57518 4.06275 3.5205 5.34788 2.8977 6.85146C2.2749 8.35503 2.11194 10.0095 2.42944 11.6057C2.74695 13.2019 3.53064 14.6681 4.68143 15.8189C5.83221 16.9697 7.29841 17.7534 8.89459 18.0709C10.4908 18.3884 12.1453 18.2254 13.6488 17.6026C15.1524 16.9798 16.4375 15.9251 17.3417 14.5719C18.2459 13.2188 18.7285 11.6279 18.7285 10.0004C18.7285 7.81804 17.8615 5.72507 16.3184 4.18192C14.7752 2.63876 12.6823 1.77182 10.4999 1.77182Z" fill="#5A5A5A" />
                            <path d="M13.6474 14.1148L9.81421 10.2817V3.8291H11.1856V9.71253L14.6142 13.148L13.6474 14.1148Z" fill="#5A5A5A" />
                        </svg> */}