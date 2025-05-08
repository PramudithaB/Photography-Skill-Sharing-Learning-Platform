import React, { useState } from 'react';
import CommentData from '../data/CommentData';

function FeeadbackManagment() {
  // Filter comments where userId === 1
  const userComments = CommentData.filter((comment) => comment.userId === 1);

  const [editingId, setEditingId] = useState(null);
  const [editedFeedback, setEditedFeedback] = useState({});

  const handleEditClick = (id, currentText) => {
    setEditingId(id);
    setEditedFeedback((prev) => ({ ...prev, [id]: currentText }));
  };

  const handleSaveClick = (id) => {
    // Save logic here if you want to persist to a backend
    setEditingId(null);
  };

  const handleChange = (e, id) => {
    setEditedFeedback((prev) => ({ ...prev, [id]: e.target.value }));
  };

  return (
    <div className="whole-wrap">
      <div className="container box_1170">
        <div className="section-top-border">
          <h3 className="mb-30">User Feedback</h3>
          <div className="row">
            {userComments.map((comment) => (
              <div className="col-lg-12 mb-5" key={comment.id}>
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={comment.img}
                    alt={comment.author}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      marginRight: '15px',
                    }}
                  />
                  <div>
                    <strong>{comment.author}</strong>
                    <br />
                    <small>{comment.date}</small>
                  </div>
                </div>

                <h5>{comment.postTitle}</h5>

                {editingId === comment.id ? (
                  <textarea
                    className="form-control"
                    rows="5"
                    value={editedFeedback[comment.id]}
                    onChange={(e) => handleChange(e, comment.id)}
                    style={{ marginBottom: '15px' }}
                  />
                ) : (
                  <blockquote className="generic-blockquote">
                    {editedFeedback[comment.id] || comment.pargrhap}
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
                    onClick={() => handleEditClick(comment.id, comment.pargrhap)}
                  >
                    Edit
                  </button>
                )}

                <button className="btn btn-danger">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeadbackManagment;
