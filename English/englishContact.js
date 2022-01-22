import React from 'react';
import Footer from '../components/footer.js';
import ContactForm from "../components/contactForm.js";

const englishContact = () => {
    return (
        <div>
        <div> <h1 className = "pageTitle"> Contact Us</h1>
        <h2 className = "pageHeader"> RAYMOND WONG, D.D.S, M.S.D. </h2>
        <p className = "pageBody"> Methodist Medical Plaza I, Eagle Highland
<br></br>
6920 Parkdale Place, Suite 217
<br></br>
Indianapolis, IN 46254</p> 
<p className = "pageBody"> Phone: (317) 328-6708 <br></br>
Fax: (317) 328-6888</p>
<p className = "pageBody"> From I-465 Take I-465 to the 38th Street exit #17. Take 38th Street west to Shore Drive and turn right (North). Take Shore Drive to Eagle Highlands Way and turn left (West) and follow signs to the Methodist Medical Plaza I building #6920 (on the left side of the road).</p>
</div>
<div>
    <p className = "pageBody"> Please feel free to fill out the form below to comment or make suggestions about how we can improve to serve you better. However, the information you send to us is not secured by encryption. If you are concerned about sending information through web, please call our office.
For new patient or for existing patient who would like to update your information, please click here to download the forms.</p>

</div>
<ContactForm></ContactForm>
<Footer></Footer>
</div>
        
    )}

export default englishContact;
