import "../styles/ResumeExperience.css"

export default function ResumeExperience({formDetails}) {
    return (
        <div className="experience-section section-resume">
            <h3 className="section-title">Professional Experience</h3>
            <div className="education-section-content">
                <div className="experience-section-item">{`${formDetails.experience.startDate} - ${formDetails.experience.endDate}`}</div>
                <div className="experience-section-item school-name">{formDetails.experience.nameOfInstitution}</div>
                <div className="experience-section-item">{formDetails.experience.location}</div>
                <div className="experience-section-item">{formDetails.experience.position}</div>
                <div className="experience-section-item responsibilities">{formDetails.experience.responsibilities}</div>
            </div>
        </div>
    )
}