export default function Login() {
    return (
        <div className="login">
            <h1>Create an account</h1>
            <p>Start your journey!</p>
            <form action="/">
                <div className="inputContainer">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" placeholder="Enter Email" name="email" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password" placeholder="Enter Password" name="password" />
                </div>
                <button type="submit">Register</button>
                <div className="terms">
                <input type="checkbox" name="checkbox" /> <label htmlFor="checkbox">I hereby agree to the  
                <span> Terms & Conditions</span></label>
                </div>
                <div className="terms">
                    <p>Already have an account?
                    <span> Log in</span></p>
                </div>
            </form>
        </div>
    )
}