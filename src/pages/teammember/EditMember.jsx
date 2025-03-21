import { useEffect } from 'react'
import MemberList from './MemberList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../features/user/userSlice';


function EditMember() {

    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.user);



    const newdata = data?.slice().sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    
    
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    return (
        <div className=' homepage  p-4 gap-3' style={{ height: "calc(100vh - 3rem)" }} >
            <div className='row' >
                <div className="col-12">
                    <span className="demo-heading">All Member List</span>
                </div>

                <div className="col-12 mt-2 ">
                    <div className='demo-all-border' ></div>
                </div>

                <div className='col-12 mt-1' style={{ height: "calc(100vh - 12rem)", overflowY: "scroll" }}>
                   
                <div className='row mb-5 px-3' >    
                    {

                        newdata?.map((value, index) =>
                            <MemberList key={index} value={value} />
                        )

                    }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default EditMember
