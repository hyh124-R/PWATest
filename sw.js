self.addEventListener("install", e => {
console.log("Installing sw");
});

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
