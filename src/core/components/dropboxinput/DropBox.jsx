import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IconPath } from '../../constants/fileIcon.js'

function DropBox({ onFileChange, existingDocuments }) {


  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onFileChange([...files, ...newFiles]);
  }, [files, onFileChange]);

  const handleDelete = (fileToDelete, event) => {
    event.stopPropagation();
    setFiles((prevFiles) => prevFiles.filter(file => file !== fileToDelete));
    onFileChange(files.filter(file => file !== fileToDelete));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 10,
    multiple: true,
  });
  const isImage = (file) => file && file.type.startsWith('image');
  const isPDF = (file) => file && file.type === 'application/pdf';
  const previousdocument = JSON.parse(existingDocuments ? existingDocuments : "[]")


  return (
    <div {...getRootProps()} className='drop-box d-flex gap-2 flex-column justify-content-center position-relative'>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <div>
            <div className='d-flex'>
            </div>
            <div className='mx-auto drop-box-text'>
              <span className='d-block'>Drag and drop your files here</span>
              <span className='d-block'>or click to upload (up to 10 files)</span>
            </div>
          </div>
          :
          <div>
            <div className='d-flex'>
              <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g id="backup">
                  <mask id="mask0_1208_14072" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                    <rect id="Bounding box" width="48" height="48" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1208_14072)">
                    <path id="backup_2" d="M13 40C9.96667 40 7.37533 38.95 5.226 36.85C3.07533 34.75 2 32.1833 2 29.15C2 26.55 2.78333 24.2333 4.35 22.2C5.91667 20.1667 7.96667 18.8667 10.5 18.3C11.3333 15.2333 13 12.75 15.5 10.85C18 8.95 20.8333 8 24 8C27.9 8 31.208 9.358 33.924 12.074C36.6413 14.7913 38 18.1 38 22C40.3 22.2667 42.2087 23.258 43.726 24.974C45.242 26.6913 46 28.7 46 31C46 33.5 45.1253 35.6253 43.376 37.376C41.6253 39.1253 39.5 40 37 40H26V25.7L27.8 27.45C28.1667 27.8167 28.6253 28 29.176 28C29.7253 28 30.2 27.8 30.6 27.4C30.9667 27.0333 31.15 26.5667 31.15 26C31.15 25.4333 30.9667 24.9667 30.6 24.6L25.4 19.4C25 19 24.5333 18.8 24 18.8C23.4667 18.8 23 19 22.6 19.4L17.4 24.6C17.0333 24.9667 16.842 25.4247 16.826 25.974C16.8087 26.5247 17 27 17.4 27.4C17.7667 27.7667 18.2247 27.9587 18.774 27.976C19.3247 27.992 19.8 27.8167 20.2 27.45L22 25.7V40H13Z" fill="#3954A5" />
                  </g>
                </g>
              </svg>
            </div>
            <div className='mx-auto drop-box-text'>
              <span className='d-block'>Drag and drop your files here</span>
              <span className='d-block'>or click to upload (up to 10 files)</span>
            </div>
          </div>
      }

      <div className="file-previews mt-3">
        {
          previousdocument?.map((item, index) => (
            <div key={index} className="file-preview d-flex align-items-center justify-content-between bg-white mx-2  p-1 gap-2">
              <div className="file-thumbnail" >

                {renderFile(item.url)}

              </div>
              <span className="file-name">{item.id}</span>
              <button className="ts-wip-btn text-white" disabled >Delete</button>
            </div>
          ))
        }
        {files.map((file, index) => (
          <div key={index} className="file-preview d-flex align-items-center justify-content-between bg-white mx-2  p-1 gap-2">
            <div className="file-thumbnail">
              {isImage(file) ? (
                <img
                  src={file.preview}
                  alt="preview"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              ) : isPDF(file) ? (
                <img src={IconPath[0].path} style={{ backgroundColor: "#fff", border: "1px solid #fff" }} />
              ) : (
                <img src={IconPath[1].path} style={{ backgroundColor: "#fff", border: "1px solid #fff" }} />
              )}
            </div>
            <span className="file-name">{file.name}</span>
            <button onClick={(event) => handleDelete(file, event)} className="ts-wip-btn text-white bg-danger">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropBox;



const renderFile = (url) => {
  if (url.match(/\.(jpeg|jpg|gif|png)$/i)) {
    return <img
      alt="preview"
      src={url}
      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
    />
  } else if (url.match(/\.pdf$/i)) {
    // If the URL is a PDF
    return  <img src={IconPath[0].path} style={{ backgroundColor: "#fff", border: "1px solid #fff" }} />;
  } else {
    return  <img src={IconPath[1].path} style={{ backgroundColor: "#fff", border: "1px solid #fff" }} />;
  }
};



// import React, { useCallback } from 'react' SCKL;
// import { useDropzone } from 'react-dropzone'

// function DropBox({onFileChange}) {
//   const onDrop = useCallback(acceptedFiles => {
//     onFileChange(acceptedFiles)
//   }, [])
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

//   return (
//     <div {...getRootProps()} className='drop-box d-flex gap-2 flex-column justify-content-center position-relative' >
//       <input {...getInputProps()} />
//       {
//         isDragActive ?
//           <div >
//             <div className='d-flex' >
//               <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
//                 <g id="backup">
//                   <mask id="mask0_1208_14072" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
//                     <rect id="Bounding box" width="48" height="48" fill="#D9D9D9" />
//                   </mask>
//                   <g mask="url(#mask0_1208_14072)">
//                     <path id="backup_2" d="M13 40C9.96667 40 7.37533 38.95 5.226 36.85C3.07533 34.75 2 32.1833 2 29.15C2 26.55 2.78333 24.2333 4.35 22.2C5.91667 20.1667 7.96667 18.8667 10.5 18.3C11.3333 15.2333 13 12.75 15.5 10.85C18 8.95 20.8333 8 24 8C27.9 8 31.208 9.358 33.924 12.074C36.6413 14.7913 38 18.1 38 22C40.3 22.2667 42.2087 23.258 43.726 24.974C45.242 26.6913 46 28.7 46 31C46 33.5 45.1253 35.6253 43.376 37.376C41.6253 39.1253 39.5 40 37 40H26V25.7L27.8 27.45C28.1667 27.8167 28.6253 28 29.176 28C29.7253 28 30.2 27.8 30.6 27.4C30.9667 27.0333 31.15 26.5667 31.15 26C31.15 25.4333 30.9667 24.9667 30.6 24.6L25.4 19.4C25 19 24.5333 18.8 24 18.8C23.4667 18.8 23 19 22.6 19.4L17.4 24.6C17.0333 24.9667 16.842 25.4247 16.826 25.974C16.8087 26.5247 17 27 17.4 27.4C17.7667 27.7667 18.2247 27.9587 18.774 27.976C19.3247 27.992 19.8 27.8167 20.2 27.45L22 25.7V40H13Z" fill="#3954A5" />
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <div className='mx-auto drop-box-text'>
//               <span className='d-block'>Drag and drop your files here</span>
//               <span className='d-block'>or click to upload (up to 10 files)</span>
//             </div>
//           </div>
//           :
//           <div >
//             <div className='d-flex' >
//               <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
//                 <g id="backup">
//                   <mask id="mask0_1208_14072" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
//                     <rect id="Bounding box" width="48" height="48" fill="#D9D9D9" />
//                   </mask>
//                   <g mask="url(#mask0_1208_14072)">
//                     <path id="backup_2" d="M13 40C9.96667 40 7.37533 38.95 5.226 36.85C3.07533 34.75 2 32.1833 2 29.15C2 26.55 2.78333 24.2333 4.35 22.2C5.91667 20.1667 7.96667 18.8667 10.5 18.3C11.3333 15.2333 13 12.75 15.5 10.85C18 8.95 20.8333 8 24 8C27.9 8 31.208 9.358 33.924 12.074C36.6413 14.7913 38 18.1 38 22C40.3 22.2667 42.2087 23.258 43.726 24.974C45.242 26.6913 46 28.7 46 31C46 33.5 45.1253 35.6253 43.376 37.376C41.6253 39.1253 39.5 40 37 40H26V25.7L27.8 27.45C28.1667 27.8167 28.6253 28 29.176 28C29.7253 28 30.2 27.8 30.6 27.4C30.9667 27.0333 31.15 26.5667 31.15 26C31.15 25.4333 30.9667 24.9667 30.6 24.6L25.4 19.4C25 19 24.5333 18.8 24 18.8C23.4667 18.8 23 19 22.6 19.4L17.4 24.6C17.0333 24.9667 16.842 25.4247 16.826 25.974C16.8087 26.5247 17 27 17.4 27.4C17.7667 27.7667 18.2247 27.9587 18.774 27.976C19.3247 27.992 19.8 27.8167 20.2 27.45L22 25.7V40H13Z" fill="#3954A5" />
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <div className='mx-auto drop-box-text'>
//               <span className='d-block'>Drag and drop your files here</span>
//               <span className='d-block'>or click to upload (up to 10 files)</span>
//             </div>
//           </div>
//       }
//     </div>
//   )
// }

// export default DropBox;
















