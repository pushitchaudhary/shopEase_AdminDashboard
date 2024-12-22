import axios from "axios";


const Admin_API = axios.create({
    baseURL : 'http://localhost:4000/api/admin/',
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
})


// const INSTITUTE_TEACHER_AUTHENTICATED_API = axios.create({
//     baseURL : 'http://localhost:4000/api/admin/',
//     headers : {
//         'Content-Type' : 'application/json',
//         Accept : 'application/json',
//         'Authorization' : `${localStorage.getItem('instituteTeacherToken')}`
//     }
// })

// const INSTITUTE_TEACHER_AUTHENTICATED_FILE_API = axios.create({
//     baseURL : 'http://localhost:4000/api/admin/',
//     headers : {
//         'Content-Type' : 'multipart/form-data',
//         Accept : 'application/json',
//         'Authorization' : `${localStorage.getItem('instituteTeacherToken')}`
//     }
// })




export   { Admin_API}