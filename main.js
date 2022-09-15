let text = 'The Jews who descended from Abraham were never really the nation we associate with greatness.  They did not conquer and build a great empire like the Romans did or build large monuments like the Egyptians did with the pyramids. Their fame comes from the Law and Book which they wrote; from some remarkable individuals that were Jewish; and that they have survived as a somewhat different people group for thousands of years.  Their greatness is not because of anything they did, but rather what was done to and through them.  The promise says repeatedly “I will …” – that would be the power behind the promise.  Their unique greatness happened because God made it happen rather than some ability, conquest or power of their own.The promise to Abraham came true because he trusted a promise and chose to live differently than others. Think how likely it was for this promise to have failed, but instead it has happened, and is continuing to unfold, as it was stated  thousands of years ago.  The case is strong that the promise came true only because of the power and authority of the Promise-Maker.'
let header_text = "Hello World"
let p = document.createElement("p")
let holder = document.createElement("h1")
let toastLiveExample = document.getElementById('liveToast')
let toast_demo = document.createElement("div")
let live_toast = document.createElement("div")
let toast_header = document.createElement("div")
let toast_body = document.createElement("div")
let image = document.createElement("img")
let strong = document.createElement("strong")
let button = document.createElement("button")
let section = document.createElement("div")
let step = 0
let header = document.createElement("p")
header.className = ""
header_text.split(" ").forEach(i => {
    let button = document.createElement("button")
    button.className = "btn btn-square-md btn-light p-0 opacity-50 fs-1 fw-bold"
    button.setAttribute("style", "margin-right:0.03px; border-radius: 0 !important;")
    button.innerHTML = i + "&nbsp;&nbsp;"
    header.appendChild(button)

});
p.appendChild(header)

///////////////////////////////////////////

text.split(" ").forEach(i => {
    let button = document.createElement("button")
    button.className = "btn btn-square-md btn-light p-0 opacity-50"
    button.setAttribute("style", "margin-right:0.03px; border-radius: 0 !important;")
    button.innerHTML = i + "&nbsp;&nbsp;"
    p.appendChild(button)
});



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
image.setAttribute("src", "https://img.freepik.com/free-vector/white-rabbit-cartoon-white-background_1308-66612.jpg?w=2000")
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
control()
function control() {
    if (step <= 0) {
        document.getElementById("left").className = "page-item d-none"
    } else {
        document.getElementById("left").className = "page-item"
    }
    document.getElementById("number").innerHTML = "page: " + step
}
///////////////////////////////////////////
// const axios=require('axios')
async function myfunc(event) {
    $.ajax({
        url: `http://127.0.0.1:5000/${event.target.innerHTML.replace("&nbsp;&nbsp;","")}`,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({'inputVar': 1}),
        success: function( data ) { 
            document.getElementById("test").innerHTML = data
            const toast = new bootstrap.Toast(document.getElementById("liveToast"))
            toast.show()
        } 
      });
   
}




function left() {
    if (step >= 1) {
        step -= 1
        control()
    }
}
function right() {
    step += 1
    control()
}