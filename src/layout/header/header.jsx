
import { data } from './navData'
import DropDownList from './dropdownlist.jsx'
import Searchbar from './searchbar'
import Upgradebtn from './upgradebtn'
import Profiledropdown from './profiledropdown'


function Header() {

  return (
    <div className=' d-flex justify-content-between py-1'>
      <div className=' d-flex gap-3'>
        <div className='togle-icon my-auto' >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.75 7C20.75 7.19891 20.671 7.38968 20.5303 7.53033C20.3897 7.67098 20.1989 7.75 20 7.75H4C3.80109 7.75 3.61032 7.67098 3.46967 7.53033C3.32902 7.38968 3.25 7.19891 3.25 7C3.25 6.80109 3.32902 6.61032 3.46967 6.46967C3.61032 6.32902 3.80109 6.25 4 6.25H20C20.1989 6.25 20.3897 6.32902 20.5303 6.46967C20.671 6.61032 20.75 6.80109 20.75 7ZM20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75H4C3.80109 12.75 3.61032 12.671 3.46967 12.5303C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697C3.61032 11.329 3.80109 11.25 4 11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12ZM20.75 17C20.75 17.1989 20.671 17.3897 20.5303 17.5303C20.3897 17.671 20.1989 17.75 20 17.75H4C3.80109 17.75 3.61032 17.671 3.46967 17.5303C3.32902 17.3897 3.25 17.1989 3.25 17C3.25 16.8011 3.32902 16.6103 3.46967 16.4697C3.61032 16.329 3.80109 16.25 4 16.25H20C20.1989 16.25 20.3897 16.329 20.5303 16.4697C20.671 16.6103 20.75 16.8011 20.75 17Z" fill="#F8F9FF" />
          </svg>
        </div>
        <div className="dropdown">
          <button className="btn dropdown-toggle creat-icon-area d-flex gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className=' plus-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M13.5 9.74805H9.75V13.498C9.75 13.697 9.67098 13.8877 9.53033 14.0284C9.38968 14.169 9.19891 14.248 9 14.248C8.80109 14.248 8.61032 14.169 8.46967 14.0284C8.32902 13.8877 8.25 13.697 8.25 13.498V9.74805H4.5C4.30109 9.74805 4.11032 9.66903 3.96967 9.52838C3.82902 9.38773 3.75 9.19696 3.75 8.99805C3.75 8.79914 3.82902 8.60837 3.96967 8.46772C4.11032 8.32707 4.30109 8.24805 4.5 8.24805H8.25V4.49805C8.25 4.29913 8.32902 4.10837 8.46967 3.96772C8.61032 3.82706 8.80109 3.74805 9 3.74805C9.19891 3.74805 9.38968 3.82706 9.53033 3.96772C9.67098 4.10837 9.75 4.29913 9.75 4.49805V8.24805H13.5C13.6989 8.24805 13.8897 8.32707 14.0303 8.46772C14.171 8.60837 14.25 8.79914 14.25 8.99805C14.25 9.19696 14.171 9.38773 14.0303 9.52838C13.8897 9.66903 13.6989 9.74805 13.5 9.74805Z" fill="#F8F9FF" />
              </svg>
            </div>
            <div className='plus-icon-text m-auto'>Create</div>
          </button>
          <ul className="dropdown-menu p-0 ">
            {
              data?.map((item, index) => <DropDownList key={index} path={item.path} id={item.id} img={item.img_url} title={item.title} subdata={item.subdata?item.subdata:false} />)
            }
          </ul>
        </div>
      </div>
      <div className='  w-25 my-auto' >
         <Searchbar/>
      </div>
      <div className=' d-flex gap-2' >
           <Upgradebtn/>
           <Profiledropdown/>
      </div>
    </div>
  )
}

export default Header
