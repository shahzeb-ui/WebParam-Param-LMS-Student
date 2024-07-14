'use client'
import { FormEvent, useState } from "react";

export default function DemocraticLegal() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  const [equityCode, setEquityCode] = useState('');
  const [nationalityCode, setNationalityCode] = useState('');
  const [homeLanguageCode, setHomeLanguageCode] = useState('');
  const [immigrantStatus, setImmigrantStatus] = useState('');
  const [popiActAgree, setPopiActAgree] = useState(false);
  const [popiActDate, setPopiActDate] = useState('');
  const [citizenStatusCode, setCitizenStatusCode] = useState('');
  const [socioeconomicCode, setSocioeconomicCode] = useState('');
  const [disabilityCode, setDisabilityCode] = useState('');
  const [disabilityRating, setDisabilityRating] = useState('');
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
      <label htmlFor="equityCode">Equity Code</label>
      <input
        type="text"
        name="equityCode"
        placeholder="Enter Equity Code"
        value={equityCode}
        id="equityCode"
        onChange={(e) => setEquityCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="nationalityCode">Nationality Code</label>
      <input
        type="text"
        name="nationalityCode"
        placeholder="Enter Nationality Code"
        value={nationalityCode}
        id="nationalityCode"
        onChange={(e) => setNationalityCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="homeLanguageCode">Home Language Code</label>
      <input
        type="text"
        name="homeLanguageCode"
        placeholder="Enter Home Language Code"
        value={homeLanguageCode}
        id="homeLanguageCode"
        onChange={(e) => setHomeLanguageCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="citizenStatusCode">Citizen Status Code</label>
      <input
        type="text"
        name="citizenStatusCode"
        placeholder="Enter Citizen Status Code"
        value={citizenStatusCode}
        id="citizenStatusCode"
        onChange={(e) => setCitizenStatusCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="socioeconomicCode">Socioeconomic Code</label>
      <input
        type="text"
        name="socioeconomicCode"
        placeholder="Enter Socioeconomic Code"
        value={socioeconomicCode}
        id="socioeconomicCode"
        onChange={(e) => setSocioeconomicCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="disabilityCode">Disability Code</label>
      <input
        type="text"
        name="disabilityCode"
        placeholder="Enter Disability Code"
        value={disabilityCode}
        id="disabilityCode"
        onChange={(e) => setDisabilityCode(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="disabilityRating">Disability Rating</label>
      <input
        type="text"
        name="disabilityRating"
        placeholder="Enter Disability Rating"
        value={disabilityRating}
        id="disabilityRating"
        onChange={(e) => setDisabilityRating(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="immigrantStatus">Immigrant Status</label>
      <input
        type="text"
        name="immigrantStatus"
        placeholder="Enter Immigrant Status"
        value={immigrantStatus}
        id="immigrantStatus"
        onChange={(e) => setImmigrantStatus(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="popiActAgree">POPI Act Agreement</label>
      <input
        type="checkbox"
        name="popiActAgree"
        checked={popiActAgree}
        id="popiActAgree"
        onChange={(e) => setPopiActAgree(e.target.checked)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="popiActDate">POPI Act Date</label>
      <input
        type="date"
        name="popiActDate"
        value={popiActDate}
        id="popiActDate"
        onChange={(e) => setPopiActDate(e.target.value)}
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