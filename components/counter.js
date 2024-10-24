export let Counter = () => {
    return `<button onclick="(() => {this.innerText = Number(this.innerText)+1;})(this);">0</button>`
};