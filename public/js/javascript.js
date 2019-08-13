function onReadClick() {
    document.getElementById("for_reading").style.display = "inline";
    document.getElementById("for_uploading").style.display = "none";
    document.getElementById("for_settings").style.display = "none";
}

function onUploadClick() {
    document.getElementById("for_reading").style.display = "none";
    document.getElementById("for_uploading").style.display = "inline";
    document.getElementById("for_settings").style.display = "none";
}

function onCogsClick() {
    document.getElementById("for_reading").style.display = "none";
    document.getElementById("for_uploading").style.display = "none";
    document.getElementById("for_settings").style.display = "inline";
}

function fileAdded() {
    document.getElementById("output").innerHTML = "Файл выбран."
}
 


