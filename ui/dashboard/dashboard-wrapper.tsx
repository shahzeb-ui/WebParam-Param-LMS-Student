"use client";

import Image from "next/image";
import thootoHeader from "./thoota.jpg"
import "./userProfile.scss";

const InstructorDashboardHeader = () => {
  return (
    <>
    <div className="mb-5">
  <h3 className="mb-2">
    <span style={{ fontWeight: '700' }}>Learning Telecommunication</span>
  </h3>
  <p className="ml-5">
    C3498
  </p>
</div>

      <div className="rbt-dashboard-content-wrapper">
        <div className="height-350 rbt-shadow-box" 
        style={{
          backgroundImage: `url(${thootoHeader.src})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'top'
        }} />
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
              {/* <Image
                width={300}
                height={300}
                src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                alt="Instructor"
              /> */}
            </div>
            <div className="tutor-content">
              {/* <h5 className="title">John Due</h5> */}
              {/* <div className="rbt-review">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <span className="rating-count"> (15 Reviews)</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDashboardHeader;
