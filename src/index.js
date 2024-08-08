import React, { useState,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icons.min.css";

import "./i18next";
import App from './App';



// function App() {
//   const [language,setlanguage]=useState([
//     {
//       code :"fr",
//       name:"francais",
//       country_code:"fr"
//     },
//     {
//       code :"en",
//       name:"english",
//       country_code:"gb"
//     },
//     {
//       code :"ar",
//       name:"العربية",
//       country_code:"sa",
//       dir:"rtl"
//     }
//   ]);
//   const [activeLangCode, setActiveLangCode] = useState(Cookies.get('i18next')||"en");
//   const [activelang, setactivelang] = useState( language.find(l => l.code === activeLangCode));
  
//   const { t } = useTranslation();
//   useEffect(()=>{
//     document.body.dir=activelang.dir || "ltr";  
//   },[activelang])
//   return <>
//    <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//       {activelang.name}
//       </Dropdown.Toggle>
//         {/* {activelang.name} */}
//       <Dropdown.Menu>
//         {
//           language.map((lang)=>{
//             return  <Dropdown.Item key={lang.country_code} onClick={()=>{
//               i18next.changeLanguage(lang.code); 
//               setActiveLangCode(lang.code); 
//               setactivelang(lang)
//               document.body.dir=lang.dir || "ltr";  
//             }} ><span className={'flag-icon flag-icon-'+lang.country_code+" mx-2"}></span>{lang.name}</Dropdown.Item>
//           })
//         }
       
//       </Dropdown.Menu>
//     </Dropdown>
//     <h1>{t("Welcome to React")}</h1>
//   </>;
// }

// append app to dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback> 
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
