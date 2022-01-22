import './App.css';
import Header from './components/header';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Slideshow from './components/imageGallery';
import { React, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import EnglishApp from './englishApp';
import ChineseApp from './chineseApp';


function App() {

  // window resize
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  //set language
  const [language, setLanguage] = useState("english");
  /* const { t, i18n } = useTranslation();
  function changeLanguage(lng) {
    i18n.changeLanguage(lng.target.value);

  } */

  const changeToEnglish = () => {
    setLanguage("english")
  }


  const changeToChinese = () => {
    setLanguage("chinese")
  }


  //app component
  return (
    <Router>
      <div className="App">
        {/* header */}
        <div className="name"> RAYMOND WONG, D.D.S, M.S.D. </div>
        <div className="headerContainer">
          <div style={{ width: "95%", borderTop: "1px solid darkblue" }} > <Header />  </div>
          <div className="gallery"> <Slideshow /> </div>
        </div>
        {/* select language */}
        <div className="languageChoice">
          <button className="languageButton" onClick={changeToEnglish} value='en'>English</button>
          <button className="languageButton" onClick={changeToChinese} value='ch'>中文简体</button>
        </div>
        {/*determines language*/}
        {language === "english" ? <EnglishApp />
          : <ChineseApp />}
      </div>
    </Router >
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


export default App;
