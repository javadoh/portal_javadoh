var textCostoAcumulado;
var costoAcumulado;
var costoAcumuladoCache;
var costo;
var paginaActual;
var numeroAtras;
var seleccionesId;

$("#btnBegin").on("click", function() {
    $.ajaxSetup({
    'beforeSend' : function(xhr) {
        xhr.overrideMimeType('text/html; charset=ISO-8859-1');
    },
});
$("#container").load("pages/page1.html"); 
}); 

function volver(){
    var paginaDestino = "pages/page";
    $("#id_precio_estimado")[0].innerText = "Costo Temporal: " + $("#costoHide").val() + " $";
    paginaActual = $("#wrapper .container div:first").attr("id");
    //$("#container:first-child").attr("id");
    paginaActual = paginaActual.substring(4, paginaActual.length);
    var numeroAtras = parseInt(paginaActual) -1;
    paginaDestino = paginaDestino+String(numeroAtras)+".html";
    $("#container").load(paginaDestino); 
} 

// ########## PAGE 1 #############//
function img11Click(){
costoAcumulado = 30;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
$("#costoHide").val(costoAcumulado);
seleccionesId = $("#text1_1").text();
$("#nroPag")[0].innerText = "2/11";
$("#container").load("pages/page2.html"); 
}
function img12Click(){
costoAcumulado = 20;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
$("#costoHide").val(costoAcumulado);
seleccionesId = $("#text1_2").text();
$("#nroPag")[0].innerText = "2/11";
$("#container").load("pages/page2.html"); 
}
function img13Click(){
costoAcumulado = 10;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
$("#costoHide").val(costoAcumulado);
seleccionesId = $("#text1_3").text();
$("#nroPag")[0].innerText = "2/11";
$("#container").load("pages/page2.html"); 
}

//############## PAGE 2 ###############//
function img21Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 50;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text2_1").text();
$("#nroPag")[0].innerText = "3/11";
$("#container").load("pages/page3.html"); 
}
function img22Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 20;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text2_2").text();
$("#nroPag")[0].innerText = "3/11";
$("#container").load("pages/page3.html"); 
}
function img23Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 20;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text2_3").text();
$("#nroPag")[0].innerText = "3/11";
$("#container").load("pages/page3.html"); 
}


//############## PAGE 3 ###############//
function img31Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 4000;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text3_1").text();
$("#nroPag")[0].innerText = "4/11";
$("#container").load("pages/page4.html"); 
}
function img32Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 2000;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text3_2").text();
$("#nroPag")[0].innerText = "4/11";
$("#container").load("pages/page4.html"); 
}
function img33Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 1000;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text3_3").text();
$("#nroPag")[0].innerText = "4/11";
$("#container").load("pages/page4.html"); 
}

function img34Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 500;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text3_4").text();
$("#nroPag")[0].innerText = "4/11";
$("#container").load("pages/page4.html"); 
}

//############## PAGE 4 ###############//
function img41Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 4000;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text4_1").text();
$("#nroPag")[0].innerText = "5/11";
$("#container").load("pages/page5.html"); 
}
function img42Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 2000;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text4_2").text();
$("#nroPag")[0].innerText = "5/11";
$("#container").load("pages/page5.html"); 
}
function img43Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 1000;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text4_3").text();
$("#nroPag")[0].innerText = "5/11";
$("#container").load("pages/page5.html"); 
}

function img44Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 500;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text4_4").text();
$("#nroPag")[0].innerText = "5/11";
$("#container").load("pages/page5.html"); 
}

//############## PAGE 5 ###############//
function img51Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 1050;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text5_1").text();
$("#nroPag")[0].innerText = "6/11";
$("#container").load("pages/page6.html"); 
}
function img52Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 2300;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text5_2").text();
$("#nroPag")[0].innerText = "6/11";
$("#container").load("pages/page6.html"); 
}
function img53Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 1420;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text5_3").text();
$("#nroPag")[0].innerText = "6/11";
$("#container").load("pages/page6.html"); 
}

function img54Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 500;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text5_4").text();
$("#nroPag")[0].innerText = "6/11";
$("#container").load("pages/page6.html"); 
}


//############## PAGE 6 ###############//
function img61Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 50;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text6_1").text();
$("#nroPag")[0].innerText = "7/11";
$("#container").load("pages/page7.html"); 
}
function img62Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 300;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text6_2").text();
$("#nroPag")[0].innerText = "7/11";
$("#container").load("pages/page7.html"); 
}
function img63Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 20;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text6_3").text();
$("#nroPag")[0].innerText = "7/11";
$("#container").load("pages/page7.html"); 
}

//############## PAGE 7 ###############//
function img71Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 500;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text7_1").text();
$("#nroPag")[0].innerText = "8/11";
$("#container").load("pages/page8.html"); 
}
function img72Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 100;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text7_2").text();
$("#nroPag")[0].innerText = "8/11";
$("#container").load("pages/page8.html"); 
}
function img73Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 200;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text7_3").text();
$("#nroPag")[0].innerText = "8/11";
$("#container").load("pages/page8.html"); 
}

//############## PAGE 8 ###############//
function img81Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 700;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text8_1").text();
$("#nroPag")[0].innerText = "9/11";
$("#container").load("pages/page9.html"); 
}
function img82Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 800;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text8_2").text();
$("#nroPag")[0].innerText = "9/11";
$("#container").load("pages/page9.html"); 
}
function img83Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 900;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text8_3").text();
$("#nroPag")[0].innerText = "9/11";
$("#container").load("pages/page9.html"); 
}

