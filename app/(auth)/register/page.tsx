'use client'
import { registerUser } from "@/app/api/auth/auth";
import { Span } from "next/dist/trace";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';


export default function Register() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [isPasswordNotMatch, setPasswordNotMatch] = useState(false);
    
    const cookies = new Cookies();
    const router = useRouter()

    async function handleRegister(e:any) {
        e.preventDefault();
        setIsSubmitted(true);

        const payload = {
            email,
            username,
            password,
            confirmPassword
        }

        const res = await registerUser(payload);
        setIsSubmitted(false);
        if (res?.data.message != "User exists") {
         cookies.set('userEmail', payload.email);
            router.push('/verify-account');
        } else {
            setErrorMessage(true)
        }
    }

    useEffect(() => {
        setErrorMessage(false)
    }, [username, email, password, confirmPassword])

    
    useEffect(() => {
        if (confirmPassword.length >= password.length && password != confirmPassword) {
            setPasswordNotMatch(true);
        } else {
            setPasswordNotMatch(false)
        }
    }, [password, confirmPassword])


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
                {isPasswordNotMatch && <span className={`errorMessage`}>Password do not match</span>}
                
                {errorMessage && <span className={`errorMessage`}>user email already exists, please log in</span>}
                <button type="submit" disabled={isSubmitted}>
                    {
                        isSubmitted ? 
                        <div className="spinner-border" role="status"/>
                        :
                        'Register'
                    }
                </button>
                <div className="terms">
                <input type="checkbox" name="checkbox" id="checkbox" checked={agreeToTerms} onChange={() => setAgreeToTerms(!agreeToTerms)} required /> <label htmlFor="checkbox">I hereby agree to the  
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