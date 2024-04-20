import * as  SwitcherData from '../pages/switcher-data/switcher-data';
export const LightTheme = () => {
    if(document.querySelector(".app")){
        document.querySelector(".app").classList.add("light-mode");
        document.querySelector(".app").classList.remove("dark-mode");
    }
    let html = document.querySelector("html");
    html.style = "";
    SwitcherData.OpacityValuePrimary();
    localStorage.clear();
};
export function dark() {
    if(document.querySelector(".app")){
        document.querySelector(".app").classList.add("dark-mode");
        document.querySelector(".app").classList.remove("light-mode");
    }

    let html = document.querySelector("html");
    html.style = "";
    SwitcherData.OpacityValuePrimary();
    localStorage.clear();
};
export const LtrtoRtl = () => {
    if(document.querySelector(".app")){
        document.querySelector(".app")?.classList.add("rtl");
        document.querySelector(".app")?.classList.remove("ltr");
    }
    document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${process.env.PUBLIC_URL === 'production' ? "/" : "https://nextjs.spruko.com/sash/preview/assets"}/plugins/bootstrap/css/bootstrap.rtl.min.css`);

    localStorage.setItem("sashrtl", 'true');
    localStorage.removeItem("sashltr");
};
export const RtltoLtr = () => {
    if(document.querySelector(".app")){
        document.querySelector(".app")?.classList.add("ltr");
        document.querySelector(".app")?.classList.remove("rtl");
    }
    document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${process.env.PUBLIC_URL === 'production' ? "/" : "https://nextjs.spruko.com/sash/preview/assets"}/plugins/bootstrap/css/bootstrap.min.css`);

    localStorage.setItem("sashltr", 'true');
    localStorage.removeItem("sashrtl");
};
export function resetData() {
    let lighttheme = document.querySelector("#myonoffswitch1"); 
    lighttheme.checked = true;   //lighttheme
    let Ltr = document.querySelector("#myonoffswitch23"); 
    document.getElementById("bootstrapLink")?.setAttribute("href", `${process.env.PUBLIC_URL === 'production' ? "/" : "https://nextjs.spruko.com/sash/preview/assets"}/plugins/bootstrap/css/bootstrap.min.css`);
    Ltr.checked = true;   //lighttheme
    if(document.querySelector(".app")){
        document.querySelector(".app").classList.remove("rtl");
        document.querySelector(".app").classList.remove("dark-mode");
    }
}
