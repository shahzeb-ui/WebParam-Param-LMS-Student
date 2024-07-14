'use client'
import { FormEvent, useState } from "react";

export default function RegionalInformation() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setIsSubmitting(true);
  }

  const [provinceCode, setProvinceCode] = useState('');
  const [statsSAAreaCode, setStatsSAAreaCode] = useState('');
  const [sdpAccreditationNumber, setSdpAccreditationNumber] = useState('');
  const [skillsProgrammeID, setSkillsProgrammeID] = useState('');
  const [learnerEnrolledDate, setLearnerEnrolledDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div
    className="tab-pane fade active show"
    id="profile"
    role="tabpanel"
    aria-labelledby="Personal Information"
  >
    <div className="rbt-dashboard-content-wrapper">
    <form
  onSubmit={handleSubmit}
  className="rbt-profile-row rbt-default-form row row--15"
>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="provinceCode">Province Code</label>
      <input
        type="text"
        name="provinceCode"
        placeholder="Enter Province Code"
        value={provinceCode}
        id="provinceCode"
        onChange={(e) => setProvinceCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="statsSAAreaCode">STATSSA Area Code</label>
      <input
        type="text"
        name="statsSAAreaCode"
        placeholder="Enter STATSSA Area Code"
        value={statsSAAreaCode}
        id="statsSAAreaCode"
        onChange={(e) => setStatsSAAreaCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="sdpAccreditationNumber">SDP Accreditation Number</label>
      <input
        type="text"
        name="sdpAccreditationNumber"
        placeholder="Enter SDP Accreditation Number"
        value={sdpAccreditationNumber}
        id="sdpAccreditationNumber"
        onChange={(e) => setSdpAccreditationNumber(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="skillsProgrammeID">Skills Programme ID</label>
      <input
        type="text"
        name="skillsProgrammeID"
        placeholder="Enter Skills Programme ID"
        value={skillsProgrammeID}
        id="skillsProgrammeID"
        onChange={(e) => setSkillsProgrammeID(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="learnerEnrolledDate">Learner Enrolled Date</label>
      <input
        type="date"
        name="learnerEnrolledDate"
        value={learnerEnrolledDate}
        id="learnerEnrolledDate"
        onChange={(e) => setLearnerEnrolledDate(e.target.value)}
      />
    </div>
  </div>
  <div className="col-12 mt--20">
    <div className="rbt-form-group">
      <button
        className="rbt-btn btn-gradient"
        type='submit'
      >
        {isSubmitting ? <div className="spinner-border text-light" role="status"/>:'Update Info'}
      </button>
    </div>
  </div>
</form>
</div>
</div>
  )
}