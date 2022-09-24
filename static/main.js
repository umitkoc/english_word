async function randomText() {
    let body = document.getElementById("body");
    body.innerHTML = "";
    $.ajax({
        url: `https://english-word-rabbit.herokuapp.com/randomtext`,
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








