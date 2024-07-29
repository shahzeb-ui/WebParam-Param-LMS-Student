'use client'
import { updateEmployeeInformation } from "@/app/api/studentProfile/studentprofile";
import { FormEvent, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { preferredOccupations, sector } from "./data";
import axios from "axios";

export default function EmploymentInformation({student}:any) {
  const cookies = new Cookies();
  const user = cookies.get("loggedInUser");

  const [employmentStatus, setEmploymentStatus] = useState('');
  const [dateOfFisa, setDateOfFisa] = useState('');
  const [sarsTaxNumber, setSarsTaxNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSector, setSelectedSector] = useState('');
  const [preferedOccupation, setPreferedOccupation] = useState('');
  const [codes, setCodes] = useState<any>()

  async function getInputCodes() {
    const res = await axios.get(`https://khumla-development-user-read.azurewebsites.net/api/Student/GetCodes`);

    console.log('codes:', res.data.data);
    setCodes(res.data.data)
  }


  function setStudentContactInformation(student: any) {
    console.log('stu:', student?.data);
    setEmploymentStatus(student?.data?.employmentStatus);
    setDateOfFisa(student?.data?.dateOfFisa);
    setSarsTaxNumber(student?.data?.sarsTaxNumber);
  }

  useEffect(() => {
      setStudentContactInformation(student);
  }, [student]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setIsSubmitting(true);

      const payload = {
        userId: user.data.id||user.data.userId,
        employmentStatus: employmentStatus,
        // dateOfFisa: dateOfFisa,
        taxNumber: sarsTaxNumber,
        sector: selectedSector,
        preferedOccupation: preferedOccupation
      }
  
      const res = updateEmployeeInformation(payload);

      if (res) {
        console.log('response', res);
        setIsSubmitting(false);
      }
      
  }

  useEffect(() => {
    getInputCodes();
  }, [])

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
      <label htmlFor="employmentStatus">Employment Status</label>
        <select
        // placeholder="Enter Employment Status"
        id="employmentStatus"
        value={employmentStatus}
        onChange={(e) => setEmploymentStatus(e.target.value)}
      >
        <option value="">select</option>
        {
         codes && codes[6]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
    </div>
  
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
  <div className="rbt-form-group">
      <label htmlFor="sarsTaxNumber">SARS TAX NUMBER</label>
      <input
        type="text"
        name="sarsTaxNumber"
        placeholder="Enter SARS Tax Number"
        value={sarsTaxNumber}
        id="sarsTaxNumber"
        onChange={(e) => setSarsTaxNumber(e.target.value)}
      />
    </div>
  </div>

  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="dateOfFisa">DATE OF FISA</label>
      <input
        type="date"
        name="dateOfFisa"
        value={dateOfFisa}
        id="dateOfFisa"
        onChange={(e) => setDateOfFisa(e.target.value)}
      />
    </div>
  </div> */}

  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="immigrantStatus">Sector</label>
       <select
          name="sector"
          value={selectedSector}
          id="sector"
          onChange={(e) => setSelectedSector(e.target.value)}
      >
          <option value="">select</option>
          {sector.map((item: any, index: number) => (
              <option key={index} value={item.title} className="text-dark">{item.title}</option>
          ))}
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{ marginBottom: '15px' }}>
        <div className="rbt-form-group">
          <label htmlFor="preferedOccupation">Preferred Occupation</label>
          <select
            name="preferedOccupation"
            value={preferedOccupation}
            id="preferedOccupation"
            onChange={(e) => setPreferedOccupation(e.target.value)}
          >
            <option value="">Select</option>
            {Array.from(new Set(preferredOccupations.map(item => item.sector)))
              .filter(sector => sector === selectedSector || selectedSector === '')
              .map((sector, index) => (
                <optgroup key={index} label={sector}>
                  {preferredOccupations
                    .filter(item => item.sector === sector)
                    .map((item, idx) => (
                      <option key={idx} value={item.title} className="text-dark">
                        {item.title}
                      </option>
                    ))}
                </optgroup>
              ))}
          </select>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="employmentStatus">Referral Person/ Company</label>
      <input
        type="text"
        placeholder="Enter The Name of The Referral "
        id="referalStatus"
        onChange={(e) => setEmploymentStatus(e.target.value)}
      />
    </div>
    </div>
  

  <div className="col-12 mt--20">
    <div className="rbt-form-group">
      <button
         className="rbt-btn btn-gradient"
         type='submit'
         style={{ backgroundColor: '#24345c', backgroundImage: 'none' }}
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