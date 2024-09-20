const menuContent = document.querySelector('droplist'); 
function myJoin() {
       

        document.addEventListener('click', ()=>{
        windiow.location.href = "https://ghanagas-gh.zoom.us/join/";
    });
    return btnJoin;
}

function myLogin() {
    document.addEventListener('click', () => {
        window.location.href = "https://ghanagas-gh.zoom.us/signin/";
    });
}

function myHost() {
    document.addEventListener('click', () => {
        window.location.href = "https://ghanagas-gh.zoom.us/start/webmeeting/";
    });
}
function toDrop(){   
    document.getElementById("mydrop").classList.toggle('show');
};
window.onclick = function(event) {
    if(!event.target.matches('.menu-toggle')){
        var dropdowns = 
        document.getElementsByClassName('.droplist');       
        try{
            var i;
            for (i = 0; i < dropdowns.length; i++){
                    var openDropDowns = dropdowns[i];
                    if(openDropDowns.classList.contains('show')){
                    openDropDowns.classList.remove('show')
                    }
                }
            }catch(ReferenceError){
                console.log("An error occured during selection of menu..." + " " + ReferenceError);
        }

    }
}
function toOutLook(){
    const toOutLook = navigator.userAgent;
    try{
    if(/Outlook/.test(toOutLook)){
        window.location = "mailto:itssupport@ghanagas.com.gh";
    }else{
        window.alert("Support Down, please contact");
    }
    }catch(ReferenceError){
    console.log("An error has occured" + ReferenceError);
    }
}


