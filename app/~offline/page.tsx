
import type { Metadata } from "next";
import "./offline.scss"; 

export const metadata: Metadata = {
  title: "Offline",
};

export default function Page() {
  return (
    <div className="offline-container">
      <div className="offline-content">
        <div className="wifi-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="wifi-svg"
          >
            <path d="M12 20c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-4.243-2.828c.391.391 1.023.391 1.414 0 .391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414zm8.486 0c.391.391 1.023.391 1.414 0 .391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414zm-4.243-4.243c.391.391 1.023.391 1.414 0 .391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414zm-4.243-2.828c.391.391 1.023.391 1.414 0 .391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414zm8.486 0c.391.391 1.023.391 1.414 0 .391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414zm-4.243-4.243c.391.391 1.023.391 1.414 0 .391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414z" />
          </svg>
        </div>
        <h1>You are offline</h1>
        <h2>Please connect to the internet and try again.</h2>
        <button>Retry</button>
      </div>
    </div>
  );
}