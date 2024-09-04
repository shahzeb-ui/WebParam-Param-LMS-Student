import Image from 'next/image';
import "./offline.scss";

export default function Page() {
  return (
    <div className="offline-container">
      <div className="offline-content">
        <Image
          src="/images/offline/nowifi.gif"
          alt="No WiFi"
          width={200}
          height={200}
          className="nowifi-gif"
        />
        <h1>Oops! The internet took a coffee break.</h1>
        <p>Please connect to the internet and try again.</p>
        <button className="retry-button">Retry</button>
      </div>
    </div>
  );
}