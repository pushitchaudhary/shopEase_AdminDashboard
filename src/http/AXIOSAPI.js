import axios from "axios";


const Admin_API = axios.create({
    baseURL : 'http://localhost:4000/api/admin/',
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
})


const AUTHENTICATED_ADMIN_API = axios.create({
    baseURL : 'http://localhost:4000/api/admin/',
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json',
        'Authorization' : `${localStorage.getItem('adminJWT')}`
    }
})

const AUTHENTICATED_ADMIN_FILE_API = axios.create({
    baseURL : 'http://localhost:4000/api/admin/',
    headers : {
        'Content-Type' : 'multipart/form-data',
        Accept : 'application/json',
        'Authorization' : `${localStorage.getItem('adminJWT')}`
    }
})




export   { Admin_API, AUTHENTICATED_ADMIN_API, AUTHENTICATED_ADMIN_FILE_API}