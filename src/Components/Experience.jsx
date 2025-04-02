import Accordion from "./Accordion";
import BriefCaseIcon from "../assets/icons/briefcase.svg";
const Experience = () => {
  return (
    <div className="sidebar-section experiencee">
      <Accordion 
        name="Experience"
        src={BriefCaseIcon}
      />
    </div>
  )
}

export default Experience;
