import { useNavigate } from "react-router-dom"


function TeamCard(data) {
    
    const usersdata = data.data
    const userimage=usersdata.image!==null?usersdata.image:`https://avatar.iran.liara.run/username?username=${usersdata.name}`
    const navigate=useNavigate()
    return (
        <div className='col-lg-4 col-md-4 d-flex justify-content-start ' >
            <div className='team-card d-flex gap-2 p-3 py-3 member-card w-100' onClick={()=>navigate(`user/${usersdata.id}`)}  >
                <div className=' team-card-image' >
                    <img src={userimage} style={{ height: "36px", width: "36px",borderRadius:"50%" }} />
                </div>
                <div className=' team-card-text-area my-auto' >
                    <p className='mb-0 team-card-text1' >{usersdata.name}</p>
                    <p className='mb-0 team-card-text2' >{usersdata.department}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
