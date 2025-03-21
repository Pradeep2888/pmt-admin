import TaskHeadList from './TaskHeadList';
import TaskBodyList from './TaskBodyList';
import { useState } from 'react';

function TaskSkeleton({ data }) {
    const [project, setProject] = useState('all');

    const filteredData = () => {
        if (project === 'active') {
          return data?.filter((item) => item.status === project);
        }
        else if(project=== 'completed'){
          return data?.filter((item) => item.status === project);
        }
        else{
          return data;
        }
    };

    // console.log(data)

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
                    onClick={() => setProject('active')}
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
                        <TaskHeadList />
                    </thead>
                    <tbody className="ts-table-body">
                        {filteredData()?.length > 0 ? (
                            filteredData().map((item, index) => (
                                <TaskBodyList
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    code={item.code}
                                    status={item.status}
                                    duedate={item.due_date}
                                    priority={item.priority}
                                    notes={item.notes}
                                    timeline={item.timeline}
                                    lastupdate={item.updated_at}
                                    createdat={item.created_at}
                                    user_id={item.user_id}
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
    );
}

export default TaskSkeleton;
