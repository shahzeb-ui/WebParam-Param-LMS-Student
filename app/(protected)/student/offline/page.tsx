import type { Metadata } from "next";
import "./offline.scss"; 

export const metadata: Metadata = {
  title: "Offline",
};

export default function Page() {
  return (
    <div className="offline-container">
      <div className="offline-content">
        <div className="icons">
          <img src="/images/nowifi.gif" alt="No WiFi" className="offline-image" />
        </div>
        <h1>Oops! The internet took a coffee break. </h1>
        <h2>Please connect to the internet and try again.</h2>
        <button
          className="rbt-btn btn-gradient hover-icon-reverse w-50"
          style={{ background: 'transparent', border: '2px solid black' }}
        >
         <span className="btn-text">Retry</span>
        </button>
      </div>
    </div>
  );
}