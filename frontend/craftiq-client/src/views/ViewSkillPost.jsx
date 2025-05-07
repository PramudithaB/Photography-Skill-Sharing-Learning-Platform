import React from 'react';

import AllSkillPost from '../components/skillPost/AllSkillPost';
import SkillPostData from '../data/SkillPostData';

function ViewSkillPost() {
    return (
        <div>
            <h3 className="mb-3 mt-30 text-center">Your All Post</h3>
            {SkillPostData.slice(0, 4).map(skillPost => (
                <AllSkillPost key={skillPost.id} skillPost={skillPost} />
            ))}
        </div>
    );
}

export default ViewSkillPost;
