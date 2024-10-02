export const courses = [
  {
    id: 1,
    title: "Aon2023",
    description: "",
    score: {
      attendance: 10,
      quiz: 20,
      task: 30,
      project: 40,
    },
  },
];

export const students = [
  {
    id: 1,
    name: "Ali Sattar",
    birthDate: "1999/04/30",
    phone: "07710998987",
    email: "example@mail.co",
    img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    active: true,
  },
  {
    id: 2,
    name: "نبا ناهض",
    birthDate: "1970/06/30",
    phone: "07710998987",
    email: "example@mail.co",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    active: false,
  },
];

export const activitiesList = [
  {
    id: 1,
    title: "Session Three (JavaScript Quize)",
    info: `This quize is on google sheet in this lik 
        <a  href="/#">https://quiz.com</a>`,
    date: "2023/05/20",
    type: "QUIZ", // QUIZ || TASK
    active: false,
    finish: false, // when import the result sheet should be true
  },
  {
    id: 2,
    title: "Session Two (React Homework)",
    info: `This homework is on google sheet in this lik 
        <a href="/#" >https://homework.com</a>`,
    date: "2023/05/20",
    type: "TASK", // QUIZ || TASK
    active: true,
    finish: true,
  },
];

export const scoreList = [
  {
    id: 1,
    name: "Ali Sattar",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    score: "18",
  },
  {
    id: 2,
    name: "Noor Jasim",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    score: "20",
  },
  {
    id: 3,
    name: "Maria Iraq",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    score: "12",
  },
  {
    id: 4,
    name: "Salim Soso",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    score: "8",
  },
  {
    id: 5,
    name: "Murtadha Abed",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    score: "10",
  },
  {
    id: 6,
    name: "Ali Nouri",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    score: "11",
  },
  {
    id: 7,
    name: "Ahmed Ali",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    score: "15",
  },
  {
    id: 8,
    name: "Abbas Ali",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/300?u=a042581f4f29026707d",
    score: "19",
  },
  {
    id: 9,
    name: "Zainab Ahmed",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    score: "2",
  },
  {
    id: 10,
    name: "Nabaa Abbas",
    phone: "77719887676",
    email: "example@gmail.co",
    img: "https://i.pravatar.cc/300?u=a042581f4e29026710d",
    score: "20",
  },
];

export const projects = [
  {
    id: 1,
    title: "Pure System",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    documents: null,
    students,
    rate: 3.4,
  },
  {
    id: 2,
    title: "Voting App ( Foo 1990 )",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    documents: [
      "https://i.pravatar.cc/300?u=a042581f4e29026710d",
      "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    ],
    students,
    rate: 5,
  },
  {
    id: 3,
    title: "E-clinic Online System",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    documents: ["https://i.pravatar.cc/300?u=a042581f4e29026710d"],
    students,
  },
];

export const scoreLinks = [
  {
    id: 1,
    linkID: "FdsdDs021",
    description: "Quiz Score For last week",
    type: "GENERAL", // ACTIVITY || PROJECTS || GENERAL || FINAL
    activity: null,
    active: true,
  },
  {
    id: 2,
    linkID: "OIsk821",
    description: "Score For last week",
    type: "ACTIVITY", // ACTIVITY || PROJECTS || GENERAL || FINAL
    activity: "1",
    active: true,
  },
  {
    id: 3,
    linkID: "HDd8s021",
    description: "Projects Score For last week",
    type: "PROJECTS", // ACTIVITY || PROJECTS || GENERAL || FINAL
    activity: null,
    active: false,
  },
  {
    id: 4,
    linkID: "P328s021",
    description: "Projects Score",
    type: "PROJECTS_RATE", // ACTIVITY || PROJECTS || GENERAL || FINAL || PROJECTS_RATE
    activity: null,
    active: false,
  },
  {
    id: 5,
    linkID: "C028s021",
    description: "Final Evaluations",
    type: "FINAL", // ACTIVITY || PROJECTS || GENERAL || FINAL || PROJECTS_RATE
    activity: null,
    active: false,
  },
];

export const projectsRatings = [
  {
    id: 1,
    title: "Pure System",
    rating: 4.5,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 2,
    title: "E-clinic Online System",
    rating: 5,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 3,
    title: "Voting App ( Foo 1990 )",
    rating: 1.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 4,
    title: "Score System",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 5,
    title: "Project Title",
    rating: 5,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 6,
    title: "Project Title",
    rating: 2.5,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 7,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 8,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 9,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 10,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 11,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 12,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 13,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 14,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
  {
    id: 15,
    title: "Project Title",
    rating: 3.4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    students,
  },
];
