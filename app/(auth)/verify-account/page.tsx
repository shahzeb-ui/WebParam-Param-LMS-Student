import Link from "next/link";

export default function VerifyAccount() {
    return (
        <div className="verify">
            <h1>Confirm  your email address</h1>
            <p>We’ve sent an email to the address you provided.
            Check your inbox and enter the 4 digit code.</p>
            <form action="/">
                <div className="otpContainer">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <button type="submit">Confirm</button>
                <div className="account">
                    <p>Already have an account?
                    <Link href='/login'> Log in</Link></p>
                </div>
            </form>
        </div>
    )
}