'use client'
import { Inter } from "next/font/google";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
    const cookies = new Cookies();
    const router = useRouter();

    const user = cookies.get('loggedInUser');

    console.log(user)

    if (!user.data) {
        router.push('/login');
    }
    return ( 
        <>
      <div className="col-lg-12" style={{padding: '10px'}}>
        <div className="rbt-dashboard-content-wrapper">
        </div>
        <div className="row g-5">
            <div className="col-lg-3">
            <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                <div className="inner">
                <div className="content-item-content">
                    <div className="rbt-default-sidebar-wrapper">
                    <div className="section-title mb--20">
                        <h6 className="rbt-title-style-2">Welcome, Jone Due</h6>
                    </div>
                    <nav className="mainmenu-nav">
                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                        <li className="nav-item" role="presentation">
                            <Link className="active" href="/dashboard">
                            <i className="feather-home" />
                            <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="" href="/student-profile">
                            <i className="feather-user" />
                            <span>My Profile</span>
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="" href="/enrolled-courses">
                            <i className="feather-book-open" />
                            <span>Enrolled Courses</span>
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="" href="/student/student-wishlist">
                            <i className="feather-bookmark" />
                            <span>Wishlist</span>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="" href="/student/student-reviews">
                            <i className="feather-star" />
                            <span>Reviews</span>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="" href="/student/student-quiz-attempts">
                            <i className="feather-help-circle" />
                            <span>My Quiz Attempts</span>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="" href="/student/student-order-history">
                            <i className="feather-shopping-bag" />
                            <span>Order History</span>
                            </a>
                        </li>
                        </ul>
                    </nav>
                    <div className="section-title mt--40 mb--20">
                        <h6 className="rbt-title-style-2">User</h6>
                    </div>
                    <nav className="mainmenu-nav">
                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                        <li>
                            <a href="/student/student-settings" className="">
                            <i className="feather-settings" />
                            <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="">
                            <i className="feather-log-out" />
                            <span>Logout</span>
                            </a>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {children}
        </div>
    </div>
    </>
    );
  }