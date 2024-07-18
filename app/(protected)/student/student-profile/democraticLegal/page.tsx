'use client'
import { updateDemographicsInformation } from "@/app/api/studentProfile/studentprofile";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function DemocraticLegal({student}:any) {
  const cookies = new Cookies();
  const user = cookies.get("loggedInUser");

  const [equityCode, setEquityCode] = useState('');
  const [nationalityCode, setNationalityCode] = useState('');
  const [homeLanguageCode, setHomeLanguageCode] = useState('');
  const [immigrantStatus, setImmigrantStatus] = useState('');
  const [popiActAgree, setPopiActAgree] = useState('');
  const [popiActDate, setPopiActDate] = useState('');
  const [citizenStatusCode, setCitizenStatusCode] = useState('');
  const [socioeconomicCode, setSocioeconomicCode] = useState('');
  const [disabilityCode, setDisabilityCode] = useState('');
  const [disabilityRating, setDisabilityRating] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [codes, setCodes] = useState<any>()

  async function getInputCodes() {
    const res = await axios.get(`https://khumla-development-user-read.azurewebsites.net/api/Student/GetCodes`);

    console.log('codes:', res.data.data);
    setCodes(res.data.data)
  }

  function setStudentContactInformation(student: any) {
    console.log('stu:', student?.data);
    setEquityCode(student?.data?.equityCode);
    setNationalityCode(student?.data?.nationalityCode);
    setHomeLanguageCode(student?.data?.homeLanguageCode);
    setImmigrantStatus(student?.data?.immigrantStatus);
    setPopiActAgree(student?.data?.popiActAgree);
    setPopiActDate(student?.data?.popiActDate);
    setCitizenStatusCode(student?.data?.citizenStatusCode);
    setSocioeconomicCode(student?.data?.socioeconomicCode);
    setDisabilityCode(student?.data?.disabilityCode);
    setDisabilityRating(student?.data?.disabilityRating);
  }

  useEffect(() => {
      setStudentContactInformation(student);
    }, [student]);
    
  useEffect(() => {
    getInputCodes();
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    debugger;
    setIsSubmitting(true);

      const payload = {
        userId: user.data.id||user.data.userId,
        equityCode: equityCode,
        nationalityCode: nationalityCode,
        homeLanguageCode: homeLanguageCode,
        immigrantStatus: immigrantStatus,
        popiActAgree: popiActAgree,
        popiActDate: popiActDate,
        citizenStatusCode: citizenStatusCode,
        socioeconomicCode: socioeconomicCode,
        disabilityCode: disabilityCode,
        disabilityRating: disabilityRating
      
      }
  
      const res = updateDemographicsInformation(payload);

      if (res) {
        console.log('response', res);
        setIsSubmitting(false);
      }
  }


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
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="equityCode">Equity Code</label>
      <select 
      name="equityCode" 
      value={equityCode} 
      id=""
      onChange={(e) => setEquityCode(e.target.value)}>
        <option value="">select</option>
        {
         codes && codes[1]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
     
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="nationalityCode">Nationality Code</label>
      <select
        name="nationalityCode"
        value={nationalityCode}
        id="nationalityCode"
        onChange={(e) => setNationalityCode(e.target.value)}
      >
        <option value="">select</option>
        {
         codes && codes[2]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="homeLanguageCode">Home Language Code</label>
        <select
        name="homeLanguageCode"
        value={homeLanguageCode}
        id="homeLanguageCode"
        onChange={(e) => setHomeLanguageCode(e.target.value)}
      >
        <option value="">select</option>
        {
         codes && codes[3]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="citizenStatusCode">Citizen Status Code</label>
        <select
        name="citizenStatusCode"
        value={citizenStatusCode}
        id="citizenStatusCode"
        onChange={(e) => setCitizenStatusCode(e.target.value)}
      >
        <option value="">select</option>
        {
         codes && codes[5]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="socioeconomicCode">Socioeconomic Code</label>
        <select
        name="socioeconomicCode"
        value={socioeconomicCode}
        id="socioeconomicCode"
        onChange={(e) => setSocioeconomicCode(e.target.value)}
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
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="disabilityCode">Disability Code</label>
        <select
        name="disabilityCode"
        value={disabilityCode}
        id="disabilityCode"
        onChange={(e) => setDisabilityCode(e.target.value)}
      >
        <option value="">select</option>
        {
         codes && codes[7]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="disabilityRating">Disability Rating</label>
        <select
        name="disabilityRating"
        value={disabilityRating}
        id="disabilityRating"
        onChange={(e) => setDisabilityRating(e.target.value)}
      >
        <option value="">select</option>
        {
         codes && codes[8]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="immigrantStatus">Immigrant Status</label>
        <select
        name="immigrantStatus"
        value={immigrantStatus}
        id="immigrantStatus"
        onChange={(e) => setImmigrantStatus(e.target.value)}
      >
        <option value="">select</option>
        {
         codes && codes[9]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
    <div className="rbt-form-group">
      <label htmlFor="popiActAgree">POPI Act Agreement</label>
        <select
        name="popiActAgree"
        value={popiActAgree}
        id="popiActAgree"
        onChange={(e) => setPopiActAgree(e.target.value)}
      >
        <option value="">select</option>
        {
         codes && codes[12]?.codes?.map((item:any, index:number) => (
            <option key={index} value={`${item.code}`} className="text-dark">{item.description}</option>
          ))
        }
      </select>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom:'15px'}}>
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