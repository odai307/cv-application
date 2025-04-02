import "./App.css";
import Sidebar from "./Components/Sidebar.jsx";
import CV from "./Components/CV.jsx";
import { useState } from "react";


const App = () => {

  // React state to manage the forms
  const [formData, setFormData] = useState({
    personalDetails: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: ""
    },

    education: {
      schoolName: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      location: "",
    }
  });

  // React states to manage the object for schools and experience
  const [listData, setListData] = useState({
    education: [],
    experience: []
  })


  const handleFormChange = (e, section) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({ 
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [name]: value
      }
    }));
  }


  const handleAddListData = (section) => {
    // Creates an object from the form with an id
    const newEntry = {
      ...formData[section],
      id: Date.now()
    };

    // Adds the new object to the listData
    setListData((prevListData) => ({
      ...prevListData,
      [section]: [...prevListData[section], newEntry]
    }));

    // Clear the form data
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: Object.keys(prevFormData[section]).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {})
    }));
  }


  const handleRemoveListData = (section, id) => {
    setListData(prevListData => ({
      ...prevListData,
      [section]: prevListData[section].filter(item => item.id !== id)
    }));

    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: Object.keys(prevFormData[section]).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {})
    }));
  }

  return (
    <div className="app">
      <Sidebar 
        formData={formData}
        listData={listData}
        handleFormChange={handleFormChange}
        handleAddListData={handleAddListData}
        handleRemoveListData={handleRemoveListData}
      />
      <CV 
        formData={formData}
        listData={listData}
      />
    </div>
  )
  }

export default App;