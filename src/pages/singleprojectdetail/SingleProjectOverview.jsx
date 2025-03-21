import React, {  useState } from 'react'
import pdfIcon from '../../assets/pdf-icon.png'

function SingleProjectOverview() {

    const [setdetail, setShowDetail] = useState(false)


    const handleShowDetails = () => {
        setShowDetail(!setdetail)
    }

    return (
        <div className='col-12 mt-2 ps-5  mt-3' >
            <div className='homeprojectsdemo p-3' >
                <div className='overview-first-card row ' >
                    <div className={setdetail === true ? 'd-none' : 'd-block '}  >
                        <div className='col-12 d-flex justify-content-between' >
                            <div className=' d-flex justify-content-start gap-3' >
                                <div className='my-auto' >
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "sub" }} width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M5 9L8.42857 11.8571L13 6.14286M9 17C7.94943 17 6.90914 16.7931 5.93853 16.391C4.96793 15.989 4.08601 15.3997 3.34315 14.6569C2.60028 13.914 2.011 13.0321 1.60896 12.0615C1.20693 11.0909 1 10.0506 1 9C1 7.94943 1.20693 6.90914 1.60896 5.93853C2.011 4.96793 2.60028 4.08601 3.34315 3.34315C4.08601 2.60028 4.96793 2.011 5.93853 1.60896C6.90914 1.20693 7.94943 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9C17 11.1217 16.1571 13.1566 14.6569 14.6569C13.1566 16.1571 11.1217 17 9 17Z" stroke="#5A5A5A" strokewidt="1.5" />
                                    </svg>
                                </div>
                                <div className='d-flex' >
                                    <span className='my-auto recent-project-card-timeleft' style={{ fontSize: "16px" }} >Website Edits 08-Jun-2023</span>
                                </div>
                            </div>
                            <div className=' d-flex justify-content-start gap-1' >
                                <div className='d-flex position-relative ts-avatar-group ' >
                                    <img src='https://bit.ly/dan-abramov' className='position-absolute ' style={{ zIndex: "5" }} />
                                    <img src='https://bit.ly/kent-c-dodds' className='position-absolute' style={{ left: "20px", zIndex: "4" }} />
                                    <span className='position-absolute ts-avatar-group-text text-center' style={{ left: "45px", zIndex: "3" }}>20+</span>
                                </div>
                                <div className='d-flex' >
                                    <span className='my-auto recent-project-card-timeleft' style={{ fontSize: "16px", color: "#D84F67" }} >Jun 9. 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 row mt-5' >
                            <div className='col-lg-6 d-flex flex-wrap gap-2 row-gap-1 mb-3 ' style={{ height: "fit-content" }} >
                                <img src="https://dummyimage.com/100x40/000/fff" className="overview-detail-img" />
                                <img src="https://dummyimage.com/100x40/000/fff" className="overview-detail-img" />
                                <img src="https://dummyimage.com/100x40/000/fff" className="overview-detail-img" />
                                <img src="https://dummyimage.com/100x40/000/fff" className="overview-detail-img" />
                                <img src="https://dummyimage.com/100x40/000/fff" className="overview-detail-img" />
                                <img src="https://dummyimage.com/100x40/000/fff" className="overview-detail-img" />
                            </div>
                            <div className='col-lg-6' >
                                <ul className='project-detail-list d-flex flex-column justify-content-start gap-3' >
                                    <li>Home Page: Our Team: Remove all the Teachers & Update "Franketa Mottley", use an African American Avatar for the Picture.  </li>
                                    <li>Also, Provide the details on how to add the Syllabus in Courses and provide credentials for Teacher Login, Student Login & Admin login.</li>
                                    <li>Also, Provide a guide for each login.</li>
                                    <li>When we go in Pages Courses  Edit after that click on Edit with Elementor it shows the attached error. Check attachment image(1).</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-end'>
                            <div style={{ cursor: "pointer", }} onClick={handleShowDetails}  >
                                <span className='my-auto recent-project-card-timeleft' >Click for all details</span>
                                <span className='my-auto    ' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 16L6 10L8.00094 8L12 12L15.9991 8L18 10L12 16Z" fill="#3954A5"></path></svg>
                                </span>
                            </div>
                        </div>

                        <div className="col-12 mt-2 ">
                            <div className='demo-all-border' ></div>
                        </div>

                    </div>

                    <div className={setdetail === true ? 'd-block' : 'd-none'}  >

                        <div className='col-12 d-flex justify-content-between mt-2' >
                            <div className=' d-flex justify-content-start gap-3' >
                                <div className='my-auto' >
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "sub" }} width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M5 9L8.42857 11.8571L13 6.14286M9 17C7.94943 17 6.90914 16.7931 5.93853 16.391C4.96793 15.989 4.08601 15.3997 3.34315 14.6569C2.60028 13.914 2.011 13.0321 1.60896 12.0615C1.20693 11.0909 1 10.0506 1 9C1 7.94943 1.20693 6.90914 1.60896 5.93853C2.011 4.96793 2.60028 4.08601 3.34315 3.34315C4.08601 2.60028 4.96793 2.011 5.93853 1.60896C6.90914 1.20693 7.94943 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9C17 11.1217 16.1571 13.1566 14.6569 14.6569C13.1566 16.1571 11.1217 17 9 17Z" stroke="#5A5A5A" strokewidt="1.5" />
                                    </svg>
                                </div>
                                <div className='d-flex' >
                                    <span className='my-auto recent-project-card-timeleft' style={{ fontSize: "16px" }} >Website Edits 08-Jun-2023</span>
                                </div>
                            </div>
                            <div className=' d-flex justify-content-end gap-3' >
                                <span className='odbc-iconarea d-flex'>
                                    <button className=' my-auto' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M12.1591 4.38636L12.1591 12.75C12.1591 14.3573 10.8573 15.6591 9.25 15.6591C7.64273 15.6591 6.34091 14.3573 6.34091 12.75L6.34091 3.65909C6.34091 3.17688 6.53247 2.71442 6.87344 2.37344C7.21442 2.03247 7.67688 1.84091 8.15909 1.84091C8.6413 1.84091 9.10376 2.03247 9.44474 2.37344C9.78572 2.71442 9.97727 3.17688 9.97727 3.65909L9.97727 11.2955C9.97727 11.6955 9.65 12.0227 9.25 12.0227C8.85 12.0227 8.52273 11.6955 8.52273 11.2955L8.52273 4.38636L7.43182 4.38636L7.43182 11.2955C7.43182 11.7777 7.62338 12.2401 7.96435 12.5811C8.30533 12.9221 8.76779 13.1136 9.25 13.1136C9.73221 13.1136 10.1947 12.9221 10.5356 12.5811C10.8766 12.2401 11.0682 11.7777 11.0682 11.2955L11.0682 3.65909C11.0682 2.05182 9.76636 0.75 8.15909 0.75C6.55182 0.75 5.25 2.05182 5.25 3.65909L5.25 12.75C5.25 14.9609 7.03909 16.75 9.25 16.75C11.4609 16.75 13.25 14.9609 13.25 12.75L13.25 4.38636L12.1591 4.38636Z" fill="#3F3F3F" />
                                        </svg>
                                    </button>
                                </span>
                                <span className='odbc-iconarea d-flex'>
                                    <button className=' my-auto' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M8.28572 10.1429L14 10.1429C14.3031 10.1429 14.5938 10.0224 14.8081 9.80812C15.0225 9.59379 15.1429 9.3031 15.1429 9L15.1429 6.71428C15.1429 6.41118 15.0224 6.12049 14.8081 5.90616C14.5938 5.69184 14.3031 5.57143 14 5.57143L8.28572 5.57143C7.98261 5.57143 7.69192 5.69184 7.47759 5.90616C7.26327 6.12049 7.14286 6.41118 7.14286 6.71429L7.14286 7.28571L4.85714 7.28571L4.85714 2.14286L6 2.14286C6.15155 2.14286 6.2969 2.08265 6.40406 1.97549C6.51122 1.86833 6.57143 1.72298 6.57143 1.57143C6.57143 1.41988 6.51122 1.27453 6.40406 1.16737C6.2969 1.0602 6.15155 1 6 1L2.57143 1C2.41988 1 2.27453 1.0602 2.16737 1.16737C2.0602 1.27453 2 1.41988 2 1.57143C2 1.72298 2.0602 1.86833 2.16737 1.97549C2.27453 2.08265 2.41988 2.14286 2.57143 2.14286L3.71429 2.14286L3.71429 13.5714C3.71429 14.0261 3.8949 14.4621 4.21639 14.7836C4.53788 15.1051 4.97392 15.2857 5.42857 15.2857L7.14286 15.2857L7.14286 15.8571C7.14286 16.1602 7.26327 16.4509 7.47759 16.6653C7.69192 16.8796 7.98261 17 8.28572 17L14 17C14.3031 17 14.5938 16.8796 14.8081 16.6653C15.0225 16.4509 15.1429 16.1602 15.1429 15.8571L15.1429 13.5714C15.1429 13.2683 15.0225 12.9776 14.8081 12.7633C14.5938 12.549 14.3031 12.4286 14 12.4286L8.28572 12.4286C7.98261 12.4286 7.69192 12.549 7.47759 12.7633C7.26327 12.9776 7.14286 13.2683 7.14286 13.5714L7.14286 14.1429L5.42857 14.1429C5.27702 14.1429 5.13168 14.0827 5.02451 13.9755C4.91735 13.8683 4.85714 13.723 4.85714 13.5714L4.85714 8.42857L7.14286 8.42857L7.14286 9C7.14286 9.3031 7.26327 9.59379 7.47759 9.80812C7.69192 10.0224 7.98261 10.1429 8.28572 10.1429ZM8.28572 6.71429L14 6.71428L14 9L8.28572 9L8.28572 6.71429ZM8.28572 13.5714L14 13.5714L14 15.8571L8.28572 15.8571L8.28572 13.5714Z" fill="#3F3F3F" />
                                        </svg>
                                    </button>
                                </span>
                                <span className='odbc-iconarea d-flex'>
                                    <button className=' my-auto' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M8.74286 14.3999L10.1714 15.8284C10.5428 16.1998 10.9838 16.4945 11.4691 16.6955C11.9544 16.8965 12.4746 17 12.9999 17C13.5252 17 14.0454 16.8965 14.5307 16.6955C15.016 16.4945 15.457 16.1998 15.8284 15.8284C16.1998 15.457 16.4945 15.016 16.6955 14.5307C16.8965 14.0454 17 13.5252 17 12.9999C17 12.4746 16.8965 11.9544 16.6955 11.4691C16.4945 10.9838 16.1998 10.5428 15.8284 10.1714L12.9713 7.31433C12.5999 6.94286 12.1589 6.64819 11.6736 6.44715C11.1883 6.24612 10.6681 6.14264 10.1428 6.14264C9.61752 6.14264 9.09736 6.24612 8.61204 6.44715C8.12672 6.64819 7.68576 6.94286 7.31433 7.31433C7.16274 7.47678 7.08016 7.69174 7.084 7.9139C7.08784 8.13605 7.17779 8.34804 7.3349 8.50516C7.49202 8.66226 7.704 8.75222 7.92616 8.75606C8.14831 8.75989 8.36328 8.67731 8.52573 8.52573C8.738 8.31321 8.99008 8.14463 9.26756 8.0296C9.54503 7.91458 9.84246 7.85538 10.1428 7.85538C10.4432 7.85538 10.7406 7.91458 11.0181 8.0296C11.2956 8.14463 11.5477 8.31322 11.7599 8.52573L14.617 11.3828C15.025 11.8159 15.2483 12.3909 15.2394 12.9858C15.2306 13.5807 14.9903 14.1488 14.5695 14.5695C14.1488 14.9903 13.5807 15.2306 12.9858 15.2394C12.3909 15.2483 11.8159 15.025 11.3828 14.617L9.95426 13.1885C9.79181 13.0369 9.57685 12.9543 9.35469 12.9581C9.13254 12.962 8.92055 13.0519 8.76343 13.209C8.60633 13.3662 8.51637 13.5781 8.51253 13.8003C8.5087 14.0224 8.59128 14.2374 8.74286 14.3999ZM3.383 3.383C3.59528 3.17049 3.84736 3.0019 4.12483 2.88688C4.40231 2.77185 4.69973 2.71265 5.0001 2.71265C5.30047 2.71265 5.5979 2.77185 5.87537 2.88688C6.15285 3.0019 6.40493 3.17049 6.6172 3.383L8.04574 4.81154C8.20819 4.96312 8.42315 5.04571 8.64531 5.04187C8.86747 5.03803 9.07945 4.94807 9.23657 4.79097C9.39367 4.63385 9.48363 4.42186 9.48747 4.19971C9.49131 3.97755 9.40872 3.76259 9.25714 3.60014L7.8286 2.1716C7.45716 1.80016 7.01619 1.50551 6.53088 1.30449C6.04556 1.10347 5.5254 1 5.0001 1C4.4748 1 3.95465 1.10347 3.46933 1.30449C2.98402 1.50551 2.54305 1.80016 2.1716 2.1716C1.80016 2.54305 1.50551 2.98401 1.30449 3.46933C1.10347 3.95464 1 4.4748 1 5.0001C1 5.5254 1.10347 6.04556 1.30449 6.53088C1.50551 7.01619 1.80016 7.45716 2.1716 7.8286L5.02867 10.6857C5.4001 11.0571 5.84107 11.3518 6.32638 11.5528C6.8117 11.7539 7.33186 11.8574 7.85717 11.8574C8.38248 11.8574 8.90264 11.7539 9.38796 11.5528C9.87328 11.3518 10.3142 11.0571 10.6857 10.6857C10.8373 10.5232 10.9198 10.3083 10.916 10.0861C10.9122 9.86395 10.8222 9.65196 10.6651 9.49485C10.508 9.33774 10.296 9.24778 10.0738 9.24394C9.85169 9.24011 9.63672 9.32269 9.47427 9.47427C9.262 9.68679 9.00992 9.85537 8.73244 9.9704C8.45497 10.0854 8.15754 10.1446 7.85717 10.1446C7.5568 10.1446 7.25938 10.0854 6.9819 9.9704C6.70443 9.85537 6.45235 9.68679 6.24007 9.47427L3.383 6.6172C3.17049 6.40493 3.0019 6.15285 2.88688 5.87537C2.77185 5.5979 2.71265 5.30047 2.71265 5.0001C2.71265 4.69973 2.77185 4.40231 2.88688 4.12483C3.0019 3.84736 3.17049 3.59528 3.383 3.383Z" fill="#3F3F3F" />
                                        </svg>
                                    </button>
                                </span>
                                <span className='odbc-iconarea d-flex'>
                                    <button className=' my-auto' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M15.4326 7.79308C15.219 7.78825 15.0067 7.82613 14.8079 7.90451C14.6092 7.98289 14.4282 8.10017 14.2754 8.24948C14.1226 8.3988 14.0012 8.57712 13.9183 8.774C13.8355 8.97087 13.7927 9.18232 13.7927 9.39593C13.7926 9.60955 13.8352 9.82102 13.918 10.0179C14.0008 10.2148 14.1221 10.3932 14.2748 10.5426C14.4275 10.692 14.6085 10.8094 14.8072 10.8879C15.0059 10.9663 15.2182 11.0043 15.4318 10.9996C15.8508 10.9903 16.2495 10.8174 16.5426 10.5178C16.8357 10.2183 16.9999 9.81585 17 9.39674C17.0001 8.97763 16.8361 8.57513 16.5432 8.27541C16.2502 7.97568 15.8516 7.80255 15.4326 7.79308ZM4.20692 9.39674C4.21175 9.18318 4.17387 8.97081 4.09549 8.7721C4.01712 8.57338 3.89983 8.39232 3.75052 8.23956C3.60121 8.0868 3.42288 7.9654 3.22601 7.8825C3.02913 7.79961 2.81768 7.75688 2.60407 7.75682C2.39045 7.75677 2.17898 7.79939 1.98207 7.88219C1.78515 7.96499 1.60677 8.0863 1.45738 8.23899C1.30799 8.39168 1.19061 8.57267 1.11214 8.77135C1.03366 8.97003 0.99567 9.18238 1.00039 9.39594C1.00966 9.81495 1.18259 10.2137 1.48216 10.5068C1.78174 10.7999 2.18416 10.9641 2.60327 10.9642C3.02238 10.9643 3.42487 10.8003 3.7246 10.5073C4.02432 10.2144 4.19745 9.81575 4.20692 9.39674ZM10.6216 9.39674C10.6264 9.18318 10.5885 8.97081 10.5102 8.7721C10.4318 8.57338 10.3145 8.39232 10.1652 8.23956C10.0159 8.0868 9.83754 7.9654 9.64067 7.8825C9.4438 7.79961 9.23235 7.75688 9.01873 7.75682C8.80512 7.75677 8.59365 7.79939 8.39673 7.88219C8.19982 7.96499 8.02143 8.0863 7.87204 8.23899C7.72266 8.39168 7.60528 8.57267 7.5268 8.77135C7.44833 8.97003 7.41034 9.18238 7.41506 9.39594C7.42432 9.81495 7.59725 10.2137 7.89683 10.5068C8.19641 10.7999 8.59882 10.9641 9.01793 10.9642C9.43704 10.9643 9.83954 10.8003 10.1393 10.5073C10.439 10.2144 10.6121 9.81575 10.6216 9.39674Z" fill="#3F3F3F" />
                                        </svg>
                                    </button>
                                </span>
                                <span className='odbc-iconarea d-flex'>
                                    <button className=' my-auto' onClick={handleShowDetails}  >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M5.92 6.4L8.2 8.68L10.48 6.4L11.6 7.52L9.32 9.8L11.6 12.08L10.48 13.2L8.2 10.92L5.92 13.2L4.8 12.08L7.08 9.8L4.8 7.52L5.92 6.4ZM2.6 2.6C2.16 2.6 1.78347 2.75653 1.4704 3.0696C1.15733 3.38267 1.00053 3.75947 1 4.2L1 15.4C1 15.84 1.1568 16.2165 1.4704 16.5296C1.784 16.8427 2.16053 16.9995 2.6 17L13.8 17C14.24 17 14.6168 16.8432 14.9304 16.5296C15.244 16.216 15.4005 15.8395 15.4 15.4L15.4 8.72C15.1467 8.81333 14.8867 8.8832 14.62 8.9296C14.3533 8.976 14.08 8.99947 13.8 9L13.8 15.4L2.6 15.4L2.6 4.2L9 4.2C9 3.92 9.02347 3.64667 9.0704 3.38C9.11733 3.11333 9.1872 2.85333 9.28 2.6L2.6 2.6ZM13.8 1L12.68 2.12L13.94 3.4L10.6 3.4L10.6 5L13.94 5L12.68 6.28L13.8 7.4L17 4.2L13.8 1Z" fill="#3F3F3F" />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>


                        <div className='col-12 d-flex gap-5 justify-content-start project-detail-list mt-4' >
                            <span className=' my-auto w-25' style={{ fontSize: "12px" }} >Assignee</span>
                            <div className='d-flex gap-1 justify-content-start project-detail-list' >

                                <div className='d-flex position-relative ts-avatar-group ' style={{ height: "30px", width: "fit-content" }} >
                                    <img src='https://bit.ly/dan-abramov' className='position-absolute ' style={{ zIndex: "5" }} />
                                    <img src='https://bit.ly/kent-c-dodds' className='position-absolute' style={{ left: "18px", zIndex: "4" }} />
                                    <span className='position-absolute recent-project-card-round text-center' style={{ left: "36px", zIndex: "3" }}>20+</span>
                                </div>

                                <span className=' my-auto' style={{ fontSize: "14px" }} >Kapil Lohia, Aditi Chawla, Sonal Swaroop, Srishti Dhewar</span>
                            </div>
                        </div>

                        <div className='col-12 d-flex gap-5 justify-content-start project-detail-list' >
                            <span className=' my-auto w-25' style={{ fontSize: "12px" }} >Due date</span>
                            <div className='d-flex gap-1 justify-content-start project-detail-list' >
                                <div className='d-flex' >
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 28 28" fill="none">
                                            <rect width="28" height="28" fill="white" />
                                            <path d="M14 22C12.4178 22 10.871 21.5308 9.55544 20.6518C8.23985 19.7727 7.21447 18.5233 6.60897 17.0615C6.00347 15.5997 5.84504 13.9911 6.15372 12.4393C6.4624 10.8874 7.22433 9.46197 8.34315 8.34315C9.46197 7.22433 10.8874 6.4624 12.4393 6.15372C13.9911 5.84504 15.5997 6.00347 17.0615 6.60897C18.5233 7.21447 19.7727 8.23985 20.6518 9.55544C21.5308 10.871 22 12.4178 22 14C22 16.1217 21.1571 18.1566 19.6569 19.6569C18.1566 21.1571 16.1217 22 14 22ZM14 7.14286C12.6438 7.14286 11.318 7.54502 10.1904 8.2985C9.06273 9.05197 8.18383 10.1229 7.66483 11.3759C7.14583 12.6289 7.01003 14.0076 7.27462 15.3378C7.5392 16.6679 8.19228 17.8897 9.15127 18.8487C10.1103 19.8077 11.3321 20.4608 12.6622 20.7254C13.9924 20.99 15.3711 20.8542 16.6241 20.3352C17.8771 19.8162 18.948 18.9373 19.7015 17.8096C20.455 16.682 20.8571 15.3562 20.8571 14C20.8571 12.1814 20.1347 10.4372 18.8487 9.15127C17.5628 7.86531 15.8186 7.14286 14 7.14286Z" fill="#D84F67" />
                                            <path d="M16.2412 17.4284L13.0469 14.2341V8.85693H14.1897V13.7598L17.0469 16.6226L16.2412 17.4284Z" fill="#D84F67" />
                                        </svg>
                                    </span>
                                    <span className='my-auto recent-project-card-timeleft' style={{ fontSize: "14px", color: "#D84F67" }} >Jun 9. 2023</span>
                                </div>
                            </div>
                        </div>


                        <div className='col-12 d-flex gap-5 justify-content-start project-detail-list mt-1' >
                            <span className=' my-auto w-25' style={{ fontSize: "12px" }} >Project Name</span>
                            <span className=' my-auto' style={{ fontSize: "12px" }} >WD_P1234567890_ Project ABC</span>
                        </div>

                        <div className='col-12 d-flex gap-5 justify-content-start project-detail-list mt-2' >
                            <span className=' my-auto w-25' style={{ fontSize: "12px" }} >Dependencies</span>
                            <span className=' my-auto' style={{ fontSize: "12px" }} >Add dependencies</span>
                        </div>

                        <div className='col-12  project-detail-list mt-4' >
                            <p className=' my-auto w-25 m-0' style={{ fontSize: "12px" }} >Dependencies</p>
                            <ul className='project-detail-list d-flex flex-column justify-content-start gap-3 mt-3' style={{ fontSize: "14px" }} >
                                <li>Home Page: Our Team: Remove all the Teachers & Update "Franketa Mottley", use an African American Avatar for the Picture.  </li>
                                <li>Also, Provide the details on how to add the Syllabus in Courses and provide credentials for Teacher Login, Student Login & Admin login.</li>
                                <li>Also, Provide a guide for each login.</li>
                                <li>When we go in Pages Courses  Edit after that click on Edit with Elementor it shows the attached error. Check attachment image(1).</li>
                            </ul>
                        </div>

                        <div className='col-12  d-flex  justify-content-start' >
                            <button className='add-sub-task-btn' >+ Add Subtask</button>
                        </div>

                        <div className=' col-12 d-flex flex-wrap gap-2 row-gap-1 mt-3 ' style={{ height: "fit-content" }} >
                            <img src="https://dummyimage.com/100x40/000/fff" className="overview-detail-img" />
                            <div className='pdf-card d-flex gap-3' >
                                <div className='pdf-icon my-auto' >
                                    <img className='' src={pdfIcon} />
                                </div>
                                <div>
                                    <p className='text1 mb-1'>Project abc-xyz-123-abc-xyz-123</p>
                                    <p className='text2 m-0'>PDF · Download</p>
                                </div>
                            </div>
                            <div className='pdf-card d-flex gap-3' >
                                <div className='pdf-icon my-auto' >
                                    <img className='' src={pdfIcon} />
                                </div>
                                <div>
                                    <p className='text1 mb-1'>Project abc-xyz-123-abc-xyz-123</p>
                                    <p className='text2 m-0'>PDF · Download</p>
                                </div>
                            </div>
                            <div className='pdf-card d-flex gap-3' >
                                <div className='pdf-icon my-auto' >
                                    <img className='' src={pdfIcon} />
                                </div>
                                <div>
                                    <p className='text1 mb-1'>Project abc-xyz-123-abc-xyz-123</p>
                                    <p className='text2 m-0'>PDF · Download</p>
                                </div>
                            </div>
                            <div className='pdf-card d-flex gap-3' >
                                <div className='pdf-icon my-auto' >
                                    <img className='' src={pdfIcon} />
                                </div>
                                <div>
                                    <p className='text1 mb-1'>Project abc-xyz-123-abc-xyz-123</p>
                                    <p className='text2 m-0'>PDF · Download</p>
                                </div>
                            </div>
                            <div className='add-pdf my-auto' >
                                <span>+</span>
                            </div>
                        </div>

                        < div className="col-12 ">
                            <div className='overview-detail-bottom-card mt-3' >
                                <div className='d-flex justify-content-start gap-3' >
                                    <button className='odbc-btn pb-2 active' >Comments</button>
                                    <button className='odbc-btn pb-2' >All activity</button>
                                </div>

                                <div className='odbc-divider' ></div>

                                <div className='mt-3' >
                                    <div className='mt-3 d-flex gap-2 justify-content-start' >
                                        <div className='d-flex' style={{ height: "30px", width: "fit-content", }} >
                                            <img src='https://bit.ly/dan-abramov' className='h-100' style={{ zIndex: "5", borderRadius: "30px" }} />
                                        </div>
                                        <div className=' d-flex' >
                                            <div className='my-auto' >
                                                <span className='text1 fw-bolder fs-6 my-auto' >Aditi Chawla</span>
                                                <span className='text1  my-auto' > created this task · 8 Jun , 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ps-5' >
                                        <div className=' d-flex' >
                                            <div className='my-auto' >
                                                <span className='text1 fw-bolder fs-6 my-auto' >Aditi Chawla</span>
                                                <span className='text1  my-auto' > created this task · 8 Jun , 2023</span>
                                            </div>
                                        </div>
                                        <div className=' d-flex' >
                                            <div className='my-auto' >
                                                <span className='text1 fw-bolder fs-6 my-auto' >Aditi Chawla</span>
                                                <span className='text1  my-auto' > created this task · 8 Jun , 2023</span>
                                            </div>
                                        </div>
                                        <div className=' d-flex' >
                                            <div className='my-auto' >
                                                <span className='text1 fw-bolder fs-6 my-auto' >Aditi Chawla</span>
                                                <span className='text1  my-auto' > created this task · 8 Jun , 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-3' >
                                    <div className='mt-3 d-flex gap-2 justify-content-start' >
                                        <div className='d-flex' style={{ height: "30px", width: "fit-content", }} >
                                            <img src='https://bit.ly/dan-abramov' className='h-100' style={{ zIndex: "5", borderRadius: "30px" }} />
                                        </div>
                                        <div className=' d-flex' >
                                            <div className='my-auto' >
                                                <span className='text1 fw-bolder fs-6 my-auto' >Aditi Chawla</span>
                                                <span>
                                                    &nbsp;
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M5.80715 1.9501L6.87855 0.878702C7.15713 0.600119 7.48786 0.379135 7.85184 0.228367C8.21583 0.0775993 8.60595 4.15121e-09 8.99992 0C9.3939 -4.15121e-09 9.78402 0.0775992 10.148 0.228367C10.512 0.379135 10.8427 0.600119 11.1213 0.878702C11.3999 1.15728 11.6209 1.48801 11.7716 1.852C11.9224 2.21598 12 2.6061 12 3.00008C12 3.39405 11.9224 3.78417 11.7716 4.14816C11.6209 4.51214 11.3999 4.84287 11.1213 5.12145L8.9785 7.26425C8.69992 7.54285 8.3692 7.76385 8.00521 7.91463C7.64123 8.06541 7.2511 8.14302 6.85712 8.14302C6.46314 8.14302 6.07302 8.06541 5.70903 7.91463C5.34504 7.76385 5.01432 7.54285 4.73575 7.26425C4.62206 7.14242 4.56012 6.98119 4.563 6.81458C4.56588 6.64796 4.63334 6.48897 4.75117 6.37113C4.86901 6.2533 5.028 6.18584 5.19462 6.18296C5.36123 6.18008 5.52246 6.24201 5.64429 6.35571C5.8035 6.51509 5.99256 6.64153 6.20067 6.7278C6.40877 6.81407 6.63184 6.85847 6.85712 6.85847C7.0824 6.85847 7.30547 6.81407 7.51357 6.7278C7.72168 6.64153 7.91074 6.51509 8.06995 6.35571L10.2127 4.2129C10.5188 3.8881 10.6862 3.45686 10.6796 3.01066C10.6729 2.56445 10.4927 2.13839 10.1772 1.82284C9.86161 1.5073 9.43555 1.32709 8.98934 1.32044C8.54314 1.3138 8.1119 1.48124 7.7871 1.78725L6.7157 2.85865C6.59386 2.97234 6.43264 3.03428 6.26602 3.0314C6.0994 3.02852 5.94041 2.96105 5.82258 2.84322C5.70475 2.72539 5.63728 2.5664 5.6344 2.39978C5.63152 2.23316 5.69346 2.07194 5.80715 1.9501ZM1.78725 10.2127C1.94646 10.3721 2.13552 10.4986 2.34362 10.5848C2.55173 10.6711 2.7748 10.7155 3.00008 10.7155C3.22535 10.7155 3.44842 10.6711 3.65653 10.5848C3.86463 10.4986 4.0537 10.3721 4.2129 10.2127L5.2843 9.14135C5.40614 9.02766 5.56736 8.96572 5.73398 8.9686C5.9006 8.97148 6.05959 9.03895 6.17742 9.15678C6.29525 9.27461 6.36272 9.4336 6.3656 9.60022C6.36848 9.76684 6.30654 9.92806 6.19285 10.0499L5.12145 11.1213C4.84287 11.3999 4.51214 11.6209 4.14816 11.7716C3.78417 11.9224 3.39405 12 3.00008 12C2.6061 12 2.21598 11.9224 1.852 11.7716C1.48801 11.6209 1.15728 11.3999 0.878702 11.1213C0.600119 10.8427 0.379135 10.512 0.228367 10.148C0.0775992 9.78402 -2.93535e-09 9.3939 0 8.99992C2.93535e-09 8.60595 0.0775993 8.21583 0.228367 7.85184C0.379135 7.48786 0.600119 7.15713 0.878702 6.87855L3.0215 4.73575C3.30008 4.45715 3.6308 4.23615 3.99479 4.08537C4.35877 3.93459 4.7489 3.85698 5.14288 3.85698C5.53686 3.85698 5.92698 3.93459 6.29097 4.08537C6.65496 4.23615 6.98568 4.45715 7.26425 4.73575C7.37794 4.85758 7.43988 5.01881 7.437 5.18542C7.43412 5.35204 7.36666 5.51103 7.24883 5.62887C7.13099 5.7467 6.972 5.81417 6.80538 5.81704C6.63877 5.81992 6.47754 5.75799 6.3557 5.6443C6.1965 5.48491 6.00744 5.35847 5.79933 5.2722C5.59123 5.18593 5.36816 5.14153 5.14288 5.14153C4.9176 5.14153 4.69453 5.18593 4.48643 5.2722C4.27832 5.35847 4.08926 5.48491 3.93005 5.6443L1.78725 7.7871C1.62787 7.9463 1.50143 8.13537 1.41516 8.34347C1.32889 8.55158 1.28449 8.77464 1.28449 8.99992C1.28449 9.2252 1.32889 9.44827 1.41516 9.65638C1.50143 9.86448 1.62787 10.0535 1.78725 10.2127Z" fill="#6A6A6A" />
                                                        <path d="M5.80715 1.9501L6.87855 0.878702C7.15713 0.600119 7.48786 0.379135 7.85184 0.228367C8.21583 0.0775993 8.60595 4.15121e-09 8.99992 0C9.3939 -4.15121e-09 9.78402 0.0775992 10.148 0.228367C10.512 0.379135 10.8427 0.600119 11.1213 0.878702C11.3999 1.15728 11.6209 1.48801 11.7716 1.852C11.9224 2.21598 12 2.6061 12 3.00008C12 3.39405 11.9224 3.78417 11.7716 4.14816C11.6209 4.51214 11.3999 4.84287 11.1213 5.12145L8.9785 7.26425C8.69992 7.54285 8.3692 7.76385 8.00521 7.91463C7.64123 8.06541 7.2511 8.14302 6.85712 8.14302C6.46314 8.14302 6.07302 8.06541 5.70903 7.91463C5.34504 7.76385 5.01432 7.54285 4.73575 7.26425C4.62206 7.14242 4.56012 6.98119 4.563 6.81458C4.56588 6.64796 4.63334 6.48897 4.75117 6.37113C4.86901 6.2533 5.028 6.18584 5.19462 6.18296C5.36123 6.18008 5.52246 6.24201 5.64429 6.35571C5.8035 6.51509 5.99256 6.64153 6.20067 6.7278C6.40877 6.81407 6.63184 6.85847 6.85712 6.85847C7.0824 6.85847 7.30547 6.81407 7.51357 6.7278C7.72168 6.64153 7.91074 6.51509 8.06995 6.35571L10.2127 4.2129C10.5188 3.8881 10.6862 3.45686 10.6796 3.01066C10.6729 2.56445 10.4927 2.13839 10.1772 1.82284C9.86161 1.5073 9.43555 1.32709 8.98934 1.32044C8.54314 1.3138 8.1119 1.48124 7.7871 1.78725L6.7157 2.85865C6.59386 2.97234 6.43264 3.03428 6.26602 3.0314C6.0994 3.02852 5.94041 2.96105 5.82258 2.84322C5.70475 2.72539 5.63728 2.5664 5.6344 2.39978C5.63152 2.23316 5.69346 2.07194 5.80715 1.9501ZM1.78725 10.2127C1.94646 10.3721 2.13552 10.4986 2.34362 10.5848C2.55173 10.6711 2.7748 10.7155 3.00008 10.7155C3.22535 10.7155 3.44842 10.6711 3.65653 10.5848C3.86463 10.4986 4.0537 10.3721 4.2129 10.2127L5.2843 9.14135C5.40614 9.02766 5.56736 8.96572 5.73398 8.9686C5.9006 8.97148 6.05959 9.03895 6.17742 9.15678C6.29525 9.27461 6.36272 9.4336 6.3656 9.60022C6.36848 9.76684 6.30654 9.92806 6.19285 10.0499L5.12145 11.1213C4.84287 11.3999 4.51214 11.6209 4.14816 11.7716C3.78417 11.9224 3.39405 12 3.00008 12C2.6061 12 2.21598 11.9224 1.852 11.7716C1.48801 11.6209 1.15728 11.3999 0.878702 11.1213C0.600119 10.8427 0.379135 10.512 0.228367 10.148C0.0775992 9.78402 -2.93535e-09 9.3939 0 8.99992C2.93535e-09 8.60595 0.0775993 8.21583 0.228367 7.85184C0.379135 7.48786 0.600119 7.15713 0.878702 6.87855L3.0215 4.73575C3.30008 4.45715 3.6308 4.23615 3.99479 4.08537C4.35877 3.93459 4.7489 3.85698 5.14288 3.85698C5.53686 3.85698 5.92698 3.93459 6.29097 4.08537C6.65496 4.23615 6.98568 4.45715 7.26425 4.73575C7.37794 4.85758 7.43988 5.01881 7.437 5.18542C7.43412 5.35204 7.36666 5.51103 7.24883 5.62887C7.13099 5.7467 6.972 5.81417 6.80538 5.81704C6.63877 5.81992 6.47754 5.75799 6.3557 5.6443C6.1965 5.48491 6.00744 5.35847 5.79933 5.2722C5.59123 5.18593 5.36816 5.14153 5.14288 5.14153C4.9176 5.14153 4.69453 5.18593 4.48643 5.2722C4.27832 5.35847 4.08926 5.48491 3.93005 5.6443L1.78725 7.7871C1.62787 7.9463 1.50143 8.13537 1.41516 8.34347C1.32889 8.55158 1.28449 8.77464 1.28449 8.99992C1.28449 9.2252 1.32889 9.44827 1.41516 9.65638C1.50143 9.86448 1.62787 10.0535 1.78725 10.2127Z" fill="white" fillOpacity="0.2" />
                                                    </svg>
                                                </span>
                                                <span className='text1  my-auto' > attached · 8 Jun , 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ps-5' >
                                        <div className='pdf-card d-flex gap-3 ' style={{ width: "fit-content", backgroundColor: "#fff" }} >
                                            <div className='pdf-icon my-auto' >
                                                <img className='' src={pdfIcon} />
                                            </div>
                                            <div>
                                                <p className='text1 mb-1'>Project abc-xyz-123-abc-xyz-123</p>
                                                <p className='text2 m-0'>PDF · Download</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-3' >
                                    <div className='mt-3 d-flex gap-2 justify-content-start' >
                                        <div className='d-flex' style={{ height: "30px", width: "fit-content", }} >
                                            <img src='https://bit.ly/dan-abramov' className='h-100' style={{ zIndex: "5", borderRadius: "30px" }} />
                                        </div>
                                        <div className='w-100 position-relative' >
                                            <textarea className='odbc-textarea  w-100' placeholder='Add a comment' ></textarea>
                                            <label className='justify-content-between position-absolute odbc-textarea-bottom w-100 px-2' >
                                                <div className='d-flex justify-content-start gap-2' >
                                                    <span className='odbc-iconarea d-flex' >
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path d="M22.1663 15.6644H15.1663V22.6644H12.833V15.6644H5.83301V13.3311H12.833V6.33105H15.1663V13.3311H22.1663V15.6644Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>

                                                    <span className='px-3 my-auto' >|</span>

                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path d="M18.5713 13.5843C19.0923 12.9498 19.4223 12.1804 19.523 11.3657C19.6238 10.551 19.491 9.72437 19.1402 8.98215C18.7895 8.23992 18.2351 7.61259 17.5417 7.17316C16.8482 6.73374 16.0443 6.50029 15.2233 6.5H9.0835C8.79614 6.5 8.52054 6.61415 8.31735 6.81735C8.11415 7.02054 8 7.29614 8 7.5835V21.3078C8 21.5952 8.11415 21.8708 8.31735 22.074C8.52054 22.2772 8.79614 22.3913 9.0835 22.3913H16.3068C17.3482 22.3909 18.3599 22.0442 19.1827 21.4059C20.0055 20.7677 20.5928 19.8739 20.8521 18.8654C21.1114 17.8568 21.0281 16.7906 20.6152 15.8346C20.2023 14.8786 19.4833 14.087 18.5713 13.5843ZM10.167 8.667H15.2233C15.798 8.667 16.3492 8.8953 16.7556 9.30169C17.162 9.70809 17.3903 10.2593 17.3903 10.834C17.3903 11.4087 17.162 11.9599 16.7556 12.3663C16.3492 12.7727 15.798 13.001 15.2233 13.001H10.167V8.667ZM16.3068 20.2243H10.167V15.168H16.3068C16.9773 15.168 17.6204 15.4343 18.0945 15.9085C18.5686 16.3826 18.835 17.0256 18.835 17.6961C18.835 18.3667 18.5686 19.0097 18.0945 19.4838C17.6204 19.958 16.9773 20.2243 16.3068 20.2243Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18" fill="none">
                                                                <path d="M12.0723 15.3595C12.309 15.3598 12.5367 15.4504 12.7088 15.6129C12.8809 15.7754 12.9845 15.9975 12.9984 16.2338C13.0123 16.4701 12.9354 16.7028 12.7835 16.8843C12.6315 17.0658 12.416 17.1825 12.181 17.2104L12.0723 17.2169H0.927689C0.690978 17.2167 0.4633 17.126 0.291175 16.9635C0.11905 16.801 0.0154698 16.5789 0.00159743 16.3426C-0.0122749 16.1063 0.0646077 15.8737 0.216537 15.6921C0.368466 15.5106 0.583974 15.394 0.819029 15.366L0.927689 15.3595H12.0723ZM11.1436 0.5C11.3711 0.50003 11.5906 0.583544 11.7606 0.734701C11.9306 0.885859 12.0392 1.09415 12.0658 1.32006L12.0723 1.42872V8.85847C12.0738 10.3192 11.5016 11.7221 10.479 12.7652C9.45631 13.8082 8.06498 14.408 6.6045 14.4354C5.14402 14.4628 3.73118 13.9156 2.67014 12.9116C1.6091 11.9077 0.984714 10.5272 0.931404 9.06743L0.927689 8.85847V1.42872C0.927952 1.19201 1.01859 0.964329 1.18109 0.792204C1.34359 0.620079 1.56568 0.516499 1.80198 0.502626C2.03828 0.488754 2.27097 0.565637 2.45249 0.717566C2.63401 0.869495 2.75067 1.085 2.77863 1.32006L2.78513 1.42872V8.85847C2.78511 9.82763 3.16385 10.7584 3.84052 11.4523C4.5172 12.1461 5.43823 12.548 6.4071 12.5722C7.37596 12.5965 8.31594 12.2411 9.02646 11.582C9.73698 10.9229 10.1618 10.0122 10.2102 9.04421L10.2149 8.85847V1.42872C10.2149 1.18241 10.3127 0.946184 10.4869 0.772015C10.6611 0.597847 10.8973 0.5 11.1436 0.5Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7946 6.50012H12.1923C12.0393 6.50012 11.8926 6.55525 11.7844 6.65338C11.6762 6.75151 11.6154 6.8846 11.6154 7.02337C11.6154 7.16215 11.6762 7.29524 11.7844 7.39337C11.8926 7.4915 12.0393 7.54663 12.1923 7.54663H16.0323L11.7631 20.4535H7.57692C7.42391 20.4535 7.27717 20.5086 7.16898 20.6068C7.06078 20.7049 7 20.838 7 20.9768C7 21.1155 7.06078 21.2486 7.16898 21.3468C7.27717 21.4449 7.42391 21.5 7.57692 21.5H12.1792C12.1879 21.5002 12.1967 21.5002 12.2054 21.5H16.8077C16.9607 21.5 17.1074 21.4449 17.2156 21.3468C17.3238 21.2486 17.3846 21.1155 17.3846 20.9768C17.3846 20.838 17.3238 20.7049 17.2156 20.6068C17.1074 20.5086 16.9607 20.4535 16.8077 20.4535H12.9677L17.2369 7.54663H21.4231C21.5761 7.54663 21.7228 7.4915 21.831 7.39337C21.9392 7.29524 22 7.16215 22 7.02337C22 6.8846 21.9392 6.75151 21.831 6.65338C21.7228 6.55525 21.5761 6.50012 21.4231 6.50012H16.8208H16.7946Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                                                <path d="M15.8173 9.40906C16.0721 9.40934 16.3173 9.50694 16.5026 9.68191C16.688 9.85688 16.7995 10.096 16.8144 10.3505C16.8294 10.6049 16.7466 10.8554 16.583 11.0509C16.4194 11.2463 16.1873 11.372 15.9343 11.4021L15.8173 11.4091H13.7072C13.9242 11.7361 14.0993 12.0931 14.2253 12.4721C15.1783 15.3311 13.1163 18.2811 10.1423 18.4051L9.94725 18.4091H8.24525C7.22059 18.4092 6.21458 18.135 5.33177 17.6148C4.44897 17.0946 3.7216 16.3475 3.22525 15.4511L3.11325 15.2381L2.93125 14.8731C2.83419 14.689 2.79746 14.4791 2.82625 14.2731C2.85378 14.0729 2.94131 13.8857 3.07732 13.7362C3.21333 13.5868 3.39143 13.482 3.58816 13.4358C3.78489 13.3896 3.991 13.404 4.17935 13.4772C4.3677 13.5505 4.52944 13.6791 4.64325 13.8461L4.68525 13.9121L4.90225 14.3431C5.19653 14.9317 5.64104 15.4322 6.19083 15.7939C6.74062 16.1557 7.37619 16.3658 8.03325 16.4031L8.24525 16.4091H9.94625C10.4949 16.4094 11.0286 16.23 11.4657 15.8983C11.9027 15.5665 12.219 15.1007 12.3661 14.5721C12.5132 14.0435 12.4831 13.4812 12.2803 12.9714C12.0775 12.4615 11.7132 12.0322 11.2432 11.7491L11.0693 11.6531L10.5813 11.4091H1.81725C1.56237 11.4088 1.31722 11.3112 1.13188 11.1362C0.946547 10.9612 0.835017 10.7221 0.820079 10.4677C0.805142 10.2132 0.887926 9.96268 1.05152 9.76723C1.21511 9.57177 1.44716 9.44616 1.70025 9.41606L1.81725 9.40906H15.8173ZM9.38925 0.409058C10.4548 0.408902 11.4993 0.70548 12.4057 1.26555C13.3121 1.82563 14.0447 2.62707 14.5213 3.58006L14.7013 3.94306C14.8015 4.13669 14.8358 4.35773 14.799 4.57263C14.7622 4.78754 14.6563 4.98458 14.4974 5.13387C14.3385 5.28316 14.1353 5.37654 13.9185 5.39986C13.7017 5.42317 13.4833 5.37514 13.2963 5.26306C13.1694 5.18591 13.0614 5.08136 12.9803 4.95706L12.9453 4.89906L12.7323 4.47506C12.4219 3.8542 11.9447 3.33205 11.3543 2.96714C10.7638 2.60223 10.0834 2.40898 9.38925 2.40906H7.68825C7.12242 2.4085 6.573 2.59914 6.12913 2.95006C5.68526 3.30097 5.37298 3.79157 5.24295 4.34225C5.11292 4.89294 5.17277 5.4714 5.4128 5.9838C5.65282 6.49619 6.05894 6.91246 6.56525 7.16506L9.05325 8.40906H4.83025C4.17054 7.86964 3.67716 7.15435 3.40725 6.34606C2.43525 3.42606 4.60825 0.409058 7.68825 0.409058H9.38925Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path d="M10 20.5L4 14.5L10 8.5L11.425 9.925L6.825 14.525L11.4 19.1L10 20.5ZM18 20.5L16.575 19.075L21.175 14.475L16.6 9.9L18 8.5L24 14.5L18 20.5Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path d="M4.05263 9.18789C4.91174 9.18789 5.60818 8.49145 5.60818 7.63234C5.60818 6.77323 4.91174 6.07678 4.05263 6.07678C3.19352 6.07678 2.49707 6.77323 2.49707 7.63234C2.49707 8.49145 3.19352 9.18789 4.05263 9.18789Z" fill="#6D6E6F" />
                                                                <path d="M4.05263 15.4101C4.91174 15.4101 5.60818 14.7136 5.60818 13.8545C5.60818 12.9954 4.91174 12.299 4.05263 12.299C3.19352 12.299 2.49707 12.9954 2.49707 13.8545C2.49707 14.7136 3.19352 15.4101 4.05263 15.4101Z" fill="#6D6E6F" />
                                                                <path d="M4.05263 21.6325C4.91174 21.6325 5.60818 20.936 5.60818 20.0769C5.60818 19.2178 4.91174 18.5214 4.05263 18.5214C3.19352 18.5214 2.49707 19.2178 2.49707 20.0769C2.49707 20.936 3.19352 21.6325 4.05263 21.6325Z" fill="#6D6E6F" />
                                                                <path d="M25.2181 7.50031C25.2181 7.29403 25.1361 7.0962 24.9902 6.95034C24.8444 6.80448 24.6466 6.72253 24.4403 6.72253H7.78027V8.27809H24.4403C24.6466 8.27809 24.8444 8.19615 24.9902 8.05028C25.1361 7.90442 25.2181 7.70659 25.2181 7.50031Z" fill="#6D6E6F" />
                                                                <path d="M24.4403 12.9445H7.78027V14.5H24.4403C24.6466 14.5 24.8444 14.4181 24.9902 14.2722C25.1361 14.1263 25.2181 13.9285 25.2181 13.7222C25.2181 13.516 25.1361 13.3181 24.9902 13.1723C24.8444 13.0264 24.6466 12.9445 24.4403 12.9445Z" fill="#6D6E6F" />
                                                                <path d="M24.4403 19.1669H7.78027V20.7224H24.4403C24.6466 20.7224 24.8444 20.6405 24.9902 20.4946C25.1361 20.3488 25.2181 20.1509 25.2181 19.9446C25.2181 19.7384 25.1361 19.5405 24.9902 19.3947C24.8444 19.2488 24.6466 19.1669 24.4403 19.1669Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path d="M25 7.88913V9.2675H8.45962V7.88913H25ZM8.45962 13.4026H25V14.781H8.45962V13.4026ZM8.45962 18.9161H25V20.2944H8.45962V18.9161ZM4.3999 7.51224C4.2994 7.59121 4.16659 7.66659 4.00147 7.73837C3.83635 7.81016 3.682 7.84965 3.53842 7.85683V7.1138C3.76097 7.03483 3.97275 6.94869 4.17376 6.85536C4.37478 6.76203 4.56861 6.64358 4.75526 6.5H5.28292V10.6459H4.3999V7.51224ZM4.38913 12.035C4.56861 12.035 4.73731 12.0565 4.89525 12.0996C5.05319 12.1427 5.19318 12.2145 5.31522 12.315C5.43727 12.4155 5.53059 12.5375 5.5952 12.6811C5.65981 12.8247 5.69571 12.9934 5.70289 13.1872C5.70289 13.4098 5.65981 13.6036 5.57367 13.7687C5.48752 13.9338 5.38342 14.0846 5.26138 14.221C5.13934 14.3574 4.99935 14.4759 4.84141 14.5764C4.68347 14.6769 4.54707 14.7738 4.43221 14.8671C4.31734 14.9604 4.20966 15.0502 4.10915 15.1363C4.00865 15.2225 3.96557 15.3158 3.97993 15.4163H5.70289V16.1593H3V15.7178C3 15.5886 3.03589 15.4486 3.10768 15.2978C3.21537 15.0538 3.36254 14.8492 3.54919 14.684C3.73585 14.5189 3.91891 14.361 4.09838 14.2102C4.27786 14.0595 4.43939 13.9159 4.58297 13.7795C4.72655 13.6431 4.79475 13.4744 4.78757 13.2734C4.78757 13.0795 4.73372 12.9431 4.62604 12.8642C4.51836 12.7852 4.37478 12.7457 4.1953 12.7457C4.00865 12.7457 3.83276 12.7852 3.66765 12.8642C3.50253 12.9431 3.34459 13.0436 3.19383 13.1657V12.3796C3.55278 12.1499 3.95122 12.035 4.38913 12.035ZM4.7768 19.5622C5.03524 19.5981 5.2542 19.695 5.43368 19.8529C5.61315 20.0108 5.70289 20.2298 5.70289 20.5098C5.70289 20.7323 5.65981 20.9226 5.57367 21.0805C5.48752 21.2385 5.36907 21.3641 5.21831 21.4574C5.06755 21.5507 4.90243 21.6225 4.72296 21.6728C4.54348 21.723 4.34965 21.7482 4.14146 21.7482C3.96916 21.7482 3.79687 21.7338 3.62457 21.7051C3.45228 21.6764 3.28357 21.6225 3.11845 21.5436V20.7575C3.25485 20.858 3.40202 20.9333 3.55996 20.9836C3.7179 21.0339 3.8866 21.059 4.06608 21.059C4.25273 21.059 4.41785 21.0195 4.56143 20.9405C4.70501 20.8616 4.78039 20.7144 4.78757 20.499C4.78757 20.3411 4.7409 20.2262 4.64758 20.1544C4.55425 20.0826 4.44298 20.0288 4.31375 19.9929C4.18453 19.957 4.04454 19.9391 3.89378 19.9391C3.74302 19.9391 3.62098 19.9391 3.52766 19.9391V19.2499H3.87225C4.00147 19.2499 4.12351 19.2391 4.23837 19.2176C4.35324 19.196 4.45374 19.1458 4.53989 19.0668C4.62604 18.9878 4.66911 18.8766 4.66911 18.733C4.66911 18.5463 4.61168 18.4171 4.49682 18.3453C4.38195 18.2735 4.23837 18.2376 4.06608 18.2376C3.7861 18.2376 3.52048 18.3238 3.26921 18.4961V17.7638C3.42715 17.6849 3.58868 17.631 3.75379 17.6023C3.91891 17.5736 4.09121 17.5556 4.27068 17.5485C4.42862 17.5485 4.58656 17.5664 4.74449 17.6023C4.90243 17.6382 5.04242 17.6956 5.16446 17.7746C5.28651 17.8536 5.38701 17.9613 5.46598 18.0977C5.54495 18.2341 5.58443 18.3884 5.58443 18.5607C5.58443 18.8335 5.51623 19.0489 5.37983 19.2068C5.24343 19.3647 5.04242 19.4796 4.7768 19.5514V19.5622Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path d="M23.9982 10.5211C23.9624 11.7644 23.4511 12.9467 22.5698 13.8243L19.4675 16.9284C19.0156 17.3827 18.4782 17.7429 17.8862 17.9881C17.2942 18.2333 16.6595 18.3586 16.0188 18.3568H16.0143C15.3626 18.3564 14.7176 18.2253 14.1175 17.9714C13.5173 17.7175 12.9741 17.3459 12.5199 16.8785C12.0658 16.4111 11.7099 15.8575 11.4734 15.2503C11.2368 14.643 11.1243 13.9946 11.1425 13.3431C11.1479 13.1537 11.2282 12.9742 11.3659 12.844C11.5036 12.7138 11.6874 12.6437 11.8768 12.649C12.0663 12.6543 12.2458 12.7347 12.376 12.8724C12.5061 13.0101 12.5763 13.1939 12.5709 13.3833C12.5579 13.8439 12.6374 14.3024 12.8046 14.7318C12.9718 15.1612 13.2234 15.5527 13.5445 15.8832C13.8656 16.2136 14.2496 16.4764 14.674 16.656C15.0984 16.8355 15.5544 16.9281 16.0152 16.9284C16.4681 16.9295 16.9168 16.8409 17.3353 16.6676C17.7538 16.4943 18.1338 16.2398 18.4533 15.9187L21.5556 12.8164C22.1957 12.1683 22.5534 11.2932 22.5505 10.3823C22.5476 9.47141 22.1845 8.59862 21.5404 7.95451C20.8963 7.31039 20.0235 6.94727 19.1126 6.94442C18.2017 6.94157 17.3266 7.29922 16.6785 7.93929L15.6965 8.92132C15.5615 9.04961 15.3817 9.12007 15.1954 9.11768C15.0092 9.1153 14.8312 9.04026 14.6995 8.90856C14.5678 8.77686 14.4928 8.59892 14.4904 8.41268C14.488 8.22645 14.5585 8.04665 14.6868 7.91162L15.6688 6.92959C16.1219 6.47636 16.6598 6.11684 17.2518 5.87154C17.8439 5.62625 18.4785 5.5 19.1193 5.5C19.7601 5.5 20.3947 5.62625 20.9868 5.87154C21.5788 6.11684 22.1167 6.47636 22.5698 6.92959C23.0391 7.40003 23.4077 7.96105 23.6533 8.57849C23.8988 9.19594 24.0162 9.8569 23.9982 10.5211ZM12.3031 19.2192L11.3211 20.2013C11.0008 20.5237 10.6196 20.7793 10.1997 20.9531C9.77974 21.1269 9.32943 21.2155 8.87495 21.2137C8.19315 21.2131 7.52682 21.0105 6.96014 20.6314C6.39345 20.2523 5.95185 19.7137 5.69113 19.0838C5.43041 18.4538 5.36227 17.7607 5.49531 17.092C5.62835 16.4233 5.95662 15.809 6.43862 15.3268L9.53558 12.2245C10.0234 11.7341 10.6473 11.4018 11.3264 11.2706C12.0055 11.1394 12.7084 11.2154 13.3437 11.4888C13.9791 11.7622 14.5175 12.2203 14.8892 12.8036C15.2608 13.387 15.4485 14.0686 15.4278 14.7599C15.4224 14.9494 15.4926 15.1331 15.6227 15.2708C15.7529 15.4085 15.9325 15.4889 16.1219 15.4942C16.3113 15.4996 16.4951 15.4294 16.6328 15.2992C16.7705 15.1691 16.8508 14.9895 16.8562 14.8001C16.8733 14.1369 16.7555 13.4771 16.51 12.8608C16.2645 12.2445 15.8963 11.6845 15.4278 11.2148C14.5129 10.3003 13.2722 9.78656 11.9786 9.78656C10.685 9.78656 9.44436 10.3003 8.52945 11.2148L5.42892 14.3171C4.74706 14.9987 4.28254 15.8671 4.09408 16.8126C3.90561 17.7581 4.00166 18.7383 4.37007 19.6292C4.73848 20.5201 5.36272 21.2818 6.16391 21.8181C6.9651 22.3544 7.90728 22.6411 8.87138 22.6421C9.51226 22.6439 10.1471 22.5186 10.7393 22.2734C11.3314 22.0282 11.869 21.668 12.321 21.2137L13.303 20.2316C13.4186 20.0955 13.479 19.921 13.4722 19.7425C13.4655 19.5641 13.3922 19.3946 13.2667 19.2675C13.1412 19.1405 12.9727 19.065 12.7943 19.0561C12.6159 19.0472 12.4407 19.1054 12.3031 19.2192Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>

                                                    <span className='px-3 my-auto' >|</span>

                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path d="M11.375 14.125C11.6734 14.125 11.9595 14.0065 12.1705 13.7955C12.3815 13.5845 12.5 13.2984 12.5 13C12.5 12.7016 12.3815 12.4155 12.1705 12.2045C11.9595 11.9935 11.6734 11.875 11.375 11.875C11.0766 11.875 10.7905 11.9935 10.5795 12.2045C10.3685 12.4155 10.25 12.7016 10.25 13C10.25 13.2984 10.3685 13.5845 10.5795 13.7955C10.7905 14.0065 11.0766 14.125 11.375 14.125ZM11.204 17.0005C11.1386 16.9261 11.0591 16.8653 10.9701 16.8218C10.8811 16.7783 10.7843 16.7528 10.6854 16.7469C10.5866 16.741 10.4875 16.7547 10.3939 16.7873C10.3003 16.8199 10.2142 16.8707 10.1403 16.9368C10.0665 17.0029 10.0065 17.0829 9.96384 17.1723C9.92114 17.2617 9.89657 17.3587 9.89157 17.4577C9.88656 17.5566 9.90121 17.6556 9.93467 17.7488C9.96813 17.8421 10.0197 17.9278 10.0865 18.001C10.5791 18.5514 11.1823 18.9917 11.8566 19.2931C12.531 19.5945 13.2614 19.7502 14 19.75C14.7386 19.7502 15.469 19.5945 16.1434 19.2931C16.8177 18.9917 17.4209 18.5514 17.9135 18.001C18.044 17.8525 18.1106 17.6584 18.0988 17.4611C18.0869 17.2637 17.9977 17.079 17.8504 16.9472C17.7031 16.8153 17.5097 16.7469 17.3122 16.7569C17.1148 16.7669 16.9292 16.8544 16.796 17.0005C16.4441 17.3938 16.0132 17.7084 15.5314 17.9237C15.0496 18.139 14.5277 18.2502 14 18.25C12.89 18.25 11.8925 17.7685 11.204 17.0005ZM17.75 13C17.75 13.2984 17.6315 13.5845 17.4205 13.7955C17.2095 14.0065 16.9234 14.125 16.625 14.125C16.3266 14.125 16.0405 14.0065 15.8295 13.7955C15.6185 13.5845 15.5 13.2984 15.5 13C15.5 12.7016 15.6185 12.4155 15.8295 12.2045C16.0405 11.9935 16.3266 11.875 16.625 11.875C16.9234 11.875 17.2095 11.9935 17.4205 12.2045C17.6315 12.4155 17.75 12.7016 17.75 13ZM23 14.5C23 13.3181 22.7672 12.1478 22.3149 11.0558C21.8626 9.96392 21.1997 8.97177 20.364 8.13604C19.5282 7.30031 18.5361 6.63738 17.4442 6.18508C16.3522 5.73279 15.1819 5.5 14 5.5C12.8181 5.5 11.6478 5.73279 10.5558 6.18508C9.46392 6.63738 8.47177 7.30031 7.63604 8.13604C6.80031 8.97177 6.13738 9.96392 5.68508 11.0558C5.23279 12.1478 5 13.3181 5 14.5C5 16.8869 5.94821 19.1761 7.63604 20.864C9.32387 22.5518 11.6131 23.5 14 23.5C16.3869 23.5 18.6761 22.5518 20.364 20.864C22.0518 19.1761 23 16.8869 23 14.5ZM6.5 14.5C6.5 12.5109 7.29018 10.6032 8.6967 9.1967C10.1032 7.79018 12.0109 7 14 7C15.9891 7 17.8968 7.79018 19.3033 9.1967C20.7098 10.6032 21.5 12.5109 21.5 14.5C21.5 16.4891 20.7098 18.3968 19.3033 19.8033C17.8968 21.2098 15.9891 22 14 22C12.0109 22 10.1032 21.2098 8.6967 19.8033C7.29018 18.3968 6.5 16.4891 6.5 14.5Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className='odbc-iconarea d-flex'>
                                                        <button className=' my-auto' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                                                <path d="M10.0473 8.02415C8.47887 8.94898 7.33904 10.4557 6.87578 12.2166C6.41253 13.9775 6.66334 15.8501 7.57364 17.4271C8.48395 19.004 9.98012 20.1577 11.7367 20.6372C13.4932 21.1167 15.368 20.8832 16.9533 19.9874C17.1356 19.8904 17.3485 19.8679 17.5471 19.9247C17.7457 19.9815 17.9145 20.1133 18.0178 20.2921C18.1211 20.471 18.151 20.683 18.1011 20.8834C18.0511 21.0838 17.9253 21.257 17.7502 21.3665C16.1432 22.2949 14.2766 22.6718 12.4353 22.4396C10.594 22.2074 8.87936 21.3789 7.55323 20.0806C6.22711 18.7823 5.36242 17.0856 5.09123 15.2496C4.82005 13.4137 5.15728 11.5395 6.05143 9.9132C6.94803 8.27798 8.35755 6.98303 10.0627 6.22792C11.7679 5.47282 13.6741 5.29948 15.4875 5.73462C17.301 6.16977 18.9209 7.18924 20.0978 8.63591C21.2747 10.0826 21.9431 11.8762 22 13.7402V15.3339C22.0004 15.9667 21.7952 16.5826 21.4155 17.0889C21.0357 17.5951 20.5018 17.9644 19.8941 18.1411C19.2864 18.3179 18.6378 18.2925 18.0457 18.0689C17.4537 17.8452 16.9503 17.4354 16.6112 16.901C15.9373 17.6269 15.0309 18.0944 14.0488 18.223C13.0667 18.3515 12.0706 18.1328 11.2326 17.6048C10.3946 17.0768 9.7674 16.2726 9.45941 15.3313C9.15142 14.3899 9.182 13.3705 9.54585 12.4493C9.90836 11.5284 10.5809 10.7629 11.4474 10.2849C12.3139 9.8068 13.3202 9.64615 14.2925 9.83062C15.2648 10.0151 16.1422 10.5331 16.7735 11.2953C17.4047 12.0575 17.7501 13.0161 17.7502 14.0058V15.3339C17.7502 15.6861 17.8901 16.0239 18.1391 16.273C18.3882 16.522 18.726 16.6619 19.0782 16.6619C19.4305 16.6619 19.7683 16.522 20.0173 16.273C20.2664 16.0239 20.4063 15.6861 20.4063 15.3339V13.8645C20.3819 12.6643 20.045 11.4911 19.4289 10.4608C18.8128 9.43053 17.9387 8.57862 16.8929 7.98913C15.8472 7.39963 14.6658 7.09293 13.4654 7.09926C12.2649 7.10558 11.0868 7.42473 10.0473 8.02521V8.02415ZM16.1565 14.0058C16.1565 13.3013 15.8766 12.6257 15.3785 12.1276C14.8804 11.6295 14.2048 11.3496 13.5003 11.3496C12.7959 11.3496 12.1203 11.6295 11.6221 12.1276C11.124 12.6257 10.8442 13.3013 10.8442 14.0058C10.8442 14.7102 11.124 15.3859 11.6221 15.884C12.1203 16.3821 12.7959 16.6619 13.5003 16.6619C14.2048 16.6619 14.8804 16.3821 15.3785 15.884C15.8766 15.3859 16.1565 14.7102 16.1565 14.0058Z" fill="#6D6E6F" />
                                                            </svg>
                                                        </button>
                                                    </span>

                                                </div>

                                                <div className='d-flex justify-content-end gap-2' >
                                                    <div className=' d-flex' >
                                                        <span className='my-auto text2' >Add a comment</span>
                                                    </div>
                                                    <button className='odbc-comment-btn' >Comment</button>
                                                </div>

                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-12 d-flex justify-content-between mt-3' >
                                    <button className='odbc-mark-completed-btn' >
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.6312 6.57051L8.20174 14L4 9.79826L4.57051 9.22776L8.20174 12.859L15.0607 6L15.6312 6.57051Z" fill="#252525" />
                                            </svg>
                                        </span>
                                        <span>
                                            Mark Complete
                                        </span>
                                    </button>

                                    <div className=' d-flex justify-content-end gap-3' >
                                        <span className="text1  my-auto" style={{ width: "fit-content" }} >Collaborators</span>

                                        <div className='d-flex' style={{ height: "30px", width: "fit-content", }} >
                                            <img src='https://bit.ly/dan-abramov' className='h-100' style={{ zIndex: "5", borderRadius: "30px" }} />
                                            <img src='https://bit.ly/dan-abramov' className='h-100' style={{ zIndex: "5", borderRadius: "30px" }} />
                                            <img src='https://bit.ly/dan-abramov' className='h-100' style={{ zIndex: "5", borderRadius: "30px" }} />
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default SingleProjectOverview
