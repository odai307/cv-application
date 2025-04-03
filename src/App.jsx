import "./App.css";
import Sidebar from "./Components/Sidebar.jsx";
import CV from "./Components/CV.jsx";
import { useEffect, useState } from "react";


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
    },

    experience: {
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      jobDescription: ""
    }
  });

  const [personalDetails, setPersonalDetails] = useState(() => {
    const savedData = localStorage.getItem("personalDetails");
    return savedData ? JSON.parse(savedData) : formData.personalDetails;
  })

  // React states to manage the object for schools and experience
  const [listData, setListData] = useState(() => {
    const savedData = localStorage.getItem("listData");
    return savedData ? JSON.parse(savedData) : {education: [], experience: []};
  }
  );


  useEffect(() => {
    localStorage.setItem("personalDetails", JSON.stringify(personalDetails))
  }, [personalDetails])


  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(listData));
  }, [listData]);


  const handleFormChange = (e, section) => {
    const {name, value} = e.target;
    if (section === "personalDetails") {
      setPersonalDetails((prevPersonalDetails) => ({
        ...prevPersonalDetails,
        [name]: value
      }))
    }
    setFormData((prevFormData) => ({ 
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [name]: value
      }
    }));
  }


  const handleAddListData = (section) => {
    // Checks if the form data clicked has an id
   const {id} = formData[section];

   if (id) {
      setListData((prevListData) => ({
        ...prevListData,
        [section]: prevListData[section].map((item) => item.id == id ? {...formData[section]} : item)
      }));
   } else {
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
  }

    // Clear the form data
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: Object.keys(prevFormData[section]).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {})
    }));
  }


  const handleRemoveListData = (section) => {
    setListData(prevListData => ({
      ...prevListData,
      [section]: prevListData[section].filter(item => item.id !== formData[section].id)
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
        setFormData={setFormData}
        listData={listData}
        handleFormChange={handleFormChange}
        handleAddListData={handleAddListData}
        handleRemoveListData={handleRemoveListData}
      />
      <CV 
        listData={listData}
        personalDetails={personalDetails}
      />
    </div>
  )
  }

export default App;