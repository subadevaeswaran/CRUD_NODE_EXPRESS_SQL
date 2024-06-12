import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
        <div className='flex justify-end p-2'>
        <Link className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700' to="/create">Create</Link>
        </div>
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2 px-4">ID</th>
              <th className="w-1/4 py-2 px-4">Name</th>
              <th className="w-1/4 py-2 px-4">Email</th>
              <th className="w-1/4 py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index} className="text-center even:bg-gray-100 odd:bg-white">
                <td className="py-2 px-4">{student.ID}</td>
                <td className="py-2 px-4">{student.Name}</td>
                <td className="py-2 px-4">{student.Email}</td>
                <td className="py-3 px-6 mx-2 flex justify-center space-x-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Update</button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
