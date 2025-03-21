import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetSingleProjectApi } from "../../service/operations/projectApi";




// Async thunk to fetch all users
export const fetchSingleProjects = createAsyncThunk(
    'project/fetchSingleProjects',
    async (id, { rejectWithValue }) => {
        try {
            const data = await GetSingleProjectApi(id);
            return data; // Pass the fetched data to the fulfilled action
        } catch (error) {
            // Handle error
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);




const initialState = {
    data: [],
    loading: false,
    error: null,
}

const singleProjectSlice = createSlice({
    name: 'singleproject',
    initialState,
    reducers: {
        updateSingleAssignmentStatus: (state, action) => {
            const { assignment_id, detail ,updatedat} = action.payload;
            console.log(updatedat)
            let assignments = state.data.assignments;
            const assignmentIndex = assignments.findIndex((assignment) => assignment.id === assignment_id);
            if (assignmentIndex !== -1) {
                assignments[assignmentIndex].status = detail.status;
                assignments[assignmentIndex].updated_at = updatedat;
            }
        },
        updateAssignmentComment: (state, action) => {
            const { comment_id, task_id, project_id, newres } = action.payload
            let assignments = state.data.assignments;
            const assignmentIndex = assignments.findIndex((assignment) => assignment.id === task_id);
            if (assignmentIndex !== -1) {
                let comments = state.data.assignments[assignmentIndex].comments;
                const commentsIndex = comments.findIndex((comment) => comment.id === comment_id);
                if (commentsIndex !== -1) {
                    state.data.assignments = state.data.assignments.map((assignment, idx) =>
                        idx === assignmentIndex
                            ? {
                                ...assignment,
                                comments: assignment.comments.map((comment, cIdx) =>
                                    cIdx === commentsIndex ? newres : comment // 🔹 Replacing the whole object
                                ),
                            }
                            : assignment
                    );
                }

            }
        },
        addAssignmentComment: (state, action) => {
            const { task_id, project_id, newComment } = action.payload;
            let assignments = state.data.assignments;
            const assignmentIndex = assignments.findIndex((assignment) => assignment.id === task_id);


            if (assignmentIndex !== -1) {
                if (!assignments[assignmentIndex].comments) {
                    assignments[assignmentIndex].comments = [];
                }
                assignments[assignmentIndex].comments.push(newComment);
            }

        },
        updateAssignmentDocument: (state, action) => {
            const { task_id, project_id, resdocument } = action.payload
            let assignments = state.data.assignments;
            const assignmentIndex = assignments.findIndex((assignment) => assignment.id === task_id);


            if (assignmentIndex !== -1) {
                state.data.assignments[assignmentIndex] = {
                                ...assignments[assignmentIndex],
                                documents: resdocument,
                            };
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSingleProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSingleProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export const { updateSingleAssignmentStatus, updateAssignmentComment, addAssignmentComment,updateAssignmentDocument } = singleProjectSlice.actions

export default singleProjectSlice.reducer

