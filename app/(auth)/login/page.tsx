'use client';
import './login.scss';
import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import imageCover from "./loginImage.png";
import { LoginUser } from '@/app/api/auth/auth';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import { isMobile } from 'react-device-detect';



export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState<any>({ email: false, password: false });

    const cookies = new Cookies();
    const router = useRouter();
  
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsLoading(true);
    
      const newHasError = {
        email: email === '',
        password: password === '',
      };
  
      setHasError(newHasError);

      if (newHasError.email || newHasError.password) {
        setIsLoading(false);
        return;
      }

      const payload = {
        email,
        password
      };

      try {
        const res = await LoginUser(payload);
            setIsLoading(false);
            
            if (res == undefined) {
                setErrorMessage('Incorrect User details');
                return;
            }
            
            if (res) {
                
                cookies.set("loggedInUser", res.data);
                router.push('/student/student-profile');
            }
        } catch (error: any) {
            setErrorMessage('Network Error please try again');
            setIsLoading(false);
        }
      

      console.log('Form submitted successfully');
      setIsLoading(false);
    }
  
    useEffect(() => {
      if (email !== '' || password !== '') {
        setHasError({ email: false, password: false });
        setErrorMessage('')
      }
    }, [email, password]);

    return (
        <div className="login left-container"
                data-aos="zoom-out-right"
                style={{
                    backgroundImage: `url(${imageCover.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)',
                }}
                >
            {/* {isMobile&&
            <div className="rbt-shadow-box" 
            style={{
                width: "100%",
                height: "150px",
            backgroundImage: `url(${imageCover.src})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            backgroundPosition:'top'
            
            }} />
            }

            {!isMobile&&
                <div className=" rbt-shadow-box" 
                style={{
                backgroundImage: `url(${imageCover.src})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                width: "100%",
                    height: "150px"
                
                }} />
            } */}

            <div className="rbt-contact-form  max-width-auto" style={{marginTop:"10%"}}>
                <h1>Log in to your account</h1>
                <p>Welcome back! Please enter your details</p>
                <form className="max-width-auto" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email *" name="email" />
                        <span className="focus-border" />
                    </div>
           
                <div>
                    <div className="rbt-form-group mb-5">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            id="password"
                            // required
                            className={hasError.password ? 'error' : ''}
                        />
                    </div>
                    <div className="row mb--30">
                        <div className="col-lg-6">
                            <div className="rbt-checkbox">
                                <input type="checkbox" id="rememberme" name="rememberme" />
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                        </div>
                        </div>
                        <div>
                            <div className="">
                                <Link className="rbt-btn-link" href="/forgot-password">
                                    Lost your password?
                                </Link>
                            </div>
                        </div>
                    </div>
                    {errorMessage && <span className="errorMessage">Incorrect User details</span>}
                    <div className="form-submit-group">
                        <button type="submit" className="btn w-100 text-light" style={{height:'50px', fontSize:'18px', backgroundColor:'#24345C'}}>
                            {isLoading ? <div className="spinner-grow text-light" role="status" /> : 'Sign in'}
                        </button>
                    </div>
                    <div className="auth-footer">
                        <p>Don&apos;t have an account? </p>
                        <Link href="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}