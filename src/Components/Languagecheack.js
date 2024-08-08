import "../i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import "flag-icon-css/css/flag-icons.min.css";
import i18next from 'i18next';
import Cookies from 'js-cookie';
import { useEffect,useState } from 'react';
export default function Languagecheack() {
    const [language,setlanguage]=useState([
       
        {
          code :"en",
          name:"English",
          country_code:"gb"
        },
        {
          code :"ar",
          name:"العربية",
          country_code:"sa",
          dir:"rtl"
        }
      ]);
      const [activeLangCode, setActiveLangCode] = useState(Cookies.get('i18next')||"en");
      const [activelang, setactivelang] = useState( language.find(l => l.code === activeLangCode));
      
      useEffect(()=>{
        document.body.dir=activelang.dir || "ltr";  
      },[activelang])
    return <Dropdown >
    <Dropdown.Toggle  id="dropdown-basic" className="nav-link" >
    {activelang.name}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {
        language.map((lang)=>{
          return  <Dropdown.Item   key={lang.country_code} onClick={()=>{
            i18next.changeLanguage(lang.code); 
            setActiveLangCode(lang.code); 
            setactivelang(lang)
            document.body.dir=lang.dir || "ltr";  
          }} >{lang.name}</Dropdown.Item>
        })
      }
    
    </Dropdown.Menu>
  </Dropdown>
}