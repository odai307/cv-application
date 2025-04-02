import Accordion from "./Accordion";
import ItemList from "./ItemList";
import SchoolIcon from "../assets/icons/school.svg";


const Education = ({formData, listData,  handleRemoveListData, handleFormChange, accordionClicked, addOrCancelBtnClicked, handleAccordionClick, handleAddOrCancelBtnClick, handleSubmit}) => {

  return (
    <div className="sidebar-section education">
        <Accordion 
            name="Education"
            src={SchoolIcon}
            accordionClicked={accordionClicked.education}
            handleAccordionClick={() => handleAccordionClick("education")}
        />
        <div className={`accordion-content`}>
            <>
                {listData.education.map((item) => (
                    <ItemList key={item.id}
                        item={item.schoolName}
                        accordionClicked={accordionClicked.education}
                    />
                    
                ))}
            </>
            <button className={`btn add-btn ${accordionClicked.education ? "visible" : "hidden"}`} 
                onClick={() => handleAddOrCancelBtnClick("education")}>
                Add Education
            </button>
            <form action="" 
                className={`form-sub-section ${addOrCancelBtnClicked.education && accordionClicked.education ? " visible" : "hidden"}`}
                onSubmit={(e) => handleSubmit(e, "education")}>

                <input type="text" 
                    name="schoolName"
                    value={formData.education.schoolName}
                    placeholder="School Name" 
                    onChange={(e) => handleFormChange(e, "education")} 
                    required
                />

                <input 
                    type="text" 
                    name="fieldOfStudy" 
                    value={formData.education.fieldOfStudy} 
                    placeholder="Field of Study"
                    onChange={(e) => handleFormChange(e, "education")} 
                    required
                 />

                <input type="text" 
                    name="startDate" 
                    value={formData.education.startDate} 
                    placeholder="Start Date" 
                    onChange={(e) => handleFormChange(e, "education")}
                    required
                />

                <input type="text"
                    name="endDate"
                    value={formData.education.endDate} 
                    placeholder="End Date" 
                    onChange={(e) => handleFormChange(e, "education")} 
                />

                <input type="text" 
                    value={formData.education.location}
                    name="location"
                    placeholder="Location"
                    onChange={(e) => handleFormChange(e, "education")}
                />

                <div className="btns">
                    <button className="btn delete-btn" type="button"
                         onClick={(e) => {
                                e.preventDefault();
                               }}>
                            Delete
                    </button>
                    <button className="btn cancel-btn"
                         type="button"
                         onClick={() => handleAddOrCancelBtnClick("education")}
                    >Cancel
                    </button>
                    <button className="btn save-btn" type="submit">
                            Save
                    </button>
                </div>

            </form>
      </div>
    </div>
  )
}

export default Education
