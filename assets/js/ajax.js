function obtenerdatos() {
    const valores = [];
   
    $.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales').done(
      function(resultado, estado) {
        console.log('el estado es:' + estado);
        if (estado == 'success') {
          let dolar = resultado[0].casa.compra;
          valores.push(dolar);
        } else {
          console.log('el get no cargo como correspone');
        }
      }
    );
    return valores;
  }
  const valorDolar = obtenerdatos();
 console.log(valorDolar)
 

