import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchSingleProjects } from "../../features/project/singleprojectSlice"
import AllUserTaskSkeleton from "../../core/components/usertask/AllUserTaskSkeleton"
import TaskRightSidebar from "../../core/components/ListAddTask/TaskRightSidebar"



function SingleProjectList() {
  const { data } = useSelector((state) => state.singleproject)
  const dispatch=useDispatch()
  const params=useParams()

  useEffect(()=>{
      dispatch(fetchSingleProjects(params.id));
  },[dispatch,params.id])
  return (
    <div>
     <TaskRightSidebar/>
      {/* <TaskList/>  */}
    

      <AllUserTaskSkeleton data={data} />

    </div>
  )
}

export default SingleProjectList
