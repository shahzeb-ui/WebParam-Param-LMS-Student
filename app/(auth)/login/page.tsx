import Link from "next/link";

export default function Login() {
    return (
        <div className="login">
            <h1>Log in to your account
            </h1>
            <p>Welcome back! Please enter your details.</p>
            <form action="/">
                <div className="inputContainer">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" placeholder="Enter Email" name="email" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password" placeholder="Enter Password" name="password" />
                </div>
                <button type="submit">Log in</button>
                <div className="terms">
                    <div>
                        <input type="checkbox" name="checkbox" /> <label htmlFor="checkbox">Remember me  
                        </label>
                    </div>
                    <Link href="/reset">Forgot password</Link>
                </div>
                <div className="terms">
                    <p>Don't have an account?
                    <Link href={'/register'} style={{marginLeft: '5px', color: 'blue', textDecoration:'underline'}}>Sign up</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}