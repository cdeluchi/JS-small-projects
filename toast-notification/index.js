const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const popup = document.createElement("div");
    popup.classList.add("toast");

    popup.innerText = "Now you can see the Toast";

    container.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}
