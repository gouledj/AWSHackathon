import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    location: '',
    additionalEvacuees: '',
    childrenInParty: '',
    firstPriority: '',
    secondPriority: '',
    mobilityNeeds: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="App">
      <header>
        <h1>Your Path to Verified Information to Evacuate Quickly and Safely</h1>
      </header>

      <section>
        <h2>Sign up to receive tailored notifications!</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section>
        <h2>User Personalization</h2>
        <form onSubmit={handleSubmit}>
          <label>
            # of Additional Evacuees:
            <input
              type="number"
              name="additionalEvacuees"
              value={formData.additionalEvacuees}
              onChange={handleChange}
            />
          </label>
          <label>
            # of Children in Party (Optional):
            <input
              type="number"
              name="childrenInParty"
              value={formData.childrenInParty}
              onChange={handleChange}
            />
          </label>
          <label>
            First Priority:
            <input
              type="text"
              name="firstPriority"
              value={formData.firstPriority}
              onChange={handleChange}
            />
          </label>
          <label>
            Second Priority:
            <input
              type="text"
              name="secondPriority"
              value={formData.secondPriority}
              onChange={handleChange}
            />
          </label>
          <label>
            Mobility Needs (Optional):
            <input
              type="text"
              name="mobilityNeeds"
              value={formData.mobilityNeeds}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section>
        <h2>EvacuAIte Agency Portal</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="agencyEmail"
              value={formData.agencyEmail}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h3>EvacuAIte Portal Allows for Many Strategic Benefits</h3>
          <p>Connects evacuees to agencies to ensure accurate information from a trusted source.</p>
          <p>AI extracts relevant data to provide insights such as shelter need, evacuation heatmap, and current-information chatbot.</p>
          <p>EvacuAIte will translate your messages to ensure critical information is communicated to all.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
