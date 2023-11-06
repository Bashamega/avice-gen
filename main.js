import './master.sass'
const isMobile = window.innerWidth < 768;
if(isMobile){
  document.getElementById('divider').src ="public/images/pattern-divider-mobile.svg"
}else{
  document.getElementById('divider').src ="public/images/pattern-divider-desktop.svg"
}