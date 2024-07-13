'use client'
import { sendOtp } from '@/actions/auth/auth';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import Link from 'next/link';

export default function SendResetEmail() {
    const [email, setEmail] = useState('');
    const cookies = new Cookies();
    const router = useRouter();

    async function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(email);

        const payload = {
            email,
        }

        const res = await sendOtp(payload);

        if (res) {
            cookies.set('resetEmail', email);
            console.log(res);
            router.push('/forgot-password/otp')
        }
        
        console.log(res);

    }

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <h3>Forgot Password</h3>
            <form onSubmit={handleEmailSubmit} className="rbt-profile-row rbt-default-form row row--15">
                <div className="col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="email">Enter your email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col-12 mt--10">
                    <div className="rbt-form-group" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <button type="submit" className="rbt-btn btn-gradient">
                            Send Reset Email
                        </button>
                        <Link href={'/login'} className="" style={{marginLeft: '50px', color: '#b966e7', textDecoration: 'underline'}}>
                            Back to login
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
