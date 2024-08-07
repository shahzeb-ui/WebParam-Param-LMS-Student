"use client";

import thootoHeader from "./boundlessCover.png"
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
          backgroundPosition:'center'
        }} />
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
            </div>
            <div className="tutor-content">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDashboardHeader;
