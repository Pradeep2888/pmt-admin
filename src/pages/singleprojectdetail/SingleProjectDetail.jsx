import { useParams } from 'react-router-dom'
import Team from '../../core/components/team/Team'
import TextEditor from './TextEditor'
import { fetchSingleProjects } from '../../features/project/singleprojectSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function SingleProjectDetail() {
    const params=useParams()
    const dispatch=useDispatch()
    const projectData = useSelector((state) => state.singleproject.data);


    useEffect(() => {
        dispatch(fetchSingleProjects(params.id));
    }, [dispatch,params.id]);

    return (
        <div className="col-12 mt-2 row ps-5 mt-3"  >
            <div className='col-lg-6 mb-4' >
                <div>
                    <p className="mb-1 rpc-card-text1 text-black text-start" style={{ fontSize: "20px" }} >{projectData.project_type==="demo"?"Demo":"Project"} Description</p>
                </div>
                <div>
                    <div className='mt-4 homeprojectsdemo p-3' >
                        <TextEditor description={projectData.description} id={params.id}  />
                    </div>
                </div>
            </div>
            <div className='col-lg-6 mb-4' >
                <div>
                    <p className="mb-1 rpc-card-text1 text-black text-start" style={{ fontSize: "20px" }} >{projectData.project_type==="demo"?"Demo":"Project"} Team</p>
                    <Team assignments={projectData.assignments} />
                </div>
            </div>
        </div>
    )
}

export default SingleProjectDetail
