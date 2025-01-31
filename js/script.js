console.log("Isso é apenas um teste")
import ehUmCPF from "../js/valida-cpf.js";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur", ()=>verificaCampo(campo));
})

function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
        
}