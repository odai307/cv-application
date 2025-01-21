import "../styles/ResumeHeader.css"
import EmailIcon from "../assets/icons/email-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import GithubIcon from "../assets/icons/github.svg"

export default function ResumeHeader({formDetails}) {
    return (
       <div className="resume-header section-resume">
            <div className="full-name header-item">
                <span>{formDetails.personalInformation.fullName}</span>
            </div>
            <div className="email header-item">
                {formDetails.personalInformation.email &&  <img src={EmailIcon} alt="" className="icon"/>}
                <span>{formDetails.personalInformation.email}</span>
            </div>
            <div className="phone-number header-item">
                {formDetails.personalInformation.phoneNumber &&  <img src={PhoneIcon} alt="" className="icon"/>}
                <span>{formDetails.personalInformation.phoneNumber}</span>
            </div>
            <div className="githut-profile header-item">
                {formDetails.personalInformation.githubProfile && <img src={GithubIcon} className="icon"/>}
                <span>{formDetails.personalInformation.githubProfile}</span>
            </div>
       </div>
    )
}