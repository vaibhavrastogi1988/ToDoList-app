window.onload = function() {

    const addButton = document.getElementById("add-button");
    const addInput = document.getElementById("add-input");
    const listHead = document.getElementById("list");

    const finishTask = (e) => {
        if(e.target.checked){
            e.target.setAttribute("class", "strike");
            
        } else{
            console.dir(e);
            e.target.removeAttribute("class");
            e.nextElementSibling.setAttribute("style","");
        }
    };

    const addItem = (e) => {
        let inputVal = addInput.value;

        if(!inputVal){
            return;
        }

        const template = document.getElementById("template");
        const clone = document.importNode(template.content, true);
        clone.querySelector("span").textContent = inputVal;
        // clone.querySelector("span").setAttribute("style","color:red");
        clone.querySelector("input").addEventListener("click", finishTask);
        
        listHead.appendChild(clone);

        addInput.value = "";
    };

    addButton.addEventListener("click", addItem);
};