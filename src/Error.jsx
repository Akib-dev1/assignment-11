import React from 'react';
import errorMessage from './assets/Error.json'
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router';
const Error = () => {
    const navigate =useNavigate();
    const handleClick=()=>{
        navigate("/")
    }
    return (
        <div>
            <div className="flex flex-col items-center h-screen">
                <Lottie animationData={errorMessage} loop={true} className="w-1/2 h-2/3" />
                <div className="">
                    <h4 className="text-4xl font-bold text-center">Page not Found!</h4>
                    <h4 className="text-3xl font-semibold text-center text-slate-700 my-1.5">This Link might be corrupted.</h4>
                    <p className="text-2xl font-semibold text-center text-slate-500">or page may have been removed</p>
                    <div className="flex justify-center items-center mt-4"><button onClick={handleClick} className="rounded-4xl btn btn-info btn-outline">Go back to Home</button></div>
                </div>
            </div>
        </div>
    );
};

export default Error;