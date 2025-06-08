const pdf = require('html-pdf')

class PDFWhiter {
    static WritePDF(filename, html) {
        pdf.create(html,{}).toFile(filename, (err) => {
            if(err){
                console.log(`Erro ao gerar PDF: ${err.message}`)
            }
            else {
                console.log(`PDF Gerado com sucesso!`)
            }
        })
    }
}

module.exports = PDFWhiter