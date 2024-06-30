import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContentList = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/content/all');
        setContent(res.data);
      } catch (err) {
        alert('Error fetching content');
      }
    };
    fetchContent();
  }, []);

  return (
    <div>
      <h2>Content List</h2>
      <ul>
        {content.map((item) => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Age Rating: {item.ageRating}</p>
            <p>Genre: {item.genre}</p>
            <p>Educational: {item.educationalValue ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
