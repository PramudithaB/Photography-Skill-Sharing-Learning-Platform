import React, { useState } from 'react';
import Swal from 'sweetalert2';

function LearningPlane() {
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
      title: `Add Learning Plan for ${selectedDate}`,
      html:
        `<input id="plan-title" class="swal2-input" placeholder="Title">` +
        `<input id="plan-category" class="swal2-input" placeholder="Category">` +
        `<textarea id="plan-description" class="swal2-textarea" placeholder="Description"></textarea>`,
      showCancelButton: true,
      confirmButtonText: 'Save',
      preConfirm: () => {
        const title = document.getElementById('plan-title').value;
        const category = document.getElementById('plan-category').value;
        const description = document.getElementById('plan-description').value;
        if (!title || !category || !description) {
          Swal.showValidationMessage('All fields are required');
        }
        return { title, category, description, date: selectedDate };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Learning Plan:', result.value);
        Swal.fire('Saved!', 'Your learning plan has been saved.', 'success');
      }
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
        <button  className="shedule-btn" onClick={goToPreviousMonth}> Prev</button>
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
            <div>Title</div>
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningPlane;
