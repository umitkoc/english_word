let p = document.createElement("p")
async function randomText() {
    $.ajax({
        url: `http://127.0.0.1:5000/randomtext`,
        type: "GET",
        contentType: "application/json",
        success: function (data) {
            data.split(" ").forEach(i => {
                let button = document.createElement("button")
                button.className = "btn btn-square-md btn-light p-0 opacity-50"
                button.setAttribute("style", "margin-right:0.03px; border-radius: 0 !important;")
                button.innerHTML = i + "&nbsp;&nbsp;"
                p.appendChild(button)
            });
        }
    })
}
let header = document.createElement("p")
"Hello World".split(" ").forEach(i => {
    let button = document.createElement("button")
    button.className = "btn btn-square-md btn-light p-0 opacity-50 fs-1 fw-bold"
    button.setAttribute("style", "margin-right:0.03px; border-radius: 0 !important;")
    button.innerHTML = i + "&nbsp;&nbsp;"
    header.appendChild(button)
});
let image = document.createElement("img")
image.setAttribute("src", "./rabbit.jpg")
let holder = document.createElement("h1")
let toastLiveExample = document.getElementById('liveToast')
let toast_demo = document.createElement("div")
let live_toast = document.createElement("div")
let toast_header = document.createElement("div")
let toast_body = document.createElement("div")
let strong = document.createElement("strong")
let button = document.createElement("button")
let section = document.createElement("div")
let step = 0

p.appendChild(header)
///////////////////////////////////////////
strong.innerHTML = "RABBIT WORD"
live_toast.id = "liveToast"
toast_body.id = "test"
live_toast.className = "toast"
toast_header.className = "toast-header d-flex justify-content-between"
toast_body.className = "toast-body text-center"
strong.className = "text-center"
image.className = "card-img-top w-25"
button.className = "btn-close"
section.className = " d-flex justify-content-between"
toast_demo.className = "toast-container position-fixed bottom-0 end-0 p-3"
holder.className = "opacity-25 text-light"
live_toast.setAttribute("role", "alert")
live_toast.setAttribute("aria-live", "assertive")
live_toast.setAttribute("aria-atomic", "true")
button.setAttribute("data-bs-dismiss", "toast")
button.setAttribute("aria-label", "Close")
holder.setAttribute("style", " display: grid; justify-content: center; align-content: center;")
holder.setAttribute("id", "holder")
///////////////////////////////////////////
toast_header.appendChild(image)
section.appendChild(image)
section.appendChild(strong)
toast_header.appendChild(section)
toast_header.appendChild(button)
live_toast.appendChild(toast_header)
live_toast.appendChild(toast_body)
toast_demo.appendChild(live_toast)
document.getElementById("body").appendChild(holder)
document.getElementById("body").appendChild(p)
document.getElementById("body").append(toast_demo)
async function myfunc(event) {
    const word = event.target.innerHTML.replace("&nbsp;&nbsp;", "")
    $.ajax({
        url: `http://127.0.0.1:5000/${word}`,
        type: "POST",
        contentType: "application/json",
        success: function (data) {
            document.getElementById("test").innerHTML = `<h3>${data}</h3> ${word}`
            const toast = new bootstrap.Toast(document.getElementById("liveToast"))
            toast.show()
        }
    });

}
