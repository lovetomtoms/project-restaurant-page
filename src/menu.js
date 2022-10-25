export default function displayMenu(event) {
    const target = event.target;
    return target.parentElement.lastElementChild.innerText = 'MENU';
}