import "../styles/ResumeEducation.css"

export default function ResumeEducation({formDetails}) {
    return (
        <div className="education-section section-resume">
            <h3 className="section-title">Education</h3>
            <div className="education-section-content">
                <div className="education-section-item">{`${formDetails.education.startDate} - ${formDetails.education.endDate}`}</div>
                <div className="education-section-item school-name">{formDetails.education.schoolName}</div>
                <div className="education-section-item">{formDetails.education.location}</div>
                <div className="education-section-item">{formDetails.education.programmeOfStudy}</div>
            </div>
        </div>
    )
}

