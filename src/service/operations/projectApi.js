import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { projectservice } from "../api";



const { UPDATE_SINGLE_PROJECT ,CREATE_PROJECT, GET_MULTI_PROJECT,GET_SINGLE_PROJECT} = projectservice

export const CreateProjectApi = async(details, navigate)=> {

        toast.loading("Processing...");
        try {
            const response = await apiConnector("POST",CREATE_PROJECT, details)
            if (response.data.message) {
                toast.success(response.data.message);
                navigate("/allprojects")
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
        setTimeout(() => {
            toast.dismiss();
        }, 2000);

}


export const GetAllProjectApi = async () => {
    try {
        let response = await apiConnector('GET', GET_MULTI_PROJECT)
        return response.data;
    }
    catch (error) {
        toast.error(error.message)
        return error.message;
    }
}
export const GetSingleProjectApi = async (id) => {
    try {
        let response =await apiConnector('GET', `${GET_SINGLE_PROJECT}/${id}`)
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


export const UpdateSingleProjectApi = async(details,id)=> {
    try {
        const response = await apiConnector("PUT",`${UPDATE_SINGLE_PROJECT}/${id}` , details)
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