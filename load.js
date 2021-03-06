if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(
        reg => console.log("Registro Éxitoso")
    ).catch(
        err =>console.log(err)
    )
}