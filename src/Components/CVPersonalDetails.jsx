
import EmailIcon from "../assets/icons/email-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import LocationIcon from "../assets/icons/location-icon.svg";


const CVPersonalDetails = ({personalDetails}) => {
  return (
    <div className="cv-section cv-personal-details">
      <div className="cv-full-name cv-personal-details-sub-section">
        {personalDetails.fullName}
      </div>
      <div className="cv-email cv-personal-details-sub-section">
        {personalDetails.email && <img src={EmailIcon} className="icon"/>}
        {personalDetails.email}
      </div>
      <div className="cv-phone-number cv-personal-details-sub-section">
        {personalDetails.phoneNumber && <img src={PhoneIcon} className="icon"/>}
        {personalDetails.phoneNumber}
      </div>
      <div className="cv-address cv-personal-details-sub-section">
        {personalDetails.address && <img src={LocationIcon} className="icon"/>}
        {personalDetails.address}
      </div>
    </div>
  )
}

export default CVPersonalDetails;
