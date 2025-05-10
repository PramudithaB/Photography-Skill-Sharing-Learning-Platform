import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import singleblog1 from "../assets/clients/img/blog/single_blog_1.png"
import SlideBar from '../components/SlideBar'
import { Modal } from 'react-bootstrap';

function LearningPlaneCreate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [plans, setPlans] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/learning-plan/');
            setPlans(response.data);
        } catch (err) {
            setError('Failed to fetch learning plans');
        }
    };

    const handleEdit = (plan) => {
        setFormData({
            title: plan.title,
            category: plan.category,
            description: plan.description
        });
        setEditId(plan.id);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this plan?')) {
            try {
                await axios.delete(`http://localhost:8080/api/learning-plan/${id}`);
                await fetchPlans();
            } catch (err) {
                setError('Failed to delete plan');
            }
        }
    };

    const handleChange = (e) => {
        setError('');
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            if (isEditing) {
                await axios.put(`http://localhost:8080/api/learning-plan/${editId}`, formData, {
                    headers: { 'Content-Type': 'application/json' }
                });
                setIsEditing(false);
                setEditId(null);
            } else {
                await axios.post('http://localhost:8080/api/learning-plan/create', formData, {
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            
            setFormData({ title: '', category: '', description: '' });
            await fetchPlans();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save learning plan');
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsEditing(false);
        setEditId(null);
        setFormData({ title: '', category: '', description: '' });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            await axios.put(`http://localhost:8080/api/learning-plan/${editId}`, formData, {
                headers: { 'Content-Type': 'application/json' }
            });
            setShowModal(false);
            setIsEditing(false);
            setEditId(null);
            setFormData({ title: '', category: '', description: '' });
            await fetchPlans();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update learning plan');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="blog_area single-post-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post">
                                <div className="feature-img">
                                    <img className="img-fluid" src={singleblog1} alt="" />
                                </div>
                                <div className="blog_details">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="contact-title">Create Your Plan</h2>
                                            {error && <div className="alert alert-danger">{error}</div>}
                                        </div>
                                        <div className="col-lg-12">
                                            <form className="form-contact contact_form" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                name="title"
                                                                value={formData.title}
                                                                onChange={handleChange}
                                                                type="text"
                                                                placeholder="Enter Title"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                name="category"
                                                                value={formData.category}
                                                                onChange={handleChange}
                                                                type="text"
                                                                placeholder="Enter Category"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                className="form-control w-100"
                                                                name="description"
                                                                value={formData.description}
                                                                onChange={handleChange}
                                                                cols={30}
                                                                rows={9}
                                                                placeholder="Description"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mt-3 d-flex gap-3">
                                                    <button 
                                                        type="submit" 
                                                        className="button button-contactForm boxed-btn"
                                                        disabled={loading}
                                                    >
                                                        {loading ? 'Creating...' : 'Create Plan'}
                                                    </button>
                                                   
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h3>Learning Plans</h3>
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Category</th>
                                                    <th>Description</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {plans.map((plan) => (
                                                    <tr key={plan.id}>
                                                        <td>{plan.title}</td>
                                                        <td>{plan.category}</td>
                                                        <td>{plan.description}</td>
                                                        <td>
                                                            <button 
                                                                className="btn btn-sm btn-warning me-2"
                                                                onClick={() => handleEdit(plan)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button 
                                                                className="btn btn-sm btn-danger"
                                                                onClick={() => handleDelete(plan.id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <SlideBar />
                        </div>
                    </div>
                </div>
            </section>

            {/* Edit Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Learning Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdate}>
                        <div className="form-group mb-3">
                            <label>Title</label>
                            <input
                                className="form-control"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                type="text"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Category</label>
                            <input
                                className="form-control"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                type="text"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                required
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? 'Updating...' : 'Update Plan'}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LearningPlaneCreate