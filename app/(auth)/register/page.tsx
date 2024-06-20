import Link from "next/link";

export default function Register() {
    return (
        <div className="register">
            <h1>Create an account</h1>
            <p>Start your journey!</p>
            <form action="/">
                <div className="inputContainer">
                    <label htmlFor="username">Username <span className="required">*</span></label>
                    <input type="text" placeholder="Enter Username" name="username" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" placeholder="Enter Email" name="email" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password" placeholder="Enter Password" name="password" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="confirmPassword">Confirm Password <span className="required">*</span></label>
                    <input type="password" placeholder="Enter Password" name="confirmPassword" />
                </div>
                <button type="submit">Register</button>
                <div className="terms">
                <input type="checkbox" name="checkbox" /> <label htmlFor="checkbox">I hereby agree to the  
                <Link href={'/terms-and-conditions'}> Terms & Conditions</Link></label>
                </div>
                <div className="terms">
                    <p>Already have an account?
                    <Link href={'/login'}> Log in</Link></p>
                </div>
            </form>
        </div>
    )
}