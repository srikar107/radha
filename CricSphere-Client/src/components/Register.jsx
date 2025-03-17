import Card from "./Card";
import CardContent from "./CardContent";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    role: "",
    format: "",
    skillLevel: "",
    location: "",
    availability: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure all required fields are filled
      const requiredFields = ['fullName', 'username', 'email', 'phone', 'password', 'age', 'role', 'location', 'availability'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
        return;
      }

      // Send registration data to the server
      const response = await axios.post(`http://localhost:5000/users`, formData);
      console.log("Registration successful:", response.data);
      
      // Create a login entry
      await axios.post(`http://localhost:5000/users`, {
        username: formData.username,
        password: formData.password
      });
      
      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      alert("Registration failed. Please try again.");
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-[600px] p-8 shadow-lg bg-white rounded-lg">
        <CardContent>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
            {step === 1 ? "Basic Info" : step === 2 ? "Cricket Profile" : "Booking Preferences"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Full Name</label>
                  <Input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg" 
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Username</label>
                  <Input 
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg" 
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg" 
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Phone</label>
                  <Input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg" 
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Password</label>
                  <Input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg" 
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <Button 
                    type="button" 
                    onClick={nextStep} 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
                  >
                    Next: Cricket Profile
                  </Button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Age</label>
                  <Input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg" 
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Preferred Role</label>
                  <select 
                    name="role" 
                    value={formData.role} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg bg-white"
                  >
                    <option value="">Select Role</option>
                    <option value="Batsman">Batsman</option>
                    <option value="Bowler">Bowler</option>
                    <option value="All-Rounder">All-Rounder</option>
                    <option value="Wicketkeeper">Wicketkeeper</option>
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Format</label>
                  <select 
                    name="format" 
                    value={formData.format} 
                    onChange={handleChange} 
                    className="w-full p-3 border rounded-lg bg-white"
                  >
                    <option value="">Select Format</option>
                    <option value="T20">T20</option>
                    <option value="ODI">ODI</option>
                    <option value="Test">Test</option>
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Skill Level</label>
                  <select 
                    name="skillLevel" 
                    value={formData.skillLevel} 
                    onChange={handleChange} 
                    className="w-full p-3 border rounded-lg bg-white"
                  >
                    <option value="">Select Skill Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
                <div className="flex justify-between mt-4 gap-4">
                  <Button 
                    type="button" 
                    onClick={prevStep} 
                    className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
                  >
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={nextStep} 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
                  >
                    Next: Booking
                  </Button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Preferred Location</label>
                  <Input 
                    type="text" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg" 
                    placeholder="Enter preferred location"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Availability</label>
                  <select 
                    name="availability" 
                    value={formData.availability} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded-lg bg-white"
                  >
                    <option value="">Select Availability</option>
                    <option value="mornings">Mornings</option>
                    <option value="afternoons">Afternoons</option>
                    <option value="evenings">Evenings</option>
                    <option value="weekends">Weekends</option>
                  </select>
                </div>
                <div className="flex justify-between mt-4 gap-4">
                  <Button 
                    type="button" 
                    onClick={prevStep} 
                    className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
                  >
                    Complete Registration
                  </Button>
                </div>
              </>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;