

function NortificationList() {
    return (
        <div>
            <div className='nt-list-area mx-2 d-flex gap-2 justify-content-between' >
                <div className='d-flex gap-2 justify-content-start' >
                    <div className="chat-user-img"><img src="https://bit.ly/dan-abramov" alt='user_image' /></div>
                    <div>
                        <p className="mb-1 recent-project-card-timeleft fw-bolder" style={{ "fontSize": "16px", "color": "#5B5B5B" }} >WD_P2212131169_NA Sales</p>
                        <div className="mb-1 nt-botom-text" style={{ "fontSize": "16px", "color": "#5B5B5B" }} >
                            <span style={{ fontSize: "16px", fontWeight: "600" }} >Varun Arora </span>
                            <span style={{ fontSize: "16px", fontWeight: "500" }} >shared a project with you </span>
                            <span style={{ fontSize: "16px", fontWeight: "400" }} >. </span>
                            <span style={{ fontSize: "12px", fontWeight: "400" }} >2 mins ago</span>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:"transparent"}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M15.4326 7.79308C15.219 7.78825 15.0067 7.82613 14.8079 7.90451C14.6092 7.98289 14.4282 8.10017 14.2754 8.24948C14.1226 8.3988 14.0012 8.57712 13.9183 8.774C13.8355 8.97087 13.7927 9.18232 13.7927 9.39593C13.7926 9.60955 13.8352 9.82102 13.918 10.0179C14.0008 10.2148 14.1221 10.3932 14.2748 10.5426C14.4275 10.692 14.6085 10.8094 14.8072 10.8879C15.0059 10.9663 15.2182 11.0043 15.4318 10.9996C15.8508 10.9903 16.2495 10.8174 16.5426 10.5178C16.8357 10.2183 16.9999 9.81585 17 9.39674C17.0001 8.97763 16.8361 8.57513 16.5432 8.27541C16.2502 7.97568 15.8516 7.80255 15.4326 7.79308ZM4.20692 9.39674C4.21175 9.18318 4.17387 8.97081 4.09549 8.7721C4.01712 8.57338 3.89983 8.39232 3.75052 8.23956C3.60121 8.0868 3.42288 7.9654 3.22601 7.8825C3.02913 7.79961 2.81768 7.75688 2.60407 7.75682C2.39045 7.75677 2.17898 7.79939 1.98207 7.88219C1.78515 7.96499 1.60677 8.0863 1.45738 8.23899C1.30799 8.39168 1.19061 8.57267 1.11214 8.77135C1.03366 8.97003 0.99567 9.18238 1.00039 9.39594C1.00966 9.81495 1.18259 10.2137 1.48216 10.5068C1.78174 10.7999 2.18416 10.9641 2.60327 10.9642C3.02238 10.9643 3.42487 10.8003 3.7246 10.5073C4.02432 10.2144 4.19745 9.81575 4.20692 9.39674ZM10.6216 9.39674C10.6264 9.18318 10.5885 8.97081 10.5102 8.7721C10.4318 8.57338 10.3145 8.39232 10.1652 8.23956C10.0159 8.0868 9.83754 7.9654 9.64067 7.8825C9.4438 7.79961 9.23235 7.75688 9.01873 7.75682C8.80512 7.75677 8.59365 7.79939 8.39673 7.88219C8.19982 7.96499 8.02143 8.0863 7.87204 8.23899C7.72266 8.39168 7.60528 8.57267 7.5268 8.77135C7.44833 8.97003 7.41034 9.18238 7.41506 9.39594C7.42432 9.81495 7.59725 10.2137 7.89683 10.5068C8.19641 10.7999 8.59882 10.9641 9.01793 10.9642C9.43704 10.9643 9.83954 10.8003 10.1393 10.5073C10.439 10.2144 10.6121 9.81575 10.6216 9.39674Z" fill="#3954A5" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu nt-dropdown-list"  >
                        <li><a className="dropdown-item recent-project-card-timeleft" style={{fontSize:"14px"}} href="#">Mark as read</a></li>
                        <li><a className="dropdown-item recent-project-card-timeleft" style={{fontSize:"14px"}} href="#">Archive</a></li>
                        <li><a className="dropdown-item recent-project-card-timeleft" style={{fontSize:"14px"}} href="#">Bookmark</a></li>
                    </ul>
                </div>
            </div>
            <div className='mx-2 my-1 nt-list-bottom' ></div>
        </div>
    )
}

export default NortificationList
