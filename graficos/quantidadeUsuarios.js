async function quantidadeUsuarios() {
    const url = ' {
    "total_trabalhadores_mundo": 3.0e9,
    "total_pessoas_que_necessitam_transporte_para_trabalho": 2.0e9,
    "tempo_medio_deslocamento_para_trabalho": 0.9,
    "total_pessoas_mundo": 7.888e9
  }'
    const res = await fetch(url)
    const dados = await res.json()
    const pessoas_mundo = Object.keys(dados)
    const trabalhadores_mundo = Object.values(dados)
 
  const data = [
    {
      x: pessoas_mundo,
      y: trabalhadores_mundo,
      type: 'bar'
    }
  ]
 
  const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}