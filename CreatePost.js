import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: title,
      body: body
    };

    axios.post('YOUR_API_ENDPOINT_HERE', post)
      .then(response => {
        alert("Post created successfully!");
      })
      .catch(error => {
        console.error("There was an error creating the post", error);
      });
  }

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;