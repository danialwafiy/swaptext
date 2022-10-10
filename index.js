export default function swapText(from, to) {
    if (from == undefined || to == undefined) {
        throw('from and to params is required.'); 
    }

    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

    for (let i = 0; i < textElements.length; i++){
        if (textElements[i].innerHTML.toLowerCase().includes(from.toLowerCase())) {
            textElements[i].innerHTML = textElements[i].innerHTML.replace(from, to)
        }
    }
}