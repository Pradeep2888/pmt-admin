import { useEffect, useState } from "react"
import { } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { GetSingleUserApi, UpdateUserImageApi } from "../../service/operations/userApi"
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import toast from "react-hot-toast";

function UserProfilePageSkeleton() {
    const [visible, setVisible] = useState(false);
    const [userdata, setUserdata] = useState()
    const [userimage, setuserImage] = useState()
    const param = useParams()
    const navigate=useNavigate()

    useEffect(() => {
        GetSingleUserApi(param.id)
            .then((res) => {
                setUserdata(res.user)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [param.id, userimage])


    console.log(userdata)
    console.log(Array.isArray(userdata?.permission)
        ? (userdata.permission.includes("create-project") ? "yes" : "no")
        : (JSON.parse(userdata?.permission || "[]").includes("create-project") ? "yes" : "no"))
    const handleFileSelect = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const maxSizeInBytes = 200 * 1024;
            if (file.size > maxSizeInBytes) {
                toast.error('The file size exceeds 200 KB. Please select a smaller file.');
                return;
            }
            else {

                const formData = new FormData();
                formData.append("image", file);
                formData.append('_method', "PUT");
                UpdateUserImageApi(formData, param.id).then((res) => {
                    setuserImage(res.user.image)
                    setTimeout(() => {
                        toast.dismiss();
                    }, 2000);
                })
                    .catch((error) => {
                        console.log(error)
                    })
            }


        }
        else {
            toast.error('Image not selected');
        }
    };



    return (
        <div className="row" >
            <div className="col-12">
                <span className="demo-heading"><span className="cursor-pointer" onClick={() => navigate('/user/list')} style={{ color: "#3954a5ad" }} >All Member {">"}</span>  Member Details</span>
            </div>

            <div className='col-12  ' >
                <div className="member-card mt-4 mx-auto">
                    <div className='top d-flex justify-content-between'>
                        <div className='d-flex gap-3 justify-content-start p-3' >
                            <div className="chat-user-img m-0"> <img src={userdata !== undefined && userdata.image !== null ? userdata.image : `https://avatar.iran.liara.run/username?username=${userdata ? userdata.name : "Loading..."}`} alt={"not name"} /></div>
                            <div className='d-flex' >
                                <p className="member-card-text1 text-capitalize my-auto" >{userdata?.name}</p>
                            </div>
                        </div>
                        <div className="d-flex my-auto gap-4 p-3" >
                            <div className="cursor-pointer" onClick={() => navigate(`/user/edit/${userdata?.id}`)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.1011 4.54918C18.1011 4.89727 18.0351 5.23482 17.9033 5.56181C17.7714 5.88881 17.5789 6.17889 17.3258 6.43205L6.90672 16.8511L1.89893 18.1011L3.1489 13.0933L13.568 2.67422C13.8211 2.42107 14.1112 2.22856 14.4382 2.09671C14.7652 1.96485 15.1027 1.89893 15.4508 1.89893C15.8147 1.89893 16.1576 1.96749 16.4793 2.10462C16.801 2.24174 17.0805 2.43161 17.3179 2.67422C17.5552 2.91683 17.7451 3.199 17.8875 3.52072C18.0299 3.84245 18.1011 4.18526 18.1011 4.54918ZM4.47798 13.1961C5.03704 13.3807 5.51698 13.6734 5.91782 14.0743C6.31865 14.4751 6.614 14.9577 6.80387 15.522L15.3559 6.9621L13.0379 4.64411L4.47798 13.1961ZM3.2913 16.7087L5.89408 16.06C5.84134 15.8174 5.75696 15.5879 5.64093 15.3717C5.52489 15.1555 5.37986 14.963 5.20581 14.7942C5.03176 14.6254 4.83926 14.483 4.62829 14.367C4.41733 14.251 4.1879 14.1639 3.94002 14.1059L3.2913 16.7087ZM16.0758 6.24218C16.2077 6.11032 16.3342 5.98638 16.4555 5.87035C16.5768 5.75432 16.685 5.63301 16.7799 5.50644C16.8748 5.37986 16.9487 5.24009 17.0014 5.08714C17.0542 4.93419 17.0832 4.75751 17.0884 4.55709C17.0884 4.3303 17.0462 4.11934 16.9619 3.92419C16.8775 3.72905 16.7588 3.555 16.6059 3.40205C16.4529 3.2491 16.2789 3.13044 16.0837 3.04605C15.8886 2.96166 15.675 2.91683 15.4429 2.91156C15.2425 2.91156 15.0684 2.93793 14.9208 2.99067C14.7731 3.04341 14.6333 3.11989 14.5015 3.2201C14.3696 3.32031 14.2457 3.42843 14.1296 3.54446C14.0136 3.66049 13.8897 3.78707 13.7578 3.92419L16.0758 6.24218Z" fill="#3954A5" />
                                </svg>
                            </div>
                            <div className="cursor-pointer d-none" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5.00336 19.082C4.49658 19.082 4.06313 18.9015 3.70299 18.5406C3.34286 18.1797 3.16241 17.747 3.16165 17.2425V3.12659H2.59182C2.42998 3.12659 2.29474 3.07189 2.18609 2.96248C2.07744 2.85307 2.02274 2.71745 2.02198 2.55562C2.02122 2.39378 2.07592 2.25854 2.18609 2.14989C2.29626 2.04125 2.4315 1.98692 2.59182 1.98692H6.58066C6.58066 1.75139 6.66803 1.54625 6.84278 1.3715C7.01753 1.19675 7.22267 1.10938 7.45821 1.10938H12.5411C12.7767 1.10938 12.9818 1.19675 13.1566 1.3715C13.3313 1.54625 13.4187 1.75139 13.4187 1.98692H17.4075C17.5694 1.98692 17.7046 2.04162 17.8132 2.15103C17.9219 2.26044 17.9766 2.39606 17.9774 2.5579C17.9781 2.71973 17.9234 2.85497 17.8132 2.96362C17.7031 3.07227 17.5678 3.12659 17.4075 3.12659H16.8377V17.2414C16.8377 17.7474 16.6572 18.1805 16.2963 18.5406C15.9354 18.9008 15.5024 19.0812 14.9971 19.082H5.00336ZM15.698 3.12659H4.30132V17.2414C4.30132 17.4458 4.36704 17.6137 4.49848 17.7451C4.62993 17.8766 4.79822 17.9423 5.00336 17.9423H14.9971C15.2015 17.9423 15.3694 17.8766 15.5009 17.7451C15.6323 17.6137 15.698 17.4458 15.698 17.2414V3.12659ZM8.07135 15.663C8.23318 15.663 8.3688 15.6083 8.47821 15.4988C8.58762 15.3894 8.64194 15.2542 8.64118 15.0931V5.97577C8.64118 5.81393 8.58648 5.67869 8.47707 5.57004C8.36766 5.46139 8.23204 5.40669 8.07021 5.40593C7.90838 5.40517 7.77313 5.45988 7.66449 5.57004C7.55584 5.68021 7.50151 5.81545 7.50151 5.97577V15.0931C7.50151 15.255 7.55622 15.3902 7.66563 15.4988C7.77503 15.6083 7.91027 15.663 8.07135 15.663ZM11.9291 15.663C12.091 15.663 12.2262 15.6083 12.3349 15.4988C12.4435 15.3894 12.4978 15.2542 12.4978 15.0931V5.97577C12.4978 5.81393 12.4431 5.67869 12.3337 5.57004C12.2243 5.46063 12.0891 5.40593 11.928 5.40593C11.7662 5.40593 11.6305 5.46063 11.5211 5.57004C11.4117 5.67945 11.3574 5.81469 11.3582 5.97577V15.0931C11.3582 15.255 11.4129 15.3902 11.5223 15.4988C11.6317 15.6075 11.7673 15.6622 11.9291 15.663Z" fill="#E30505" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-3' >
                        <div className='mb-3' >
                            <p className='recent-project-card-timeleft mb-1' style={{ fontSize: "14px" }} >Department</p>
                            <p className='member-card-text2 mt-1 mb-0' >{userdata?.department}</p>
                        </div>
                        <div className='mb-3' >
                            <p className='recent-project-card-timeleft mb-1' style={{ fontSize: "14px" }} >Email</p>
                            <p className='member-card-text2 mt-1 mb-0' >{userdata?.email}</p>
                        </div>
                        <div className='mb-3' >
                            <p className='recent-project-card-timeleft mb-1' style={{ fontSize: "14px" }} >Shift Timing</p>
                            <p className='member-card-text2 mt-1 mb-0' >{userdata?.shifttime}</p>
                        </div>
                        <div className='mb-3' >
                            <p className='recent-project-card-timeleft mb-1' style={{ fontSize: "14px" }} >Permission</p>
                            <ul className="profile-permission-list" >
                                <li>
                                    <div className="d-flex gap-5" >
                                        <p className='recent-project-card-timeleft mb-1' style={{ fontSize: "14px" }} >Create Project</p>
                                        <p className='member-card-text2 mb-1' >{Array.isArray(userdata?.permission)
                                            ? (userdata.permission.includes("create-project") ? "Yes" : "No")
                                            : (JSON.parse(userdata?.permission || "[]").includes("create-project") ? "Yes" : "No")}</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="d-flex gap-5" >
                                        <p className='recent-project-card-timeleft mb-1' style={{ fontSize: "14px" }} >Create Project</p>
                                        <p className='member-card-text2 mb-1' >{Array.isArray(userdata?.permission)
                                            ? (userdata.permission.includes("create-demo") ? "Yes" : "No")
                                            : (JSON.parse(userdata?.permission || "[]").includes("create-demo") ? "Yes" : "No")}</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfilePageSkeleton



