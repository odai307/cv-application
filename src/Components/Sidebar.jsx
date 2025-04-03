import "../Styles/Sidebar.css";

import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";



const Sidebar = ({formData, setFormData, listData, handleFormChange, handleAddListData,  handleRemoveListData}) => {

   const [accordionClicked, setAccordionClicked] = useState({
        education: false,
        experience: false
   })

   const [addOrCancelBtnClicked, setAddOrCancelBtnClicked] = useState({
        education: false,
        experience: false
   })


   const handleAddOrCancelBtnClick = (section) => {
        setAddOrCancelBtnClicked(prevAddOrCancelBtnClick => ({
            ...prevAddOrCancelBtnClick,
            [section]: !prevAddOrCancelBtnClick[section]
        }))
   }


   const handleAccordionClick = (section) => {
    setAccordionClicked(prevAccordionClick => ({
        ...prevAccordionClick,
        [section]: !prevAccordionClick[section]
    }))
   }

   const handleSubmit = (e, section) => {
        e.preventDefault();
        handleAddListData(section);
        handleAddOrCancelBtnClick(section)
   }


   const handleListDataClick = (section, id) => {
        const selectedItem = listData[section].find(item => item.id === id);

        if (selectedItem) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [section]: {...selectedItem, id}
            }));
        }

      setAccordionClicked(prevAccordionClick => ({
        ...prevAccordionClick,
        [section]: true
      }));

      setAddOrCancelBtnClicked(prevAddOrCancelBtnClick => ({
        ...prevAddOrCancelBtnClick,
        [section]: true
      }))

   }

    return (
        <div className="sidebar">
            <PersonalDetails
                formData={formData}
                handleFormChange={handleFormChange}
            />
            <Education 
                formData={formData}
                listData={listData}
                accordionClicked={accordionClicked}
                handleAccordionClick={handleAccordionClick}
                addOrCancelBtnClicked={addOrCancelBtnClicked}
                handleAddOrCancelBtnClick={handleAddOrCancelBtnClick}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit}
                handleRemoveListData={handleRemoveListData}
                handleListDataClick={handleListDataClick}
            />
            <Experience 
                formData={formData}
                listData={listData}
                accordionClicked={accordionClicked}
                handleAccordionClick={handleAccordionClick}
                addOrCancelBtnClicked={addOrCancelBtnClicked}
                handleAddOrCancelBtnClick={handleAddOrCancelBtnClick}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit}
                handleRemoveListData={handleRemoveListData}
                handleListDataClick={handleListDataClick}
            />
        </div>
    )
}

export default Sidebar;