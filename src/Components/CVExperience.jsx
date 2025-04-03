import Work from "./Work";

const CVExperience = ({listData}) => {
  return (
    <div className="cv-experience">
      {listData.length > 0 && <div className={`${""} cv-section-header`}>
        <p>Experience</p>
      </div>}
      <div className="section-content">
       <>
        {listData.map((work) => (
            <Work 
                key={work.id}
                work={work}
            />
        ))}
        {console.log(listData)}
       </>
      </div>
    </div>
  )
}

export default CVExperience;
