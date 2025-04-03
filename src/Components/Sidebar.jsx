import "../Styles/Sidebar.css";

import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";
import DeleteIcon from "../assets/icons/delete.svg";



const Sidebar = ({formData, setFormData, listData, handleFormChange, handleAddListData,  handleRemoveListData, clearAll, downloadCVAsPdf}) => {

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
            <div className="clear-resume" onClick={clearAll}>
                <img src={DeleteIcon} alt=""  className="icon"/>
                <p>Clear Resume</p>
            </div>
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
            <div className="download">
                <button className="download-btn"
                    onClick={downloadCVAsPdf}>
                        Download Cv
                </button>
            </div>
        </div>
    )
}

export default Sidebar;