import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer";
const MainPage = () => {
      const { t } = useTranslation();
      return (
            <div > <h1 className="pageTitle"> {t('welcome')} </h1>
                  <p className="pageBody"> {t('welcomeBody')}</p>
                  <p> 6920 Parkdale Place, Suite 217, Indianapolis, Indiana 46254   (317) 328-6708
                  </p>

                  <Footer></Footer>
            </div>

      )
}

export default MainPage;