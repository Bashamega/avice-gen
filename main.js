import './master.sass'
const isMobile = window.innerWidth < 768;
if(isMobile){
  document.getElementById('mobile-divider').classList.add('show')
  document.getElementById('screen').style.maxWidth = "295px"
}else{
  document.getElementById('desktop-divider').classList.add('show')
}
function generate(){
  fetch('https://api.adviceslip.com/advice')
  .then(res=>res.json())
  .then((data) =>{
    const title = `Advice #${data.slip.id}`
    const advice = data.slip.advice
    document.getElementById('title').innerHTML = title
    document.getElementById('advice').innerHTML = `"${advice}"`
  })
}
generate()
document.getElementById('random').addEventListener('click', generate)