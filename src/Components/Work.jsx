

const Work = ({work}) => {
  return (
    <div className="work">
       <p className="sub-work">{work.startDate} - {work.endDate || "Present"}</p>
        <p className="sub-work sub-work-name">{work.companyName}</p>
        <p className="sub-work">{work.location}</p>
        <p className="sub-work sub-work-position">{work.position}</p>
        <p className="sub-work sub-work-description">{work.jobDescription}</p>
        <p></p>
    </div>
  )
}

export default Work;
