import React from "react";
import Footer from '../components/footer.js'
import SignupForm from "../components/appointmentForm.js";
import { Link } from 'react-router-dom';
export const officeInfo = () => {
  return (
    <div>
      office
    </div>
  )
}

export const services = () => {
  return (
    <div >

      <h1 className="pageTitle"> Our Services</h1>
      <h2 className="pageHeader"> COSMETIC DENTISTRY </h2>
      <ul className="pageList">
        <li> White Fillings</li>
        <li> Teeth Whitening</li>
        <li> Lumineers (No-Shot, No-Pain Alternative to Traditional Veneers</li>
        <li> Invisalign (Invisible Braces)</li>
      </ul>
      <h2 className="pageHeader"> PAINLESS DENTISTRY </h2>
      <ul className="pageList">
        <li> Sedation Dentistry (Nitrous Oxide and Sleeping Pills)</li>
        <li> Drill-Less, Needle-Less Fillings</li>

      </ul>
      <h2 className="pageHeader"> GENERAL DENTISTRY </h2>
      <ul className="pageList">
        <li> Comprehensive Examination</li>
        <li> Root Canal Therapy</li>
        <li> Crowns and Bridges</li>
        <li> Partials and Dentures</li>
        <li> Extractions</li>
        <li> Dental Implant</li>
        <li> Children Dental Care</li>
        <li> Emergency Dental Care</li>

      </ul>
      <h2 className="pageHeader"> DENTAL HYGIENE </h2>
      <p className="pageBody"> Special equipment (Prophy-Jet) available for patients having braces or heavy stains</p>
      <ul className="pageList">
        <li> Prophylaxis (Teeth Cleaning)</li>
        <li> Non-Surgical Periondontal Treatment</li>
        <li> Ultrasound Scaling</li>
        <li> Pit and Fissure Sealants</li>
        <li> Desensitizing of Sensitive Teeth</li>
        <li> Fluoride Treatments</li>
        <li> Bad Breath Treatments</li>
      </ul>
      <Footer></Footer>
    </div>
  );
};

export const hours = () => {
  return (
    <div >
      <h1 className="pageTitle"> Office Hours</h1>
      <h2 className="pageHeader"> Monday	 	8:30 a.m. - 5:30 p.m </h2>
      <h2 className="pageHeader"> Tuesday	 	8:30 a.m. - 5:30 p.m </h2>
      <h2 className="pageHeader"> Wednesday	 	1:00 p.m. - 7:00 p.m </h2>
      <h2 className="pageHeader"> Thursday	 	8:30 a.m. - 5:30 p.m </h2>

      <h2 className="pageHeader"> Friday	 	9:00 a.m. - 1:00 p.m </h2>
      <p className="pageBody"> (2nd and 4th week of the month) </p>
      <h2 className="pageHeader"> Saturday	 	9:00 a.m. - 1:00 p.m </h2>
      <p className="pageBody"> (1st and 3rd week of the month)
      </p>
      <h2 className="pageHeaderItalics"> A Gentle and Caring Dentist You Can Trust
        for
        You and Your Children </h2>
      <h2 className="pageHeaderItalics">Most Insurance and Medicaid Accepted </h2>
      <h2 className="pageHeader">  EMERGENCY and NEW PATIENTS
        WELCOME</h2>
      <h2 className="pageHeader"> Please Call (317) 328-6708 <br></br>
        Or click here to make an appointment online</h2>
      <Footer></Footer>
    </div>

  );
};
export const sterilization = () => {
  return (
    <div >
      <h1 className="pageTitle"> Sterilization</h1>
      <p className="pageBody"> Sterilization methods used by our staff meets or exceeds every requirement made by the Federal Occupational Safety and Health Administration (OSHA).
        <br></br><br></br>
        A prominent issue in today's health care is control of the spread of infectious diseases, such as, COVID-19, AIDS, herpes, hepatitis, and even the common cold. We share your concerns about this important issue. </p>
      <ul>
        <li className="pageHeader">Barrier Techniques</li>
        <p className="pageBody"> We got PPE and air purifiers. We wear disposable masks and gloves, changing them between each patient.</p>
        <li className="pageHeader">Disinfectant Wipe-Down</li>
        <p className="pageBody"> We clean all operatory surfaces prior to each patient. </p>
        <li className="pageHeader">Instrument Sterilization</li>
        <p className="pageBody"> We use the most effective system available in the world today to assure the sterility of our instruments. </p>
      </ul>
    </div>
  );
};
export const financialpolicy = () => {
  return (
    <div>
      <h1 className="pageTitle"> Financial Policy</h1>
      <p className="pageBody">Our office is committed to providing you with the best possible care. If you have dental insurance we are anxious to help you receive your maximum allowable benefit. We accept most insurance and Medicaid.
        <br></br>
        Fees are due in full at the time services are rendered. Fees for crowns, bridges, partials, dentures, root canals, and other multiple appointment procedures are due in full at the initial appointment of the procedure. Estimated copayments for patients with insurance are due in full at the time services are rendered. We accept cash, checks, Visa, MasterCard, Discover and American Express.
        <br></br>
        Our office will be glad to answer any questions you may have regarding your insurance coverage. However, you must realize that your insurance is a contract between you, your employer, and your insurance company. We are not part of that contract. Our office files insurance claims as a courtesy to our patients, but all charges are your responsibility from the date services are rendered. We realize that temporary financial problems can affect payment on your account. If such problems arise, please contact us immediately so that financial arrangements can be made. Convenient payment plans are available.</p>
    </div>
  );
};
export const appointment = () => {
  return (
    <div >
      <h1 className="pageTitle"> Appointment</h1>
      <p className="pageBody"> Please feel free to call us at (317) 328-6708 or fill out the form below to set up your next appointment. If you've already got an appointment but have forgotten the date and time, We can give you that information as well. We strive to work with your schedule to make appointments as convenient as possible.
        <br></br>
        Due to the ever growing demand for our services, we kindly request that if your appointment cannot be kept that you notify us 24 hours in advance. This will give us the opportunity to give another patient the opportunity to obtain treatment sooner. While we realize that emergencies do happen and that they are not anticipated, any and all efforts are appreciated.
        <br></br>
        For new patient or for existing patient who would like to update your information, please click here to download the forms.</p>
      <SignupForm></SignupForm>
    </div>


  );
};
export const form = () => {
  return (
    <div >
      <h1 className="pageTitle"> Forms</h1>
      <p className="pageBody"> Please click download to view the form, print it out and bring it to the office to save your time.</p>
      <p className="pageBody"> Dental Registry and History: <Link to="/Forms/DentalRegistration.jpg" target="_blank" download>Download</Link></p>
      <p className="pageBody"> Dental Health History: <Link to="/Forms/DentalHealthHistory.jpg" target="_blank" download>Download</Link></p>
      <p className="pageBody"> HIPPA: <Link to="/Forms/HIPPA.jpg" target="_blank" download>Download</Link></p>
      <p className="pageBody"> Acknowledgement of HIPPA: <Link to="/Forms/AcknowledgementHIPPA.jpg" target="_blank" download>Download</Link></p>
    </div>
  );
};
