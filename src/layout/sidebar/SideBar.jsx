import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyTaskIcon from "../../assets/My-task.png"
import Message from "../../assets/Message.png"
import Notification from "../../assets/Notification.png"
import { userData, adminData } from './sideBarData'

function SideBar() {

  const Navigate = useNavigate()
  const [type, setType] = useState("admin")

  return (
    <div className='sidebar  d-flex flex-column justify-content-between h-100' >
      <div className="mt-4 sidebar-top" >
        <div>
          <ul className="p-0 px-3 list-unstyled" >
            <li className="d-flex justify-content-start gap-3 sidebar-card mb-1" onClick={() => Navigate("/")} >
              <span className="my-auto" >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path d="M5.998 0.88616C6.27332 0.638794 6.63038 0.501953 7.0005 0.501953C7.37062 0.501953 7.72768 0.638794 8.003 0.88616L13.503 5.82816C13.6594 5.96879 13.7844 6.14072 13.8701 6.33281C13.9557 6.5249 14 6.73285 14 6.94316V13.9982C14 14.396 13.842 14.7775 13.5607 15.0588C13.2794 15.3401 12.8978 15.4982 12.5 15.4982H10C9.60218 15.4982 9.22064 15.3401 8.93934 15.0588C8.65804 14.7775 8.5 14.396 8.5 13.9982V10.4982C8.5 10.3656 8.44732 10.2384 8.35355 10.1446C8.25979 10.0508 8.13261 9.99816 8 9.99816H6C5.86739 9.99816 5.74021 10.0508 5.64645 10.1446C5.55268 10.2384 5.5 10.3656 5.5 10.4982V13.9982C5.5 14.396 5.34196 14.7775 5.06066 15.0588C4.77936 15.3401 4.39782 15.4982 4 15.4982H1.5C1.10218 15.4982 0.720644 15.3401 0.43934 15.0588C0.158035 14.7775 0 14.396 0 13.9982V6.94316C0 6.51816 0.18 6.11316 0.498 5.82816L5.998 0.88616ZM7.334 1.63016C7.24225 1.5478 7.1233 1.50224 7 1.50224C6.8767 1.50224 6.75775 1.5478 6.666 1.63016L1.166 6.57216C1.1139 6.61893 1.0722 6.67612 1.0436 6.74003C1.01501 6.80394 1.00015 6.87314 1 6.94316V13.9982C1 14.1308 1.05268 14.2579 1.14645 14.3517C1.24021 14.4455 1.36739 14.4982 1.5 14.4982H4C4.13261 14.4982 4.25979 14.4455 4.35355 14.3517C4.44732 14.2579 4.5 14.1308 4.5 13.9982V10.4982C4.5 10.1003 4.65804 9.7188 4.93934 9.4375C5.22064 9.1562 5.60218 8.99816 6 8.99816H8C8.39782 8.99816 8.77936 9.1562 9.06066 9.4375C9.34196 9.7188 9.5 10.1003 9.5 10.4982V13.9982C9.5 14.1308 9.55268 14.2579 9.64645 14.3517C9.74021 14.4455 9.86739 14.4982 10 14.4982H12.5C12.6326 14.4982 12.7598 14.4455 12.8536 14.3517C12.9473 14.2579 13 14.1308 13 13.9982V6.94316C12.9998 6.87314 12.985 6.80394 12.9564 6.74003C12.9278 6.67612 12.8861 6.61893 12.834 6.57216L7.334 1.63016Z" fill="#3954A5" />
                </svg>
              </span>
              <span className="hpd-card-text1 my-auto" style={{ fontSize: "16px" }} >Home</span>
            </li>
            <li className="accordion-item  sidebar-card  mb-1" >
              <button className="accordion-button collapsed sidebar-accordion-button  d-flex justify-content-start gap-3 " style={{ fontSize: "16px" }} type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-accordian-1" aria-expanded="true" aria-controls="sidebar-accordian-1">
                <img src={MyTaskIcon} className='task-icon' alt='task-icon' />
                <span className="hpd-card-text1 my-auto" style={{ fontSize: "16px" }} >My tasks</span>
              </button>
              <div id="sidebar-accordian-1" className="accordion-collapse collapse">
                <div className="accordion-body sidebar-accordion-body">
                  <ul>
                    <li className="sidebar-sub-left-btn mb-1" onClick={() => Navigate("/allprojects")} >Projects</li>
                    <li className="sidebar-sub-left-btn mb-1" onClick={() => Navigate("/alldemo")} >Demos</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="d-flex justify-content-start gap-3 sidebar-card mb-1" onClick={() => Navigate("/inbox")} >
              <img src={Message} alt='inbox-ixon' />
              <span className="hpd-card-text1 my-auto" style={{ fontSize: "16px" }} >Inbox</span>
            </li>
            <li className="d-flex justify-content-start gap-3 sidebar-card mb-1" onClick={() => Navigate("/nortification")} >
              <img src={Notification} alt='inbox-ixon' />
              <span className="hpd-card-text1 my-auto" style={{ fontSize: "16px" }} >Notification</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-divider" ></div>

        <div>
          <ul className="p-0 px-3 list-unstyled mt-3" style={{ paddingLeft: "28px" }} >
            {
              type === "admin" ?
                adminData?.map((item, index) =>
                  <li key={item.id} className="accordion-item  sidebar-card   mb-2" >
                    <button className="accordion-button collapsed sidebar-accordion-button  d-flex justify-content-start gap-3 " style={{ fontSize: "16px" }} type="button" data-bs-toggle="collapse" data-bs-target={`#sidebar-accordian-2${item.id}`} aria-expanded="true" aria-controls={`sidebar-accordian-2${item.id}`}>
                      <span className="hpd-card-text1 my-auto" style={{ fontSize: "16px" }} >{item.name}</span>
                    </button>
                    <div  id={`sidebar-accordian-2${item.id}`} className="accordion-collapse collapse">
                      <div className="accordion-body sidebar-accordion-body">
                        <ul>
                          {
                            item.subData?.map((item, index) =>
                              <li key={item.id} className="sidebar-sub-left-btn mb-1" onClick={() => Navigate(item.path)} >{item.name}</li>
                            )
                          }
                        </ul>
                      </div>
                    </div>
                  </li>
                )
                :
                type === "user" ? 
                userData?.map((item, index) =>
                  <li key={item.id} className="accordion-item  sidebar-card   mb-2" >
                    <button className="accordion-button collapsed sidebar-accordion-button  d-flex justify-content-start gap-3 " style={{ fontSize: "16px" }} type="button" data-bs-toggle="collapse" data-bs-target={`#sidebar-accordian-2${item.id}`} aria-expanded="true" aria-controls={`sidebar-accordian-2${item.id}`}>
                      <span className="hpd-card-text1 my-auto" style={{ fontSize: "16px" }} >{item.name}</span>
                    </button>
                    <div  id={`sidebar-accordian-2${item.id}`} className="accordion-collapse collapse">
                      <div className="accordion-body sidebar-accordion-body">
                        <ul>
                          {
                            item.subData?.map((item, index) =>
                              <li key={item.id} className="sidebar-sub-left-btn mb-1" onClick={() => Navigate(item.path)} >{item.name}</li>
                            )
                          }
                        </ul>
                      </div>
                    </div>
                  </li>
                )
                  :
                  Navigate("/")
            }
          </ul>
        </div>

      </div>

      <div className="sidebar-bottom d-flex justify-content-center gap-2  p-3" >

        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g id="Group">
              <path id="Vector" d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              <path id="Vector_2" d="M10 14H10.01V14.01H10V14Z" stroke="black" strokeLinejoin="round" />
              <path id="Vector_3" d="M8.58618 6.9864C8.97618 6.5964 9.48618 6.4014 9.99618 6.4004C10.2595 6.39944 10.5205 6.45074 10.7639 6.55133C11.0073 6.65191 11.2283 6.7998 11.4142 6.9864C11.8042 7.3764 12.0002 7.8884 12.0002 8.4004C12.0007 8.66311 11.9491 8.92331 11.8486 9.166C11.748 9.40869 11.6004 9.62906 11.4142 9.8144C11.2283 10.0009 11.0072 10.1487 10.7638 10.2493C10.5204 10.3499 10.2595 10.4013 9.99618 10.4004L10.0002 11.4004" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </span>

        <span className="sidebar-help" >Help & getting started</span>

      </div>
    </div>
  )
}

export default SideBar
