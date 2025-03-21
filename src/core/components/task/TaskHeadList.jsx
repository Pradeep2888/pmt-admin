

function TaskHeadList() {
    return (
        <tr>
            <th scope="col" style={{ borderTopLeftRadius: "8px" }} ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 29 28" fill="none">
                <path d="M9.00024 14L13.7145 17.9286L20.0002 10.0714M14.5002 25C13.0557 25 11.6253 24.7155 10.2907 24.1627C8.95615 23.6099 7.74351 22.7996 6.72207 21.7782C5.70062 20.7567 4.89037 19.5441 4.33757 18.2095C3.78477 16.8749 3.50024 15.4445 3.50024 14C3.50024 12.5555 3.78477 11.1251 4.33757 9.79048C4.89037 8.4559 5.70062 7.24327 6.72207 6.22183C7.74351 5.20038 8.95615 4.39013 10.2907 3.83733C11.6253 3.28452 13.0557 3 14.5002 3C17.4176 3 20.2155 4.15893 22.2784 6.22183C24.3413 8.28473 25.5002 11.0826 25.5002 14C25.5002 16.9174 24.3413 19.7153 22.2784 21.7782C20.2155 23.8411 17.4176 25 14.5002 25Z" stroke="#5A5A5A" strokeWidth="1.5" />
            </svg></th>
            <th scope="col">Project/Demo</th>
            <th scope="col">Project/Demo Code</th>
            <th scope="col">Created By</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Priority</th>
            <th scope="col">Timeline</th>
            <th scope="col" style={{ borderTopRightRadius: "8px" }} >Last Updated</th>
        </tr>
    )
}

export default TaskHeadList
