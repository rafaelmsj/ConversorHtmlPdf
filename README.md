# 📄 Conversor CSV para HTML/PDF

Este projeto em **Node.js** permite que o usuário envie um arquivo `.csv` e escolha entre baixá-lo convertido para **HTML** ou **PDF**. Após o download, os arquivos temporários são automaticamente excluídos do servidor para garantir segurança e limpeza de dados.

---

## ✨ Funcionalidades

- 📤 Upload de arquivos CSV via formulário HTML
- 🔄 Conversão do conteúdo do CSV para:
  - **HTML** (tabela formatada)
  - **PDF** (documento gerado a partir do HTML)
- ⬇️ Download automático do arquivo convertido
- 🧹 Exclusão automática dos arquivos temporários após **60 segundos**

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer) – upload de arquivos
- [html-pdf](https://www.npmjs.com/package/html-pdf) – conversão de HTML para PDF
- [fs](https://nodejs.org/api/fs.html) – manipulação de arquivos
- [path](https://nodejs.org/api/path.html) – construção de caminhos de arquivos

