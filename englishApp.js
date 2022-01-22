import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import englishMeet from './English/englishMeet';
import MainPage from './English/Main';
import { services, hours, sterilization, financialpolicy, appointment, form } from "./English/englishOffice";
import englishContact from './English/englishContact';
import { React } from 'react';
import { PatientEducation, Invisalign, Guides, Opalescence, Lumineers, Zoom } from './English/englishDental';
import Gallery from './English/englishPhotos';
import Video from './English/englishVideo';
import { useTranslation } from "react-i18next";
import photoTitle from "./components/img/photogallery.gif"

const EnglishApp = () => {
  const { t, i18n } = useTranslation();
  /* function changeLanguage(lng) {
    i18n.changeLanguage(lng.target.value);

  } */


  return (

    <div className="welcome">

      <div className="sidebar"><Sidebar /></div>

      <div className="siteBody">
        <Switch>
          <Route path="/meet" component={englishMeet}></Route>
          <Route path="/officeinfo/services" component={services} />
          <Route path="/officeinfo/hours" component={hours} />
          <Route path="/officeinfo/sterilization" component={sterilization} />
          <Route path="/officeinfo/financialpolicy" component={financialpolicy} />
          <Route path="/officeinfo/appointment" component={appointment} />
          <Route path="/officeinfo/forms" component={form} />
          <Route path="/officeinfo"></Route>
          <Route path="/contact" component={englishContact}></Route>
          <Route path="/dentalInfo/education" component={PatientEducation} />
          <Route path="/dentalInfo/guides" component={Guides} />
          <Route path="/dentalInfo/opalescence" component={Opalescence} />
          <Route path="/dentalInfo/zoom" component={Zoom} />
          <Route path="/dentalInfo/lumineers" component={Lumineers} />
          <Route path="/dentalInfo/invisalign" component={Invisalign} />
          <Route path="/photos" >
            <img src={photoTitle}></img>
            <Gallery></Gallery>
          </Route>
          <Route path="/video" component={Video}></Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </div >
  );
}



export default EnglishApp;