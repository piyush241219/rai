import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BASE_URL } from '../Server';

export default function Report() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    feature: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const reportIssue = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/feedback-and-report/report-issue`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({ name: '', email: '', issue: '', feature: '' }); // Clear form on success
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  pt-20">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-5">Report an Issue</h2>
        <form onSubmit={reportIssue} className="space-y-4">
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">Issue</label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              rows="3"
            />
          </div>
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">Feature Request</label>
            <textarea
              name="feature"
              value={formData.feature}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 mt-4 font-semibold rounded-lg transition duration-200 ${
              loading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 cursor-pointer'
            } text-white`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              'Submit Report'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
