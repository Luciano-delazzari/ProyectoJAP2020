var product =  {};

function mostrarMasSimilares(array){

    let agregar = "";

    for(let i = 0; i < array.length; i++){
        let imagen = array[i];

        agregar += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imagen + `" alt="">
            </div>
        </div>
        `

        document.getElementById("mas-similares").innerHTML = agregar;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let nombredelproducto  = document.getElementById("nombre-producto");
            let descripcionproducto = document.getElementById("descripcion-producto");
            let categoriadelproducto = document.getElementById("categoria-producto");
            let cantidadvendidos = document.getElementById("solds-producto");
        
            nombredelproducto.innerHTML = product.name;
            descripcionproducto.innerHTML = product.description;
            categoriadelproducto.innerHTML = product.category;
            cantidadvendidos.innerHTML = product.soldCount;

            
            mostrarMasSimilares(product.images );
        }
    });
});