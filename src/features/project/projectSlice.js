import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetAllProjectApi } from "../../service/operations/projectApi";


export const fetchAllProjects = createAsyncThunk(
    'project/fetchAllProjects',
    async (_, { rejectWithValue }) => {
        try {
            const data = await GetAllProjectApi();
            return data; 
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);




const initialState = {
    data: [],
    loading: false,
    error: null,
}


const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        updateAssignmentStatus: (state, action) => {
            const { project_id, assignment_id, status } = action.payload;

            // Find the project by project_id
            const projectIndex = state.data.findIndex((project) => project.id === project_id);
            
            if (projectIndex !== -1) {
                let assignments = state.data[projectIndex].assignments;

                // Find the assignment by assignment_id and update its status
                const assignmentIndex = assignments.findIndex((assignment) => assignment.id === assignment_id);
                
                if (assignmentIndex !== -1) {
                    assignments[assignmentIndex].status = status;
                }
            }
        },
        updateProjectStatus: (state, action) => {
            const {id, status } = action.payload;
            const projectIndex = state.data.findIndex((project) => project.id === id);

            if (projectIndex !== -1) {
                state.data[projectIndex].status = status;
            }
        }
        
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllProjects.rejected, (state, action) => {
                state.loading = false;
                console.log("API Data Received in Redux:", action.payload)
                state.error = action.payload;
            });
    },
});

export const { updateAssignmentStatus} = projectSlice.actions;

export const { updateProjectStatus } = projectSlice.actions;

export default projectSlice.reducer;


