import React, { useState, useRef } from 'react';
import author from "../../assets/clients/img/blog/author.png";
import singleblog1 from "../../assets/clients/img/blog/single_blog_1.png";
import SlideBar from '../SlideBar';

function UpdatePost({skillPost}) {
  const { img, title, pargrhap_1,pargrhap_2,pargrhap_3,pargrhap_4,pargrhap_5, summary} = skillPost;
  const [media, setMedia] = useState(img);
  const [mediaType, setMediaType] = useState('image');
  const fileInputRef = useRef(null); // to programmatically trigger file input
 
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const type = file.type.startsWith('video') ? 'video' : 'image';
      setMediaType(type);
      setMedia(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click(); // simulate click on hidden file input
  };

  return (
    <div>
        
      <div className="d-flex justify-content-center">
        <h2 className="mb-4">Update Post</h2>
      </div>

      <div className="single-post">
        <div className="feature-img mb-3 d-flex justify-content-center" onClick={triggerFileInput} style={{ cursor: 'pointer' }}>
          {mediaType === 'image' ? (
            <img className="img-fluid" src={media} alt="Uploaded" style={{ width: '980px', height: '480px', objectFit: 'cover' }}/>
          ) : (
            <video className="img-fluid" controls style={{ width: '980px', height: '480px', objectFit: 'cover' }}>
              <source src={media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Hidden input field */}
        <input
          type="file"
          accept="image/*,video/*"
          ref={fileInputRef}
          onChange={handleMediaChange}
          style={{ display: 'none' }}
        />

        <div className="blog_details">
          <input
            type="text"
            className="form-control mb-3"
          
            placeholder={title}
          />

          <textarea
            className="form-control mb-3"
            rows={3}
         placeholder={pargrhap_1}
          ></textarea>

          <textarea
            className="form-control mb-3"
            rows={2}
            placeholder={pargrhap_2}
          ></textarea>

          <div className="quote-wrapper mb-3">
            <textarea
              className="form-control"
              rows={2}
              placeholder={pargrhap_3}
            ></textarea>
          </div>

          <textarea
            className="form-control mb-3"
            rows={2}
            placeholder={pargrhap_4}
          ></textarea>

          <textarea
            className="form-control mb-3"
            rows={2}
            placeholder={pargrhap_5}
          ></textarea>
        </div>
      </div>

      <div className="blog-author">
        <div className="media align-items-center">
          <img src={author} alt="" />
          <div className="media-body">
            <a href="#">
              <h4>Harvard Milan</h4>
            </a>
            
          <textarea
            className="form-control mb-3"
            rows={2}
            placeholder={summary}
          ></textarea>
          </div>
        </div>
      </div>
 
    </div>
  );
}

export default UpdatePost;
