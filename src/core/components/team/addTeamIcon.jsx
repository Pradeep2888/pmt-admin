import { useNavigate } from "react-router-dom";


function TaskAssignModal() {
 const navigate=useNavigate()

    return (
        <div className='team-card d-flex gap-2 p-3 py-3 member-card w-100' onClick={()=>navigate("/user/create/new")} >
            <div className='team-card-image-icon d-flex'>
                <p className='m-auto fw-bolder fs-4'>+</p>
            </div>
            <div className='team-card-text-area my-auto'>
                <p className='mb-0 team-card-text3'>Add Member</p>
            </div>
        </div>
    );
}

export default TaskAssignModal;
