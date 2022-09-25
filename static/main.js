async function Paragraph() {
    let body = document.getElementById("body");
    body.innerHTML = "";
    $.ajax({
        url: `https://english-word-rabbit.herokuapp.com/paragraph`,
        type: "GET",
        contentType: "application/json",
        success: function (data) {
            data.split(" ").forEach(i => {
                let button = document.createElement("button");
                button.className = "btn btn-square-md btn-light p-0 opacity-50";
                button.setAttribute("style", "margin-right:0.03px; border-radius: 0 !important;");
                button.innerHTML = i + "&nbsp;&nbsp;";
                body.appendChild(button);
            });
        }
    });
}

async function Sentence() {
    let body = document.getElementById("body");
    body.innerHTML = "";
    $.ajax({
        url: `https://english-word-rabbit.herokuapp.com/sentence`,
        type: "GET",
        contentType: "application/json",
        success: function (data) {
            data.split(" ").forEach(i => {
                let button = document.createElement("button");
                button.className = "btn btn-square-md btn-light p-0 opacity-50";
                button.setAttribute("style", "margin-right:0.03px; border-radius: 0 !important;");
                button.innerHTML = i + "&nbsp;&nbsp;";
                button.style.fontSize = "20px";
                body.appendChild(button);
            });
        }
    });
}

async function Word() {
    let body = document.getElementById("body");
    body.innerHTML = "";
    $.ajax({
        url: `https://english-word-rabbit.herokuapp.com/word`,
        type: "GET",
        contentType: "application/json",
        success: function (data) {
            let button = document.createElement("button");
            button.className = "btn btn-square-md btn-light p-0 opacity-50";
            button.setAttribute("style", "margin-right:0.03px; border-radius: 0 !important;");
            button.innerHTML = data;
            button.style.fontSize = "25px";
            body.appendChild(button);
        }
    });
}




async function myfunc(event) {
    event.preventDefault();
    const container = document.getElementById('kt_docs_toast_stack_container');
    const targetElement = document.getElementById('toast');
    const word = event.target.innerHTML.replace("&nbsp;&nbsp;", "")
    $.ajax({
        url: `https://english-word-rabbit.herokuapp.com/${word}`,
        type: "POST",
        contentType: "application/json",
        success: function (data) {
            document.getElementById("lock").innerHTML = `<h5>${data}</h5> ${word}`
            const newToast = targetElement.cloneNode(true);
            container.append(newToast);
            const toast = bootstrap.Toast.getOrCreateInstance(newToast);
            toast.show();
        }

    });


}
    





