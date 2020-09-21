var product =  {};
var coments= [];
var relatedproductss = [];



function mostrarMasSimilares(array, array2){
    let insertar = '<hr>';
    array2.forEach(function(i){
        insertar += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + array[i].imgSrc + `" alt="">
            </div>
        </div>
        `;
        insertar += 'Nombre: ' + array[i].name + '<br>';
        insertar += 'Costo: ' + array[i].cost + ' USD<br>';
        
    });

    document.getElementById("mas-similares").innerHTML = insertar;

}

function mostrarComent(arrayy) {
    let comentario = ""

    for(let index = 0; index <arrayy.length; index++) {
        comentarios = arrayy[index];

        comentario += `<strong> `+ comentarios.user +`</strong>
        <p> `+ comentarios.description + `</p>
        <p> `+ comentarios.score +`/5 </p>
        <p> `+ comentarios.dateTime +`</p>
        
        `
    }

    document.getElementById("coments").innerHTML = comentario
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

            
            
        }
    });


    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            relatedproductss = resultObj.data;

            
            mostrarMasSimilares(relatedproductss, product.relatedProducts);
        }

    });


    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === 'ok'){
            coments = resultObj.data;

            mostrarComent(coments);
        }
    });

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status = 'ok'){

            relatedproducts = resultObj.data;

        }

    });
});