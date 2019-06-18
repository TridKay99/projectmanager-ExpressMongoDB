async function getProjects() {

  const response = await fetch('http://localhost:5000/getAllProjects')
  const json = await response.json()
  const data = json

  let container = document.querySelector("#container")

  data.forEach(function(result) {
    let id = document.createElement("p")
    id.innerText = result.id

    let name = document.createElement("p")
    name.innerText = result.name

    container.appendChild(id)
    container.appendChild(name)
  })
}


getProjects()