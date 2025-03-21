import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function DropDownList({ id, path, title, img, subdata }) {

  const [state, setState] = useState(false)

  const handleHover = () => {
    setState(true)
  }
  const handleOut = () => {
    setState(false)
  }


  if (subdata) {
    return (

      <li key={id} className=' drop-down-list sub-nav-dropdow position-relative' >
        <button className="btn dropdown-toggle d-flex justify-content-start gap-2 text-decoration-none p-0 w-100 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <div className='  drop-down-list-icon d-flex' ><img src={img} className=' h-100 w-100' /></div>
          <p className=' my-auto drop-down-list-text ' >{title}</p>
        </button>
        <ul className="dropdown-menu p-0 sub-nav-dropdow-sibling">
          {
            subdata?.map((item, index) =>
              <li key={index} ><Link id={item.id} type="button" data-bs-toggle="modal" data-bs-target={`#createProjectModal${item.id}`} path={item.path} className=' d-flex justify-content-start gap-2 text-decoration-none drop-down-list' >

                {/* <button type="button" className="btn w-100" data-bs-toggle="modal" data-bs-target={`#createProjectModal${item.id}`}> */}
                  <div className='drop-down-list-icon d-flex' ><img src={item.img_url} className=' h-100 w-100' /></div>
                  <p className=' my-auto drop-down-list-text ' >{item.title}</p>
                    
                  {/* {item.title} */}

                {/* </button> */}

              </Link>
              </li>
            )
          }
        </ul>
      </li>
    )
  }
  else {
    return (
      <li key={id} ><Link id={id} path={path} className=' d-flex justify-content-start gap-2 text-decoration-none drop-down-list' >
        <div className='  drop-down-list-icon d-flex' ><img src={img} className=' h-100 w-100' /></div>
        <p className=' my-auto drop-down-list-text' >{title}</p>
      </Link>
      </li>
    )
  }

}

export default DropDownList




