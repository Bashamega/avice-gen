import './master.sass'
const isMobile = window.innerWidth < 768;
if(isMobile){
  document.getElementById('mobile-divider').classList.add('show')
}else{
  document.getElementById('desktop-divider').classList.add('show')
}