// import React, { useState } from 'react';
// import CommentData from '../data/CommentData';

// function FeeadbackManagment() {
//   // Filter comments where userId === 1
//   const userComments = CommentData.filter((comment) => comment.userId === 1);

//   const [editingId, setEditingId] = useState(null);
//   const [editedFeedback, setEditedFeedback] = useState({});

//   const handleEditClick = (id, currentText) => {
//     setEditingId(id);
//     setEditedFeedback((prev) => ({ ...prev, [id]: currentText }));
//   };

//   const handleSaveClick = (id) => {
//     // Save logic here if you want to persist to a backend
//     setEditingId(null);
//   };

//   const handleChange = (e, id) => {
//     setEditedFeedback((prev) => ({ ...prev, [id]: e.target.value }));
//   };

//   return (
//     <div className="whole-wrap">
//       <div className="container box_1170">
//         <div className="section-top-border">
//           <h3 className="mb-30">User Feedback</h3>
//           <div className="row">
//             {userComments.map((comment) => (
//               <div className="col-lg-12 mb-5" key={comment.id}>
//                 <div className="d-flex align-items-center mb-4">
//                   <img
//                     src={comment.img}
//                     alt={comment.author}
//                     style={{
//                       width: '60px',
//                       height: '60px',
//                       borderRadius: '50%',
//                       marginRight: '15px',
//                     }}
//                   />
//                   <div>
//                     <strong>{comment.author}</strong>
//                     <br />
//                     <small>{comment.date}</small>
//                   </div>
//                 </div>

//                 <h5>{comment.postTitle}</h5>

//                 {editingId === comment.id ? (
//                   <textarea
//                     className="form-control"
//                     rows="5"
//                     value={editedFeedback[comment.id]}
//                     onChange={(e) => handleChange(e, comment.id)}
//                     style={{ marginBottom: '15px' }}
//                   />
//                 ) : (
//                   <blockquote className="generic-blockquote">
//                     {editedFeedback[comment.id] || comment.pargrhap}
//                   </blockquote>
//                 )}

//                 {editingId === comment.id ? (
//                   <button
//                     className="btn btn-success mr-2"
//                     onClick={() => handleSaveClick(comment.id)}
//                   >
//                     Save
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-primary mr-2"
//                     onClick={() => handleEditClick(comment.id, comment.pargrhap)}
//                   >
//                     Edit
//                   </button>
//                 )}

//                 <button className="btn btn-danger">Delete</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeeadbackManagment;

import React, { useState, useEffect } from "react";

function FeedbackManagement() {
  const [comments, setComments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedFeedback, setEditedFeedback] = useState({});

  const API_URL = "http://localhost:8080/api/feedback/";

  // Fetch from backend
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setComments(data);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch feedback:", err);
  //     });
  // }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setComments(data); // Ensure each item has author, createdAt
    };

    fetchComments();
  }, []);

  const handleEditClick = (id, currentText) => {
    setEditingId(id);
    setEditedFeedback((prev) => ({ ...prev, [id]: currentText }));
  };

  const handleChange = (e, id) => {
    setEditedFeedback((prev) => ({ ...prev, [id]: e.target.value }));
  };

  const handleSaveClick = async (id) => {
    const updatedComment = editedFeedback[id];
    console.log("Update it : ", updatedComment);

    const original = comments.find((m) => m.id == id);
    const newComment = original
      ? { ...original, comment: updatedComment }
      : null;

    try {
      const res = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      if (res.ok) {
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === id
              ? { ...comment, comment: updatedComment }
              : comment
          )
        );
        setEditingId(null);
      } else {
        alert("Update failed.");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setComments((prev) => prev.filter((comment) => comment.id !== id));
      } else {
        alert("Delete failed.");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="whole-wrap">
      <div className="container box_1170">
        <div className="section-top-border">
          <h3 className="mb-30">User Feedback</h3>
          <div className="row">
            {comments.map((comment) => (
              <div className="col-lg-12 mb-5" key={comment.id}>
                <div className="d-flex align-items-center mb-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt={comment.author}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <strong>{comment.author || comment.author}</strong>
                    <br />
                    <small>{comment.createdAt || comment.createdAt}</small>
                  </div>
                </div>

                {editingId === comment.id ? (
                  <textarea
                    className="form-control"
                    rows="5"
                    value={editedFeedback[comment.id]}
                    onChange={(e) => handleChange(e, comment.id)}
                    style={{ marginBottom: "15px" }}
                  />
                ) : (
                  <blockquote className="generic-blockquote">
                    {editedFeedback[comment.id] || comment.comment}
                  </blockquote>
                )}

                {editingId === comment.id ? (
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => handleSaveClick(comment.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => handleEditClick(comment.id, comment.comment)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(comment.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackManagement;
