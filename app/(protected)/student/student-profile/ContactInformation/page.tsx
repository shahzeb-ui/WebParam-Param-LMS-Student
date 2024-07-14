'use client'
import { FormEvent, useState } from "react";

export default function ContactInformation() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  const [homeAddress1, setHomeAddress1] = useState('');
  const [postalAddress1, setPostalAddress1] = useState('');
  const [postalAddress2, setPostalAddress2] = useState('');
  const [postalAddress3, setPostalAddress3] = useState('');
  const [learnerHomeAddressPostalCode, setLearnerHomeAddressPostalCode] = useState('');
  const [learnerHomeAddressPhysicalCode, setLearnerHomeAddressPhysicalCode] = useState('');
  const [learnerPhoneNumber, setLearnerPhoneNumber] = useState('');
  const [learnerCellPhoneNumber, setLearnerCellPhoneNumber] = useState('');
  const [learnerFaxNumber, setLearnerFaxNumber] = useState('');
  const [learnerEmailAddress, setLearnerEmailAddress] = useState('');
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
      <label htmlFor="homeAddress1">Home Address 1</label>
      <input
        type="text"
        name="homeAddress1"
        placeholder="Enter Home Address 1"
        value={homeAddress1}
        id="homeAddress1"
        onChange={(e) => setHomeAddress1(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="postalAddress1">Postal Address 1</label>
      <input
        type="text"
        name="postalAddress1"
        placeholder="Enter Postal Address 1"
        value={postalAddress1}
        id="postalAddress1"
        onChange={(e) => setPostalAddress1(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="postalAddress2">Postal Address 2</label>
      <input
        type="text"
        name="postalAddress2"
        placeholder="Enter Postal Address 2"
        value={postalAddress2}
        id="postalAddress2"
        onChange={(e) => setPostalAddress2(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="postalAddress3">Postal Address 3</label>
      <input
        type="text"
        name="postalAddress3"
        placeholder="Enter Postal Address 3"
        value={postalAddress3}
        id="postalAddress3"
        onChange={(e) => setPostalAddress3(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="learnerHomeAddressPostalCode">Learner Home Address Postal Code</label>
      <input
        type="text"
        name="learnerHomeAddressPostalCode"
        placeholder="Enter Learner Home Address Postal Code"
        value={learnerHomeAddressPostalCode}
        id="learnerHomeAddressPostalCode"
        onChange={(e) => setLearnerHomeAddressPostalCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="learnerHomeAddressPhysicalCode">Learner Home Address Physical Code</label>
      <input
        type="text"
        name="learnerHomeAddressPhysicalCode"
        placeholder="Enter Learner Home Address Physical Code"
        value={learnerHomeAddressPhysicalCode}
        id="learnerHomeAddressPhysicalCode"
        onChange={(e) => setLearnerHomeAddressPhysicalCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="learnerPhoneNumber">Learner Phone Number</label>
      <input
        type="text"
        name="learnerPhoneNumber"
        placeholder="Enter Learner Phone Number"
        value={learnerPhoneNumber}
        id="learnerPhoneNumber"
        onChange={(e) => setLearnerPhoneNumber(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="learnerCellPhoneNumber">Learner Cell Phone Number</label>
      <input
        type="text"
        name="learnerCellPhoneNumber"
        placeholder="Enter Learner Cell Phone Number"
        value={learnerCellPhoneNumber}
        id="learnerCellPhoneNumber"
        onChange={(e) => setLearnerCellPhoneNumber(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="learnerFaxNumber">Learner Fax Number</label>
      <input
        type="text"
        name="learnerFaxNumber"
        placeholder="Enter Learner Fax Number"
        value={learnerFaxNumber}
        id="learnerFaxNumber"
        onChange={(e) => setLearnerFaxNumber(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="learnerEmailAddress">Learner Email Address</label>
      <input
        type="email"
        name="learnerEmailAddress"
        placeholder="Enter Learner Email Address"
        value={learnerEmailAddress}
        id="learnerEmailAddress"
        onChange={(e) => setLearnerEmailAddress(e.target.value)}
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