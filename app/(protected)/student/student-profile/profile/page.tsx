'use client';
import { useEffect, useState } from 'react';
import './userProfile.scss';
import { StudentProfile, getStudentProfile } from '@/app/api/studentProfile/studentprofile';
import defaultImage from './defaultPic.jpg';
import coverImageLocal from './cover.png';
import Image from 'next/image';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function Profile({ user, student }: any) {
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
    const [profilePic, setProfilePic] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [id, setId] = useState('');
    const [codes, setCodes] = useState<any>();
    const cookies = new Cookies();

    async function getInputCodes() {
        const res = await axios.get(`https://khumla-development-user-read.azurewebsites.net/api/Student/GetCodes`);
        console.log('codes:', res.data.data);
        setCodes(res.data.data);
    }

    console.log('logged in user in profile and student profile', user, student?.data);
    
    console.log('codes: ', codes)

    useEffect(() => {
        getUserProfile();
        setProvince(student?.data?.country)
        getInputCodes();
    }, []);

    async function getUserProfile() {
        if (!user?.data?.id && !user?.data?.userId) return;
        const res = await getStudentProfile(user.data.id || user.data.userId);

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
            // setProvince(res.data.data.province);
            setPhoneNumber(res.data.data.phoneNumber);
            setProfilePic(res.data.profilePicture);
            setCoverImage(res.data.coverPicture);
            setBio(res.data.data.bio);
            setId(res.data.data.id);

            if (res.data.data.firstName && res.data.data.surname) {
              cookies.set("username", `${res.data.data.firstName} ${res.data.data.surname}`)
            } else {
              cookies.set("username", `${res.data.data.email}`)
            }
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        const payload = {
            userId: user?.data?.id,
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

    const handleProfilePicChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];

            // Preview the selected image
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePic(reader.result as string);
            };
            reader.readAsDataURL(file);

            // Upload the image to the server
            const formData = new FormData();
            formData.append('profilePicture', file);

            try {
                const response = await axios.post('https://your-server-url/api/upload-profile-picture', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Profile picture updated:', response.data);
                getUserProfile();
            } catch (error) {
                console.error('Error uploading profile picture:', error);
            }
        }
    };

    return (
        <div
            className="tab-pane fade active show"
            id="profile"
            role="tabpanel"
            aria-labelledby="Personal Information"
        >
            <div className="rbt-dashboard-content-wrapper">
                <div
                    className="tutor-bg-photo height-245"
                    style={{
                        backgroundImage: coverImage ? `url(${coverImage})` : `url(${coverImageLocal})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="rbt-tutor-information">
                    <div className="rbt-tutor-information-left">
                        <div className="thumbnail rbt-avatars size-lg position-relative">
                            <Image
                                alt="Instructor"
                                loading="lazy"
                                width={300}
                                height={300}
                                decoding="async"
                                data-nimg={1}
                                src={profilePic || defaultImage.src}
                                style={{ color: 'transparent', height: '120px !important' }}
                            />
                            <div className="rbt-edit-photo-inner">
                                <button
                                    className="rbt-edit-photo"
                                    title="Upload Photo"
                                    onClick={() => document.getElementById('profilePicUpload')?.click()}
                                >
                                    <i className="feather-camera" />
                                </button>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfilePicChange}
                                    style={{ display: 'none' }}
                                    id="profilePicUpload"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="rbt-tutor-information-right">
                        <div className="tutor-btn">
                            <a className="rbt-btn btn-sm btn-border color-white radius-round-10">
                                Edit Cover Photo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="rbt-profile-row rbt-default-form row row--15">
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

               
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{ marginTop: '10px' }}>
                    <div className="rbt-form-group">
                        <label htmlFor="date">Date Of Birth</label>
                        <input
                            type="date"
                            name="date"
                            placeholder="01/05/1990"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{ marginTop: '10px' }}>
                    <div className="rbt-form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter city name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{ marginTop: '10px' }}>
                    <div className="filter-select rbt-modern-select">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-100"
                        >
                            <option value="">Select Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="bio">Biography</label>
                        <textarea
                            name="bio"
                            id="bio"
                            cols={30}
                            rows={10}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Enter your biography"
                        />
                    </div>
                </div>
                <div className="col-12">
                    <button
                        className="btn-sm mr--10 hover-icon-reverse w-100"
                        style={{height:'40px', border:'none', backgroundColor:'rgb(36, 52, 92)', borderRadius:'8px  '}}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        <span className="icon-reverse-wrapper">
                            <span className="btn-text">Update Profile</span>
                            <span className="btn-icon">
                                <i className="feather-arrow-right" />
                            </span>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}
