self.addEventListener("install", e => {
console.log("Caching resources..");
e.waitUntil(
caches.open("static").then(cache => {
return cache.addAll([
"./",
"./manifest.json",
"./images/logo192.png"
]);
})
);
console.log("Resources in cache. Done");
})


self.addEventListener("fetch", e => {
console.log('intercepting fecth request for:',
e.request.url );
e.respondWith(
caches.match(e.request).then(response => {
return response || fetch(e.request) ;
})
)
}) ;
  

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
