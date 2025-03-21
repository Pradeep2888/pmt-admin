
import DemoCard from './DemoCard.jsx'
import { useNavigate } from 'react-router-dom'

function HomeDemos(data) {
    const demodata=data.data
    const Navigate=useNavigate()
    return (
        <div className='homeprojectsdemo d-flex flex-column gap-2 ' >
            <div className='hpd-heading w-100 mb-2 position-sticky ' >
                <span className='hpd-h-text' >Demos</span>
            </div>
            <div className='hpd-card-box row mx-1 pb-3'  >
                <div style={{cursor:"pointer"}} onClick={()=>Navigate("/project/create/new")} className='hpd-card-area d-flex justify-content-start col-md-6'>
                    <div className='hpd-card d-flex justify-content-start gap-2' >
                        <div className='hpd-card-icon'  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.8346 10.8317H10.8346V15.8317H9.16797V10.8317H4.16797V9.16504H9.16797V4.16504H10.8346V9.16504H15.8346V10.8317Z" fill="#3954A5" />
                            </svg>
                        </div>
                        <div className='my-auto' >
                            <p className='mb-1 hpd-card-text3' >Create Demos</p>
                        </div>
                    </div>
                </div>
                {
                    demodata?.map((item, index) => <DemoCard key={index} id={item.id} name={item.name} team={item.code} priority={item.priority} />)
                }
            </div>
        </div>
    )
}

export default HomeDemos
