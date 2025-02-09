console.log("Pet Spoon Game Loaded!");

//get html elements
const button = document.getElementById('feed') as HTMLButtonElement;
const pizzaButton = document.getElementById('pizza') as HTMLButtonElement;
const donutButton = document.getElementById('donut') as HTMLButtonElement;
const info = document.getElementById('info') as HTMLParagraphElement;
const container = document.getElementById('container') as HTMLDivElement;
const died = document.getElementById('died') as HTMLHeadingElement;
const feedDiv = document.getElementById('feedwhat') as HTMLDivElement;


button.addEventListener('click', showFeedOptions);

//info
let health: number = Number(localStorage.getItem("health")) || 100;
let hunger: number = Number(localStorage.getItem("hunger")) || 100;


function updateInfo(): void {
    if (hunger <= 0) {
        if (health <= 0) {
            if (container) {
                container.style.display = 'none';
            }
            if (died) {
                died.style.display = 'block';
            }
        }
        health--;
    } else {
        hunger--;
    }
    
    if (info) {
        info.innerText = `Health: ${health} | Hunger: ${hunger}`;
    }

    localStorage.setItem("health", health.toString());
    localStorage.setItem("hunger", hunger.toString());
}

function loadInfo(): void {
    if (info) {
        info.innerText = `Health: ${health} | Hunger: ${hunger}`;
    }
}


//feeding stuff
function showFeedOptions(): void {
    if (feedDiv.style.display == 'block') {
        feedDiv.style.display = 'none';
    }
    else {
        feedDiv.style.display = 'block';
    }
}

function feedPizza(): void {
    if (hunger < 100) {
        hunger += 20;
        if (hunger >= 100) hunger = 100;
        updateInfo();
    }

    if (health < 100) {
        health += 10;
        if (health >= 100) health = 100;
        updateInfo();
    }
}

function feedDonut(): void {
    if (hunger < 100) {
        hunger += 10;
        if (hunger >= 100) hunger = 100;
        updateInfo();
    }

    if (health < 100) {
        health += 5;
        if (health >= 100) health = 100;
        updateInfo();
    }
}


loadInfo();

pizzaButton.addEventListener('click', feedPizza);
donutButton.addEventListener('click', feedDonut);

setInterval(() => {
    updateInfo();
}, 10000);
