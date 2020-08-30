var arrayDeProductos = [];
var min = undefined;
var max = undefined;
const PRECIO_PAMAYOR = "de mas a menos"
const PRECIO_ALEMNOR = "de menos a mas"
const ORDER_RELEVANCIA = "por relevancia de mas a menos"

function ordernar (criterio, array) {
    let result = [];
    if (criterio === PRECIO_PAMAYOR) {
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) {return -1; }
            if (a.cost > b.cost) {return 1;}
            return 0;
        });
    } else if (criterio === PRECIO_ALEMNOR) {
        result = array.sort(function(a, b){
            if (a.cost > b.cost) {return -1}
            if (a.cost < b.cost) {return 1}
            return 0;
        });
    }  else if (criterio === ORDER_RELEVANCIA) {
        result = array.sort(function(a, b){
            if (a.soldCount > b.soldCount) {return -1}
            if (a.soldCount < b.soldCount) {return 1}
            return 0;
        });
    }
    return result
}

function mostrarProductos(array) {
  let contenidoaAgregar =  "";
  
  for (let index = 0; index < array.length; index++) {
      products = array[index];

      if(((min == undefined) || (min != undefined && parseInt(products.cost) >= min)) &&
                   ((max == undefined) || (max != undefined && parseInt(products.cost) <= max))){

               contenidoaAgregar += ` 
                    <a class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted">` + products.cost + ` USD</small>
                        </div>
                        <p class="mb-1">` + products.description + `</p>
                    </div>
                </div>
            </a>
            <hr>
            `
        }
  
      
      
   
      
      document.getElementById("contenido").innerHTML = contenidoaAgregar
  }
}

document.addEventListener("DOMContentLoaded", function(e){
    

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === 'ok') 
        {
            arrayDeProductos = resultObj.data;
            
             arrayDeProductos= ordernar(PRECIO_ALEMNOR, arrayDeProductos);

            mostrarProductos(arrayDeProductos);
        }
    });

    document.getElementById("precio").addEventListener("click" , function() {
        
        arrayDeProductos = ordernar(PRECIO_PAMAYOR, arrayDeProductos);

        mostrarProductos(arrayDeProductos);
    });

    document.getElementById("precio-asc").addEventListener("click" , function() {
        
        arrayDeProductos = ordernar(PRECIO_ALEMNOR, arrayDeProductos);

        mostrarProductos(arrayDeProductos);
    });

    document.getElementById("relevancia").addEventListener("click" , function() {
        
        arrayDeProductos = ordernar(ORDER_RELEVANCIA, arrayDeProductos);

        mostrarProductos(arrayDeProductos);
    });



   document.getElementById("botonfiltro").addEventListener("click" , function () {
      
        min = document.getElementById("minprecio").value;
        max = document.getElementById("maxprecio").value;

        if((min != undefined) && (min != "") && (parseInt(min)) >= 0) {
            min = parseInt(min);
        } else {
            min = undefined
        }

        if((max != undefined) && (min != "") && (parseInt(max)) >= 0) {
            max = parseInt(max);
        } else {
            max = undefined
        }

        mostrarProductos(arrayDeProductos);

   });
    document.getElementById("botonlimpiar").addEventListener("click" , function () {

document.getElementById("minprecio").value = "";
document.getElementById("maxprecio").value = "";

min = undefined;
max = undefined;


mostrarProductos(arrayDeProductos);

    });


});




