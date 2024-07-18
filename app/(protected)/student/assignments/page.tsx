'use client'
import CompletedAssignment from '@/ui/assignments/completed';
import './assignments.scss';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import ActiveAssignment from '@/ui/assignments/active';
import UpcomingAssignment from '@/ui/assignments/upcoming';
import { useEffect } from 'react';
import { Suspense } from 'react';


function Assignments() {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const router = useRouter();
    
    return (
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
  <div className="content">
    <div className="section-title">
      <h4 className="rbt-title-style-3">Assignments</h4>
    </div>
    <div className="rbt-dashboard-filter-wrapper">
 
    <div className="col-lg-10 offset-lg-1" >
    <ul className="nav nav-tabs tab-button-style-2 justify-content-start nav-assignments" id="myTab-4" role="tablist">
        <li role="presentation" onClick={() => router.push('/student/assignments?tab=upcoming')}>
            <a className="tab-button active" id="home-tab-4" data-bs-toggle="tab" data-bs-target="#home-4" role="tab" aria-controls="home-4" aria-selected="true" href="/student/student-enrolled-course#">
                <span className="title">Upcoming Assignments</span>
            </a>
        </li>
        <li role="presentation" onClick={() => router.push('/student/assignments?tab=active')}>
            <a className="tab-button" id="profile-tab-4" data-bs-toggle="tab" data-bs-target="#profile-4" role="tab" aria-controls="profile-4" aria-selected="false" href="/student/student-enrolled-course#">
                <span className="title">Active Assignments</span>
            </a>
        </li>
        <li role="presentation" onClick={() => router.push('/student/assignments?tab=completed')}>
            <a className="tab-button" id="contact-tab-4" data-bs-toggle="tab" data-bs-target="#contact-4" role="tab" aria-controls="contact-4" aria-selected="false" href="/student/student-enrolled-course#">
                <span className="title">Completed Assignments</span>
            </a>
        </li>
    </ul>
    </div>

    </div>
    <hr className="mt--30" />
    <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
      {tab === 'completed' && <CompletedAssignment />}
      {tab === 'active' && <ActiveAssignment />}
      {tab === 'upcoming' && <UpcomingAssignment />}
    </div>
  </div>
    </div>
    );
}

export default async function AssignmentsPage() {
    const router = useRouter();
  

    useEffect(() => {
            router.push('/student/assignments?tab=active');
    }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Assignments />
    </Suspense>
  );
}