
import Header from '../header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
import SideBar from '../sidebar/SideBar'

function BaseLayout() {
  return (
    <div id="base-c-the-business-main row overflow-hidden" className=' container-fluid p-0' style={{height:"100vh"}}  >
        <div className='col-12 sticky-top top-0' style={{height:"3rem",zIndex:"1030"}} >
            <Header/>
        </div>
        <div className=' col-12 row main-body m-0 ' style={{height:"calc(100vh - 3rem)"}} >
          <div className=' col-2 ps-0' >
            <SideBar/>
          </div>
          <div className=' col-10 ps-3 pe-0'   >
            <Outlet/>
          </div>
        </div>

      
    </div>
  )
}

export default BaseLayout
