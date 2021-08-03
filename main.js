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
        <div class="input-group mb-3">
        <label for="name" class="form-label">Name</label>
        <input required type="text" class="form-control" id="name">
        </div>
        <button type="submit" id="name-btn" class="btn btn-primary">Submit</button>
     </form>
     `;

     renderToDom("#studentForm", domstring);
 }

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
    document.querySelector("#sort-btn").addEventListener("click", studentForm);
    document.querySelector("#name-btn").addEventListener("click", addToFirstYears);
};
const nameSub = {
    if (!studentForm) {
        alert('Please enter your name.');
        return;
    },
    const addToFirstYears = {
        name: document.querySelector("#name").value
    },
    firstYears.push(nameSub);

    console.log(firstYears)

}


const init = () => {
    sortingHatCard();
    buttonEvents();
}

init();