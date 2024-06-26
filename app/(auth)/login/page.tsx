'use client'
import { LoginUser } from "@/app/api/auth/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [password, setPassword] = useState('');
    const cookies = new Cookies();
    const router = useRouter();

    async function handleLogIn(e:any) {
        e.preventDefault();
        setIsSubmitted(true);

        const payload = {
            email,
            password
        }
        const res = await LoginUser(payload);
        setIsSubmitted(false);
        if (res?.data) {
            cookies.set("loggedInUser", res.data);
            router.push('/student')
        } else {
            setErrorMessage(true)
        }
      }

      useEffect(() => {
        setErrorMessage(false);
      }, [email, password])
  
    
    return (
        <div className="login">
            <h1>Log in to your account</h1>
            <p>Welcome back! Please enter your details</p>
            <form onSubmit={handleLogIn}>
                <div className="inputContainer">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" name="email" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" name="password" />
                </div>
                <div className="rememberme">
                    <div>
                        <input type="checkbox" name="checkbox" /> 
                        <label htmlFor="checkbox">Remember me  
                        </label>
                    </div>

                    <Link href={'reset-password'}>Forgot Password</Link>
                </div>
                {errorMessage && <span className={`errorMessage`}>Incorrect User details</span>}
                <button type="submit" disabled={isSubmitted}>
                    {
                        isSubmitted ? 
                        <div className="spinner-border" role="status"/>
                        :
                        'Log in'
                    }
                </button>
                <div className="account">
                    <p>Don&apos;t have an account?
                    <Link href={'/register'}>Register</Link></p>
                </div>
            </form>
        </div>
    )
}