import "../Styles/CV.css"
import CVPersonalDetails from "./CVPersonalDetails";
import CVEducation from "./CVEducation";

 const CV = ({formData, listData}) => {
    return (
        <div className="main-cv">
            <CVPersonalDetails 
                formData={formData}
            />
            <CVEducation 
                listData={listData.education}
            />
        </div>
    )
}

export default CV;