// import React from 'react'
// import SingleBlog from '../components/blog/SingleBlog'
// import SinglePost from '../components/SinglePost'
// import CommentData from '../data/commentData'
// import CommentView from '../components/CommentView'
// import CommentCreate from '../components/CommentCreate'
// import SlideBar from '../components/SlideBar'

// function BlogDetails() {
//   return (
//     <div>
//         {/*================Blog Area =================*/}
//       <section className="blog_area single-post-area section-padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 posts-list">
//               <SinglePost/>
              
            
//               <div className="comments-area">
//                 <h4>05 Comments</h4>
//                 {CommentData.slice(0, 4).map(comment => (
//                   <CommentView key={comment.id} comment={comment} />
//                 ))}
                
                
               
//               </div>
//               <CommentCreate/>
//             </div>
//             <div className="col-lg-4">
//               <SlideBar/>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*================ Blog Area end =================*/}
//     </div>
//   )
// }

// export default BlogDetails

import React, { useEffect, useState } from 'react';
import SingleBlog from '../components/blog/SingleBlog';
import SinglePost from '../components/SinglePost';
import CommentView from '../components/CommentView';
import CommentCreate from '../components/CommentCreate';
import SlideBar from '../components/SlideBar';

function BlogDetails() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the backend
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/feedback/');
        const data = await response.json();
        setComments(data);
        console.log("comment :" , data) // Make sure backend returns an array
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div> 
      {/*================Blog Area =================*/}
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <SinglePost />
              <div className="comments-area">
                <h4>{comments.length} Comment{comments.length !== 1 && 's'}</h4>
                {comments.map((comment) => (
                  <CommentView
                    key={comment.id}
                    comment={{
                      id: comment.id,
                      pargrhap: comment.comment,
                      author: comment.author,
                      date: comment.createdAt,
                      postTitle: '', // If needed, update accordingly
                      img: null, // Placeholder or avatar logic can go here
                    }}
                  />
                ))}
              </div>
              <CommentCreate />
            </div>
            <div className="col-lg-4">
              <SlideBar />
            </div>
          </div>
        </div>
      </section>
      {/*================ Blog Area end =================*/}
    </div>
  );
}

export default BlogDetails;
