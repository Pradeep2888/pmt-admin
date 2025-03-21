
import { useNavigate } from 'react-router-dom'
import getDaysLeft from '../../customHooks/getDaysLeft'

function ProjectCard({id,code,duedate,projectcode,data}) {

    // console.log(data)
    const navigate=useNavigate()
    // const projectpercent=getProjectPercent(data.assignments)
    const projectpercent=10


    return (
        <div className=' col-xl-3 col-lg-4 col-md d-flex justify-content-start'  >
            <div className='recent-project-card d-flex' onClick={()=>navigate(`/single/project/detail/${id}`)} >
                <div className=' text-center'>
                    <p className="mb-1 rpc-card-text1 " style={{color:"#3954A5"}} >{projectcode}</p>
                    <p className="mb-0 hpd-card-text2 text-black ">EGSS Web Development Team</p>
                </div>
                <div>
                    <div className='progress-area' >
                        <span className='progress-text ' >Progress</span>
                        <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow={projectpercent} aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: `${projectpercent}%` }}></div>
                        </div>
                        <p className='hp-seeall text-end' >{projectpercent}%</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' >
                    <div className='d-flex position-relative ts-avatar-group ' style={{ height: "30px", width: "fit-content" }} >
                        <img src='https://bit.ly/dan-abramov' className='position-absolute ' style={{ zIndex: "5" }} />
                        <img src='https://bit.ly/kent-c-dodds' className='position-absolute' style={{ left: "18px", zIndex: "4" }} />
                        <span className='position-absolute recent-project-card-round text-center' style={{ left: "36px", zIndex: "3" }}>20+</span>
                    </div>
                    <div className={`my-auto recent-project-card-timeleft ${getDaysLeft(duedate)}`} >{getDaysLeft(duedate)}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard



function getProjectPercent(data){
    console.log(data)
    let length=data.length
    let completed=0
    data.forEach((item,index)=>{
        if(item.status==="completed"){
            completed++
        }

    })
    let percent=(completed/length)*100
    return Math.floor(percent)
    
}