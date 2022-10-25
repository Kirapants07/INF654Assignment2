self.addEventListener("install", function (event) {
    console.log(`Event fired: ${event.type}`);
});
self.addEventListener("activate", function (event) {
    console.log(`Event fired: ${event.type}`);
});
self.addEventListener("fetch", function (event) {
    console.log(`Event fired: ${event.type}`);
    event.respondwith(fetch(event.request));
});
