export default function displayHome(event) {
    const target = event.target;
    return target.parentElement.lastElementChild.innerText = 'HOME';
}