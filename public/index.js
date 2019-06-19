let container = document.querySelector("#projectsContainer")


async function getProjects() {

  const response = await fetch('http://localhost:5000/getAllProjects')
  const json = await response.json()
  const data = json

  let container = document.querySelector("#projectsContainer")

  data.forEach(function(result) {
    let buttonDelete = "<button class=delBut onclick='deleteProjects("+result.id+")'>Delete</button>";
    let buttonUpdate = "<button class=upBut onclick='updateProjects("+result.id+")'>Update</button>";
    let projectDiv = document.createElement('div')
    container.appendChild(projectDiv)
    projectDiv.classList.add("myStyle");

    
    let info = document.createElement("p")
    info.innerText = `${result.id} ${result.name} ${result.price}` 

    projectDiv.appendChild(info)
    projectDiv.insertAdjacentHTML("beforeend", buttonUpdate)
    projectDiv.insertAdjacentHTML("beforeend", buttonDelete)
  })
}

getProjects()


async function deleteProjects(id) {

  const response = await fetch('http://localhost:5000/projects/'+id)
  const json = await response.json()
  let child = document.querySelector(".myStyle")
  child.parentNode.removeChild(child)

  axios.delete(`http://localhost:5000/projects/${id}`, { data: {id: `${json.id}`}
});
}


const createProject= () => {
  let id = document.querySelectorAll('.id')[0].value
  let fk = document.querySelectorAll('.form-text')[0].value
  let price = document.querySelectorAll('.price')[0].value


  let projectDiv = document.createElement('div')
  container.appendChild(projectDiv)

  projectDiv.insertAdjacentHTML("afterbegin", id)
  projectDiv.insertAdjacentHTML("afterbegin", fk)
  projectDiv.insertAdjacentHTML("afterbegin", price)

  axios({
    method: 'post',
    url: 'http://localhost:5000/newProject',
    data: {
      id: `${id}`,
      name: `${fk}`,
      price: `${price}`
    }
  });
}