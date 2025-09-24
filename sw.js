self.addEventListener("install", e => {
console.log("Caching resources..");
e.waitUntil(
caches.open("static").then(cache => {
return cache.addAll([
"./",
"./src/manifest.json",
"./src/images/logo192.png"
]);
})
);
console.log("Resources in cache. Done");
})

<script>
if ("serviceWorker" in navigator) {
console.log("Service Worker supported");
navigator.serviceWorker.register("./sw.js").then(ServiceWorkerRegistration
=> {
console.log("SW Registered");
console.log(ServiceWorkerRegistration);
}).catch(error => {
console.log("SW Registration failed");
console.log(error);
})
}
</script>
