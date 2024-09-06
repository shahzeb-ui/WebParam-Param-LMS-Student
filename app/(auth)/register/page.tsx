'use client';
import './register.scss';
import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { LoginUser, registerUser } from '@/app/api/auth/auth';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import Testimonies from './testimonies';




export default function LoginPage() {
    const [isExploding, setIsExploding] = React.useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState<any>({ email: false, password: false, username: false, phone: false, confirmPassword: false });

    const cookies = new Cookies();
    const router = useRouter();

    
    const hasConstantCourseId = process.env.NEXT_PUBLIC_COURSE_ID??"";
  
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      debugger;
      setIsLoading(true);
    
      const newHasError = {
        email: email === '',
        password: password === '',
        username: username === '',
        phone: phone === '',
        confirmPassword: confirmPassword === '',
      };
  
      setHasError(newHasError);

      if (newHasError.email || newHasError.password || newHasError.username || newHasError.phone || newHasError.confirmPassword) {
        setIsLoading(false);
        return;
      }

      const payload = {
        courseId: hasConstantCourseId??"6669f0ff8759b480859c10a7",
        email:email,
        phoneNumber:phone,
        username:username,
        password:password,
        confirmPassword:confirmPassword
      };

      try {
        const res = await registerUser(payload);
            setIsLoading(false);
            if (res) {
                if (res?.data.message !== "User exists") {
                    setIsExploding(true);
                    cookies.set('userEmail', payload.email);
        
                    if(hasConstantCourseId!=""){
                        cookies.set('courseId', payload.courseId);
                    }
                    
                    setTimeout(() => {
                        router.push('/verify-account');
                        setIsExploding(false);
                    }, 2000);
                } else {
                    setErrorMessage(res?.data?.message)
                }
            }
            
           
        } catch (error: any) {
            setErrorMessage('Network Error please try again');
            setIsLoading(false);
        }
      
      setIsLoading(false);
    }
  
    useEffect(() => {
      if (email !== '' || password !== '' || username !== '' || phone !== '' || confirmPassword !== '') {
        setHasError({ email: false, password: false, username: false, phone: false, confirmPassword: false });
        setErrorMessage('');
      }
    }, [email, password, username, phone, confirmPassword]);

    useEffect(() => {
        if (phone && !phone.startsWith('+27')) {
          setPhone(`+27${phone}`);
        }
      }, [phone]);


    return (
        <div className="register-container">
            <div 
                className='left-container'
                data-aos="zoom-out-right"
                style={{
                    backgroundColor: '#24345C',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)',
                }}
                >
             
                <Testimonies />
            </div>
           <div className="login-inner" data-aos="zoom-out-left">
                <h1>Create an account</h1>
                <p>Start your journey!</p>
                <form className='col-12' onSubmit={handleSubmit}>
                <div>
                    <div className="rbt-form-group mb-5">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email *"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // required
                            className={hasError.email ? 'error' : ''}
                        />
                    </div>
                </div>
                <div>
                    
                    <div className="rbt-form-group mb-5">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Username *"
                            id="username"
                            // required
                            className={hasError.username ? 'error' : ''}
                        />
                    </div>
                </div>
                <div>
                    
                    <div className="rbt-form-group mb-5">
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter Phone Number *"
                            id="phone"
                            // required
                            className={hasError.phone ? 'error' : ''}
                        />
                    </div>
                </div>
                <div>
                    
                    <div className="rbt-form-group mb-5">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password *"
                            id="password"
                            // required
                            className={hasError.password ? 'error' : ''}
                        />
                    </div>
                </div>
                <div>
                    <div className="rbt-form-group mb-5">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter Password *"
                            id="confirmPassword"
                           
                            className={hasError.confirmPassword ? 'error' : ''}
                        />
                    </div>
                </div>
                <div className="mb--30 remember-me">
                        <div>
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input" id="formSwitch1" checked={true} />
                            <label className="form-check-label" htmlFor="formSwitch1" >Accept Terms & Conditions</label>
                        </div>
                        </div>
                    </div>
                
                    {errorMessage && <span className="errorMessage">Incorrect User details</span>}
                    <div className="form-submit-group">
                        <button type="submit" className="btn w-100 text-light position-relative" style={{height:'50px', fontSize:'18px', backgroundColor:'#24345C'}}>
                            {isLoading ? <div className="spinner-grow text-light" role="status" /> : 'Register'}
                            {isExploding &&  
                            <div style={{ position: 'absolute', top: 0, left: 0,right:0, bottom:0, width: '100%', height: '100%', overflow:'hidden' }}>
                            
                          </div>
} 
                        </button>
                    </div>
                    <div className="auth-footer">
                        <p>Already have an account? </p>
                        <Link href="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}