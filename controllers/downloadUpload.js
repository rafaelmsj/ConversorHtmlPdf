const express = require('express');
const Router = express.Router()
const path = require('path');
const multer = require('multer')
const fs = require('fs')

const upload = multer({ dest: 'uploads/' });

const main = require('./generatorArchive');
const excluirArquivosTemporarios = require('./destroyArchives')

Router.post('/processar', upload.single('arquivo'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Nenhum arquivo enviado.' });
    }

    const nomeOriginal = path.parse(req.file.originalname).name;
    const caminhoTemporario = req.file.path;
    const tipo = req.body.tipo;

    const ext = path.extname(req.file.originalname).toLowerCase();
    if (ext !== '.csv') {
        return res.status(400).json({ message: 'Apenas arquivos CSV são permitidos.' });
    }

    try {
        await main(nomeOriginal, caminhoTemporario, tipo);

        excluirArquivosTemporarios(nomeOriginal, caminhoTemporario);

        res.json({
            success: true,
            message: `Arquivo ${tipo.toUpperCase()} gerado com sucesso!`,
            filename: nomeOriginal
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Erro ao processar o arquivo.' });
    }
});

Router.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const tipo = req.query.tipo;

    const ext = tipo === 'pdf' ? '.pdf' : '.html';
    const filePath = path.join(__dirname, '../outputs', filename + ext);

    if (fs.existsSync(filePath)) {
        res.download(filePath, err => {
            if (err) {
                console.error('Erro no download:', err);
                res.status(500).send('Erro ao fazer o download');
            }
        });
    } else {
        res.status(404).send('Arquivo não encontrado');
    }
});

module.exports = Router;