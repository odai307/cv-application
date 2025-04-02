import ChevronUpLogo from "../assets/icons/chevron-up.svg";


const Accordion = ({name, accordionClicked, handleAccordionClick, src}) => {
    
  return (
    <div className="accordion" onClick={handleAccordionClick}>
        <img src={src} alt="" className="icon icon-accordion"/>
      <p>{name}</p>
      <img src={ChevronUpLogo} alt="" className={`${accordionClicked ? "rotated": ""} icon icon-accordion chervon-up-icon`}/>
    </div>
  )
}

export default Accordion;
