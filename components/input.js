export let InputThingy = () => {
    return `<div><span>type shii</span><br><input value="type shii" type="text" oninput="(()=>{this.parentNode.querySelector('span').innerHTML = this.value})(this);"></div>`
};