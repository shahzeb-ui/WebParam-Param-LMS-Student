'use client'
import { useEffect, Suspense } from 'react';
import Documents from './documents/page';
import EmploymentInformation from './EmploymentInformation/page';
import RegionalInformation from './RegionalInformation/page';
import DemocraticLegal from './democraticLegal/page';
import ContactInformation from './ContactInformation/page';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import Profile from './profile/page';
import { useSearchParams } from 'next/navigation';

function UserProfileContent() {
    const cookies = new Cookies();
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'profile';
    const user = cookies.get('loggedInUser');
    console.log('user:', user);
    const router = useRouter();

    useEffect(() => {
        if (!tab) {
            router.push(`/student/student-profile?tab=profile`);
        }
    }, [tab, router]);

    const renderComponent = (tab: string | null) => {
        switch (tab) {
            case 'profile':
                return <Profile />;
            case 'democraticLegal':
                return <DemocraticLegal />;
            case 'ContactInformation':
                return <ContactInformation />;
            case 'RegionalInformation':
                return <RegionalInformation />;
            case 'EmploymentInformation':
                return <EmploymentInformation />;
            case 'documents':
                return <Documents />;
            default:
                return <Profile />;
        }
    };

    return renderComponent(tab);
}

export default function UserProfile() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UserProfileContent />
        </Suspense>
    );
}
