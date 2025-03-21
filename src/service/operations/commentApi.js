import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import {commentservice} from "../api";



const {CREATE_COMMENT,UPDATE_COMMENT,DELETE_COMMENT} = commentservice


export const CreateCommentApi = async(details )=> {
    try {
        const response = await apiConnector("POST",CREATE_COMMENT, details)
        if (response) {
            toast.success(response.data.message);
            return response 
        }
        else {
            toast.error('Something went wrong');
        }
        
    }
    catch (error) {
       console.log(error)
        let message = error.response.data.errors || null
        if (message) {
            Object.keys(message).forEach((key) => {
                toast.error(message[key])
            });
        }
        else {
            toast.error(error.message)
        }
    }
}

export const UpdateCommentApi = async (details, id) => {
    try {
        const response = await apiConnector("POST",`${UPDATE_COMMENT}/${id}`, details)
        if (response.data.message) {
            toast.success(response.data.message);
        }
        else {
            toast.error('Something went wrong');
        }

        return response;
    }
    catch (error) {
        let message = error.response.data.errors || null
        if (message) {
            Object.keys(message).forEach((key) => {
                toast.error(message[key])
            });
        }
        else {
            toast.error(error.message)
        }
    }
    
};

export const DeleteCommentApi = async (details, id) => {
    try {
        const response = await apiConnector("POST",`${DELETE_COMMENT}/${id}`,details)
        if (response.data.message) {
            toast.success(response.data.message);
            return response
        }
        else {
            toast.error('Something went wrong');
        }
        return response;
    }
    catch (error) {
        let message = error.response.data.errors || null
        if (message) {
            Object.keys(message).forEach((key) => {
                toast.error(message[key])
            });
        }
        else {
            toast.error(error.message)
        }
    }
    
};

