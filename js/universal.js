/* VARIABLES */
// Cookies Names
const themeName = "theme";
const languageName = "language";
const zoomName = "zoom";

// Managing Theme
let theme;
const indexCss = document.getElementById("stylesheet");
const themeIcon = document.getElementById("themeicon");
const logos = document.getElementsByClassName("logoimage");

/* COOKIES */

function setCookie(cname, cvalue, exdays) {
    /*Function to set Cookies taken from https://www.w3schools.com/js/js_cookies.asp*/
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    /*Function to get Cookies taken from https://www.w3schools.com/js/js_cookies.asp*/
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


/*FUNCTIONS*/

function initialSetting(){
    theme = getCookie(themeName);
    console.log("Valor de la cookie 'theme':", getCookie("theme"));

    if( theme === null || theme === "" || theme === undefined ){
        theme = "1";
    }

    if ( theme === "2" ){
        indexCss.href = '../css/indexDark.css';
        themeIcon.src = '../images/index/lightmode.svg';
        for (var i = 0; i < logos.length; i++) {
            var logo = logos[i];
            logo.src = '../images/index/logosimplewhite.svg';
        }
    }else if ( theme === "1" ){
        indexCss.href = '../css/indexLight.css';
        themeIcon.src = '../images/index/darkmode.svg';
        for (var i = 0; i < logos.length; i++) {
            var logo = logos[i];
            logo.src = '../images/index/logosimple.svg';
        }
    }
}

function display(id,typeDisplay){
    /*Function to add a display css option to an element by accesing its ID.*/
    element = document.getElementById(id);
    element.style.display = typeDisplay;
}

function changeTheme(){
    /*Function in charge to change the theme of the app*/

    if(indexCss.href.includes('indexLight.css')){
        indexCss.href = '../css/indexDark.css';
        themeIcon.src = '../images/index/lightmode.svg';
        for (var i = 0; i < logos.length; i++) {
            var logo = logos[i];
            logo.src = '../images/index/logosimplewhite.svg';
        }
        setCookie(themeName, "2", 4);
    }
    else if(indexCss.href.includes('indexDark.css')){
        indexCss.href = '../css/indexLight.css';
        themeIcon.src = '../images/index/darkmode.svg';
        for (var i = 0; i < logos.length; i++) {
            var logo = logos[i];
            logo.src = '../images/index/logosimple.svg';
        }
        setCookie(themeName, "1", 4);
    }
}

initialSetting()
