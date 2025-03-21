import { useState } from 'react';
import UserTaskHeadList from './UserTaskHeadList';
import UserTaskBodyList from './UserTaskBodyList';
import { useSelector } from 'react-redux';

function UserTaskSkeleton({ data }) {
    const userId=useSelector((state)=>  state.loginuser.data.id)
    const [project, setProject] = useState('all');
    // const [assignmentData,setAssignmentData]=useState()

    const assignmentData = data?.flatMap(item => 
        item.assignments
            ?.filter(assignment => assignment.assign_user_id === userId)
            .map(assignment => ({ 
                ...assignment,  
                req_user_id: item.user_id,
                project_code:item.project_code,
                priority:item.priority,
                project_created_at:item.created_at,
                duedate:item.due_date
            })) || []
    ) || [];
    
    
    
    const filteredData = () => {
        if (project === 'pending' || project==="in_progress") {
            return assignmentData?.filter((item) => item.status === 'pending' || item.status === 'in_progress');
        }
        else if (project === 'completed') {
            return assignmentData?.filter((item) => item.status === project);
        }
        else {
            return assignmentData;
        }
    };
 




    return (
        <div className="col-12 mt-4">
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
                        <UserTaskHeadList />
                    </thead>
                    <tbody className="ts-table-body">
                        {filteredData()?.length > 0 ? (
                            filteredData().map((item, index) => (
                                <UserTaskBodyList
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
                                    task_data={item}
                                    assign_user_id={item.assign_user_id}
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
    );
}

export default UserTaskSkeleton;
