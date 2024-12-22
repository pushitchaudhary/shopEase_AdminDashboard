// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { login } from '../../store/ authSlice'
// import { useNavigate } from 'react-router-dom'
// import { STATUSES } from '../../store/statuses'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Login() {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const {authData, status} = useSelector((state)=>state.authData)


//     useEffect(()=>{
//         if (status === STATUSES.SUCCESS && authData) {
//             navigate('/');
//         } else if (status === STATUSES.ERROR) {
//             toast.error('Login failed. Please try again.');
//         }
//     },[authData, status, navigate])


//     const handleSubmitBtn = (e)=>{
//         e.preventDefault();
//         const formData = new FormData()
//         formData.append('email', email)
//         formData.append('password', password)

//         dispatch(login(formData))
//     }


//     return (
//     <>
//     <ToastContainer />
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img alt="Your Company" src="src/assets/images/shopEase.png" className="mx-auto h-28 w-auto" />
//             <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//                 Sign in to your account
//             </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form  method="POST" className="space-y-6">
//                 <div>
//                     <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900"> Email </label>
//                     <div className="mt-2">
//                         <input id="email" name="email" onChange={(e)=>setEmail(e.target.value)} type="email" required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
//                     </div>
//                 </div>

//                 <div>
//                     <div className="flex items-center justify-between">
//                         <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900"> Password</label>
//                         <div className="text-sm">
//                             <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                                 Forgot password?
//                             </a>
//                         </div>
//                     </div>
//                     <div className="mt-2">
//                         <input id="password" onChange={(e)=>setPassword(e.target.value)} name="password" type="password" required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
//                     </div>
//                 </div>

//                 <div>
//                     <button type="submit" onClick={handleSubmitBtn} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                         Log In
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//     </>

//   )
// }

// export default Login



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { STATUSES } from '../../store/statuses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../store/ authSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authData, status, error } = useSelector((state) => state.authData); // Make sure error is part of the state

    useEffect(() => {
        if (status === STATUSES.SUCCESS && authData) {
            toast.success('Login successful!');
            navigate('/');
        } else if (status === STATUSES.ERROR) {
            toast.error(error || 'Login failed. Please try again.');
        }
    }, [authData, status, error, navigate]); 
  

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        dispatch(login(formData));
    };

    return (
    <>
    <ToastContainer />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="Your Company" src="src/assets/images/shopEase.png" className="mx-auto h-28 w-auto"/>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form method="POST" className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email
                </label>
                <div className="mt-2">
                    <input id="email" name="email" onChange={(e) => setEmail(e.target.value)} type="email" required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" >
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input id="password" onChange={(e) => setPassword(e.target.value)} name="password" type="password" required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
            </div>

            <div>
                <button type="submit" onClick={handleSubmitBtn} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                    Log In
                </button>
            </div>
        </form>
        </div>
    </div>
    </>
  );
}

export default Login;
