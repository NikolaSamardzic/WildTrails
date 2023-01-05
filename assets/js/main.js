
setTimeout(endLoadScreen,1500);
setTimeout(()=>$("#loader").remove(),3300);

function endLoadScreen(){
    $("#loader").addClass("loader-opac");
    $("body").removeClass("pre-loader");
}
