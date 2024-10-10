import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AddCourse from './AddCourse';

const Dashboard = ({ backendActor, onLogout }) => {
  const [courses, setCourses] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [showAddCourse, setShowAddCourse] = useState(false);

  useEffect(() => {
    fetchCourses();
    fetchUserProfile();
  }, []);

  const fetchCourses = async () => {
    try {
      const result = await backendActor.getAllCourses();
      if (result.ok) {
        setCourses(result.ok);
      } else {
        console.error('Error fetching courses:', result.err);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const result = await backendActor.getUser();
      if (result.ok) {
        setUserProfile(result.ok);
      } else {
        console.error('Error fetching user profile:', result.err);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleCourseAdded = () => {
    fetchCourses();
    setShowAddCourse(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/logo.svg" alt="SkillNet" />
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/profile" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
              <button onClick={onLogout} className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome back, {userProfile?.username}!</h1>
          
          <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900">Your Progress</h2>
              <div className="mt-3 flex justify-between items-center">
                <div className="text-sm font-medium text-gray-500">Level {userProfile?.level}</div>
                <div className="text-sm font-medium text-gray-500">{userProfile?.xp} XP</div>
              </div>
              <div className="mt-2 relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(userProfile?.xp % 100) / 100 * 100}%` }}
                    transition={{ duration: 1 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">Wallet Balance: {userProfile?.tokenBalance} SKN</div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Available Courses</h2>
            <button
              onClick={() => setShowAddCourse(!showAddCourse)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              {showAddCourse ? 'Hide' : 'Add Course'}
            </button>
          </div>

          {showAddCourse && (
            <AddCourse backendActor={backendActor} onCourseAdded={handleCourseAdded} />
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <motion.div 
                key={course.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 truncate">{course.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{course.description}</p>
                  <div className="mt-4">
                    <Link 
                      to={`/course/${course.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
