const body = document.body

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const sortingHatCard = () => {
    const domstring =`
    <div class="card" style="width: 18rem;">
        <img src="https://img-new.cgtrader.com/items/2090935/d046b609f9/harry-potter-hat-sorting-hat-3d-model-low-poly-max-obj-fbx-stl-mat.jpg" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">HogsWild Sorting</h5>
            <p class="card-text">Welcome to HogsWild school for the Gifted.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`;

    renderToDom("#sorting-card", domstring);
}

const init = () => {
    sortingHatCard();
}

init();