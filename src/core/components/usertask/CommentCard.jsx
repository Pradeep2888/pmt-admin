import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCommentApi } from "../../../service/operations/commentApi";
import { getUserDetail } from "../../../customHooks/user";
import useTimeAgo from "../../../customHooks/useTimeAgo";
import { updateAssignmentComment } from "../../../features/project/singleprojectSlice";

function CommentCard({ item, task_id, project_id, onDelete, setLocalComments, localComments,userId,assign_user_id }) {
    const users = useSelector((state) => state.user.data);
    const { getTimeAgo } = useTimeAgo();
    const dispatch = useDispatch();
    const userDetail = getUserDetail(users, item.user_id)[0];
    const [editstate, setEditState] = useState(false);
    const [editedComments, setEditedComments] = useState({});

    const handleCommentChange = (e, id) => {
        setEditedComments({ ...editedComments, [id]: e.target.value });
    };

    const handleCommentEdit = (e, item) => {
        setEditState(!editstate);
        if (!editstate) {
            setEditedComments({ ...editedComments, [item.id]: item.comment });
        }
    };

    const handleCommentUpdate = async () => {

        try {
            const res = await UpdateCommentApi(
                { comment: editedComments[item.id], _method: "PUT" },
                item.id
            );

            let updatedComment = res.data.comment;
            dispatch(updateAssignmentComment({comment_id:item.id, task_id, project_id, newres: updatedComment }));

            // **Update the local state immediately**
            setLocalComments((prevComments) =>
                prevComments.map((c) =>
                    c.id === item.id ? { ...c, comment: updatedComment.comment } : c
                )
            );
            setEditState(false);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="mt-3">
            <div className="d-flex gap-2 justify-content-start">
                <div className="d-flex" style={{ height: "30px", width: "fit-content" }}>
                    <img
                        src={userDetail.image || "https://bit.ly/dan-abramov"}
                        className="h-100"
                        style={{ zIndex: "5", borderRadius: "30px" }}
                    />
                </div>
                <div className="d-flex">
                    <div>
                        <span className="text1 fw-bolder fs-6 my-auto text-capitalize">
                            {userDetail.name}
                        </span>
                        <span className="text1 my-auto"> commented on this task · {getTimeAgo(item.updated_at)}</span>
                    </div>
                </div>
            </div>
            <div className="ms-5 me-3 p-2 rounded-5 mt-2 py-1 bg-white">
                <div className="d-flex">
                    {editstate ? (
                        <input
                            value={editedComments[item.id] || ""}
                            onChange={(e) => handleCommentChange(e, item.id)}
                            className="w-100 h-100 border-0 edit-input-box"
                        />
                    ) : (
                        <div className="my-auto">
                            <span className="text1 fw-normal fs-6 my-auto">
                                {item.comment}
                            </span>
                        </div>
                    )}
                </div>

{
    userDetail.id ===userId?
    <div className="d-flex gap-3 mt-2 justify-content-end">
                    {editstate ? (
                        <button
                            className="border-0 bg-transparent recent-project-card-timeleft"
                            style={{ fontSize: "10px" }}
                            onClick={(e) => handleCommentUpdate(e, item)}
                        >
                            <i className="fa-solid fa-check"></i> Update
                        </button>
                    ) : (
                        <button
                            className="border-0 bg-transparent recent-project-card-timeleft"
                            style={{ fontSize: "10px" }}
                            onClick={(e) => handleCommentEdit(e, item)}
                        >
                            <i className="fa-solid fa-pen"></i> Edit
                        </button>
                    )}
                    <button
                        className="border-0 bg-transparent recent-project-card-timeleft text-danger"
                        style={{ fontSize: "10px" }}
                        onClick={() => onDelete(item)}
                    >
                        <i className="fa-solid fa-trash-can"></i> Delete
                    </button>
                </div>
                :""
}
                
            </div>
        </div>
    );
}

export default CommentCard;
