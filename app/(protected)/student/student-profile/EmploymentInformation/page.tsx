'use client'
import { updateEmployeeInformation } from "@/app/api/studentProfile/studentprofile";
import { FormEvent, useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function EmploymentInformation({student}:any) {
  const cookies = new Cookies();
  const user = cookies.get("loggedInUser");
 

  const [employmentStatus, setEmploymentStatus] = useState('');
  const [dateOfFisa, setDateOfFisa] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  function setStudentContactInformation(student: any) {
    console.log('stu:', student?.data);
    setEmploymentStatus(student?.data?.employmentStatus);
    setDateOfFisa(student?.data?.dateOfFisa);
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
        dateOfFisa: dateOfFisa
      }
  
      const res = updateEmployeeInformation(payload);

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
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="rbt-form-group">
      <label htmlFor="employmentStatus">Employment Status</label>
      <input
        type="text"
        name="employmentStatus"
        placeholder="Enter Employment Status"
        value={employmentStatus}
        id="employmentStatus"
        onChange={(e) => setEmploymentStatus(e.target.value)}
      />
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
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
  </div>
  <div className="col-12 mt--20">
    <div className="rbt-form-group">
      <button
         className="rbt-btn btn-gradient"
         type='submit'
         style={{ backgroundColor: '#000080', backgroundImage: 'none' }}
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