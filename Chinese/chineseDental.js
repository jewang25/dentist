import { React, useEffect } from 'react';

export const PatientEducation = () => {
    useEffect(() => {
        window.open('https://www.toothclub.gov.hk/', "_blank");
    }, []);
    return null;


};

export const Dentistry = () => {
    useEffect(() => {
        window.open('http://www.dentistry.com.tw/tw/', "_blank");
    }, []);
    return null;

};


export default PatientEducation;

