const imgUrl =
  process.env.NODE_ENV === "production"
    ? "https://student-virtual-id-card-production.up.railway.app/img"
    : "http://localhost:5000/img";

const studentsDetails = [
  {
    firstName: "Sanusi",
    lastName: "Muhyideen",
    otherName: "Olayemi",
    regNo: "16/43106U/2",
    session: "2016/2017",
    bloodGroup: "B+",
    dateIssued: "25-May-18",
    department: "Computer & Communications Engineering",
    image: imgUrl + "/user1.jpg",
    signature: "",
    password: "password",
  },
  {
    firstName: "Blessing",
    lastName: "Okagbare",
    otherName: "Rose",
    regNo: "20/48338A/2",
    session: "2020/2021",
    bloodGroup: "A+",
    dateIssued: "25-May-18",
    department: "Computer Science",
    image: imgUrl + "/user2.png",
    signature: "",
    password: "password",
  },
  {
    firstName: "Yusuff",
    lastName: "Ahmad",
    otherName: "Bala",
    regNo: "18/35663C/2",
    session: "2018/2019",
    bloodGroup: "B-",
    dateIssued: "25-May-18",
    department: "Quantity & Surveying",
    image: imgUrl + "/user3.jpg",
    signature: "",
    password: "password",
  },
  {
    firstName: "Ruqayyah",
    lastName: "Muhammad",
    otherName: "Anike",
    regNo: "17/33105U/2",
    session: "2017/2018",
    bloodGroup: "A+",
    dateIssued: "25-May-18",
    department: "Mechatronics Engineering",
    image: imgUrl + "/user4.jpg",
    signature: "",
    password: "password",
  },
];

export default studentsDetails;
