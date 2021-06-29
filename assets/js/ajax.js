function obtenerdatos() {
  $.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales').done(
    function(resultado, estado) {
      console.log('el estado es:' + estado);
      if (estado == 'success') {
        let dolar = resultado[0].casa.compra;
        localStorage.setItem('dolar', dolar);
      } else {
        console.log('el get no cargo como correspone');
      }
    }
  );
}

obtenerdatos();
 const valorDolar = localStorage.getItem('dolar');
console.log(valorDolar);

dolar = parseInt(valorDolar)
console.log(dolar * 3)

