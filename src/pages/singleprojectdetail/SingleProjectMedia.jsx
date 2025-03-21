
import FileTable from '../../core/components/filetable/FileTable';


function SingleProjectMedia() {
  return (
    <div className='col-12 h-100' >
      <div className='homeprojectsdemo mt-4 p-4' >
        <div className='d-none justify-content-between mb-3' >
          <div  >
            <select className="file-filter " aria-label="Default select example">
              <option value="5" >Display 5 Files</option>
              <option value="10">Display 10 Files</option>
              <option value="20">Display 20 Files</option>
              <option value="50">Display 50 Files</option>
              <option value="All">Display All</option>
            </select>
          </div>

          <div className='d-flex gap-2' >
            <div className="input-group my-auto file-search-bar ">
              <span className="input-group-text search-bar-icon" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_1309_5522" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1309_5522)">
                    <path d="M15.75 16.9167L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8092 4.07333 11.7608C3.02444 10.7119 2.5 9.43056 2.5 7.91667C2.5 6.40278 3.02444 5.12139 4.07333 4.0725C5.12167 3.02417 6.40278 2.5 7.91667 2.5C9.43056 2.5 10.7119 3.02417 11.7608 4.0725C12.8092 5.12139 13.3333 6.40278 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L16.9375 15.7708C17.0903 15.9236 17.1667 16.1111 17.1667 16.3333C17.1667 16.5556 17.0833 16.75 16.9167 16.9167C16.7639 17.0694 16.5694 17.1458 16.3333 17.1458C16.0972 17.1458 15.9028 17.0694 15.75 16.9167ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3022 9.84389 11.6667 8.95833 11.6667 7.91667C11.6667 6.875 11.3022 5.98944 10.5733 5.26C9.84389 4.53111 8.95833 4.16667 7.91667 4.16667C6.875 4.16667 5.98944 4.53111 5.26 5.26C4.53111 5.98944 4.16667 6.875 4.16667 7.91667C4.16667 8.95833 4.53111 9.84389 5.26 10.5733C5.98944 11.3022 6.875 11.6667 7.91667 11.6667Z" fill="#586A84" />
                  </g>
                </svg>
              </span>
              <input type="text" className="form-control search-bar-input-box" placeholder="Search product.." />
            </div>
            <button className='file-fileter-icon' >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_1309_5528" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1309_5528)">
                  <path d="M11 18C10.7167 18 10.4793 17.904 10.288 17.712C10.096 17.5207 10 17.2833 10 17C10 16.7167 10.096 16.4793 10.288 16.288C10.4793 16.096 10.7167 16 11 16H13C13.2833 16 13.521 16.096 13.713 16.288C13.9043 16.4793 14 16.7167 14 17C14 17.2833 13.9043 17.5207 13.713 17.712C13.521 17.904 13.2833 18 13 18H11ZM4 8C3.71667 8 3.47933 7.90433 3.288 7.713C3.096 7.521 3 7.28333 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6H20C20.2833 6 20.5207 6.09567 20.712 6.287C20.904 6.479 21 6.71667 21 7C21 7.28333 20.904 7.521 20.712 7.713C20.5207 7.90433 20.2833 8 20 8H4ZM7 13C6.71667 13 6.479 12.904 6.287 12.712C6.09567 12.5207 6 12.2833 6 12C6 11.7167 6.09567 11.479 6.287 11.287C6.479 11.0957 6.71667 11 7 11H17C17.2833 11 17.5207 11.0957 17.712 11.287C17.904 11.479 18 11.7167 18 12C18 12.2833 17.904 12.5207 17.712 12.712C17.5207 12.904 17.2833 13 17 13H7Z" fill="white" />
                </g>
              </svg>
            </button>
          </div>



        </div>

        <FileTable  />

      </div>
    </div>

  )
}

export default SingleProjectMedia
