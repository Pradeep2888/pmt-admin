import { useNavigate } from 'react-router-dom'
import TeamCard from './TeamCard.jsx'
import TaskAssignModal from './addTeamIcon.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllUsers } from '../../../features/user/userSlice.js'


function Team(assignments) {
    const assignmentsdetail = assignments.assignments ? assignments.assignments : []
    const data = useSelector((state) => state.user.data)
    const dispatch = useDispatch()


    const uniqueUsers = new Map();

    assignmentsdetail?.forEach((item) => {
        if (item.assigned_user) {
            uniqueUsers.set(item.assigned_user.id, item.assigned_user);
        }
    });

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const navigate = useNavigate()

    if (assignmentsdetail.length !== 0) {
        return (
            <div className='mt-4 homeprojectsdemo d-flex flex-column gap-2' >
                <div className='hpd-heading w-100 mb-2 position-sticky' >
                    <span className='hpd-h-text' >My Team</span>
                    <span className='hp-seeall ms-3' >Frequent collaborations</span>
                </div>
                <div className='hpd-card-box row  mx-1 p-1'  >
                    {[...uniqueUsers.values()].map((user, index) => {
                        let username = user.name;
                        let id = user.id;
                        let department = user.department;
                        let userimage = user.image ? user.image : `https://avatar.iran.liara.run/username?username=${username}`;

                        return (
                            <div key={index} className='col-lg-4 col-md-4 d-block justify-content-start mb-4' style={{ height: "fit-content" }} >
                                <div className='team-card d-flex gap-2 ' onClick={() => navigate(`/user/${id}`)}  >
                                    <div className='team-card-image '>
                                        <img src={userimage} style={{ height: "36px", width: "36px" }} />
                                    </div>
                                    <div className='team-card-text-area my-auto'>
                                        <p className='mb-0 team-card-text1'>{username}</p>
                                        <p className='mb-0 team-card-text2'>{department}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        )
    }
    else {
        return (
            <div className='mt-4 homeprojectsdemo d-flex flex-column gap-2' >
                <div className='hpd-heading w-100 mb-2 position-sticky' >
                    <span className='hpd-h-text' >My Team</span>
                    <span className='hp-seeall ms-3' >Frequent collaborations</span>
                </div>
                <div className='hpd-card-box row  mx-1 p-1'  >


                    <div className='col-lg-4 col-md-4 d-flex justify-content-start' >

                        <TaskAssignModal />
                    </div>

                    {
                        data?.map((item, index) => <TeamCard key={index} data={item} />)
                    }
                </div>
            </div>
        )
    }



}

export default Team
