import "../Styles/CV.css"
import CVPersonalDetails from "./CVPersonalDetails";
import CVEducation from "./CVEducation";
import CVExperience from "./CVExperience";

 const CV = ({listData, formData}) => {
    return (
        <div className="main-cv" id="main-cv">
            <CVPersonalDetails 
                formData={formData}
            />
            <CVEducation 
                listData={listData.education}
            />
            <CVExperience 
                listData={listData.experience}
            />
        </div>
    )
}

export default CV;