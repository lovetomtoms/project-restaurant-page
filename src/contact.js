export default function displayContact(event) {
    const target = event.target;
    return target.parentElement.lastElementChild.innerText = 'CONTACT';
}