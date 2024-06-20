import Link from "next/link";

export default function Register() {
    return (
        <div className="login">
            <h1>Log in to your account</h1>
            <p>Welcome back! Please enter your details</p>
            <form action="/">
                <div className="inputContainer">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" placeholder="Enter Email" name="email" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password" placeholder="Enter Password" name="password" />
                </div>
                <div className="rememberme">
                    <div>
                        <input type="checkbox" name="checkbox" /> 
                        <label htmlFor="checkbox">Remember me  
                        </label>
                    </div>

                    <Link href={'reset-password'}>Forgot Password</Link>
                </div>
                <button type="submit">Log in</button>
                <div className="account">
                    <p>Don&apos;t have an account?
                    <Link href={'/register'}>Register</Link></p>
                </div>
            </form>
        </div>
    )
}