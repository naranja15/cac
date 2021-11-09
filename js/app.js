let seccion = document.getElementById("compraTickets");
// seccion.style.visibility="hidden";

const comprarTickets = () => {
    seccion.innerHTML = `

    
    <div class="container">
    <div class="row">
      <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
        <div class="card-group">
          <div class="card text-center">
            <div class="card-body border border-primary mr-1">
              <h5 class="card-title">Estudiante</h5>
              <p class="card-text">Tienen un descuento</p>
              <p class="card-title font-weight-bold">80%</p>
              <p class="card-text"><small class="text-muted">* presentar documentaci&oacute;n</small></p>
            </div>
            </div>
          <div class="card text-center">
            <div class="card-body border border-primary mr-1">
              <h5 class="card-title">Trainee</h5>
              <p class="card-text">Tienen un descuento</p>
              <p class="card-title font-weight-bold">50%</p>
              <p class="card-text"><small class="text-muted">* presentar documentaci&oacute;n</small></p>
            </div>
            </div>
          <div class="card text-center">
            <div class="card-body border border-primary mr-1">
              <h5 class="card-title">Junior</h5>
              <p class="card-text">Tienen un descuento</p>
              <p class="card-title font-weight-bold">15%</p>
              <p class="card-text"><small class="text-muted">* presentar documentaci&oacute;n</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="venta text-center">
        <h5>VENTA</h5>
        <h1>VALOR DE TICKET $200</h1>
      </div>
      <form method="GET" class="form-floating" id="ventaForm">
          <div class="row">
            <div class="col">
              <div class="form-floating mb-3">
                <input type="text" id="nombreVenta" class="form-control" placeholder="" aria-label="" aria-describedby="nombreVenta" required />
                <label for="nombreVenta">Nombre</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating mb-3">
                <input type="text" id="apellidoVenta" class="form-control" placeholder="" aria-label="" aria-describedby="apellidoVenta" required />
                <label for="apellidoVenta">Apellido</label>
              </div>
            </div>
          </div>

          <div class="form-floating mb-3">
            <input type="text" id="emailVenta" class="form-control" placeholder="" aria-label="" aria-describedby="emailVenta" required />
            <label for="emailVenta">Correo electr&oacute;nico</label>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-floating mb-3">
                <input type="number" name="cantidadVenta" id="cantidadVenta" class="form-control" placeholder="" aria-label="" aria-describedby="cantidadVenta" required>
                <label for="cantidadVenta">Cantidad</label>
              </div>
            </div>
            <div class="col">
              <div class=" mb-3">
                <select name="categoriaVenta" id="categoriaVenta" class="form-select" aria-label="" aria-describedby="categoriaVenta" required>
                  <option value="Estudiante" selected>Estudiante</option>
                  <option value="Trainee">Trainee</option>
                  <option value="Junior">Junior</option>
                </select>
              </div>
            </div>
          </div>
          <div class="alert alert-primary" role="alert">Total a Pagar: $ <span id="totalCompra"></span></div>
            <div class="d-grid gap-2 d-md-flex pb-5">
              <button type="reset" class="btn btn-submit col">Borrar</button>
              <button type="button" id="botonCalcular" class="btn btn-submit col" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Resumen
              </button>
            </div>
        </form>
    </div>

  </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modalBody">
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-outline-success">Confirmar compra</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    `;

    document.querySelector('#botonCalcular').addEventListener('click',() =>{

      let inputs = document.querySelectorAll("input");
      let categoriaVenta = document.getElementById("categoriaVenta").value;
      let cantidadVenta = parseInt(document.getElementById("cantidadVenta").value);
      let valorTicket = 200;
      console.log(inputs)

      const calcularDescuento= () => {
        if (categoriaVenta == "Estudiante") {
          descuento = 0.8
        } else if (categoriaVenta == "Trainee") {
          descuento = 0.5
        } else if (categoriaVenta == "Junior") {
          descuento = 0.15
        }
        return valorTicket * descuento;
      }

      const crearNumOrden =()=> {
        return Math.floor(100000 + Math.random() * 900000);
      }

      let comprador = {
        nombreVenta:inputs[3].value,
        apellidoVenta:inputs[4].value,
        emailVenta:inputs[5].value,
        cantidadVenta,
        categoriaVenta,
      };
      
      const infoModal= () =>{
        let numeroTicket =  document.getElementById("staticBackdropLabel");
        let bodyModal = document.getElementById("modalBody");
        numeroTicket.innerHTML= `Nro de orden: #${crearNumOrden()}`
        bodyModal.innerHTML = `
        <div class="table-responsive-md">
        <table class="table">
          <thead>
          </thead>
          <tbody>
            <tr>
              <th>Nombre</th>
              <td>${comprador.nombreVenta}</td>
            </tr>
            <tr>
              <th>Apellido</th>
              <td>${comprador.apellidoVenta}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>${comprador.emailVenta}</td>
            </tr>
            <tr>
              <th>Cantidad de Entradas</th>
              <td>${comprador.cantidadVenta}</td>
            </tr>
            <tr>
              <th>Categoría</th>
              <td>${comprador.categoriaVenta}</td>
            </tr>
            <tr>
              <th>Descuento</th>
              <td>${descuento * 100}%</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div class="alert alert-info" role="alert">
        Total a pagar: $ ${valorTotal},00.-
        </div>
        `
      }

      const calcularValor=(descuento,cantidadTickets) => {
        let resultado = (valorTicket - descuento) * cantidadTickets;
        if (isNaN(cantidadTickets)) {
          resultado=0;
          comprador.cantidadVenta = 0;

        } else {
          let alert = document.getElementById("totalCompra");
          alert.innerHTML= resultado;

        }

        return resultado
      }

      let valorTotal = calcularValor(calcularDescuento(),cantidadVenta)
      infoModal();


    } );
}