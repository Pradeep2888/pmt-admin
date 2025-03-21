
import TaskSkeleton from '../../core/components/task/TaskSkeleton'
import TopSection from './topsection/TopSection'
import { Link } from 'react-router-dom'
import HomeProjects from './projects/HomeProjects.jsx'
import HomeDemos from './demos/HomeDemos.jsx'
import Team from '../../core/components/team/Team.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProjects } from '../../features/project/projectSlice.js'
import { useEffect } from 'react'

function HomePage() {
  const dispatch = useDispatch()
  const projectData = useSelector((state) => state.project.data);
     console.log(projectData)
  const newprojectdata=projectData?.filter?projectData.filter((item)=>{
      return item.project_type !== "demo"
  }):[]
  const newdemodata=projectData?.filter?projectData.filter((item)=>{
    return item.project_type === "demo"
}):[]

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, [dispatch]);

  return (
    <div className=' homepage  p-4 gap-3' style={{ height: "calc(100vh - 3rem)" }} >
      <div className='row' >
        <TopSection />
        <div className='col-12 d-flex gap-2 justify-content-start hps-2 mt-3 d-none' >
          <span className='hps-2-icon' ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M1.16616 25H1.10842C0.733134 24.9711 0.473319 24.6536 0.502187 24.3072C0.877476 18.7933 6.07378 14.4919 12.3093 14.4919C18.5449 14.4919 23.7412 18.7933 24.1165 24.2783C24.1454 24.6536 23.8567 24.9423 23.5103 24.9711C23.135 25 22.8463 24.7113 22.8174 24.3649C22.471 19.5439 17.8521 15.791 12.3093 15.791C6.73775 15.791 2.11882 19.5727 1.80126 24.3938C1.7724 24.7402 1.48371 25 1.16616 25ZM12.3093 13.164C8.67193 13.164 5.72736 10.2194 5.72736 6.58199C5.72736 2.94457 8.67193 0 12.3093 0C15.9468 0 18.8913 2.94457 18.8913 6.58199C18.8913 10.2194 15.9468 13.164 12.3093 13.164ZM12.3093 1.32794C9.42251 1.32794 7.0553 3.69515 7.0553 6.58199C7.0553 9.46882 9.42251 11.836 12.3093 11.836C15.1962 11.836 17.5634 9.46882 17.5634 6.58199C17.5634 3.69515 15.1962 1.32794 12.3093 1.32794Z" fill="black" />
          </svg></span>
          <span className='hps-2-text my-auto' >My Task</span>
        </div>
        {/* <TaskSkeleton data={newprojectdata} /> */}
        <div className='col-12 mt-2 dropdown d-none' >
          <button className="btn dropdown-toggle hp-seeall" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            See all...
          </button>
          <ul className="dropdown-menu">
            <li><Link className='dropdown-item recent-project-card-timeleft' style={{ fontSize: "14px" }} to="/allprojects" >Project</Link></li>
            <li><Link className='dropdown-item recent-project-card-timeleft' style={{ fontSize: "14px" }} to={"/alldemo"} >Demo</Link></li>
          </ul>
        </div>

        <div className='col-12 row mx-0 mt-4' >
          <div className='col-lg-6 ps-0' >
            <HomeProjects data={newprojectdata} />
          </div>
          <div className='col-lg-6 pe-0' >
            <HomeDemos data={newdemodata} />
          </div>
        </div>

        <div className='col-12' >
          <Team />
        </div>
      </div>
    </div>
  )
}

export default HomePage
