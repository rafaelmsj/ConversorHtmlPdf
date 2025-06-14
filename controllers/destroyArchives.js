const fs = require('fs');
const path = require('path');

function excluirArquivosTemporarios(nomeBase, caminhoUpload, delayMs = 60000) {
    setTimeout(() => {
        try {
            if (fs.existsSync(caminhoUpload)) {
                fs.unlinkSync(caminhoUpload);
                console.log(`Arquivo de upload excluído: ${caminhoUpload}`);
            } else {
                console.warn(`Upload não encontrado: ${caminhoUpload}`);
            }

            const htmlPath = path.join(__dirname, '../outputs', nomeBase + '.html');
            const pdfPath = path.join(__dirname, '../outputs', nomeBase + '.pdf');

            if (fs.existsSync(htmlPath)) {
                fs.unlinkSync(htmlPath);
                console.log(`Arquivo HTML excluído: ${htmlPath}`);
            } else {
                console.warn(`HTML não encontrado: ${htmlPath}`);
            }

            if (fs.existsSync(pdfPath)) {
                fs.unlinkSync(pdfPath);
                console.log(`Arquivo PDF excluído: ${pdfPath}`)
            } else {
                console.warn(`PDF não encontrado: ${pdfPath}`);
            }

        } catch (err) {
            console.error(`Erro ao excluir arquivos temporários:`, err);
        }
    }, delayMs);
}

module.exports = excluirArquivosTemporarios;
