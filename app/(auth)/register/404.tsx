import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="rbt-error-area -11 rbt-section-gap">
      <div className="error-area">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-10">
              <h1>404!</h1>
              <h3>Page not found</h3>
              <p>The page you were looking for could not be found.</p>{" "}
              <Link
                href="/"
                className="rbt-btn"
                style={{ backgroundColor: "#24345C" }}
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
