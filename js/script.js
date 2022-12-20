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
                    <tr onClick="abrirDiretorio('Users')">
                        <td>Usuários</td>
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
    const videoHtml = `
    <div class="box"  onclick="flip()">
            <div id="box__content">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div><table>
                <div class="box__front">
                    <video width="100%" autoplay><source src=${video} type="video/mp4"></video>
                </div>
                <div class="box__back" style="background-color: aliceblue;"></div>   
            </div>
        </div>
    </div>
    `
    document.getElementById('placeHolderJanela').innerHTML = videoHtml
}
function abrirImagem(imagem, papel){
    let src = '';
    if (papel == 'velho'){
        src = "default.png"
    }else if (papel == 'novo'){
        src = "default2.png"
    }
    const imagemHtml = `
        <div class="box"  onclick="flip()">
            <div id="box__content">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div><table>
                <div class="box__front">
                    <img src="${imagem}">
                </div>
                <div class="box__back">
                    <img src="images/${src}">
                </div>
            </div>
        </div>
    `
    document.getElementById('placeHolderJanela').innerHTML = imagemHtml
}
function abrirAudio(audio){
    const audioHtml = `
        <div id="janela">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <img src="images/icons/icons8-audio-100a.png" style="margin-left: 500px; margin-top: 200px;"><br>
            <audio src="${audio}" controls style="margin-left: 400px;"></audio>
        </div>
    `
    document.getElementById('placeHolderJanela').innerHTML = audioHtml
}
function abrirDiretorio(type){
    if (type === 'areaTrabalho'){
        const dirHtml = `
        <table style="width:100%">
            <tr onclick="abrirPasta('arquivo'), abrirDiretorio('Lixeira')">
                <td>Lixeira</td>
            </tr>
            <tr onclick="abrirImagem('images/cato.png', 'novo')">
                <td>Meu amor1.png</td>
            </tr>
            <tr onclick="abrirVideo('images/pexe.mp4')">
                <td>Meu amor2.png</td>
            </tr>
            <tr onclick="abrirVideo('images/miau.mp4')">
                <td>Meu amor3.png</td>
            </tr>
            <tr onclick="abrirAudio('ult.mp3')">
                <td>Corra.mp3</td>
            </tr>
            <tr onclick="abrirPasta('arquivo')">
                <td>Felipe Oliveira</td>
            </tr>
        </table>
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Documentos"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td>Pasta vazia</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Downloads"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td onclick="abrirVideo('images/pexe.mp4')">Meu amor2.mp4</td>
                </tr>
                <tr>
                    <td onclick="abrirVideo('images/cato.mp4')">Meu amor3.mp4</td>
                </tr>
            </table>    
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Imagens"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td onclick="abrirImagem('images/cato.png')">Meu amor1.png</td>
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
    if (type === "Users"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td onclick="user('felipe')">Felipe Oliveira</td>
                </tr>
                <tr>
                    <td>Olavo Oliveira</td>
                </tr>
                <tr>
                    <td>Carlonso Oliveira</td>
                </tr>
                <tr>
                    <td>Heremita Oliveira</td>
                </tr>
                <tr>
                    <td>Bolongo Oliveira</td>
                </tr>
            </table> 
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
}

function user(user){
    if (user === 'felipe'){
        const usrHtml = `
        <div id="janela">
        <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <table style="width:100%">
                <tr onclick="abrirImagem('images/gay.png', 'velho')">
                    <td>Declaração</td>
                </tr>
                <tr onclick="abrirImagem('images/guriaremaster.png', 'novo')">
                    <td>Ela</td>
                </tr>
                <tr onclick="abrirImagem('images/morte.png', 'velho')">
                    <td>...</td>
                </tr>
            </table>
        </div>
        `
        document.getElementById('janela').innerHTML = usrHtml
    }

}
function flip(){
    var element = document.getElementById("box__content");
    element.classList.toggle("flip");

}