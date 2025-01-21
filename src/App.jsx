import './App.css';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {

  const [formDetails, setFormDetails] = useState({
    "personalInformation": {
      fullName: "",
      email: "",
      phoneNumber: "",
      githubProfile: ""
    },
    "education": {
      schoolName: "",
      programmeOfStudy: "",
      startDate: "",
      endDate: "",
      location: ""
    },
    "experience": {
      nameOfInstitution: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
      location: ""
    }
  })


  return (
    <div className='content'>
      <Sidebar 
        formDetails = {formDetails}
        setFormDetails={setFormDetails}
      />
      <Resume 
       formDetails={formDetails}
      />
    </div>
  )
}

export default App
