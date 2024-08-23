import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Nav({setIsSidebarOpen, setIsDropdownVisible}:any) {
    const cookies = new Cookies();
    const router = useRouter();

    const user = cookies.get("loggedInUser");
    const name = cookies.get("username");
    const profilePic = cookies.get("profilePic");

    console.log("user:::::  ", user);

    function handleLogOut() {
        cookies.remove("loggedInUser");
        cookies.remove("username");
        cookies.remove("userEmail");
        cookies.remove("resetEmail");
        cookies.remove("profilePic");
        router.push('/login')
      }

      const userMenuLinks = [
        {
          href: "/student/dashboard",
          iconClass: "feather-home",
          label: "My Dashboard",
        },
        {
          href: "/student/enrolled-courses",
          iconClass: "feather-shopping-bag",
          label: "Enrolled Courses",
        },
        {
          href: "/student/notifications",
          iconClass: "feather-volume-2",
          label: "Notifications",
        },
        {   
            href: "/student/assignments",
            iconClass: "feather-file-text",
            label: "My Assignments",
        },
        {
            href:'/student/logbook',
            iconClass:'feather-book-open',
            label:'My Logbook'
        },
        {
            href: "/",
            iconClass: "feather-log-out",
            label: "Log Out",
        },
       
      ];

      const handleLinkClick = (link:string) => {
        setIsSidebarOpen(false);
        setIsDropdownVisible(false);
        router.push(link);
        window.scrollTo({
          top: 600,
          behavior: 'smooth'
        });
      }


    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, x:100, scale: 0.8 }}
            animate={{ opacity: 1, x:0,scale: 1 }}
            exit={{ opacity: 0,x:100, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="rbt-user-menu-list-wrapper nav-summary p-3 bg-light">
            <div className="inner">
                <div className="rbt-admin-profile">
                <div className="admin-thumbnail">
                    <Image
                    alt="User Images"
                    loading="lazy"
                    width={43}
                    height={43}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src={`${profilePic}`||`https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg`}
                    />
                </div>
                <div className="admin-info">
                    <span className="name" style={{fontSize:'12px',marginBottom:'0'}}>{name??user?.data?.email}</span>
                    <Link
                    className="rbt-btn-link color-primary"
                    href="/student/student-profile"
                    >
                    View Profile
                    </Link>
                </div>
                </div>
                <ul className="user-list-wrapper">
                {userMenuLinks.map((link, index) => (
                    <li key={index}>
                    <Link href={link.href} onClick={() => handleLinkClick(link.href)}>
                        <i className={link.iconClass} />
                        <span>{link.label}</span>
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            </motion.div>
        </AnimatePresence>
    )
}