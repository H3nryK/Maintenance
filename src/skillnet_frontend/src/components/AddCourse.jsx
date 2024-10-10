import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AddCourse = ({ backendActor, onCourseAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tokenReward, setTokenReward] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await backendActor.createCourse(title, description, Number(tokenReward));
      if (result.ok) {
        onCourseAdded();
        setTitle('');
        setDescription('');
        setTokenReward(0);
      } else {
        console.error('Error creating course:', result.err);
      }
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tokenReward">
            Token Reward
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tokenReward"
            type="number"
            placeholder="Token Reward"
            value={tokenReward}
            onChange={(e) => setTokenReward(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Course
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;