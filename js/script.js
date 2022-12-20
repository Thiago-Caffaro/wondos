function abrirPasta(type) {
    const janelaHtml = `
        <div id="janela">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
        </div>`
    document.getElementById('placeHolderJanela').innerHTML = janelaHtml
    if (type === 'arquivo'){
        const typeHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <div id="lateral-arquivo">
                <table style="width:100%">
                    <tr>
                        <th>Arquivos</th>
                    </tr>
                    <tr onClick="abrirDiretorio('areaTrabalho')">
                        <td>Área de trabalho</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Documentos')">
                        <td>Documentos</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Downloads')">
                        <td>Downloads</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Imagens')">
                        <td>Imagens</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Lixeira')">
                        <td>Lixeira</td>
                    </tr>
                </table>
            </div>
            <div id="main-arquivo">
            </div>
        `
        document.getElementById('janela').innerHTML = typeHtml
    }
    if(type === 'chat'){
        const typeHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <div id="lateral-arquivo">
            </div>
        `
        document.getElementById('janela').innerHTML = typeHtml
    }
    if(type === 'lixeira'){
        const typeHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
        `
    }
}
function fecharJanela(){
    const janelaHtml = ``
    document.getElementById('placeHolderJanela').innerHTML = janelaHtml
}
function abrirVideo(video){
    const typeHtml = `
        <div id="janela">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <video width="100%" height="570px" autoplay><source src=${video} type="video/mp4"></video>
        </div>
    `
    document.getElementById('placeHolderJanela').innerHTML = typeHtml
}
function abrirImagem(imagem){
    const typeHtml = `
        <div id="janela">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <img src=${imagem} style="width: 100%; height: 620px;">
        </div>
    `
    document.getElementById('placeHolderJanela').innerHTML = typeHtml
}
function abrirDiretorio(type){
    if (type === 'areaTrabalho'){
        const dirHtml = `
        <table style="width:100%">
            <tr>
                <td>Pasta vazia1</td>
            </tr>
        </table>
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Documentos"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td>Pasta vazia2</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Downloads"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td>Pasta vazia3</td>
                </tr>
            </table>    
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Imagens"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td>Pasta vazia4</td>
                </tr>
            </table> 
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Lixeira"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td>Lixeira vazia</td>
                </tr>
            </table> 
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
}
