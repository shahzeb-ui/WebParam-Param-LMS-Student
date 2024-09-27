import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import styles from './Calendar.module.css';
import DayView from './DayView';

interface ClassSession {
  id: string;
  state: number;
  createdAt: string;
  modifiedAt: string;
  sessionType: number;
  classLink: string;
  date: string;
  title: string;
  courseId: string;
  moduleId: string;
  classDuration: string;
  startingTime: string;
  adminId: string;
  location: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [view, setView] = useState<'month' | 'day'>('month');
  const [classSessions, setClassSessions] = useState<ClassSession[]>([]);
  const [courseId, setCourseId] = useState<string | null>(null);

  const cookies = new Cookies();
  const userID = cookies.get('userID');

  useEffect(() => {
    const fetchCourseId = async () => {
      if (!userID) return;

      try {
        const response = await fetch(`https://thooto-dev-be-newcourse-read.azurewebsites.net/api/v1/Enrollments/GetUserEnrolledCourse/${userID}`, {
          method: 'GET',
          headers: {
            'Client-Key': 'ec51852d24b1450faff0a868e84d05e5'
          }
        });

        const rawText = await response.text();
        console.log("Raw Response Text:", rawText); // Debugging: Log the raw response text

        setCourseId(rawText); // Use the raw response text directly as courseId
      } catch (error) {
        console.error("Error fetching courseId:", error); // Debugging: Log any errors
      }
    };

    fetchCourseId();
  }, [userID]);

  console.log("CourseID :", courseId)

  useEffect(() => {
    const fetchClassSessions = async () => {
      if (!courseId) return;

      try {
        const response = await fetch(`https://thooto-dev-be-logbook-read.azurewebsites.net/api/v1/ClassSessions/GetClassSessions/${courseId}/Course`, {
          method: 'GET',
          headers: {
            'Client-Key': 'ec51852d24b1450faff0a868e84d05e5'
          }
        });

        const data = await response.json();
        console.log("Fetch ClassSessions Response:", data); // Debugging: Log the response

        setClassSessions(data.data);
      } catch (error) {
        console.error("Error fetching class sessions:", error); // Debugging: Log any errors
      }
    };

    fetchClassSessions();
  }, [courseId]);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isToday = i === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();
      const isSelected = selectedDate && i === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth() && currentDate.getFullYear() === selectedDate.getFullYear();
      const classesOnThisDay = classSessions.filter(session => new Date(session.date).toDateString() === date.toDateString());

      days.push(
        <div 
          key={i} 
          className={`${styles.day} ${isSelected ? styles.selected : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <span style={{ 
            color: isSelected ? 'red' : isToday ? 'white' : 'inherit',
            backgroundColor: isToday ? 'rgb(36, 52, 92)' : 'transparent',
            padding: isToday ? '2px 6px' : '0',
            borderRadius: isToday ? '50%' : '0',
            display: 'inline-block'
          }}>
            {i}
          </span>
          <div className={styles.content}>
            {classesOnThisDay.map(session => (
              <div key={session.id} className={styles.classSession}>
                {session.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setView('day');
  };

  const handleBackToMonth = () => {
    setView('month');
  };

  if (view === 'day' && selectedDate) {
    const classesOnSelectedDate = classSessions.filter(session => new Date(session.date).toDateString() === selectedDate.toDateString());
    return <DayView date={selectedDate} onBackClick={handleBackToMonth} classSessions={classesOnSelectedDate} />;
  }

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.header}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{monthNames[currentDate.getMonth()]} <span>{currentDate.getFullYear()}</span></h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles.calendar}>
        <div className={styles.weekdays}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className={styles.days}>
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;