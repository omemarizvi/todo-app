import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Link } from 'react-router-dom';

// Form to create tasks 
function TaskForm(props) {

  // constants defined
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('work');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [completed, setComplete] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDeadlineChange = (value) => {
    setDeadline(value.toDate());
  };

  const handleCompleteChange = (event) => {
    setComplete(event.target.checked);
  };

  // checks if required fields are filled and creates new task on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("bruh", title, event.category, description, deadline, completed, "bruh")
    if (title.trim() === '' || category.trim() === '' || !deadline) {
      alert('Please fill out all required fields');
      return;
    }

    const newTask = {
      title: title,
      category: category,
      description: description,
      deadline: deadline,
      completed: completed
    };
    console.log(newTask)
    props.onTaskCreate(newTask);
    setTitle('');
    setDescription('');
    setDeadline('');
    setComplete(false);
  };

  return (
    <div>
        <div>
          <h2>Create Task</h2>
        <form onSubmit={handleSubmit}>
        <label>
          Title (Required):
          <br/>
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Category (Required):
          <select value={category} onChange={handleCategoryChange}>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Deadline (Required):
          <Datetime value={deadline} onChange={handleDeadlineChange} />
        </label>
        <br />
        <label>
          Complete:
          <input type="checkbox" checked={completed} onChange={handleCompleteChange} />
        </label>
        <br />
        <button className='button' type="submit" >Create</button>
      </form>
      </div>
    </div>
  );
}

export default TaskForm;
