'use client'
import { LoginUser } from "@/app/api/auth/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import thootoHeader from "../../../ui/dashboard/boundlessCover.png";
import "@/styles/css/plugins/mainstyle.css";
import { isMobile } from "react-device-detect";
export default function Login() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [password, setPassword] = useState('');

    const cookies = new Cookies();
    const router = useRouter();

    async function handleLogIn(e: any) {
        e.preventDefault();
        setIsSubmitted(true);
    
        const payload = {
            email,
            password
        };
    
        try {
            
            const res = await LoginUser(payload);
            setIsSubmitted(false);
            
            if (res == undefined) {
                setErrorMessage(true);
                return;
            }
            
            if (res) {
                
                cookies.set("loggedInUser", res.data);
                router.push('/student/student-profile');
            }
        } catch (error: any) {
   
            console.error('Error during login:', error);
            setIsSubmitted(false);

        }
    }
    
    useEffect(() => {
        setErrorMessage(false);
    }, [email, password])

    return (
        <div className="login" data-aos="fade-up">
            <div className="login-inner">
                <h1>Log in to your account</h1>
                <p>Welcome back! Please enter your details</p>
                <form onSubmit={handleLogIn}>
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email *" name="email" />
                        <span className="focus-border" />
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password *" name="password" />
                        <span className="focus-border" />
                    </div>
                    <div className="row mb--30 remember-me">
                        <div className="col-lg-6">
                            <div className="rbt-checkbox">
                                <input type="checkbox" id="rememberme" name="rememberme" />
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rbt-lost-password text-end">
                                <Link className="rbt-btn-link" href="/forgot-password">
                                    Lost your password?
                                </Link>
                            </div>
                        </div>
                    </div>
                    {errorMessage && <span className="errorMessage">Incorrect User details</span>}
                    <div className="form-submit-group">
                    <button
                            type="submit"
                            className="rbt-btn btn-gradient hover-icon-reverse w-100"
                            style={{ background: 'linear-gradient(#25355c, #25355c)' }}
                        >
                            {isSubmitted ? <div className="spinner-border" role="status" /> : <span className="icon-reverse-wrapper">
                                <span className="btn-text">Log In</span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                </span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                </span>
                            </span>}
                        </button>
                    </div>
                    <div className="auth-footer">
                        <p>Don&apos;t have an account? </p>
                        <Link href="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
