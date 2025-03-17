import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    role: "",
    format: "",
    skillLevel: "",
    location: "",
    availability: "",
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/login");
    } else {
      setUser(userData);
      setFormData(userData);
    }
  }, [navigate]);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Profile Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${user.id}`, formData);
      localStorage.setItem("user", JSON.stringify(formData));
      setUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="relative p-6 min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        {/* Hamburger Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-xl bg-white shadow-md rounded-full"
          >
            <FiMenu />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-10">
              <ul className="p-2">
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setIsEditing(true); setMenuOpen(false); }}>
                  Edit Profile
                </li>
                <li className="p-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  <Link to="/settings">Settings</Link>
                </li>
                <li className="p-2 hover:bg-red-100 text-red-500 cursor-pointer" onClick={() => { handleLogout(); setMenuOpen(false); }}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Edit Profile Form */}
      {isEditing ? (
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Profile</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Full Name" required />
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Username" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Email" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Phone Number" required />
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Age" required />
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Location" required />
            <select name="availability" value={formData.availability} onChange={handleChange} className="w-full p-2 border rounded-lg">
              <option value="mornings">Mornings</option>
              <option value="afternoons">Afternoons</option>
              <option value="evenings">Evenings</option>
              <option value="weekends">Weekends</option>
            </select>
            <div className="flex justify-between">
              <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">Save Changes</button>
            </div>
          </form>
        </div>
      ) : (
        /* Show User Details */
        <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
          {user ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.fullName}</h2>
              <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-gray-600"><strong>Role:</strong> {user.role}</p>
            </>
          ) : (
            <p>Loading user details...</p>
          )}
        </div>
      )}

      {/* User Activity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Cricket Statistics</h3>
          <p className="text-gray-600">View your recent match stats and performance.</p>
          <Link to="/stats" className="text-blue-500 hover:underline">View Stats →</Link>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Turf Bookings</h3>
          <p className="text-gray-600">Check your upcoming turf bookings and reservations.</p>
          <Link to="/bookings" className="text-blue-500 hover:underline">View Bookings →</Link>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Tournaments</h3>
          <p className="text-gray-600">Manage your tournament registrations and results.</p>
          <Link to="/tournaments" className="text-blue-500 hover:underline">View Tournaments →</Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
