'use client'
import { useEffect, useState } from 'react';
import './userProfile.scss'
import { StudentProfile, getStudentProfile } from '@/app/api/studentProfile/studentprofile';
import Cookies from 'universal-cookie';
import Image from 'next/image';

export default function Profile() {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bio, setBio] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [id, setId] = useState('');

    const cookies = new Cookies();
    const user = cookies.get('loggedInUser');

    useEffect(() => {
        getUserProfile();
    }, []);
    
    const getUserProfile = async () => {
        if (!user?.data?.userId) return;
        const res = await getStudentProfile(user.data.userId);

        console.log('res', res);

        const dob = res?.data.data.dateOfBirth.split('T')[0];
        if (res?.data) {
            setFirstName(res.data.data.firstName);
            setSurname(res.data.data.surname);
            setIdNumber(res.data.data.idNumber);
            setEmail(res.data.data.email);
            setGender(res.data.data.gender);
            setDateOfBirth(dob);
            setCountry(res.data.data.country);
            setCity(res.data.data.city);
            setProvince(res.data.data.province);
            setPhoneNumber(res.data.data.phoneNumber);
            setBio(res.data.data.bio);
            setId(res.data.data.id);
        }
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setIsSubmitting(true);
        const payload = {
            userId: user?.data?.userId,
            firstName,
            surname,
            email,
            idNumber,
            gender,
            dateOfBirth,
            country,
            city,
            province,
            phoneNumber,
            bio,
            id: id
        };

        const res = await StudentProfile(payload);
        console.log(res);
        getUserProfile();
        setIsSubmitting(false);
    };

  return <div
  className="tab-pane fade active show"
  id="profile"
  role="tabpanel"
  aria-labelledby="Personal Information"
>
  <div className="rbt-dashboard-content-wrapper" >
    <div className="tutor-bg-photo height-245" />
    <div className="rbt-tutor-information" >
      <div className="rbt-tutor-information-left">
        <div className="thumbnail rbt-avatars size-lg position-relative">
          <Image
            alt="Instructor"
            loading="lazy"
            width={300}
            height={300}
            decoding="async"
            data-nimg={1}
        
            src="https://www.aihr.com/wp-content/uploads/learning-vs-training-cover.png"
            style={{ color: "transparent", height: '120px !important' }}
          />
          <div className="rbt-edit-photo-inner">
            <button className="rbt-edit-photo" title="Upload Photo">
              <i className="feather-camera" />
            </button>
          </div>
        </div>
      </div>
      <div className="rbt-tutor-information-right">
        <div className="tutor-btn">
          <a
            className="rbt-btn btn-sm btn-border color-white radius-round-10"
            href="/instructor/instructor-settings#"
          >
            Edit Cover Photo
          </a>
        </div>
      </div>
    </div>
  </div>
  <form
     onSubmit={handleSubmit}
    className="rbt-profile-row rbt-default-form row row--15"
  >
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="rbt-form-group">
        <label htmlFor="firstname">First Name</label>
        <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={firstName}
               id="firstname"
              onChange={(e) => setFirstName(e.target.value)}
          />
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="rbt-form-group">
        <label htmlFor="lastname">Last Name</label>
        <input
              type="text"
              name="surname"
              placeholder="Enter Surname"
              value={surname}
              id="lastname"
              onChange={(e) => setSurname(e.target.value)}
          />
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="rbt-form-group">
      <label htmlFor="idNumber">ID number</label>
       <input
          type="text"
          name="idNumber"
          placeholder="Enter your Id number or passport"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
      />
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="rbt-form-group">
      <label htmlFor="email">Email Address</label>
      <input
          type="email"
          name="email"
          placeholder="Enter your Id number or passport"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
      />
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginTop: '10px'}}>
      <div className="filter-select rbt-modern-select">
      <label htmlFor="gender">Gender</label>
        <select 
          id="gender"  
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)} 
          className="w-100">
              <option value="">Select Gender</option>
               <option value="female">Female</option>
               <option value="male">Male</option>
               <option value="notSay">Rather not say</option>
        </select>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginTop: '10px'}}>
      <div className="filter-select rbt-modern-select">
      <label htmlFor="country">Country/Region</label>
      <select 
          id="country"  
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)} 
          className="w-100">
              <option value="">Select Country</option>
               <option value="southAfrica">South Africa</option>
               <option value="lesotho">Lesotho</option>
               <option value="zimbabwe">Zimbabwe</option>
        </select>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginTop: '10px'}}>
      <div className="filter-select rbt-modern-select">
      <label htmlFor="city">City</label>
      <select 
           name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-100">
              <option value="">Select City</option>
               <option value="johannesburg">Johannesburg</option>
               <option value="durban">Durban</option>
               <option value="nelspruit">Nelspruit</option>
               <option value="capeTown">Cape Town</option>
        </select>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginTop: '10px'}}>
      <div className="filter-select rbt-modern-select">
      <label htmlFor="country">Province</label>
      <select 
          id="country"  
          name="country"
          value={province}
          onChange={(e) => setProvince(e.target.value)} 
          className="w-100">
              <option value="">Select Province</option>
               <option value="gauteng">Gauteng</option>
               <option value="kzn">KZN</option>
               <option value="mpumalanga">Mpumalanga</option>
        </select>
      </div>
    </div>
  
    
    <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginTop: '10px'}}>
      <div className="rbt-form-group">
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
      />
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{marginTop: '10px'}}>
      <div className="rbt-form-group">
      <label htmlFor="mobileNumber">Mobile Number</label>
      <input
          type="tel"
          name="mobileNumber"
          placeholder="Enter your mobile number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
      />
      </div>
    </div>
    
    <div className="col-12">
      <div className="rbt-form-group">
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          cols={20}
          rows={5}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder='enter a description about yourself'
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
</div>;
}