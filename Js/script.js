function setDescription(alt, img) {
    const titleElement = document.querySelector('.img-title');
    titleElement.textContent = alt;
    titleElement.style.color = "white" ;
    titleElement.style.backgroundImage = `url(${img})`;
    titleElement.style.backgroundSize = "cover";
    titleElement.style.backgroundPosition = "center"; 

}
function setTitle(alt){
    return alt ;
}
function unsetDescription(){
    document.querySelector('.img-title').textContent = "Hover over the img to show its description" ;
    document.querySelector('.img-title').style.color = "black" ;
    document.querySelector('.img-title').style.backgroundImage = null ;
    
}
function randomBg(){
    const colors = ["#ff000033","#00ff0044","#0000ff44","#ffffff44","#f9f90044"] ;
    const color = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[color] ;
}