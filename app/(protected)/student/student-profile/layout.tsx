'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './layout.scss'

import { usePathname } from 'next/navigation';
export default function Layout({children}: {children: React.ReactNode}) {
    const navArray = [
        { key: 'profile', label: 'Bio' },
        { key: 'democraticLegal', label: 'Demographics' },
        { key: 'ContactInformation', label: 'Contacts' },
        { key: 'RegionalInformation', label: 'Regional' },
        { key: 'EmploymentInformation', label: 'Employment' },
        { key: 'documents', label: 'Documents' }
    ];

    const pathname = usePathname();
    const router = useRouter();

return (
<div className="col-lg-9" style={{width:'100%'}}>
<div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
  <div className="content">
    <div className="section-title">
      <h4 className="rbt-title-style-3">Student Info</h4>
    </div>
    <div className="advance-tab-button mb--30" style={{overflow:'hidden'}}>
       {/* <ul className='navigation-tabs'> */}
       <ul className="nav nav-tabs tab-button-style-2 justify-content-start navigation-tabs"
  id="settinsTab-4"
  role="tablist"
>
         {navArray.map((nav) => (
                <li role="presentation" key={nav.key}>
                <Link
                   className={`tab-button ${pathname == `/student/student-profile/${nav.key}`  ? 'active' : ''}`}
                   id={`${nav.key}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                  href={`/student/student-profile/${nav.key}`}
                  tabIndex={-1}
                  onClick={() => router.push(`/student/student-profile?tab=${nav.key}`)}
                >
                  <span className="title">{nav.label}</span>
                </Link>
              </li>
        ))}
      </ul>
 


      <div
        className="tab-pane fade active show"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      ></div>
      
    </div>
    <div className="tab-content">
      {children}
    </div>
  </div>
</div>
</div>

    )
}