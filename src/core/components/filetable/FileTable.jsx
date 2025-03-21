
import { useSelector } from 'react-redux';
import FileBody from './FileBody.jsx'
import { useEffect, useState } from 'react';

function FileTable() {


    const { data } = useSelector((state) => state.singleproject);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        if (data && Array.isArray(data.assignments)) {
            const allUrls = [];
            data.assignments.forEach((item) => {
                if (item.documents !== null) {
                    let assignment_name = item.task_heading
                    let requesting_user_name
                    if (item.requesting_user !== null) {
                        requesting_user_name = item.requesting_user.name
                    }
                    else {
                        requesting_user_name = "Auto Created Assignment"
                    }

                    const documents = JSON.parse(item.documents);
                    documents.forEach((doc) => {
                        if (doc && doc.url) {

                            allUrls.push({
                                requesting_user_name,
                                assignment_name,
                                url: doc.url,
                                created_at: doc.date
                            });
                        }
                    });
                }
            });

            setUrls(allUrls);
        } else {
            setUrls([]);
        }
    }, [data]);


    return (
        <table className="table-section col-12">
            <thead className='file-table-heading' >
                <tr >
                    <th className='pe-0' >Media list</th>
                    <th className='px-0' >Uploaded by</th>
                    <th className='px-0' >Assignment</th>
                    <th className='px-0' >Date</th>
                    <th className='ps-0 text-center' >Options</th>
                </tr>
            </thead>
            <tbody className='file-table-body' >

            {
                urls.map((item,index)=><FileBody key={index} data={item} />)
            }

            </tbody>
        </table>
    )
}

export default FileTable
