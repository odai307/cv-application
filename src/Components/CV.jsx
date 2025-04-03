import "../Styles/CV.css"
import CVPersonalDetails from "./CVPersonalDetails";
import CVEducation from "./CVEducation";
import CVExperience from "./CVExperience";

 const CV = ({listData, personalDetails}) => {
    return (
        <div className="main-cv">
            <CVPersonalDetails 
                personalDetails={personalDetails}
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