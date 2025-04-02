
const PersonalDetails = ({formData, handleFormChange}) => {
  return (
    <div className="sidebar-section personal-details">
      <h3 className="sidebar-section-title">Personal Details</h3>
      <form action="">
        <input type="text"
            name="fullName"
            value={formData.personalDetails.fullName}
            onChange={(e) => handleFormChange(e, "personalDetails")}
            placeholder="Full Name"
            required
        />

        <input type="text"
            name="email"
            value={formData.personalDetails.email}
            onChange={(e) => handleFormChange(e, "personalDetails")}
            placeholder="Email"
            required
        />
        
        <input type="text"
            name="phoneNumber"
            value={formData.personalDetails.phoneNumber}
            onChange={(e) => handleFormChange(e, "personalDetails")}
            placeholder="Phone Number"
        />

        <input type="text"
            name="address"
            value={formData.personalDetails.address}
            onChange={(e) => handleFormChange(e, "personalDetails")}
            placeholder="Address"
        />
      </form>
    </div>
  )
}

export default PersonalDetails
