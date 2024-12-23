let textContainer = document.querySelector(".textContainer");
let enterKey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let deleteKey = document.querySelector(".delete");
let capsLock = document.querySelector(".capsLock");
let allKeys = document.querySelectorAll(".key");
let isCaps = false;

enterKey.addEventListener("click", function() {
    let content = textContainer.innerText;
    let newContent = content+"\n";
    textContainer.innerText = newContent;
});

spaceKey.addEventListener("click", function() {
    let content = textContainer.innerText;
    let newContent = content + "";
    textContainer.innerText = newContent;
    console.log("space clicked"); 
});

deleteKey.addEventListener("click", function() {
    let content = textContainer.innerText;
    let newContent = content.slice(0, -1);
    textContainer.innerText = newContent;
});

capsLock.addEventListener("click", function() {
    if(isCaps){
        capsLock.classList.remove("active");
        for (let key of allKeys) {
            if (key.classList.length > 1) {
                // do notning 
            }
            else{
                key.innerText = key.innerText.toLowerCase();
            }
        }
    }
    else{
        capsLock.classList.add("active");
        for (let key of allKeys) {
            if (key.classList.length > 1) {
                // do notning 
            }
            else{
                key.innerText = key.innerText.toUpperCase();
            }
        }
    }
    isCaps = !isCaps;
});

for (let key of allKeys) {
    if (key.classList.length > 1 ) {
        // do notning 
    }
    else{
        key.addEventListener("click", function() {
            let content = textContainer.innerText;
            let newContent = content+key.innerText;
            textContainer.innerText = newContent;
        });
    }
}