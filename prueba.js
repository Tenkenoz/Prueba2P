let productos = [
    { nombre: "Zapatos", precio: 255, cantidad: 50 ,categoria:"ropa"},
    { nombre: "Camiseta", precio: 255, cantidad: 10,categoria:"ropa" },
    { nombre: "Zapatos", precio: 280, cantidad: 5,categoria:"ropa" },
    { nombre: "Computadora", precio: 255, cantidad: 50,categoria:"tecnologia"},
    { nombre: "Celulares", precio: 255, cantidad: 50,categoria:"tecnologia"}
  ];
  
  class Inventario {
    constructor(productos) {
      this.productos = productos;
    }
  
    listarProductos() {
      const oProductos = this.productos.sort((a, b) => a.precio - b.precio);
      for(let productes of oProductos){
        console.log(productes.nombre+ " con un precio de "+ productes.precio+ " y una cantidad de "+productes.cantidad+ " de la categoria "+productes.categoria)
      }
    }

    filtrarProductos(){
        console.log("Categoria ropa ----------------------")
        const RopaProductos = this.productos.filter(productos => productos.categoria == "ropa")
        for(let productes of RopaProductos){
            console.log(productes.nombre+ " con un precio de "+ productes.precio+ " y una cantidad de "+productes.cantidad+ " de la categoria "+productes.categoria)
          }
          console.log("Categoria tecnologia ----------------------")
        const TecnologiaProductos = this.productos.filter(productos => productos.categoria == "tecnologia")
        for(let productes of TecnologiaProductos){
            console.log(productes.nombre+ " con un precio de "+ productes.precio+ " y una cantidad de "+productes.cantidad+ " de la categoria "+productes.categoria)
          }
    }
  }

  class Venta extends Inventario {
    constructor(productos) {
      super(productos)
      this.ventasRealizadas = [];
    }
  
    realizarVenta(nombreProducto, cantidad) {
      const producto = this.productos.find((p) => p.nombre === nombreProducto);
      if (!producto) {
        console.log(`El producto ${nombreProducto} no existe.`);
        return;
      }
  
      if (producto.cantidad < cantidad) {
        console.log(`Cantidad insuficiente de ${nombreProducto} en stock.`);
        return;
      }
  
      producto.cantidad -= cantidad;

      this.ventasRealizadas.push({ producto: nombreProducto, cantidad: cantidad , Fecha:Date(), ingreso:producto.precio});

    }
  
    getVentasRealizadas() {
      return this.ventasRealizadas;
    }

    aplicarDescuento(categoria,porcentaje){
        this.productos=this.productos.map((producto) =>(producto.categoria === categoria?producto.categoria-producto.categoria*porcentaje:producto))
        console.log(`Se aplicaron los siguientes descuentos a los productos con categoria ${categoria}`)
    }

    reportesAvanzados(){
        let suma = 0;
        for(let i of this.ventasRealizadas){
          console.log(`Se vendio ${i.cantidad} unidades de ${i.producto} en ${i.Fecha}.`);
          suma += i.cantidad * i.precio;
        }
        const productoMasVendido = this.ventasRealizadas.reduce((max, current) => {
          return max.cantidad > current.cantidad ? max : current;
        });
        console.log(`Los ingresos generados fueron de ${suma} dolares`);
        console.log(`El producto mas vendido fue ${productoMasVendido.producto}`);
      }
  }
  Ventas = new Venta(productos)
  Ventas.listarProductos()
  Ventas.filtrarProductos()
  Ventas.realizarVenta("Computadora",3)
  Ventas.realizarVenta("Zapatos",10000)
  Ventas.realizarVenta("Camiseta",10)
Ventas.reportesAvanzados()
