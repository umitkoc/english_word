async function randomText() {
    let body = document.getElementById("body");
    body.innerHTML = "";
    $.ajax({
        url: `http://127.0.0.1:5000/randomtext`,
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

const container = document.getElementById('kt_docs_toast_stack_container');
const targetElement = document.getElementById('toast');
async function myfunc(event) {
    event.preventDefault();
    const word = event.target.innerHTML.replace("&nbsp;&nbsp;", "")
    $.ajax({
        url: `http://127.0.0.1:5000/${word}`,
        type: "POST",
        contentType: "application/json",
        success: function (data) {
            document.getElementById("lock").innerHTML = `<h5>${data}</h5> ${word}`
            const newToast = targetElement.cloneNode(true);
            console.log(word, data)
            container.append(newToast);
            const toast = bootstrap.Toast.getOrCreateInstance(newToast);
            toast.show();
        }
        
    });


}








