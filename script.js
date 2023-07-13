let fileURL = document.querySelector("input");
let dwldBtn = document.querySelector("button");

dwldBtn.addEventListener("click", e => {
    e.preventDefault();
    if (fileURL.value.length >= 15) {
        dwldBtn.innerHTML="Downloading File..."; fetchURL(fileURL.value);
    }
    else {alert("Enter Proper URL");}
})

function fetchURL(url){
    fetch(url).then( response => response.blob()).then(file => {
        
        let tempURL = URL.createObjectURL(file);
       // console.log(tempURL);
       let aTag = document.createElement("a");
       aTag.href=tempURL;
       aTag.download="file";
       document.body.appendChild(aTag);
       aTag.click();
       aTag.remove();
       URL.revokeObjectURL(tempURL);
       dwldBtn.innerHTML="Download File";

    }).catch(() => {
        dwldBtn.innerHTML="Download File";
        alert("Failed to download");

    })
}
