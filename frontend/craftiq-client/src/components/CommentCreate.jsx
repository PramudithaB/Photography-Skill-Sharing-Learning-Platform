import React, { useState, useEffect } from "react";

const CommentCreate = () => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [errors, setErrors] = useState({
    comment: "",
    author: ""
  });

  // Set the current Sri Lankan time on mount
  useEffect(() => {
    const getSLTime = () => {
      const date = new Date();
      const options = {
        timeZone: "Asia/Colombo",
        hour12: false,
      };
      return date.toLocaleString("sv-SE", options).replace("T", " ");
    };
    setCreatedAt(getSLTime());
  }, []);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!comment.trim()) {
      tempErrors.comment = "Comment cannot be empty";
      isValid = false;
    } else if (comment.length > 500) {
      tempErrors.comment = "Comment cannot exceed 500 characters";
      isValid = false;
    } else {
      tempErrors.comment = "";
    }

    if (!author.trim()) {
      tempErrors.author = "Name cannot be empty";
      isValid = false;
    } else if (author.length > 50) {
      tempErrors.author = "Name cannot exceed 50 characters";
      isValid = false;
    } else {
      tempErrors.author = "";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "comment":
        if (!value.trim()) errorMsg = "Comment cannot be empty";
        else if (value.length > 500) errorMsg = "Comment cannot exceed 500 characters";
        break;
      case "author":
        if (!value.trim()) errorMsg = "Name cannot be empty";
        else if (value.length > 50) errorMsg = "Name cannot exceed 50 characters";
        break;
      default:
        break;
    }

    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    const feedbackData = {
      comment,
      author,
      createdAt,
      likeCount: "0", // you can start with 0 likes or adjust as needed
    };

    try {
      const response = await fetch("http://localhost:8080/api/feedback/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        alert("Comment submitted successfully!");
        setComment("");
        setAuthor("");
        setErrors({ comment: "", author: "" });
        // Optionally update createdAt again
        const newDate = new Date().toLocaleString("sv-SE", {
          timeZone: "Asia/Colombo",
          hour12: false,
        });
        setCreatedAt(newDate.replace("T", " "));
      } else {
        alert("Failed to submit comment.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Error submitting comment.");
    }
  };

  return (
    <form className="form-contact comment_form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <textarea
              className={`form-control w-100 ${errors.comment ? 'is-invalid' : ''}`}
              name="comment"
              id="comment"
              cols={30}
              rows={9}
              placeholder="Write Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onBlur={handleBlur}
            />
            {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
            <small className="text-muted">{500 - comment.length} characters remaining</small>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              className={`form-control ${errors.author ? 'is-invalid' : ''}`}
              name="author"
              id="author"
              type="text"
              placeholder="Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              onBlur={handleBlur}
            />
            {errors.author && <div className="invalid-feedback">{errors.author}</div>}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              className="form-control"
              name="createdAt"
              id="createdAt"
              type="text"
              placeholder="Created At"
              value={createdAt}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="button button-contactForm btn_1 boxed-btn">
          Send Comment
        </button>
      </div>
    </form>
  );
};

export default CommentCreate;
