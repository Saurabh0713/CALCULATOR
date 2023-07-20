
let input = document.getElementById("input")
let string = ""
let buttons = document.querySelectorAll("button")
let buttonsArray = Array.from(buttons)

buttonsArray.forEach(button=>{
    button.addEventListener('click',(event)=>{
        if(event.target.innerHTML== "="){
            string = eval(string)
            input.value = string
            return
        }else if(event.target.innerHTML== "AC"){
            string = ""
            input.value = string
            return
        }else if(event.target.innerHTML== "DEL"){
            string = string.substring(0,string.length-1)
            input.value = string
            return
        }
        string = string + event.target.innerHTML
        console.log(string)
        input.value = string
    })
})

