import Accordion from "./Accordion";
import BriefCaseIcon from "../assets/icons/briefcase.svg";
import ItemList from "./ItemList";


const Experience = ({formData, listData,  handleRemoveListData, handleFormChange, accordionClicked, addOrCancelBtnClicked, handleAccordionClick, handleAddOrCancelBtnClick, handleSubmit, handleListDataClick}) => {
  return (
    <div className="sidebar-section experiencee">
      <Accordion 
        name="Experience"
        src={BriefCaseIcon}
        accordionClicked={accordionClicked.experience}
        handleAccordionClick={() => handleAccordionClick("experience")}
      />

      <div className={`accordion-content`}>
        <>
          {listData.experience.map((item) => (
            <ItemList key={item.id}
                item={item.companyName}
                accordionClicked={accordionClicked.experience}
                handleListDataClick={() => handleListDataClick("experience", item.id)}
            />
              
          ))}
        </>
        <button className={`btn add-btn ${accordionClicked.experience ? "visible" : "hidden"}`} 
            onClick={() => handleAddOrCancelBtnClick("experience")}>
            Add Experience
        </button>
        <form action="" 
            className={`form-sub-section ${addOrCancelBtnClicked.experience && accordionClicked.experience ? " visible" : "hidden"}`}
            onSubmit={(e) => handleSubmit(e, "experience")}>

            <input type="text" 
                name="companyName"
                value={formData.experience.companyName}
                placeholder="Company Name" 
                onChange={(e) => handleFormChange(e, "experience")} 
                required
            />

            <input 
                type="text" 
                name="position" 
                value={formData.experience.position} 
                placeholder="Position"
                onChange={(e) => handleFormChange(e, "experience")} 
                required
              />

            <input type="text" 
                name="startDate" 
                value={formData.experience.startDate} 
                placeholder="Start Date" 
                onChange={(e) => handleFormChange(e, "experience")}
                required
            />

            <input type="text"
                name="endDate"
                value={formData.experience.endDate} 
                placeholder="End Date" 
                onChange={(e) => handleFormChange(e, "experience")} 
            />

            <input type="text" 
                value={formData.experience.location}
                name="location"
                placeholder="Location"
                onChange={(e) => handleFormChange(e, "experience")}
            />

            <textarea name="jobDescription"
                placeholder="Enter Job Description"
                value={formData.experience.jobDescription}
                onChange={(e) => handleFormChange(e, "experience")}
             ></textarea>

            <div className="btns">
                <button className="btn delete-btn" type="button"
                      onClick={() => {handleRemoveListData("experience")
                        handleAddOrCancelBtnClick("experience")
                      }
                      }>
                        Delete
                </button>
                <button className="btn cancel-btn"
                      type="button"
                      onClick={() => handleAddOrCancelBtnClick("experience")}
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

export default Experience;
