import "../styles/FormAccordion.css";
import Triangle from "../assets/icons/triangle-outline.svg";


export default function FormAccordion({title, className, onClick}) {


    return (
        <>
           <div className="collapsable" onClick={onClick}>
                <p>{title}</p>
                <img src={Triangle} alt="Triangle Outline" className={`${className} icon triangle-icon`}/>
           </div>
        </>
    );
}
