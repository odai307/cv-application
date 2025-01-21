import "../styles/Resume.css";
import ResumeHeader from "./ResumeHeader";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";


export default function Resume({formDetails}) {
    return (
        <div className="resume-section">
           <ResumeHeader 
            formDetails={formDetails}
           />
           <ResumeEducation 
            formDetails={formDetails}
           />
           <ResumeExperience 
            formDetails={formDetails}
           />
        </div>
    )
}