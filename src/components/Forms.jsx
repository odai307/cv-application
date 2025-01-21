import "../styles/Forms.css";
import Button from "./Button";

export default function Form({formType, className, formDetails, setFormDetails}) {


    function handleChange(e) {
        const {name, value} = e.target
        switch(formType) {
            case "personalInformation":
                setFormDetails((prev) => ({
                    ...prev,
                    personalInformation: {
                        ...prev.personalInformation,
                        [name]: value
                    }
                }))
            break;
            case "education":
                setFormDetails((prev) => ({
                    ...prev,
                    education: {
                        ...prev.education,
                        [name]: value
                    }
                }))
            break;
            case "experience":
                setFormDetails((prev) => ({
                    ...prev,
                    experience: {
                        ...prev.experience,
                        [name]: value
                    }
                }))
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function FormPersonalInformation () {
        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" placeholder="Full Name"
                    value={formDetails.personalInformation.fullName}
                    onChange={handleChange}
                    name="fullName"
                />
                <input 
                    type="email" placeholder="Email Address"
                    value={formDetails.personalInformation.email}
                    onChange={handleChange}
                    name="email"
                />
                <input 
                    type="tel" placeholder="Phone Number"
                    value={formDetails.personalInformation.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                />
                <input 
                    type="text" placeholder="Github Profile"
                    value={formDetails.personalInformation.githubProfile}
                    onChange={handleChange}
                    name="githubProfile"
                />
            </form>
        )
    }


    function FormEducation() {
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text" placeholder="Name of School"
                    value={formDetails.education.schoolName}
                    onChange={handleChange}
                    name="schoolName"
                />
                <input
                    type="text" placeholder="Programme of Study"
                    value={formDetails.education.programmeOfStudy}
                    onChange={handleChange}
                    name="programmeOfStudy"
                />
                <input 
                    type="text" placeholder="Location"
                    value={formDetails.education.location}
                    onChange={handleChange}
                    name="location"
                />
                <input 
                    type="text" placeholder="Start Date"
                    value={formDetails.education.startDate}
                    onChange={handleChange}
                    name="startDate"
                />
                <input 
                    type="text" placeholder="End Date"
                    value={formDetails.education.endDate}
                    onChange={handleChange}
                    name="endDate"
                />
                <Button content="Add Education"/>
            </form>
        )
    }

    function FormExperience() {
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text" placeholder="Name of Institution"
                    value={formDetails.experience.nameOfInstitution}
                    onChange={handleChange}
                    name="nameOfInstitution"
                />
                <input
                    type="text" placeholder="Position"
                    value={formDetails.experience.position}
                    onChange={handleChange}
                    name="position"
                />
                <input 
                    type="text" placeholder="Location"
                    value={formDetails.experience.location}
                    onChange={handleChange}
                    name="location"
                />
                <input 
                    type="text" placeholder="Start Date"
                    value={formDetails.experience.startDate}
                    onChange={handleChange}
                    name="startDate"
                />
                <input 
                    type="text" placeholder="End Date"
                    value={formDetails.experience.endDate}
                    onChange={handleChange}
                    name="endDate"
                />
                <textarea 
                    name="responsibilities"
                    onChange={handleChange}
                    value={formDetails.experience.responsibilities}
                >

                </textarea>
                <Button content="Add Experience" />
            </form>
        )
    }

    function renderForm() {
        switch(formType) {
            case "personalInformation":
                return FormPersonalInformation();
            case "education":
                return FormEducation();
            case "experience":
                return FormExperience();
        }
    }

        return (
            <div className={className}>
                {renderForm()}
            </div>
        )
}