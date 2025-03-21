import { useNavigate } from 'react-router-dom'



function MemberList(value) {
    let { id, name, department, shifttime, status, image, email } = value.value
    console.log(value.value)
    const userimage = image !== null ? image : `https://avatar.iran.liara.run/username?username=${name}`
    const Navigate = useNavigate()
    const handleDeleteUser = () => {
        confirm("Do you want to delete user");
    }
    return (
        <div className='col-md-3' >
            <div className='member-card mb-4' >
                <div className='top'>
                    <div className='d-flex gap-3 justify-content-start p-3' >
                        <div className="chat-user-img m-0"> <img src={userimage} alt={name ? name : "not name"} /></div>
                        <div className='d-flex justify-content-between' >
                            <div className='my-auto' >
                                <p className="member-card-text1 text-capitalize m-0" >{name}</p>
                                <span className='text-secondary fst-italic' style={{ fontSize: "11px", fontWeight: "400" }} >{shifttime}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-3' >
                    <div className='mb-3' >
                        <p className='recent-project-card-timeleft fs-6 mb-1' >Department</p>
                        <p className='member-card-text2 mt-1 mb-0' >{department}</p>
                    </div>
                    <div className='mb-4' >
                        <p className='recent-project-card-timeleft fs-6 mb-1' >Email</p>
                        <p className='member-card-text2 mt-1 mb-0' >{email}</p>
                    </div>
                    <div className='d-flex justify-content-between' >
                        <div className='cursor-pointer' onClick={() => Navigate(`/user/${id}`)} ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                            <path d="M20.544 7.045C20.848 7.471 21 7.685 21 8C21 8.316 20.848 8.529 20.544 8.955C19.178 10.871 15.689 15 11 15C6.31 15 2.822 10.87 1.456 8.955C1.152 8.529 1 8.315 1 8C1 7.684 1.152 7.471 1.456 7.045C2.822 5.129 6.311 1 11 1C15.69 1 19.178 5.13 20.544 7.045Z" stroke="#3954A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8Z" stroke="#3954A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.875 3.75H3.12502C2.7935 3.75 2.47556 3.8817 2.24114 4.11612C2.00672 4.35054 1.87502 4.66848 1.87502 5V17.5C1.87358 17.7384 1.94101 17.9721 2.06921 18.173C2.19741 18.374 2.38092 18.5336 2.59768 18.6328C2.76286 18.7097 2.94281 18.7497 3.12502 18.75C3.41845 18.7492 3.70213 18.6446 3.9258 18.4547L3.93284 18.4492L6.4844 16.25H16.875C17.2065 16.25 17.5245 16.1183 17.7589 15.8839C17.9933 15.6495 18.125 15.3315 18.125 15V5C18.125 4.66848 17.9933 4.35054 17.7589 4.11612C17.5245 3.8817 17.2065 3.75 16.875 3.75ZM16.875 15H6.25002C6.09995 15.0001 5.95492 15.0542 5.84143 15.1523L3.12502 17.5V5H16.875V15Z" fill="#3954A5" />
                        </svg></div>
                        <div className='dropdown'>
                            <button className="dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "transparent" }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.4326 7.79308C15.219 7.78825 15.0067 7.82613 14.8079 7.90451C14.6092 7.98289 14.4282 8.10017 14.2754 8.24948C14.1226 8.3988 14.0012 8.57712 13.9183 8.774C13.8355 8.97087 13.7927 9.18232 13.7927 9.39593C13.7926 9.60955 13.8352 9.82102 13.918 10.0179C14.0008 10.2148 14.1221 10.3932 14.2748 10.5426C14.4275 10.692 14.6085 10.8094 14.8072 10.8879C15.0059 10.9663 15.2182 11.0043 15.4318 10.9996C15.8508 10.9903 16.2495 10.8174 16.5426 10.5178C16.8357 10.2183 16.9999 9.81585 17 9.39674C17.0001 8.97763 16.8361 8.57513 16.5432 8.27541C16.2502 7.97568 15.8516 7.80255 15.4326 7.79308ZM4.20692 9.39674C4.21175 9.18318 4.17387 8.97081 4.09549 8.7721C4.01712 8.57338 3.89983 8.39232 3.75052 8.23956C3.60121 8.0868 3.42288 7.9654 3.22601 7.8825C3.02913 7.79961 2.81768 7.75688 2.60407 7.75682C2.39045 7.75677 2.17898 7.79939 1.98207 7.88219C1.78515 7.96499 1.60677 8.0863 1.45738 8.23899C1.30799 8.39168 1.19061 8.57267 1.11214 8.77135C1.03366 8.97003 0.99567 9.18238 1.00039 9.39594C1.00966 9.81495 1.18259 10.2137 1.48216 10.5068C1.78174 10.7999 2.18416 10.9641 2.60327 10.9642C3.02238 10.9643 3.42487 10.8003 3.7246 10.5073C4.02432 10.2144 4.19745 9.81575 4.20692 9.39674ZM10.6216 9.39674C10.6264 9.18318 10.5885 8.97081 10.5102 8.7721C10.4318 8.57338 10.3145 8.39232 10.1652 8.23956C10.0159 8.0868 9.83754 7.9654 9.64067 7.8825C9.4438 7.79961 9.23235 7.75688 9.01873 7.75682C8.80512 7.75677 8.59365 7.79939 8.39673 7.88219C8.19982 7.96499 8.02143 8.0863 7.87204 8.23899C7.72266 8.39168 7.60528 8.57267 7.5268 8.77135C7.44833 8.97003 7.41034 9.18238 7.41506 9.39594C7.42432 9.81495 7.59725 10.2137 7.89683 10.5068C8.19641 10.7999 8.59882 10.9641 9.01793 10.9642C9.43704 10.9643 9.83954 10.8003 10.1393 10.5073C10.439 10.2144 10.6121 9.81575 10.6216 9.39674Z" fill="#3954A5" />
                                </svg>
                            </button>
                            <ul className="dropdown-menu nt-dropdown-list"  >
                                <li className="dropdown-item recent-project-card-timeleft d-flex gap-2 justify-content-start align-center" style={{ fontSize: "14px" }} onClick={() => Navigate(`/user/edit/${id}`)} ><span className='my-auto'>Edit</span> </li>
                                <li className="dropdown-item recent-project-card-timeleft d-flex gap-2 justify-content-start align-center d-none" style={{ fontSize: "14px" }} ><span className='my-auto'>Delete</span> </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MemberList
