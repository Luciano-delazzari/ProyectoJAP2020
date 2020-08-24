var arrayDeProductos = [];

function mostrarProductos(array) {
  let contenidoaAgregar =  "";
  
  for (let index = 0; index < array.length; index++) {
      products = array[index];

      contenidoaAgregar += ` 
      <div class="row">
          <div class="col-3">
              <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
          </div>
          <hr>
          <div class="col">
              <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">`+ products.name +`</h4>
                  <small class="text-muted">` + products.soldCount + ` artículos</small>
              </div>
              <hr>
              <p class="mb-1">` + products.description + `</p>
              <hr>
          </div>
          <hr>
      </div>
      <hr>
  `
      
      
   
      
      document.getElementById("contenido").innerHTML = contenidoaAgregar
  }
}







document.addEventListener("DOMContentLoaded", function(e){
    

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === 'ok') 
        {
            arrayDeProductos = resultObj.data;
            mostrarProductos(arrayDeProductos);
        }
    });
});




