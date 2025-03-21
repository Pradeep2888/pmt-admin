import React, { useState } from 'react'
import Button from '../../core/components/FilterBtn/Button.jsx'
import TaskSkeleton from '../../core/components/task/TaskSkeleton.jsx'
import SingleProjectMedia from '../singleprojectdetail/SingleProjectMedia.jsx'
import { useSelector } from 'react-redux'

function DemoAll() {
    const [childstate, setChildState] = useState("Details")
    const projectData = useSelector((state) => state.project.data);
    const newprojectdata=projectData?.filter((item)=>{
        return item.project_type === "demo"
    })

    // const getBtnValue = (value) => {
    //     setChildState(value);
    // };
    return (
        <div className=' homepage  p-4 gap-3' style={{ height: "calc(100vh - 3rem)" }} >
            <div className=' row' >
                <div className='col-12' >
                    <span className='demo-heading' >All Demos</span>
                </div>
                <div className='col-12 mt-3 d-flex justify-content-start gap-2 demo-filter-area' >
                    {/* <Button type="Details" returnBtnValue={getBtnValue} />
                    <Button type="Media" returnBtnValue={getBtnValue} /> */}
                </div>
                <div className='col-12 mt-2 demo-all-border mx-2'  ></div>

                {
                    childstate === "Details" ? <div className='col-12 mt-2 ps-lg-5'  >
                        <TaskSkeleton data={newprojectdata.reverse()} length={newprojectdata.length} />
                    </div> :
                        childstate === "Media" ? <SingleProjectMedia /> :
                            <h1>Something Went Wrong</h1>
                }


            </div>
        </div>
    )
}

export default DemoAll
