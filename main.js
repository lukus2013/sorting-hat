const firstYears = [];
const voldysArmy = [];
const hogsHouses = ["Slytherin", "Ravenclaw", "Griffindor", "Hufflepuff"];

const sortingHatCard = () => {
    const domstring =`
        <div class="card" style="width: 18rem;">
            <img src="https://img-new.cgtrader.com/items/2090935/d046b609f9/harry-potter-hat-sorting-hat-3d-model-low-poly-max-obj-fbx-stl-mat.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">HogWarts Sorting Hat</h5>
                    <p class="card-text">Welcome to HogWarts school for the Gifted.</p>
                    <a id="sort-btn" class="btn btn-primary">What's Your House?</a>
                </div>
        </div>`;

    renderToDom("#sorting-card", domstring);
}

 const studentForm = () => {
     const domstring=`
     <form id="studentForm">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input required type="text" class="form-control" id="name">
        </div>
        <button type="submit" id="name-btn" class="btn btn-primary">Submit</button>
     </form>
     `;

     renderToDom("#studentForm", domstring);
 }

 const houseColumns = () => {

    renderToDom("#firstYearsLabel", "First Years");
    renderToDom("#voldysArmyLabel", "Voldy's Army");
}

 const handleFormSubmit = (event) => {
    event.preventDefault();
    if ( document.querySelector("#name").value === "") {
        alert("You must tell me your name.")
        return ;
    }
    if (event.target.id === "name-btn"){
    const newStudent = {
        name: document.querySelector("#name").value,
        house: yourHouse()
    };
    houseColumns();
    firstYears.push(newStudent)
    renderStudents(firstYears);
    const textField = document.querySelector("#name");
    textField.value= "";
    }
}

const expelStudent = (event) => {
    const expelBtnId = event.target.id;
    const targetType = event.target.type;
   if (targetType === "button") {
       var expelledStudent = firstYears.splice(expelBtnId, 1)[0];
       console.log(expelStudent);
       voldysArmy.push(expelledStudent);
       renderVoldysArmy(voldysArmy);
       renderStudents(firstYears);
   }
}

const yourHouse = () => {
    return hogsHouses [
        Math.floor(Math.random() * hogsHouses.length)
    ]
}

const renderStudents = (firstYears) => {
    let domstring="";
    firstYears.forEach((student, i) =>{
        domstring += `
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${student.name}</li>
                <li class="list-group-item">${student.house}</li>
            </ul>
            <button type="button" id="${i}" class="btn btn-primary">Expel</button>
        </div>`
    });

    renderToDom("#student-card", domstring);
}

const renderVoldysArmy = (voldysArmy) => {
    let domstring="";
    voldysArmy.forEach((soldier, i) =>{
        domstring += `
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${soldier.name}</li>
            </ul>
        </div>`
    });
    renderToDom("#varmy", domstring);
}

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
    document.querySelector("#sort-btn").addEventListener("click", studentForm);
    document.querySelector("#studentForm").addEventListener("click", handleFormSubmit);
    document.querySelector("#student-card").addEventListener("click", expelStudent);
};

const init = () => {
    sortingHatCard();
    buttonEvents();
}

init();