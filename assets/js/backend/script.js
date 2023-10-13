$("#btnSubmitContact").click(function() {
    
    var nombre = document.getElementById("nameInputContact").value;
    var email = document.getElementById("emailInputContact").value;
    var message = document.getElementById("msgInputContact").value;
    var xhr;
    //FECHA 
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();
        if(dd<10) {dd='0'+dd} 
        if(mm<10) {mm='0'+mm} 
        today = dd+'/'+mm+'/'+yyyy;
    var hora = hour+":"+minutes;
    //FIN FECHA

    if(validateNameOrMessage(nombre)){

        if(validateEmail(email)){

            if(validateNameOrMessage(message)){

    xhr = new XMLHttpRequest();
    var url = "http://www.javadoh.com:8400/contact/newMessage";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4){
           if(xhr.status == 200 || xhr.status == 202 || xhr.status == 0) {
            console.log("OK");

            document.getElementById("contact").innerHTML = "<CENTER><img src='assets/images/orange-check.png' />" +"<br><br>"+
            "<h2 class='tittle' style='color:#FFFFFF'>"+ "¡GRACIAS!"+"</h2>"+ "<h2 class='tittle' style='color:#ff871c'>" 
            +"TU MENSAJE HA SIDO ENVIADO CON EXITO." +"</h2>"
            +"<br><br>"+ "<span class='tittle-line' style='background:#ff871c'>" +"</span></CENTER>";

            }else{
                console.log("Error: "+xhr.readyState);

            document.getElementById("contact").innerHTML = "<CENTER>"+
            "<h2 class='tittle' style='color:#FFFFFF'>"+ "LO SENTIMOS "+"</h2>"+ "<h2 class='tittle' style='color:#ff871c'>" 
            +"Ocurrió un error enviando el mensaje, por favor intenta más tarde." +"</h2>"
            +"<br><br>"+ "<span class='tittle-line' style='background:#ff871c'>" +"</span></CENTER>";
            }
        }
    }

    xhr.onerror= function() {
        alert("Error fetching " + url);

        document.getElementById("contact").innerHTML = "<CENTER>"+
            "<h2 class='tittle' style='color:#FFFFFF'>"+ "LO SENTIMOS "+"</h2>"+ "<h2 class='tittle' style='color:#ff871c'>" 
            +"Ocurrió un error enviando el mensaje, por favor intenta más tarde." +"</h2>"
            +"<br><br>"+ "<span class='tittle-line' style='background:#ff871c'>" +"</span></CENTER>";
    }
    
    try{
    var data = JSON.stringify({"fecha": today, "hora": hora, "name": nombre,"email": email, "message": message});
    xhr.send(data);
    }catch(e){
          document.getElementById("contact").innerHTML = "<CENTER>"+
            "<h2 class='tittle' style='color:#FFFFFF'>"+ "LO SENTIMOS "+"</h2>"+ "<h2 class='tittle' style='color:#ff871c'>" 
            +"Ocurrió un error enviando el mensaje, por favor intenta más tarde." +"</h2>"
            +"<br><br>"+ "<span class='tittle-line' style='background:#ff871c'>" +"</span></CENTER>";
    }

    }else{

            if(!document.getElementById("errorMsg")){
                document.getElementById("msgInputContact").outerHTML+="<p id='errorMsg' style='color:#ff0000'>Por favor ingresa un mensaje válido</p>";
            }

        if(document.getElementById("errorEmail")){
            var elemEmail = document.getElementById("errorEmail");
            elemEmail.parentNode.removeChild(elemEmail);
        }
        if(document.getElementById("errorNombre")){
            var elemNom = document.getElementById("errorNombre");
            elemNom.parentNode.removeChild(elemNom);
        }
    }

    }else{

            if(!document.getElementById("errorEmail")){
            document.getElementById("emailInputContact").outerHTML+="<p id='errorEmail' style='color:#ff0000'>Por favor ingresa un email válido</p>";
            }

        if(document.getElementById("errorMsg")){
            var elemMsg = document.getElementById("errorMsg");
            elemMsg.parentNode.removeChild(elemMsg);
        }
        if(document.getElementById("errorNombre")){
            var elemNom = document.getElementById("errorNombre");
            elemNom.parentNode.removeChild(elemNom);
        }
        //document.getElementById("emailInputContact").placeholder = "Debes ingresar un nombre email válido.";
        //alert("Debes ingresar un email válido");
    }

    }else{
            if(!document.getElementById("errorNombre")){
            document.getElementById("nameInputContact").outerHTML+="<p id='errorNombre' style='color:#ff0000'>Por favor ingresa un nombre válido</p>";
            }
        
        if(document.getElementById("errorEmail")){
            var elemEmail = document.getElementById("errorEmail");
            elemEmail.parentNode.removeChild(elemEmail);
        }
        if(document.getElementById("errorMsg")){
            var elemMsg = document.getElementById("errorMsg");
            elemMsg.parentNode.removeChild(elemMsg);
        }
    }

});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateNameOrMessage(value){
    var re = /^[A-Za-z0-9.,]+$/;
    return re.test(value);
}

/*$(document).ready(function () {
    if (!Modernizr.websockets) {
        alert('WebSockets are not supported.');
        return;
    }

    var settings = {
    	host: 'ws://localhost:9000',
    	pictureContainerID: 'menu-area',
    	pictureID: 'picture',
    	titleID: 'title'
    };

    pixSocket.connect(settings);
});*/



