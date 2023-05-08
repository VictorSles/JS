const speedinput = document.getElementById("speedinput")
const startstopbutton = document.getElementById("startstopbutton")

let speed = 0
speedinput.addEventListener("change",(event)=>{
    speed = event.target.value
})

startstopbutton.addEventListener("click", ()=>{

    sendMessage({speed})

})
function sendMessage(message){
    chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id,message, (response)=>{

        })
    })
}