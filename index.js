function _converteParaSexagesimal (decimal) {
  let apenasDecimal = parseFloat('0.' + decimal.split('.')[1])
  let primeroPasso = (apenasDecimal * 60).toString()
  let segundoPasso = parseFloat('0.' + primeroPasso.split('.')[1])

  let graus = decimal.split('.')[0]
  let minutos = primeroPasso.split('.')[0]
  let segundos = segundoPasso * 60

  let resultado = graus + '° '
  resultado += minutos + '´ '
  resultado += parseFloat(segundos).toFixed(2) + '"'

  return resultado
}

function _formataSexagesimal (decimais) {
  let resultado = ''
  if (decimais) {
    let primeiroValor = decimais.split(',')[0]
    let primeiroValorConvertido = _converteParaSexagesimal(primeiroValor)
    primeiroValor > 0 ? primeiroValorConvertido += ' N' : primeiroValorConvertido += ' S'
    let primeiroResultado = primeiroValorConvertido.replace('-', '')

    let segundoValor = decimais.split(',')[1]
    let segundoValorConvertido = _converteParaSexagesimal(segundoValor)
    segundoValor > 0 ? segundoValorConvertido += ' E' : segundoValorConvertido += ' W'
    let segundoResultado = segundoValorConvertido.replace('-', '')

    resultado = primeiroResultado + ' ' + segundoResultado
  }

  return resultado
}

module.exports = _formataSexagesimal
