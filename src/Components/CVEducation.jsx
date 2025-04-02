import School from "./School";
const CVEducation = ({listData}) => {
  return (
    <div className="cv-education">
      <div className={`${""} cv-section-header`}>
        <p>Education</p>
      </div>
      <div className="section-content">
       <>
        {listData.map((school) => (
            <School 
                key={school.id}
                school={school}
            />
        ))}
        {console.log(listData)}
       </>
      </div>
    </div>
  )
}

export default CVEducation;