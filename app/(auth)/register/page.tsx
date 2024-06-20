'use client'
import { registerUser } from "@/app/api/auth/auth";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Cookies from 'universal-cookie';


export default function Register() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    
    const cookies = new Cookies();
    const router = useRouter()

    async function handleRegister(e:any) {
        e.preventDefault();

        const payload = {
            email,
            username,
            password,
            confirmPassword
        }

        const res = await registerUser(payload);

        if (res?.data.message != "User exists") {
         cookies.set('userEmail', payload.email);
            router.push('/verify-account');
        } else {
            alert('user already exists, please log in')
        }
    }


    return (
        <div className="register">
            <h1>Create an account</h1>
            <p>Start your journey!</p>
            <form onSubmit={handleRegister}>
                <div className="inputContainer">
                    <label htmlFor="username">Username <span className="required">*</span></label>
                    <input type="text"  value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Username" name="username" required />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" name="email" required />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" name="password" required />
                </div>
                <div className="inputContainer">
                    <label htmlFor="confirmPassword">Confirm Password <span className="required">*</span></label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Password" name="confirmPassword" required />
                </div>
                <button type="submit">Register</button>
                <div className="terms">
                <input type="checkbox" name="checkbox" /> <label htmlFor="checkbox">I hereby agree to the  
                <span> Terms & Conditions</span></label>
                </div>
                <div className="terms">
                    <p>Already have an account?
                    <span> Log in</span></p>
                </div>
            </form>
        </div>
    )
}