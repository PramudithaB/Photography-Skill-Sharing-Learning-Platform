import React, { useEffect, useState } from "react";

function CommentCreate() {
  
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const sriLankaTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Colombo",
      hour12: false,
    });

    // Format to "YYYY-MM-DD HH:mm:ss"
    const dateObj = new Date(sriLankaTime);
    const formattedDateTime = dateObj.toISOString().slice(0, 19).replace("T", " ");
    setDateTime(formattedDateTime);
  }, []);

  return (
    <div>
      <div className="comment-form">
        <h4>Write Comment</h4>
        <form className="form-contact comment_form" action="#" id="commentForm">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control  w-100"
                  name="comment"
                  id="comment"
                  cols={30}
                  rows={9}
                  placeholder="Write Comment"
                  defaultValue={""}
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
                  placeholder="CreatedAt"
                  value={dateTime} // Set the current Sri Lankan time here
                  readOnly // Make the input read-only
                />
              </div>
            </div>
            {/* <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                      </div>
                    </div> */}
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="button button-contactForm btn_1 boxed-btn"
            >
              Send Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentCreate;
