import { useState } from 'react'
import Button from '../../core/components/FilterBtn/Button'
import SingleProjectDetail from './SingleProjectDetail'
import SingleProjectOverview from './SingleProjectOverview';
import SingleProjectList from './SingleProjectList';
import SingleProjectMedia from './SingleProjectMedia';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SingleProjectSkeleton() {
    const [childstate,setChildState]=useState("Details")
    const navigate=useNavigate()
    const getBtnValue = (value) => {
        setChildState(value);
    };

    const {data}=useSelector((state)=>state.singleproject)


    return (
        
        <div className=' homepage  p-4 gap-3' style={{ height: "calc(100vh - 3rem)" }} >
            <div className='row w-100' >
                <div className="col-12 d-flex justify-content-between">
                    <span className="demo-heading">{data.name}</span>
                    {/*  */}
                    <button className='editproject-btn' onClick={()=>navigate(`/edit/projects/${data.id}`)} >
                    Edit {data.project_type==="demo"?"demo":"project"} details
                 
                    <i className="fa-regular fa-pen-to-square my-auto" ></i>
                    </button>
                </div>
                <div className='col-12 mt-3 d-flex justify-content-start gap-2 demo-filter-area' >
                    <Button type={"Details"} returnBtnValue={getBtnValue}  />
                    <Button type={"Overview"} returnBtnValue={getBtnValue}  />
                    <Button type={"List"} returnBtnValue={getBtnValue}  />
                    <Button type={"Media"} returnBtnValue={getBtnValue}  />
                </div>
                <div className="col-12 mt-2 ">
                    <div className='demo-all-border' ></div>
                </div>
                 
                 {
                    childstate === "Details" ? <SingleProjectDetail /> :
                    childstate === "Overview" ? <SingleProjectOverview /> : 
                    childstate === "List" ? <SingleProjectList /> : 
                    childstate === "Media" ? <SingleProjectMedia /> :
                    <h1>Something Went Wrong</h1> 
                 }

            </div>
        </div>
    )
}

export default SingleProjectSkeleton




