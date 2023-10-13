$("#btnSubmitContact").click(function() {
    var dataString = $('#msgForm').serialize();
    $.ajax({   
                    type: "POST",
                    url: "contact/add",
                    data: dataString
            });
});

function openSupport(){
	myLink = document.getElementById('soporte-go');
myLink.onclick = window.open('http://207.244.75.230/osTicket',
'_blank','toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400',true);

return false;
}