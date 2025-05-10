import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LearningPlans() {
    const [learningPlans, setLearningPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLearningPlans = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/learning-plan/');
                setLearningPlans(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch learning plans');
                setLoading(false);
            }
        };

        fetchLearningPlans();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="mb-4">Learning Plans</h2>
                            {learningPlans.length === 0 ? (
                                <p>No learning plans found.</p>
                            ) : (
                                <div className="row">
                                    {learningPlans.map((plan) => (
                                        <div key={plan.id} className="col-lg-4 col-md-6 mb-4">
                                            <div className="card h-100">
                                                <div className="card-body">
                                                    <h5 className="card-title">{plan.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">{plan.category}</h6>
                                                    <p className="card-text">{plan.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LearningPlans;