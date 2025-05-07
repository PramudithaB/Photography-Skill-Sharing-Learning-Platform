import React, { useState } from 'react';
import Swal from 'sweetalert2';

function LearningView() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-11
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleDayClick = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day).toLocaleDateString();

    Swal.fire({
      title: `View Learning Plan for ${selectedDate}`,
      html:
        `<p>Title: Sample Title</p>` +
        `<p>Category: Sample Category</p>` +
        `<p>Description: Sample Description</p>`,
      confirmButtonText: 'Close'
    });
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  return (
    <div className="calendar-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="shedule-btn" onClick={goToPreviousMonth}>Prev</button>
        <h2>{monthNames[currentMonth]} {currentYear}</h2>
        <button className="shedule-btn" onClick={goToNextMonth}>Next</button>
      </div>

      <div className="calendar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginTop: '20px' }}>
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div key={i + 1} className="calendar-day" onClick={() => handleDayClick(i + 1)}
            style={{
              padding: '10px',
              background: '#f0f0f0',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: '0.2s'
            }}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningView;