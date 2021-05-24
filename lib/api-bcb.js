const axios = require('axios')

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = data => axios.get(getUrl(data))
const extractCotacao = res => res.data.value[0].cotacaoVenda
const getCotacao = async() => {
  try {
    const res = await getCotacaoAPI('05-21-2021')
    const cotacao = extractCotacao(res)
    return cotacao
  } catch (err) {
    return ''
  }
}

module.exports = {
  getCotacaoAPI,
  getCotacao,
  extractCotacao
}