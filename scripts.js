console.log("Hello");



document.getElementById("myButton").addEventListener("click", () => {
    alert("Button clicked");
});

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    console.log(`Name: ${name}, Password: ${password}`);
    alert(`Name: ${name}, Password: ${password}`);
});

let count = 0;

function counter() {
    count++;
    document.getElementById("counterDisplay").innerText = count;
}

document.getElementById("counterBtn").addEventListener("click", counter);

document.getElementById("resetBtn").addEventListener("click", () => {
    count = 0;
    document.getElementById("counterDisplay").innerText = count;
});
function handler1() {
    alert('Thanks!');
};

function handler2() {
    alert('Thanks again!');
}

document.getElementById("elem").addEventListener("click", () => {
    alert("Hello");
});
document.getElementById("elem").addEventListener("click", handler1);
document.getElementById("elem").addEventListener("click", handler2);
document.getElementById("elem").removeEventListener("click", handler2);
document.getElementById("elem").removeEventListener("click", handler1);

const elem = document.getElementById("button");
class Menu {
    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                elem.innerHTML = "Mouse button pressed";
                break;
            case 'mouseup':
                elem.innerHTML += "...and released.";
                break;
        }
    }
}

let menu = new Menu();

elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);