//############## PAGE 9 ###############//
function img91Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 80;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text9_1").text();
$("#nroPag")[0].innerText = "10/11";
$("#container").load("pages/page10.html"); 
}
function img92Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 80;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text9_2").text();
$("#nroPag")[0].innerText = "10/11";
$("#container").load("pages/page10.html"); 
}
function img93Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 90;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text9_3").text();
$("#nroPag")[0].innerText = "10/11";
$("#container").load("pages/page10.html"); 
}

//############## PAGE 9 ###############//
function img101Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 80;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text10_1").text();
$("#nroPag")[0].innerText = "11/11";
//OCULTAMOS DIV TOP ROW
$('.rowTop').hide();
$("#container").load("pages/fin.html", function () {
    setParamsFin();
});
}
function img102Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 80;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text10_2").text();
$("#nroPag")[0].innerText = "11/11";
//OCULTAMOS DIV TOP ROW
$('.rowTop').hide();
$("#container").load("pages/fin.html", function () {
    setParamsFin();
});
}
function img103Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 90;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text10_3").text();
$("#nroPag")[0].innerText = "11/11";
//OCULTAMOS DIV TOP ROW
$('.rowTop').hide();
$("#container").load("pages/fin.html", function () {
    setParamsFin();
});
}
function img104Click(){
$("#costoHide").val(costoAcumulado);
costoAcumulado += 90;
$("#id_precio_estimado")[0].innerText = "Costo Temporal: " + costoAcumulado + " $";
seleccionesId = seleccionesId + "|" + $("#text10_4").text();
$("#nroPag")[0].innerText = "11/11";
//OCULTAMOS DIV TOP ROW
$('.rowTop').hide();
$("#container").load("pages/fin.html", function () {
    setParamsFin();
});
}

function setParamsFin(){
    document.getElementById('id_precio_estimado_fin').innerHTML = costoAcumulado+" $";
    var seleccionesAux =  seleccionesId.split("|").join(", ");
    //document.getElementById('seleccionOpciones').innerHTML = "Selección: "+seleccionesAux;
}

//################## BOTONES DE FIN #####################//
function abrirDivContacto(costoEst){
    //$("#container").load("pages/contact.html"); 
    var costoEstimadoAEnviar = costoAcumulado;
     $.ajaxSetup({
    'beforeSend' : function(xhr) {
        xhr.overrideMimeType('text/html; charset=ISO-8859-1');
    },
});
    window.location.href = "pages/contact.html?costo_estimado="+costoEstimadoAEnviar+"&selecciones="+seleccionesId;
}

function readParam(){
    var costoEst = getURLParameter('costo_estimado');
    seleccionesId = getURLParameter('selecciones');
    document.getElementById('costoEstimadoFinal').innerHTML = "Costo Estimado: "+costoEst+ " $";
}

function enviarReq(){

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
    var url = "http://www.javadoh.com:8000/contact/newMessage";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4){
           if(xhr.status == 200 || xhr.status == 202 || xhr.status == 0) {
            console.log("OK");

            document.getElementById("container").innerHTML = "<div class='col-md-12 text-center' style='transformY(50%)'><img src='../images/orange-check.png' />" +"<br><br>"+
            "<h2 class='tittle' style='color:#FFFFFF'>"+ "¡GRACIAS!"+"</h2>"+ "<h2 class='tittle' style='color:#ff871c'>" 
            +"TU MENSAJE HA SIDO ENVIADO CON EXITO." +"</h2>"
            +"<br><br>"+ "<span class='tittle-line' style='background:#ff871c'>" +"</span></div>";

            }else{
                console.log("Error: "+xhr.readyState);

            document.getElementById("container").innerHTML = "<div class='col-md-12 text-center' style='transformY(50%)'>"+
            "<h2 class='tittle' style='color:#FFFFFF'>"+ "LO SENTIMOS "+"</h2>"+ "<h2 class='tittle' style='color:#ff871c'>" 
            +"Ocurrió un error enviando el mensaje, por favor intenta más tarde." +"</h2>"
            +"<br><br>"+ "<span class='tittle-line' style='background:#ff871c'>" +"</span></div>";
            }
        }
    }

    xhr.onerror= function() {
        alert("Error fetching " + url);

        document.getElementById("container").innerHTML = "<div class='col-md-12 text-center' style='transformY(50%)'>"+
            "<h2 class='tittle' style='color:#FFFFFF'>"+ "LO SENTIMOS "+"</h2>"+ "<h2 class='tittle' style='color:#ff871c'>" 
            +"Ocurrió un error enviando el mensaje, por favor intenta más tarde." +"</h2>"
            +"<br><br>"+ "<span class='tittle-line' style='background:#ff871c'>" +"</span></div>";
    }
    
    try{
    var data = JSON.stringify({"name": nombre,"email": email, "message": message, "selecciones": seleccionesId, "fecha": today, "hora": hora});
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
}

function regresarJavadoh(){
window.location.href = "http://www.javadoh.com";
}


function getURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateNameOrMessage(value){
    var re = /^[A-Za-z0-9.,]+$/;
    return re.test(value);
}