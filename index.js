const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "main_page.html"
    }else{
        alert("Invalid Username or Password, Please try again!")
    }
})


function authentication(username,password){
    if(username === "Marso" && password === "pogi"){
        return true
    }else{
        return false
    }
}