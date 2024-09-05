import React from 'react';
import styles from './DayView.module.css';

interface DayViewProps {
  date: Date;
  onBackClick: () => void;
}

const DayView: React.FC<DayViewProps> = ({ date, onBackClick }) => {
  const hours = Array.from({ length: 10 }, (_, i) => i + 8); // 8 AM to 5 PM

  return (
    <div className={styles.dayViewWrapper}>
      <div className={styles.header}>
        <button onClick={onBackClick} className={styles.monthButton}>Month</button>
        <h2>{date.toDateString()}</h2>
      </div>
      <div className={styles.timeSlots}>
        {hours.map(hour => (
          <div key={hour} className={styles.timeSlot}>
            <div className={styles.time}>{`${hour}:00`}</div>
            <div className={styles.event}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayView;