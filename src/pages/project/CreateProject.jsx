
import { useNavigate } from 'react-router-dom'

function CreateProject() {

    const Navigate=useNavigate()

    return (
        <div className=' homepage  p-4 gap-3' style={{ height: "calc(100vh - 3rem)" }} >
            <div className='row h-100' >
                <div className='col-12 d-flex justify-content-between' style={{ height: 'fit-content' }} >
                    <div style={{cursor:'pointer'}} onClick={()=>Navigate("/")} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.043 4.34366C12.5012 4.80188 12.5012 5.54479 12.043 6.00301L7.00601 11.04H19.4267C20.0747 11.04 20.6 11.5653 20.6 12.2133C20.6 12.8613 20.0747 13.3867 19.4267 13.3867H7.00601L12.043 18.4237C12.5012 18.8819 12.5012 19.6248 12.043 20.083C11.5848 20.5412 10.8419 20.5412 10.3837 20.083L3.34366 13.043C2.88545 12.5848 2.88545 11.8419 3.34366 11.3837L10.3837 4.34366C10.8419 3.88545 11.5848 3.88545 12.043 4.34366Z" fill="#212121" />
                        </svg>
                    </div>
                    <div style={{cursor:'pointer'}} onClick={()=>Navigate("/")} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5.82397 3.6322L12 9.8082L18.144 3.6642C18.2797 3.51974 18.4432 3.40419 18.6246 3.32445C18.8061 3.24472 19.0018 3.20246 19.2 3.2002C19.6243 3.2002 20.0313 3.36877 20.3313 3.66882C20.6314 3.96888 20.8 4.37585 20.8 4.8002C20.8037 4.99636 20.7673 5.19121 20.693 5.37281C20.6187 5.5544 20.5081 5.71889 20.368 5.8562L14.144 12.0002L20.368 18.2242C20.6317 18.4822 20.7863 18.8315 20.8 19.2002C20.8 19.6245 20.6314 20.0315 20.3313 20.3316C20.0313 20.6316 19.6243 20.8002 19.2 20.8002C18.9961 20.8087 18.7926 20.7746 18.6026 20.7003C18.4125 20.6259 18.24 20.5128 18.096 20.3682L12 14.1922L5.83997 20.3522C5.70478 20.4918 5.54327 20.6033 5.36477 20.6802C5.18627 20.7571 4.99431 20.7979 4.79997 20.8002C4.37562 20.8002 3.96865 20.6316 3.6686 20.3316C3.36854 20.0315 3.19997 19.6245 3.19997 19.2002C3.19624 19.004 3.23263 18.8092 3.30692 18.6276C3.38121 18.446 3.49182 18.2815 3.63197 18.1442L9.85597 12.0002L3.63197 5.7762C3.36826 5.51821 3.21363 5.16885 3.19997 4.8002C3.19997 4.37585 3.36854 3.96888 3.6686 3.66882C3.96865 3.36877 4.37562 3.2002 4.79997 3.2002C5.18397 3.205 5.55197 3.3602 5.82397 3.6322Z" fill="#212121" />
                        </svg>
                    </div>
                </div>

                <div className='col-12 d-flex' style={{ height: "calc(100vh - 12rem)" }} >
                    <div className='m-auto' >
                        <div className='text-center recent-project-card-timeleft'>
                            <span style={{fontSize:'32px'}} >Let’s create something new </span>
                        </div>
                        <div className='d-flex gap-5 mt-5 justify-content-center'>
                            <div>
                                <div className='blank-project-btn' onClick={()=>Navigate("new")} >+</div>
                                <div className='text-center mt-2 recent-project-card-timeleft' style={{fontSize:'18px'}} >Blank Project</div>
                                <div className='text-center recent-project-card-timeleft' style={{fontSize:'14px'}} >Start from scratch</div>
                            </div>
                            <div>
                                <div className='blank-project-btn' onClick={()=>Navigate("new")} >+</div>
                                <div className='text-center mt-2 recent-project-card-timeleft'style={{fontSize:'18px'}} >Blank Demo</div>
                                <div className='text-center recent-project-card-timeleft' style={{fontSize:'14px'}} >Start from scratch</div>
                            </div>
                            

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateProject
