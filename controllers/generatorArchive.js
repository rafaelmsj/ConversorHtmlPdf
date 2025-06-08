const Reader = require('../class/Reader')
const Writer = require('../class/Writer')
const Processor = require('../class/Processor')
const Table = require('../class/Table')
const HtmlParser = require('../class/HtmlParser')
const PDFWhiter = require('../class/PDFWriter')

var leitor = new Reader()
var escritor = new Writer()

async function main(nomeArq, caminho, tipo) {

    var dados = await leitor.Read(caminho)
    var dadosProcessados = await Processor.Process(dados)
    var table = new Table(dadosProcessados)

    var html = await HtmlParser.Parse(table, nomeArq, table.RowCount, table.ColunCount)

    if (tipo === 'html') {
        escritor.Writer(`outputs/${nomeArq}.html`, html);
    } else if (tipo === 'pdf') {
        PDFWhiter.WritePDF(`outputs/${nomeArq}.pdf`, html);
    }

}

module.exports = main
