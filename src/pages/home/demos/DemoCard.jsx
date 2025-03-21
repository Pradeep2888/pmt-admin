import { useNavigate } from "react-router-dom"


function DemoCard({ id, name, team, priority }) {
    const navigate = useNavigate()
    return (
        <div id={id} className='hpd-card-area d-flex justify-content-start col-md-6 '>
            <div className='hpd-card d-flex justify-content-start gap-2 position-relative' onClick={() => navigate(`/single/project/detail/${id}`)} style={{ cursor: "pointer" }} >
                <div className='hpd-card-icon-box d-flex' style={priority === "High" ? { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #3954A5" } : priority === "Medium" ? { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%), #3954A5" } : { background: "linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #3954A5" }}  >
                    <span className="m-auto fs-5 fw-bolder" >{name[0]}</span>
                </div>
                <div className='my-auto' >
                    <p className='mb-1 hpd-card-text1' >{name}</p>
                    <p className='mb-0 hpd-card-text2' >{team}</p>
                </div>
                <div className='my-auto pc-dot-area position-absolute d-none' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15.875 23.0625C15.875 22.8139 15.7762 22.5754 15.6004 22.3996C15.4246 22.2238 15.1861 22.125 14.9375 22.125C14.6889 22.125 14.4504 22.2238 14.2746 22.3996C14.0988 22.5754 14 22.8139 14 23.0625C14 23.3111 14.0988 23.5496 14.2746 23.7254C14.4504 23.9012 14.6889 24 14.9375 24C15.1861 24 15.4246 23.9012 15.6004 23.7254C15.7762 23.5496 15.875 23.3111 15.875 23.0625ZM15.875 15.5625C15.875 15.3139 15.7762 15.0754 15.6004 14.8996C15.4246 14.7238 15.1861 14.625 14.9375 14.625C14.6889 14.625 14.4504 14.7238 14.2746 14.8996C14.0988 15.0754 14 15.3139 14 15.5625C14 15.8111 14.0988 16.0496 14.2746 16.2254C14.4504 16.4012 14.6889 16.5 14.9375 16.5C15.1861 16.5 15.4246 16.4012 15.6004 16.2254C15.7762 16.0496 15.875 15.8111 15.875 15.5625ZM15.875 8.0625C15.875 7.81386 15.7762 7.5754 15.6004 7.39959C15.4246 7.22377 15.1861 7.125 14.9375 7.125C14.6889 7.125 14.4504 7.22377 14.2746 7.39959C14.0988 7.5754 14 7.81386 14 8.0625C14 8.31114 14.0988 8.5496 14.2746 8.72541C14.4504 8.90123 14.6889 9 14.9375 9C15.1861 9 15.4246 8.90123 15.6004 8.72541C15.7762 8.5496 15.875 8.31114 15.875 8.0625Z" stroke="#3954A5" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default DemoCard
