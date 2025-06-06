import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import axios from 'axios';
export const AuthContext =createContext();
const AuthProvidor = ({children}) => {
    const providor = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const emailRegister =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(updateData)=>{
        setLoading(false);
        return updateProfile(auth.currentUser,updateData);
    }
    const emailLogin =(email,password)=>{
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logout =()=>{
        return signOut(auth).then(()=>{
            toast("Logout Successfully");
        });
    }
    const authorizeWithGoogle=()=>{
        return signInWithPopup(auth,providor);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false);
            setUser(currentUser);
            if(currentUser?.email){
                axios.post('https://b11a11-server-side-akib-dev1.vercel.app/jwt',{email: currentUser.email},{withCredentials: true}).then(res => {
                    toast.success("JWT token generated successfully");
                }).catch(err => {
                    console.error("JWT Error:", err);
                    toast.error("Failed to generate JWT token");
                });
            }
        });
        return () => unsubscribe();
    },[]);

    const authData={
        authorizeWithGoogle,
        loading,
        setLoading,
        logout,
        emailLogin,
        user,
        updateUser,
        setUser,
        error,
        setError,
        emailRegister,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvidor;