const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const novaFoto = document.querySelector("[data-tirar-nova-foto]");


botaoIniciarCamera.addEventListener("click", tirarFoto)
    async function tirarFoto(){
        const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({video: true, audio: false})
    
    botaoIniciarCamera.style.display ="none";
    campoCamera.style.display ="block";

    video.srcObject = iniciarVideo;

    let imagemURL = "";
}
botaoTirarFoto.addEventListener("click", function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.heigth)

    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block"
})


novaFoto.addEventListener("click", () => {
    mensagem.style.display = "none";
    botaoIniciarCamera.style.display = "block";
    tirarFoto;
})