const input = document.getElementById('arquivo');

input.addEventListener('change', () => {
    if(input.files.length > 0){
        document.getElementById('functions').style.display = 'flex'
    }
    else {
        if(input.files.length === 0){
        document.getElementById('functions').style.display = 'none'
    }
    }
})

document.getElementById('btnPdf').addEventListener('click', () => {
    enviarArquivo('pdf');
});

document.getElementById('btnHtml').addEventListener('click', () => {
    enviarArquivo('html');
});

async function enviarArquivo(tipo) {
    if (input.files.length === 0) {
        alert('Selecione um arquivo CSV.');
        return;
    }

    const formData = new FormData();
    formData.append('arquivo', input.files[0]);
    formData.append('tipo', tipo); // ← envia o tipo de conversão

    const res = await fetch('/processar', {
        method: 'POST',
        body: formData
    });

    const data = await res.json();

    if (data.success) {
        alert(data.message);
        window.open(`/download/${data.filename}?tipo=${tipo}`, '_blank');
    }
}
