import React, { useState } from 'react';
import axios from 'axios';

const AddContent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ageRating: '',
    genre: '',
    educationalValue: false,
  });

  const { title, description, ageRating, genre, educationalValue } = formData;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/content/add', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Content added successfully');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={onChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={description} onChange={onChange}></textarea>
      </div>
      <div>
        <label>Age Rating:</label>
        <input type="text" name="ageRating" value={ageRating} onChange={onChange} required />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" name="genre" value={genre} onChange={onChange} required />
      </div>
      <div>
        <label>Educational Value:</label>
        <input type="checkbox" name="educationalValue" checked={educationalValue} onChange={onChange} />
      </div>
      <button type="submit">Add Content</button>
    </form>
  );
};

export default AddContent;
