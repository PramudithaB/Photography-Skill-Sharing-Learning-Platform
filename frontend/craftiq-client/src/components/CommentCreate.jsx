// import React, { useEffect, useState } from "react";

// function CommentCreate() {
  
//   const [dateTime, setDateTime] = useState("");

//   useEffect(() => {
//     const sriLankaTime = new Date().toLocaleString("en-US", {
//       timeZone: "Asia/Colombo",
//       hour12: false,
//     });

//     // Format to "YYYY-MM-DD HH:mm:ss"
//     const dateObj = new Date(sriLankaTime);
//     const formattedDateTime = dateObj.toISOString().slice(0, 19).replace("T", " ");
//     setDateTime(formattedDateTime);
//   }, []);

//   return (
//     <div>
//       <div className="comment-form">
//         <h4>Write  Comment</h4>
//         <form className="form-contact comment_form" action="#" id="commentForm">
//           <div className="row">
//             <div className="col-12">
//               <div className="form-group">
//                 <textarea
//                   className="form-control  w-100"
//                   name="comment"
//                   id="comment"
//                   cols={30}
//                   rows={9}
//                   placeholder="Write Comment"
//                   defaultValue={""}
//                 />
//               </div>
//             </div>
//             <div className="col-sm-6">
//               <div className="form-group">
//                 <input
//                   className="form-control"
//                   name="author"
//                   id="author"
//                   type="text"
//                   placeholder="Name"
//                 />
//               </div>
//             </div>
//             <div className="col-sm-6">
//               <div className="form-group">
//                 <input
//                   className="form-control"
//                   name="createdAt"
//                   id="createdAt"
//                   type="text"
//                   placeholder="CreatedAt"
//                   value={dateTime} // Set the current Sri Lankan time here
//                   readOnly // Make the input read-only
//                 />
//               </div>
//             </div>
//             {/* <div className="col-12">
//                       <div className="form-group">
//                         <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
//                       </div>
//                     </div> */}
//           </div>
//           <div className="form-group">
//             <button
//               type="submit"
//               className="button button-contactForm btn_1 boxed-btn"
//             >
//               Send Comment
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CommentCreate;


import React, { useState, useEffect } from "react";

const CommentCreate = () => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [createdAt, setCreatedAt] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
              className="form-control w-100"
              name="comment"
              id="comment"
              cols={30}
              rows={9}
              placeholder="Write Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              className="form-control"
              name="author"
              id="author"
              type="text"
              placeholder="Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
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
