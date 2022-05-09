

function encriptar(){
 var button = document.getElementById("copiar");
 button.disabled = false;
 var str =  document.getElementById('txtbox').value;
 str = str.toLowerCase();
 var element = document.getElementById('resultado');
 str = str.replaceAll('e', 'enter');
 str = str.replaceAll('i', 'imes');
 str = str.replaceAll('a', 'ai');
 str = str.replaceAll('o', 'ober');
 str = str.replaceAll('u', 'ufat');
 element.innerHTML=str;
}

function desencriptar(){
 var button = document.getElementById("copiar");
 button.disabled = false;
 var str =  document.getElementById('txtbox').value;
 str = str.toLowerCase();
 var element = document.getElementById('resultado');
 str = str.replaceAll('enter', 'e');
 str = str.replaceAll('imes', 'i');
 str = str.replaceAll('ai', 'a');
 str = str.replaceAll('ober', 'o');
 str = str.replaceAll('ufat', 'u');
 element.innerHTML=str;

}

function copiar(){
    var content = document.getElementById('resultado').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}