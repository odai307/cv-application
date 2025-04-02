
import EmailIcon from "../assets/icons/email-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import LocationIcon from "../assets/icons/location-icon.svg";


const CVPersonalDetails = ({formData}) => {
  return (
    <div className="cv-section cv-personal-details">
      <div className="cv-full-name cv-personal-details-sub-section">
        {formData.personalDetails.fullName}
      </div>
      <div className="cv-email cv-personal-details-sub-section">
        {formData.personalDetails.email && <img src={EmailIcon} className="icon"/>}
        {formData.personalDetails.email}
      </div>
      <div className="cv-phone-number cv-personal-details-sub-section">
        {formData.personalDetails.phoneNumber && <img src={PhoneIcon} className="icon"/>}
        {formData.personalDetails.phoneNumber}
      </div>
      <div className="cv-address cv-personal-details-sub-section">
        {formData.personalDetails.address && <img src={LocationIcon} className="icon"/>}
        {formData.personalDetails.address}
      </div>
    </div>
  )
}

export default CVPersonalDetails;
