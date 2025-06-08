const fs = require('fs');
const path = require('path')

function excluirArquivosTemporarios(nomeBase, caminhoUpload, delayMs = 120000) {
    setTimeout(() => {
        if (fs.existsSync(caminhoUpload)) {
            fs.unlink(caminhoUpload, err => {
                if (err) console.error(`Erro ao excluir upload:`, err);
                else console.log(`Arquivo de upload excluído: ${caminhoUpload}`);
            });
        }

        const htmlPath = path.join(__dirname, 'outputs', nomeBase + '.html');
        const pdfPath = path.join(__dirname, 'outputs', nomeBase + '.pdf');

        [htmlPath, pdfPath].forEach(file => {
            if (fs.existsSync(file)) {
                fs.unlink(file, err => {
                    if (err) console.error(`Erro ao excluir ${file}:`, err);
                    else console.log(`Arquivo excluído: ${file}`);
                });
            }
        });
    }, delayMs);
}


module.exports = excluirArquivosTemporarios