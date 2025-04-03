
const School = ({school}) => {
  return (
    <div className="school">
        <p className="sub-school">{school.startDate} - {school.endDate || "Present"}</p>
        <p className="sub-school sub-school-name">{school.schoolName}</p>
        <p className="sub-school">{school.location}</p>
        <p className="sub-school sub-school-field-of-study">{school.fieldOfStudy}</p>
    </div>
  )
}

export default School;
