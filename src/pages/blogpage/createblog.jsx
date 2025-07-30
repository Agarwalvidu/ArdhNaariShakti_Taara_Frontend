import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';

const CreateBlog = () =>{
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        photo: null,
    });
    const navigate = useNavigate();

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }));
    };

    const handleFileChange = (e) =>{
        setFormData(prev => ({
            ...prev, photo: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        navigate('/blog');
    }

    return (
        <>
            <div className='create-blog-container'>
                <div className='create-blog-form'>
                    <h2>Create New Blog Post</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Blog Title *</label>
                            <input 
                                type='text' 
                                id='title' 
                                name='title' 
                                value={formData.title} 
                                onChange={handleInputChange} 
                                placeholder='Enter blog title...' 
                                required 
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='desc'>Blog Content *</label>
                            <textarea 
                                id="desc" 
                                name="desc" 
                                value={formData.desc} 
                                onChange={handleInputChange} 
                                placeholder='Write your blog content here...' 
                                rows="10" 
                                required 
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='photo'>Blog Image</label>
                            <input 
                                type='file' 
                                id='photo' 
                                name='photo'
                                onChange={handleFileChange} 
                                accept='image/*' 
                            />
                            {formData.photo && (
                                <div className='image-preview'>
                                    <img 
                                        src={URL.createObjectURL(formData.photo)} 
                                        alt='Preview' 
                                        style={{maxWidth: '200px', maxHeight: '200px'}} 
                                    />
                                </div>
                            )}
                        </div>

                        <div className='form-actions'>
                            <button 
                                type='button' 
                                className='cancel-btn' 
                                onClick={()=> navigate('/blog')}
                            >
                                Cancel
                            </button>
                            <button 
                                type='submit' 
                                className='submit-btn'
                            >Create Blog post!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateBlog;