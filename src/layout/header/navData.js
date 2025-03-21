import circle from "../../assets/mdi_tick-circle-outline.png"
import project from "../../assets/Group.png"
import msg from "../../assets/msg.png"
import portfolio from "../../assets/portfolio.png"
import leads from "../../assets/prime_users.png"
import demos from "../../assets/box_icon.png"



export const data = [
    {
        id: 1,
        title: "Task",
        path: "/",
        img_url: circle,
        subdata: [
            {
            id: 1,
            title: "Project",
            path: "/",
            img_url: project,
            },
            {
            id: 2,
            title: "Demos",
            path: "/",
            img_url: demos,
            }
        ]
    },
    {
        id: 2,
        title: "Project",
        path: "/",
        img_url: project,
    },
    {
        id: 3,
        title: "Message",
        path: "/",
        img_url: msg,
    },
    {
        id: 4,
        title: "Portfolio",
        path: "/",
        img_url: portfolio,
    },
    {
        id: 5,
        title: "Leads",
        path: "/",
        img_url: leads,
    },
    {
        id: 6,
        title: "Demos",
        path: "/",
        img_url: demos,
    },
]