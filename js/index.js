//variables para llamar a los elementos q vamos a usar en las funciones
const form = document.getElementById('form');
const body = document.getElementById('body');
const card = document.getElementById('card');
const input = document.getElementById('mensaje');
const mensajes = document.getElementById('mensajes');


//evento para escuchar a que emojic se da click y activar funcion
form.addEventListener('click',(e)=>{
    if(input.value != ''){
    e.preventDefault();

    if(e.target.id=="feliz"){
        cambiar('rgb(253,234,220)','linear-gradient(180deg, rgba(253,234,220,1) 2%, rgba(249,187,141,1) 50%, rgba(245,164,100,1) 100%, rgba(243,147,71,1) 100%)','#F3E600','#F5AB05');
        agregarMensaje(input.value,'Feliz','feliz');
    }
    if(e.target.id=="tranquila"){
        cambiar('rgb(240,247,244)','linear-gradient(180deg, rgba(240,247,244,1) 2%, rgba(205,230,219,1) 50%, rgba(177,217,200,1) 100%, rgba(154,208,185,1) 100%)','#6BC2BD','white');
        agregarMensaje(input.value,'tranquila','tranquilo');
        
    }
    if(e.target.id=="triste"){
        cambiar('rgb(224,223,228)','linear-gradient(180deg, rgba(224,223,228,1) 2%, rgba(155,152,165,1) 50%, rgba(85,83,104,1) 100%, rgba(32,29,53,1) 100%), rgba(243,147,71,1) 100%)','#27295A','white');
        agregarMensaje(input.value,'Triste','triste');
  
    }

    if(e.target.id=="enojada"){
        cambiar('rgb(250,224,225)','linear-gradient(180deg, rgba(250,224,225,1) 2%, rgba(233,152,145,1) 50%, rgba(219,94,88,1) 100%, rgba(205,39,34,1) 100%)','#EE7579','white');
        agregarMensaje(input.value,'Enojado','enojado');
  
    }
}
});

//funcion para cambiar el color
function cambiar(fondo,degra,card,comillas){
    body.style.setProperty(' --fondo-body',fondo);
    body.style.setProperty('--fondo-bodt-degra',degra);
    body.style.setProperty('--card-back',card);
    body.style.setProperty('--color-comillas',comillas);

}

//funcion para agregar mensaje
function agregarMensaje(mensaje, emocion, color){
    const html=`
    <div class='mensajes__contenedor ${color}'>
    <h4 class='mensajes__text'>${mensaje}</h4><label class='mensajes__emocion'>${emocion}</label>
    </div>
    `;
    mensajes.insertAdjacentHTML('beforeend',html);

    input.value ='';
}
