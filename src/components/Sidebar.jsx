import "../styles/Sidebar.css"
import FormAccordion from "./FormAccordion";
import Form from "./Forms";
import { useState } from "react";


export default function Sidebar({formDetails, setFormDetails}) {

    const [accordionStates, setAccordionStates] = useState({
        personalInformation: false,
        education: false,
        experience: false
    })

    function handleClick(type) {
        setAccordionStates((prevStates) => ({
                ...prevStates,
                [type]: !prevStates[type]
            }))
        }

    return (
        <div className="sidebar">
            <FormAccordion 
                title="Personal Information"
                onClick={() => handleClick("personalInformation")}
                className={accordionStates.personalInformation ? "rotated": ""}
            />
            <Form 
                formType="personalInformation"
                className={accordionStates.personalInformation ? "form-visible" : "form-hidden"}
                formDetails={formDetails}
                setFormDetails={setFormDetails}
            />
            <FormAccordion 
                title="Education"
                onClick={() => handleClick("education")}
                className={accordionStates.education ? "rotated": ""}
            />
            <Form 
                formType="education"
                className={accordionStates.education ? "form-visible" : "form-hidden"}
               formDetails={formDetails}
               setFormDetails={setFormDetails}
            />
            <FormAccordion 
                title="Experience"
                onClick={() => handleClick("experience")}
                className={accordionStates.experience ? "rotated": ""}
            />
           <Form 
                formType="experience"
                className={accordionStates.experience ? "form-visible" : "form-hidden"}
                formDetails={formDetails}
                setFormDetails={setFormDetails}
            />
        </div>
    )
}