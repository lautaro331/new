const URL = import.meta.env.VITE_API_URL
const password = document.getElementById("password")
const username = document.getElementById("username")
const button = document.getElementById("button")
const ATO = localStorage.getItem("ATO")
const tareas = document.getElementById("tareas")
if (ATO) {
    window.location.href = "/"
}

button.onclick = () => {
    const body = JSON.stringify({ username: username.value, password: password.value })
    fetch(`${URL}/auth`, {
        method: `POST`,
        body,
        headers: {
            "content-type": "application/json"
        }
    })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if (json.ATO) {
                localStorage.setItem("ATO", json.ATO)
            }

        })
        .catch((er) => {
            const { message } = er
            console.error(message)
        })

}
