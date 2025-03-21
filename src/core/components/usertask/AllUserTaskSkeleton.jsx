import { useState } from 'react';
import UserTaskHeadList from './UserTaskHeadList';
import AllUserTaskBodyList from './AllUserTaskBodyList';
import { useSelector } from 'react-redux';

function AllUserTaskSkeleton({ data }) {

    console.log(data)
    const [project, setProject] = useState('all');

    const assignmentData = data.assignments ? data.assignments.map((item, index) => ({
        ...item,
        req_user_id: data.user_id,
        project_code: data.project_code,
        priority: data.priority,
        project_created_at: data.created_at,
        duedate: data.due_date
    })) : []

    const filteredData = () => {
        if (project === 'pending' || project === "in_progress") {
            return assignmentData?.filter((item) => item.status === 'pending' || item.status === 'in_progress');
        }
        else if (project === 'completed') {
            return assignmentData?.filter((item) => item.status === project);
        }
        else {
            return assignmentData;
        }
    };

    console.log(filteredData())


    return (
        <div className="col-12 mt-4">

            <div className='col-12 d-flex gap-2 justify-content-center hps-2 my-3' >
                {/* <span className='hps-2-icon' ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M1.16616 25H1.10842C0.733134 24.9711 0.473319 24.6536 0.502187 24.3072C0.877476 18.7933 6.07378 14.4919 12.3093 14.4919C18.5449 14.4919 23.7412 18.7933 24.1165 24.2783C24.1454 24.6536 23.8567 24.9423 23.5103 24.9711C23.135 25 22.8463 24.7113 22.8174 24.3649C22.471 19.5439 17.8521 15.791 12.3093 15.791C6.73775 15.791 2.11882 19.5727 1.80126 24.3938C1.7724 24.7402 1.48371 25 1.16616 25ZM12.3093 13.164C8.67193 13.164 5.72736 10.2194 5.72736 6.58199C5.72736 2.94457 8.67193 0 12.3093 0C15.9468 0 18.8913 2.94457 18.8913 6.58199C18.8913 10.2194 15.9468 13.164 12.3093 13.164ZM12.3093 1.32794C9.42251 1.32794 7.0553 3.69515 7.0553 6.58199C7.0553 9.46882 9.42251 11.836 12.3093 11.836C15.1962 11.836 17.5634 9.46882 17.5634 6.58199C17.5634 3.69515 15.1962 1.32794 12.3093 1.32794Z" fill="black" />
                </svg></span> */}
                <span className='hps-2-text my-auto' >All Project Task</span>
            </div>

            <div className="d-flex justify-content-start gap-4 task-skeleton-filter">
                <button
                    onClick={() => setProject('all')}
                    className={`pb-1 project-filter-card ${project === 'all' ? 'active' : ''}`}
                >
                    All
                </button>
                <button
                    onClick={() => setProject('pending')}
                    className={`pb-1 project-filter-card ${project === 'active' ? 'active' : ''}`}
                >
                    WIP/Overdue
                </button>
                <button
                    onClick={() => setProject('completed')}
                    className={`pb-1 project-filter-card ${project === 'completed' ? 'active' : ''}`}
                >
                    Completed
                </button>
            </div>

            <div className="ts-table-area mt-3">
                <table className="table table-borderless mb-0">
                    <thead className="ts-table-head">
                        <UserTaskHeadList  projecttype={"single-project"} />
                    </thead>
                    <tbody className="ts-table-body">
                        {filteredData()?.length > 0 ? (
                            filteredData().map((item, index) => (
                                <AllUserTaskBodyList
                                    key={index}
                                    id={item.id}
                                    name={item.task_heading}
                                    code={item.project_code}
                                    status={item.status}
                                    duedate={item.duedate}
                                    priority={item.priority}
                                    notes={item.notes}
                                    timeline={item.timeline}
                                    lastupdate={item.updated_at}
                                    createdat={item.created_at}
                                    user_id={item.req_user_id}
                                    project_id={item.project_id}
                                    assign_user_id={item.assign_user_id}
                                    task_data={item}
                                   
                                />
                            ))

                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">
                                    No tasks found for the selected filter.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUserTaskSkeleton
