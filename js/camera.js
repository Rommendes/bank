const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const novaFoto = document.querySelector("[data-tirar-nova-foto]");
const bontaoEnviarFoto = document.querySelector("[data-enviar] ");

let imagemURL = '';

botaoIniciarCamera.addEventListener("click", tirarFoto)
    async function tirarFoto(){
        const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({video: true, audio: false})
    
    botaoIniciarCamera.style.display ="none";
    campoCamera.style.display ="block";

    video.srcObject = iniciarVideo;

    
}
//botaoTirarFoto.addEventListener("click", function(){
//    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.heigth);
//
//    imagemURL = canvas.toDataURL('image/jpeg');

 //   campoCamera.style.display = "none";
 //   mensagem.style.display = "block"

//   
//});
botaoTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

novaFoto.addEventListener("click", () => {
    mensagem.style.display = "none";
    botaoIniciarCamera.style.display = "block";
    tirarFoto();
})

bontaoEnviarFoto.addEventListener("click", ()=> {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem =imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html";
})