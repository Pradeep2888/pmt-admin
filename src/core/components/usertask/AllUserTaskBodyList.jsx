import { useNavigate } from "react-router-dom";
import useFormatDateRange from "../../../customHooks/formatTimeline";
import useTimeAgo from "../../../customHooks/useTimeAgo";
import { useEffect, useState } from "react";
import { GetSingleUserApi } from "../../../service/operations/userApi";
import { SplitButton } from 'primereact/splitbutton';
import { useDispatch, useSelector } from "react-redux";
import { updateAssignmentStatus } from "../../../features/project/projectSlice";
import { UpdateSingleTask } from "../../../service/operations/taskApi";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { updateSingleAssignmentStatus } from "../../../features/project/singleprojectSlice";
import SideBarTaskDetails from "./SideBarTaskDetails";

function AllUserTaskBodyList({ id, name, status, duedate, priority, notes, timeline, lastupdate, createdat, code, user_id, project_id, assign_user_id, task_data }) {
    const userId = useSelector((state) => state.loginuser.data.id)
    const { formatDateRange } = useFormatDateRange();
    const formattedDateRange = formatDateRange(createdat, duedate);
    const navigate = useNavigate()
    const { getTimeAgo } = useTimeAgo();
    const timeAgo = getTimeAgo(lastupdate);

    const [visible, setVisible] = useState(false);
    const items = [
        {
            label: "Completed",
            icon: 'fa-solid fa-check',
            command: () => handleClick({ status: "completed" }, id),
        },
        {
            label: 'WIP',
            icon: 'fa-solid fa-sitemap',
            command: () => handleClick({ status: "in_progress" }, id),
        },
        {
            label: 'Pending',
            icon: 'fa-solid fa-sitemap',
            command: () => handleClick({ status: "pending" }, id),
        },


    ];
    const dispatch = useDispatch();
    const handleClick = (detail, id) => {
        const formData = new FormData();
        formData.append('status', detail.status)
        formData.append('_method', "PUT");
        UpdateSingleTask(formData, id)
            .then((res) => {
                dispatch(updateSingleAssignmentStatus({
                    assignment_id: id,
                    detail: detail,
                    updatedat: res.data.assignment.updated_at
                }));
            })
            .catch((error) => console.error("Error updating assignment:", error));

    };

    const user = useSelector((state) => state.user.data);
    const matchedUser = user.find((u) => u.id === assign_user_id);

    return (
        <tr id={id}    >
            <td scope="row"><i className="fa-regular fa-circle-check fs-6" style={status === "in_progress" ? { backgroundColor: "#F8C460", borderRadius: "50%" } : status === "completed" ? { backgroundColor: "#5ECCAE", borderRadius: "50%" } : { backgroundColor: "#E86D82", borderRadius: "50%" }}  ></i></td>
            <td className="text-capitalize" onClick={() => setVisible(true)} style={{ cursor: "pointer" }} >{name} </td>
            <td style={{ cursor: "pointer" }} onClick={() => navigate(`/single/project/detail/${project_id}`)} >{code} </td>
            <td>
                <div className='d-flex position-relative ts-avatar-group justify-content-center' >
                    <span className="my-auto text-capitalize" >{matchedUser.name}</span>
                </div>
            </td>
            <td>
                <SplitButton className={`status-splitbutton ${status === "completed" ? "completed" : status === "in_progress" ? "active" : "pending"}`} aria-hidden={false} label={status === "pending" ? "Pending" : status === "in_progress" ? "WIP" : status === "completed" ? "Completed" : "WIP"} model={items} />
                {/* {
                    userId === assign_user_id ?
                        <SplitButton className={`status-splitbutton ${status === "completed" ? "completed" : status === "in_progress" ? "active" : "pending"}`} aria-hidden={false} label={status === "pending" ? "Pending" : status === "in_progress" ? "WIP" : status === "completed" ? "Completed" : "WIP"} model={items} />
                        :
                        <button className='ts-wip-btn mx-auto' style={status === "active" ? { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #F5AB1B", borderColor: "#F5AB1B" } : status === "completed" ? { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #19B68B", borderColor: "#19B68B" } : { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #DF2F4A", borderColor: "#DF2F4A" }}  >{status === "pending" ? "Pending" : status === "in_progress" ? "WIP" : status === "completed" ? "Completed" : "WIP"}</button>
                } */}
            </td>
            <td>{duedate}</td>
            <td><button className='ts-wip-priority mx-auto' style={priority === "high" ? { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #3954A5", borderColor: "#3954A5" } : priority === "medium" ? { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%), #3954A5", borderColor: "#3954A5" } : { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #3954A5", borderColor: "#3954A5" }} >{priority === "high" ? "High" : priority === "medium" ? "Medium" : "Low"}</button></td>
            <td><button className='ts-wip-date mx-auto' >{formattedDateRange}</button></td>
            <td >
                <div className=' my-auto d-flex justify-content-center gap-2 ' >
                    <span className=' my-auto'>
                        <i className="pi pi-clock fs-6" ></i>
                    </span>
                    <span className=' my-auto' >
                        {timeAgo}
                    </span>
                </div>
            </td>
            <td className="d-none" >
                <Sidebar class="usertasksidebar" visible={visible} onHide={() => setVisible(false)} position="right">
                    <SideBarTaskDetails data={task_data} assign_user_id={assign_user_id} />
                </Sidebar>
            </td>
        </tr>
    )
}

export default AllUserTaskBodyList