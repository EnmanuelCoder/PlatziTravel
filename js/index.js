const htmlElement = document.querySelector(`html`);
const toggleButton = document.querySelector(`#toggle`);
const toggleButtonSm = document.querySelector(`#toggle-sm`);

toggleButton.addEventListener("click", () => toggleDarkMode())
toggleButtonSm.addEventListener("click", () => toggleDarkMode())

const toggleDarkMode = () => {
    htmlElement.classList.contains("dark")?
    htmlElement.classList.remove("dark"):
    htmlElement.classList.add("dark")
}

// contains = es para ver si exite una clase llamada xxx
//.remove = sirve para quitar una clase
//.add = Sirve para agregar una clase