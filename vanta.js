window.addEventListener('DOMContentLoaded', () => {
    VANTA.FOG({
    el: '#vanta',
    
touchControls: true,
gyroControls: true,
minHeight: 1280.00,
minWidth: 720.00,
backgroundAlpa:0.0,
Scale: 1.00,
ScaleMobile:1.00,
highlightColor: 0xc825a1,
midtoneColor: 0x1c79cd,
lowlightColor: 0xc0410f,
baseColor: 0xf0c0c,
speed: 5.00,
zoom: 2.00,
quantity:1.00,
cohesion:5.0,

    })
 })

let musicas=[
    {Titulo:'Dear Are You Getting Sober', artista:'Merami Pop', 
    src:'music/dear_are_you_getting_sober', img:'images/fge.jpeg' }
]
let musica = document.querySelector('audio');
let imagem = document.querySelector('img');

document.querySelector('.botao-play').addEventListener('click', tocar_musica);
document.querySelector('.botao-pause').addEventListener('click', pausar_musica);
document.querySelector('.proximo').addEventListener('click', rendermusic);
document.querySelector('.voltar').addEventListener('click', rendermusic);
 
musica.addEventListener('timeupdate',att_barra)
 
let tempo_final = document.querySelector('.fim');
tempo_final.textContent = muda_segundos(Math.floor(musica.duration))

let nomeMusica = document.querySelector('.descript h2');
let nomeArtista = document.querySelector('.descript i');




function rendermusic(index){}

 function tocar_musica()
 {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
 }
function pausar_musica(){

    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

 }
function att_barra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) *100)+'%';
    let tempo_decorrido = document.querySelector('.inicio');
    tempo_decorrido.textContent = muda_segundos(Math.floor(musica.currentTime));
}
function muda_segundos(segundos){

    let campo_minuto = Math.floor(segundos /60);
    let campo_segundos = segundos % 60;
    if(campo_segundos < 10 ){
        campo_segundos = '0' + campo_segundos;
        
        
    }
    return campo_minuto+':'+campo_segundos;

}


