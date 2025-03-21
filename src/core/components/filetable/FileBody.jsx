
import useTimeAgo from '../../../customHooks/useTimeAgo.js';
import { IconPath } from '../../constants/fileIcon.js'


function FileBody(data) {
    const filedata = data.data
    const { getTimeAgo } = useTimeAgo();
    const handleDownloadClick = () => {
        const fileName = filedata.url.split("/").pop(); // Extract filename from URL
        handleDownload(filedata.url, fileName);
    };

    console.log(filedata)

    return (

        <tr>
            <td className='pe-0' >
                {
                    renderFile(filedata.url)
                }
            </td>
            <td className='px-0 file-detail-text' >{filedata.requesting_user_name}</td>
            <td className='px-0 file-detail-text' >{filedata.assignment_name}</td>
            <td className='px-0 file-detail-text' >{getTimeAgo(filedata.created_at)}</td>
            <td className='ps-0 d-flex justify-content-center' >
                {/* <button className='position-relative'  style={{ backgroundColor: "#fff" }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <mask id="mask0_1382_2971" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                            <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1382_2971)">
                            <path d="M9.99967 16.6666C9.54134 16.6666 9.14912 16.5035 8.82301 16.1774C8.49634 15.8508 8.33301 15.4583 8.33301 14.9999C8.33301 14.5416 8.49634 14.1491 8.82301 13.8224C9.14912 13.4963 9.54134 13.3333 9.99967 13.3333C10.458 13.3333 10.8505 13.4963 11.1772 13.8224C11.5033 14.1491 11.6663 14.5416 11.6663 14.9999C11.6663 15.4583 11.5033 15.8508 11.1772 16.1774C10.8505 16.5035 10.458 16.6666 9.99967 16.6666ZM9.99967 11.6666C9.54134 11.6666 9.14912 11.5033 8.82301 11.1766C8.49634 10.8505 8.33301 10.4583 8.33301 9.99992C8.33301 9.54158 8.49634 9.14909 8.82301 8.82242C9.14912 8.49631 9.54134 8.33325 9.99967 8.33325C10.458 8.33325 10.8505 8.49631 11.1772 8.82242C11.5033 9.14909 11.6663 9.54158 11.6663 9.99992C11.6663 10.4583 11.5033 10.8505 11.1772 11.1766C10.8505 11.5033 10.458 11.6666 9.99967 11.6666ZM9.99967 6.66659C9.54134 6.66659 9.14912 6.50325 8.82301 6.17659C8.49634 5.85047 8.33301 5.45825 8.33301 4.99992C8.33301 4.54159 8.49634 4.14936 8.82301 3.82325C9.14912 3.49659 9.54134 3.33325 9.99967 3.33325C10.458 3.33325 10.8505 3.49659 11.1772 3.82325C11.5033 4.14936 11.6663 4.54159 11.6663 4.99992C11.6663 5.45825 11.5033 5.85047 11.1772 6.17659C10.8505 6.50325 10.458 6.66659 9.99967 6.66659Z" fill="#586A84" />
                        </g>
                    </svg>
                </button> */}

                <a href={filedata.url} className='my-3' download target="_blank" rel="noopener noreferrer" >
                    <i className="fa-solid fa-download"></i>
                </a>



            </td>
        </tr>

    )
}

export default FileBody



const renderFile = (url) => {
    if (url.match(/\.(jpeg|jpg|gif|png)$/i)) {
        return <div className='d-flex justify-content-start gap-3' >
            <div >
                <img src={url} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
            </div>
            <div>
                <p className='m-0 recent-project-card-timeleft' style={{ fontSize: "14px" }} >PDF product page presentation</p>
                <p className='m-0 project-detail-list' style={{ fontSize: "12px" }} >20MB</p>
            </div>
        </div>
    } else if (url.match(/\.pdf$/i)) {
        // If the URL is a PDF
        return <div className='d-flex justify-content-start gap-3' >
            <div >
                <img src={IconPath[0].path} style={{ backgroundColor: "#fff", border: "1px solid #fff" }} />
            </div>
            <div>
                <p className='m-0 recent-project-card-timeleft' style={{ fontSize: "14px" }} >PDF product page presentation</p>
                <p className='m-0 project-detail-list' style={{ fontSize: "12px" }} >20MB</p>
            </div>
        </div>;
    } else {
        return <div className='d-flex justify-content-start gap-3' >
            <div >
                <img src={IconPath[1].path} style={{ backgroundColor: "#fff", border: "1px solid #fff" }} />
            </div>
            <div>
                <p className='m-0 recent-project-card-timeleft' style={{ fontSize: "14px" }} >PDF product page presentation</p>
                <p className='m-0 project-detail-list' style={{ fontSize: "12px" }} >20MB</p>
            </div>
        </div>;
    }
};



const handleDownload = (url, filename) => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = url; // Set the file URL
    link.download = filename || "download"; // Provide a default filename if none is passed

    // For PDF or DOC files, ensure the download works
    if (url.match(/\.(pdf|docx?|txt)$/i)) {
        link.target = "_blank"; // Open in a new tab for download fallback
    }

    document.body.appendChild(link); // Append the link to the document
    link.click(); // Programmatically click the link
    document.body.removeChild(link); // Clean up
};
