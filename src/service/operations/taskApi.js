import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import {taskservice } from "../api";



const {CREATE_TASK,GET_TASK,UPDATE_SINGLE_TASK} = taskservice


export const CreateTaskApi = async(details )=> {
    try {
        const response = await apiConnector("POST",CREATE_TASK, details,{
            headers: {
                "Content-Type": "multipart/form-data", 
            },
        })
        if (response.data.message) {
            toast.success(response.data.message);
            
        }
        else {
            toast.error('Something went wrong');
        }
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
   
}



export const GetAllTaskApi = async () => {
    try {
        let response = await apiConnector('GET', GET_TASK)
        setTimeout(() => {
            toast.dismiss();
        }, 2000);
        return response.data;
    }
    catch (error) {
        toast.error(error.message)
        return error.message;
    }
}


export const UpdateSingleTask = async (details, id) => {
    try {
        const response = await apiConnector("POST",`${UPDATE_SINGLE_TASK}/${id}`, details,{
            headers: {
                "Content-Type": "multipart/form-data", 
            },
        })
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



