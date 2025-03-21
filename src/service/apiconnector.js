import axios from "axios";
import Cookies from 'js-cookie';
import { endpoints } from "./api";
import toast from "react-hot-toast";
const { LOGIN_API } = endpoints
export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, params) => {
  console.log(url)
  const token = Cookies.get('adminToken');
  const type = Cookies.get('adminType');
  const headers = { Authorization: `Bearer ${token}`, };
  if (LOGIN_API === url) {
    return axiosInstance({
      method: method,
      url: url,
      data: bodyData || null,
      headers: headers || null,
      params: params || null,
    });
  }
  else if (Number(type) === 0) {
    return axiosInstance({
      method: method,
      url: url,
      data: bodyData || null,
      headers: headers || null,
      params: params || null,
    });
  }
  else {
    Cookies.remove('adminToken')
    Cookies.remove('adminId')
    Cookies.remove('adminType')
    return toast.error("Not a authorised user")
  }
};
