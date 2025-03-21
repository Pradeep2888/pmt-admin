import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCommentApi } from "../../../service/operations/commentApi";
import CommentCard from "./CommentCard";
import { updateAssignmentComment } from "../../../features/project/singleprojectSlice";

function CommentArea({ comments, task_id, project_id,userId,assign_user_id }) {
    const commentRef = useRef(null);
    const dispatch = useDispatch();
    const [localComments, setLocalComments] = useState(comments);

    useEffect(() => {
        setLocalComments(comments);
    }, [comments]);

    const scrollToBottom = () => {
        if (commentRef.current) {
            commentRef.current.scrollTop = commentRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [localComments]);

    const handleCommentDelete = async (item) => {
        try {
            const res = await DeleteCommentApi({ _method: "DELETE" }, item.id);
            if (res.status === 200) {
                const updatedComments = localComments.filter((comment) => comment.id !== item.id);
                setLocalComments(updatedComments);
                dispatch(updateAssignmentComment({ task_id, project_id, newres: updatedComments }));
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="comment-area" ref={commentRef}>
            {localComments?.map((item, index) => (
                <CommentCard
                key={index}
                item={item}
                task_id={task_id}
                project_id={project_id}
                onDelete={handleCommentDelete}
                setLocalComments={setLocalComments} 
                localComments={localComments}
                userId={userId}
                assign_user_id={assign_user_id}
                />

            ))}
        </div>
    );
}

export default CommentArea;
