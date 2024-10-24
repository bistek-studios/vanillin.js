export let App = (callback) => {
    console.log("%cVanillin.JS","font-size:30pt;color:#FFD;-webkit-text-stroke:1.5px #000;")
    let html = callback();
    try {
        document.open();
        document.write(html);
        console.log("%csuccessfully did code stuff","color:#0f0;");
    } catch (error) {
        console.log("something's wrong and im too lazy to add proper debugging. get better bozo");
    };
};