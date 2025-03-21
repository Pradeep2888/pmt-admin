import { apiConnector } from "../apiconnector"
import { endpoints, userservices } from "../api"
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

const { LOGIN_API } = endpoints
const { REGISTER_API,GET_SINGLE_USER, GET_ALL_USER, EDIT_SINGLE_USER } = userservices

export const UserLoginApi = async (details, navigate) => {
    Cookies.remove('adminToken')
    Cookies.remove('adminId')
    Cookies.remove('adminType')
    toast.loading("Processing...");
    try {
        const response = await apiConnector("POST", LOGIN_API, details)
        if (response.data.user) {
            const type = response.data.user.type
            if (Number(type) === 0) {
                Cookies.set('adminToken', response.data.access_token);
                Cookies.set('adminId', response.data.user.id);
                Cookies.set('adminType', response.data.user.type);
                toast.success("Logged in successfully");
                navigate("/")
            }
            else{
                Cookies.remove('adminToken')
                Cookies.remove('adminId')
                Cookies.remove('adminType')
                toast.error("Not a authorised user");
                navigate("/login")
            }

        }
        else {
            toast.error(response.data.message);
        }
    }
    catch (error) {
        console.log(error)
        toast.error('Something went wrong');
        navigate("/login")
    }
    setTimeout(() => {
        toast.dismiss();
    }, 2000);
}


export const UserRegisterApi = async (details, navigate) => {
    toast.loading("Processing...");
    try {
        const response = await apiConnector("POST", REGISTER_API, details)
        if (response.data.message) {
            toast.success(response.data.message);
            navigate("/user/list")
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

export const GetSingleUserApi = async (id) => {
    try {
        let response = await apiConnector('GET', `${GET_SINGLE_USER}/${id}`)
        return response.data;
    }
    catch (error) {
        toast.error(error.message)
        return error.message;
    }
    setTimeout(() => {
        toast.dismiss();
    }, 2000);
}


export const GetAllUserApi = async () => {
    try {
        let response = await apiConnector('GET', GET_ALL_USER)
        setTimeout(() => {
            toast.dismiss();
        }, 2000);
        return response;
    }
    catch (error) {
        toast.error(error.message)
        return error.message;
    }
}

export const UpdateUserApi = async (details,navigate,id) => {
    toast.loading("Processing...");
    try {
        const response = await apiConnector("PUT", `${EDIT_SINGLE_USER}/${id}`, details)
        if (response.data.message) {
            toast.success(response.data.message);
            navigate("/user/list")
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

export const UpdateUserImageApi = async (details,id) => {
    toast.loading("Processing...");
    try {
        const response = await apiConnector("POST", `${EDIT_SINGLE_USER}/${id}`, details, {
            headers: {
                "Content-Type": "multipart/form-data", 
            },
        });
        if (response.data.message) {
            toast.success(response.data.message);
            return response.data
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
            return message
        }
        else {
            toast.error(error.message)
        }
    }
    setTimeout(() => {
        toast.dismiss();
    }, 2000);
}







