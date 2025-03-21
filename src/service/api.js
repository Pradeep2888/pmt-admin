const BASE_URL = "https://demobyzonewebsites.com/himanshu/fasanaapi/public/api"
// https://demobyzonewebsites.com/himanshu/fasanaapi/public/api/users

export const endpoints = {
    LOGIN_API: BASE_URL + "/login",
}

export const userservices = {
    REGISTER_API: BASE_URL + "/register",
    GET_ALL_USER: BASE_URL + "/users",
    GET_SINGLE_USER: BASE_URL + "/users",
    EDIT_SINGLE_USER: BASE_URL + "/users",
}

export const projectservice={
    CREATE_PROJECT:BASE_URL+"/projects",
    GET_SINGLE_PROJECT:BASE_URL +"/projects",
    UPDATE_SINGLE_PROJECT:BASE_URL+"/projects",
    DELETE_SINGLE_PROJECT:BASE_URL+"/projects",
    GET_MULTI_PROJECT:BASE_URL+"/projects",
}
export const taskservice={
    CREATE_TASK:BASE_URL+"/project-assignments",
    GET_TASK:BASE_URL+"/project-assignments",
    UPDATE_SINGLE_TASK:BASE_URL+"/project-assignments",
    
}

export const commentservice={
    CREATE_COMMENT:BASE_URL+"/comments",
    UPDATE_COMMENT:BASE_URL+"/comments",
    DELETE_COMMENT:BASE_URL+"/comments",
}



// GET /api/projects/{project_id} - get project 
// PUT /api/projects/{project_id} - update project
// DELETE /api/projects/{project_id} - destroy