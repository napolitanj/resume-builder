const userInfo = {
    generalInfo: {
        firstName: 'Jon',
        lastName: 'Doe',
        title: "My Professional Title",
        city: 'New York, NY',
        phone: '235-646-2473',
        email: 'johndoe@gmail.com',
        websites: [
        "www.johndoe.com",
        "github.com/johndoe"
        ]
    },
    experience: {
        title: "App I Created",
        location: "Remote",
        start: "Sept 2021",
        end: "Present",
        topics: [
        {
            title: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
            id: Math.floor(Math.random() * 10000)+1
        },
        {
            title: "Javascript",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
            id: Math.floor(Math.random() * 10000)+1
        },
        {
            title: "HTML/CSS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
            id: Math.floor(Math.random() * 10000)+1
        }
        ]
    },
    employmentInfo:[
        {
        id: Math.floor(Math.random() * 10000)+1,
        employer: "Business Name",
        location: "Denver, CO",
        position: "My Position at This Company",
        start: "Nov 2018",
        end: "April 2021",
        duties: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer in aliquet metus, non fermentum arcu.",
            "Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia."
        ]
        },
        {
        id: Math.floor(Math.random() * 10000)+1,
        employer: "Workplace Name",
        location: "Workplace Location",
        position: "Position",
        start: "Start Date",
        end: "End Date",
        duties: [
            "Responsibilities...",
            "Responsibilities...",
            "Responsibilities..."
        ],
        },
    ],
    education: [
        {
        degree: "The Degree or Certification I Earned",
        school: "The School I Studied At",
        location: "Remote",
        start: "Sept 2021",
        end: "Ongoing",
        },
        {
        degree: "B.S. Group Social Studies",
        school: "Michigan State University",
        location: "East Lansing, MI",
        start: "Sept 2021",
        end: "Ongoing",
        },
        {
        degree: "Leadership School",
        school: "National Outdoor Leadership School",
        location: "Lander, WY",
        start: "Sept 2021",
        end: "Ongoing",
        },
    ],
    skills: [
        {
        title: "Languages",
        skillList: ["Javascript ES6", "HTML", "CSS"]
        },
        {
        title: "Tools",
        skillList: ["Gmail","Microsoft Office","Figma","Canva","Squarespace","Wordpress","Github","Gmail","Microsoft Office","Figma","Canva","Squarespace","Wordpress","Git","Github"]
        },
        {
        title: "Other Relevant Skills for This Job",
        skillList: ["Leadership","Conflict Resolution","Problem Solving","Risk Management"]
        },  
    ]
}

export default userInfo