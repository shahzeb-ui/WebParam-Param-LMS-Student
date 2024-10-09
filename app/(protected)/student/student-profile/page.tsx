'use client'
import { useEffect, Suspense, useState } from 'react';
import Documents from './documents/page';
import EmploymentInformation from './EmploymentInformation/page';
import DemocraticLegal from './democraticLegal/page';
import ContactInformation from './ContactInformation/page';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import Profile from './profile/page';
import { useSearchParams } from 'next/navigation';
import { getStudentData } from '@/app/api/studentProfile/studentprofile';
import AOS from 'aos';
import 'aos/dist/aos.css';

function UserProfileContent() {
    return (
        <div data-aos="fade-left">
            <h4 className="rbt-title-style-3">Student Info</h4>
        </div>
    );
}

export default function UserProfile() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UserProfileContent />
        </Suspense>
    );
}