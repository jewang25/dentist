import React from 'react';
import Link from 'react';
import Footer from '../components/footer.js';
import ContactForm from "../components/contactForm.js";

const chineseContact = () => {
    return (
        <div>
            <div> <h1 className="pageTitle"> 联络我们</h1>
                <h2 className="pageHeader"> 王重光牙医诊所 </h2>
                <p className="pageBody"> Methodist Medical Plaza I, Eagle Highland
                    <br></br>
                    6920 Parkdale Place, Suite 217
                    <br></br>
                    Indianapolis, IN 46254</p>
                <p><a target="_blank" href="https://www.google.com/maps/place/6920+Parkdale+Pl,+Indianapolis,+IN+46254/@39.8270758,-86.2849364,17z/data=!3m1!4b1!4m5!3m4!1s0x886ca9919c7bf941:0x8c29e2841be437f9!8m2!3d39.8270717!4d-86.2827477?shorturl=1">地图</a></p>
                <p className="pageBody"> 电话: (317) 328-6708 (说中文找李玲)<br></br>
                    留言: (317) 328-6708<br></br>
                    传真: (317) 328-6888<br></br>
                    邮件: contactus@dentistwong.com</p>
                <p className="pageBody"> 西38街和465交界(465高速公路17号出口)，
                    即Target 对面.</p>
            </div>
            <div>
                <p className="pageBody"> 我们很高兴能为您服务。若您需要进一步的协助或对我们的服务有任何建议，请您填写以下的表格。</p>

            </div>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>

    )
}

export default chineseContact;
