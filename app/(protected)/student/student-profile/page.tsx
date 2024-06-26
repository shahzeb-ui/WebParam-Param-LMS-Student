'use client'
import { useEffect, useState } from 'react';
import './userProfile.scss'
import { StudentProfile, getStudentProfile } from '@/app/api/studentProfile/studentprofile';
import Cookies from 'universal-cookie';
import UploadDocuments from './UploadDocuments';

export default function UserProfile() {
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
    const cookies = new Cookies();

    const user = cookies.get('loggedInUser');
    console.log('user:', user);

    useEffect(() => {
        setEmail(user.data.email)
        getUserProfile();
    }, [getStudentProfile])

    const getUserProfile = async () => {
        const res = await getStudentProfile(user.data.id);

        console.log('res', res)

        if (res?.data) {
            setFirstName(res?.data.data.firstName);
            setSurname(res.data.data.surname);
            setIdNumber(res.data.data.idNumber);
            setEmail(res.data.data.email);
            setGender(res.data.data.gender);
            setDateOfBirth(res.data.data.dateOfBirth);
            setCountry(res.data.data.country);
            setCity(res.data.data.city);
            setProvince(res.data.data.province);
            setPhoneNumber(res.data.data.phoneNumber);
        }
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const payload = {
            userId: user.data.userId,
            firstName,
            surname,
            email,
            idNumber,
            gender,
            dateOfBirth,
            country,
            city,
            province,
            phoneNumber
        };

        const res = await StudentProfile(payload);
        console.log(res);

    };

    return (
        <div className="col-lg-9 userProfile">
        <h3>
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1376_2263)">
<g clip-path="url(#clip1_1376_2263)">
<path d="M18.6571 9.24697C18.7671 8.91697 19.2331 8.91697 19.3431 9.24697L19.9881 11.184C20.13 11.6098 20.3692 11.9966 20.6867 12.3139C21.0042 12.6312 21.3912 12.8702 21.8171 13.012L23.7531 13.657C24.0831 13.767 24.0831 14.233 23.7531 14.343L21.8161 14.988C21.3903 15.1299 21.0034 15.3691 20.6861 15.6866C20.3688 16.0041 20.1298 16.3911 19.9881 16.817L19.3431 18.753C19.3193 18.8252 19.2734 18.8882 19.2118 18.9328C19.1502 18.9774 19.0761 19.0014 19.0001 19.0014C18.924 19.0014 18.8499 18.9774 18.7883 18.9328C18.7267 18.8882 18.6808 18.8252 18.6571 18.753L18.0121 16.816C17.8702 16.3903 17.6311 16.0035 17.3138 15.6862C16.9966 15.3689 16.6097 15.1298 16.1841 14.988L14.2471 14.343C14.1748 14.3193 14.1119 14.2733 14.0673 14.2117C14.0226 14.1501 13.9986 14.076 13.9986 14C13.9986 13.9239 14.0226 13.8498 14.0673 13.7882C14.1119 13.7266 14.1748 13.6807 14.2471 13.657L16.1841 13.012C16.6097 12.8701 16.9966 12.631 17.3138 12.3138C17.6311 11.9965 17.8702 11.6097 18.0121 11.184L18.6571 9.24697ZM14.7941 4.14797C14.8084 4.10466 14.836 4.06698 14.873 4.04027C14.91 4.01356 14.9544 3.99918 15.0001 3.99918C15.0457 3.99918 15.0901 4.01356 15.1271 4.04027C15.1641 4.06698 15.1917 4.10466 15.2061 4.14797L15.5931 5.30997C15.7661 5.82797 16.1721 6.23397 16.6901 6.40697L17.8521 6.79397C17.8954 6.80831 17.933 6.83593 17.9598 6.87291C17.9865 6.90989 18.0008 6.95435 18.0008 6.99997C18.0008 7.04559 17.9865 7.09004 17.9598 7.12702C17.933 7.164 17.8954 7.19163 17.8521 7.20597L16.6901 7.59297C16.4346 7.67808 16.2024 7.82153 16.012 8.01194C15.8216 8.20235 15.6782 8.43449 15.5931 8.68997L15.2061 9.85197C15.1917 9.89527 15.1641 9.93296 15.1271 9.95967C15.0901 9.98638 15.0457 10.0008 15.0001 10.0008C14.9544 10.0008 14.91 9.98638 14.873 9.95967C14.836 9.93296 14.8084 9.89527 14.7941 9.85197L14.4071 8.68997C14.3219 8.43449 14.1785 8.20235 13.9881 8.01194C13.7977 7.82153 13.5655 7.67808 13.3101 7.59297L12.1481 7.20597C12.1047 7.19163 12.0671 7.164 12.0404 7.12702C12.0136 7.09004 11.9993 7.04559 11.9993 6.99997C11.9993 6.95435 12.0136 6.90989 12.0404 6.87291C12.0671 6.83593 12.1047 6.80831 12.1481 6.79397L13.3101 6.40697C13.5655 6.32185 13.7977 6.1784 13.9881 5.98799C14.1785 5.79758 14.3219 5.56544 14.4071 5.30997L14.7941 4.14797ZM21.8631 3.09897C21.8729 3.07049 21.8914 3.0458 21.916 3.02833C21.9405 3.01085 21.9699 3.00146 22.0001 3.00146C22.0302 3.00146 22.0596 3.01085 22.0841 3.02833C22.1087 3.0458 22.1272 3.07049 22.1371 3.09897L22.3951 3.87297C22.5101 4.21897 22.7811 4.48997 23.1271 4.60497L23.9011 4.86297C23.9295 4.87284 23.9542 4.89134 23.9717 4.91589C23.9892 4.94044 23.9986 4.96983 23.9986 4.99997C23.9986 5.0301 23.9892 5.05949 23.9717 5.08404C23.9542 5.1086 23.9295 5.1271 23.9011 5.13697L23.1271 5.39497C22.9565 5.45169 22.8016 5.54738 22.6745 5.67445C22.5475 5.80152 22.4518 5.95646 22.3951 6.12697L22.1371 6.90097C22.1272 6.92944 22.1087 6.95413 22.0841 6.97161C22.0596 6.98908 22.0302 6.99847 22.0001 6.99847C21.9699 6.99847 21.9405 6.98908 21.916 6.97161C21.8914 6.95413 21.8729 6.92944 21.8631 6.90097L21.6051 6.12697C21.5483 5.95646 21.4526 5.80152 21.3256 5.67445C21.1985 5.54738 21.0436 5.45169 20.8731 5.39497L20.1001 5.13697C20.0716 5.1271 20.0469 5.1086 20.0294 5.08404C20.0119 5.05949 20.0026 5.0301 20.0026 4.99997C20.0026 4.96983 20.0119 4.94044 20.0294 4.91589C20.0469 4.89134 20.0716 4.87284 20.1001 4.86297L20.8741 4.60497C21.2201 4.48997 21.4911 4.21897 21.6061 3.87297L21.8631 3.09997V3.09897Z" fill="#FFD643"/>
</g>
</g>
<defs>
<clipPath id="clip0_1376_2263">
<rect width="26.8117" height="22" fill="white"/>
</clipPath>
<clipPath id="clip1_1376_2263">
<rect width="16" height="16" fill="white" transform="translate(11 3)"/>
</clipPath>
</defs>
            </svg>
            Tell Us About Yourself
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1376_2263)">
            <g clip-path="url(#clip1_1376_2263)">
            <path d="M18.6571 9.24697C18.7671 8.91697 19.2331 8.91697 19.3431 9.24697L19.9881 11.184C20.13 11.6098 20.3692 11.9966 20.6867 12.3139C21.0042 12.6312 21.3912 12.8702 21.8171 13.012L23.7531 13.657C24.0831 13.767 24.0831 14.233 23.7531 14.343L21.8161 14.988C21.3903 15.1299 21.0034 15.3691 20.6861 15.6866C20.3688 16.0041 20.1298 16.3911 19.9881 16.817L19.3431 18.753C19.3193 18.8252 19.2734 18.8882 19.2118 18.9328C19.1502 18.9774 19.0761 19.0014 19.0001 19.0014C18.924 19.0014 18.8499 18.9774 18.7883 18.9328C18.7267 18.8882 18.6808 18.8252 18.6571 18.753L18.0121 16.816C17.8702 16.3903 17.6311 16.0035 17.3138 15.6862C16.9966 15.3689 16.6097 15.1298 16.1841 14.988L14.2471 14.343C14.1748 14.3193 14.1119 14.2733 14.0673 14.2117C14.0226 14.1501 13.9986 14.076 13.9986 14C13.9986 13.9239 14.0226 13.8498 14.0673 13.7882C14.1119 13.7266 14.1748 13.6807 14.2471 13.657L16.1841 13.012C16.6097 12.8701 16.9966 12.631 17.3138 12.3138C17.6311 11.9965 17.8702 11.6097 18.0121 11.184L18.6571 9.24697ZM14.7941 4.14797C14.8084 4.10466 14.836 4.06698 14.873 4.04027C14.91 4.01356 14.9544 3.99918 15.0001 3.99918C15.0457 3.99918 15.0901 4.01356 15.1271 4.04027C15.1641 4.06698 15.1917 4.10466 15.2061 4.14797L15.5931 5.30997C15.7661 5.82797 16.1721 6.23397 16.6901 6.40697L17.8521 6.79397C17.8954 6.80831 17.933 6.83593 17.9598 6.87291C17.9865 6.90989 18.0008 6.95435 18.0008 6.99997C18.0008 7.04559 17.9865 7.09004 17.9598 7.12702C17.933 7.164 17.8954 7.19163 17.8521 7.20597L16.6901 7.59297C16.4346 7.67808 16.2024 7.82153 16.012 8.01194C15.8216 8.20235 15.6782 8.43449 15.5931 8.68997L15.2061 9.85197C15.1917 9.89527 15.1641 9.93296 15.1271 9.95967C15.0901 9.98638 15.0457 10.0008 15.0001 10.0008C14.9544 10.0008 14.91 9.98638 14.873 9.95967C14.836 9.93296 14.8084 9.89527 14.7941 9.85197L14.4071 8.68997C14.3219 8.43449 14.1785 8.20235 13.9881 8.01194C13.7977 7.82153 13.5655 7.67808 13.3101 7.59297L12.1481 7.20597C12.1047 7.19163 12.0671 7.164 12.0404 7.12702C12.0136 7.09004 11.9993 7.04559 11.9993 6.99997C11.9993 6.95435 12.0136 6.90989 12.0404 6.87291C12.0671 6.83593 12.1047 6.80831 12.1481 6.79397L13.3101 6.40697C13.5655 6.32185 13.7977 6.1784 13.9881 5.98799C14.1785 5.79758 14.3219 5.56544 14.4071 5.30997L14.7941 4.14797ZM21.8631 3.09897C21.8729 3.07049 21.8914 3.0458 21.916 3.02833C21.9405 3.01085 21.9699 3.00146 22.0001 3.00146C22.0302 3.00146 22.0596 3.01085 22.0841 3.02833C22.1087 3.0458 22.1272 3.07049 22.1371 3.09897L22.3951 3.87297C22.5101 4.21897 22.7811 4.48997 23.1271 4.60497L23.9011 4.86297C23.9295 4.87284 23.9542 4.89134 23.9717 4.91589C23.9892 4.94044 23.9986 4.96983 23.9986 4.99997C23.9986 5.0301 23.9892 5.05949 23.9717 5.08404C23.9542 5.1086 23.9295 5.1271 23.9011 5.13697L23.1271 5.39497C22.9565 5.45169 22.8016 5.54738 22.6745 5.67445C22.5475 5.80152 22.4518 5.95646 22.3951 6.12697L22.1371 6.90097C22.1272 6.92944 22.1087 6.95413 22.0841 6.97161C22.0596 6.98908 22.0302 6.99847 22.0001 6.99847C21.9699 6.99847 21.9405 6.98908 21.916 6.97161C21.8914 6.95413 21.8729 6.92944 21.8631 6.90097L21.6051 6.12697C21.5483 5.95646 21.4526 5.80152 21.3256 5.67445C21.1985 5.54738 21.0436 5.45169 20.8731 5.39497L20.1001 5.13697C20.0716 5.1271 20.0469 5.1086 20.0294 5.08404C20.0119 5.05949 20.0026 5.0301 20.0026 4.99997C20.0026 4.96983 20.0119 4.94044 20.0294 4.91589C20.0469 4.89134 20.0716 4.87284 20.1001 4.86297L20.8741 4.60497C21.2201 4.48997 21.4911 4.21897 21.6061 3.87297L21.8631 3.09997V3.09897Z" fill="#FFD643"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1376_2263">
            <rect width="26.8117" height="22" fill="white"/>
            </clipPath>
            <clipPath id="clip1_1376_2263">
            <rect width="16" height="16" fill="white" transform="translate(11 3)"/>
            </clipPath>
            </defs>
            </svg>
            </h3>
            <form onSubmit={handleSubmit}>
            <div className="rowInputContainer">
                <div>
                    <label htmlFor="fullName">First Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter Full Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="surname">Surname</label>
                    <input
                        type="text"
                        name="surname"
                        placeholder="Enter Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
            </div>

            <div className='inputContainer'>
                <label htmlFor="idNumber">ID number</label>
                <input
                    type="text"
                    name="idNumber"
                    placeholder="Enter your Id number or passport"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                />
            </div>

            <div className='inputContainer'>
                <label htmlFor="idNumber">Email Address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your Id number or passport"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='inputContainer'>
                <label htmlFor="gender">Gender</label>
                <select
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="notSay">Rather not say</option>
                </select>
            </div>

            <div className='inputContainer'>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </div>

            <div className='inputContainer'>
                <label htmlFor="country">Country/Region</label>
                <select
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select Country</option>
                    <option value="ukraine">Ukraine</option>
                    <option value="brazil">Brazil</option>
                    <option value="southAfrica">South Africa</option>
                    <option value="tokyo">Tokyo</option>
                </select>
            </div>

            <div className='inputContainer'>
                <label htmlFor="city">City</label>
                <select
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">Select City</option>
                    <option value="johannesburg">Johannesburg</option>
                    <option value="durban">Durban</option>
                    <option value="nelspruit">Nelspruit</option>
                    <option value="capeTown">Cape Town</option>
                </select>
            </div>

            <div className='inputContainer'>
                <label htmlFor="state">State/Province</label>
                <select
                    name="state"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                >
                    <option value="">Select Province</option>
                    <option value="gauteng">Gauteng</option>
                    <option value="mpumalanga">Mpumalanga</option>
                    <option value="limpopo">Limpopo</option>
                    <option value="kzn">KZN</option>
                </select>
            </div>

            <div className='inputContainer'>
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>

        <div className="documents">
            <h4><i className="bi bi-file-earmark-fill"></i> Document Section</h4>
            <div className="documents_btns">
                <button>Required Documents</button>
                <button>Documents Review</button>
            </div>
            <p>Please upload the following documents to complete your application. Only pdf formats are accepted.</p>
            <div style={{display:'flex', alignItems: 'center'}}>
                <div className='leftArrow'>
                <i className="bi bi-chevron-left"></i>
                </div>
                    <UploadDocuments />
                <div className='rightArrow'>
                <i className="bi bi-chevron-right"></i>
                </div>
            </div>

        </div>
      </div>
    )
}