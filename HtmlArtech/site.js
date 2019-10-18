function validaFaleConosco() {

    var nome=document.frmfaleconosco.txtnome.value;
    var expRegnome= new RegExp('^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$');
    if(!expRegnome.test(nome)){
        alert("Preencha o Campo Nome Completo!!!");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var expRegfone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    if(!expRegfone.test(fone)){
        alert("Preencha o Campo Telefone ou formato inválido!!!");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }
    var email = document.frmfaleconosco.txtemail.value;
    var expRegemai= new RegExp("/[^@-.W]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/");
    if(!expRegemai.test(email)){
        alert("Preencha o Campo Email ou formato inválido !!!");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
        }

function verificaMotivo(motivo) {
    // Capturamos a estrutura da div cujo ID é opcaoProduto na variável elemento
    var elemento = document.getElementById("opcaoProduto");

    // Se o valor da variável motivo for "PR"

    if(motivo=="PR"){
        // Criamos um elemento (tag) <select> e guardamos na variável homônima
        var select = document.createElement("select");
        // Setamos nesse povo select o atributo 'name' com o valor 'selproduto'
        select.setAttribute("name","selproduto");
        // COnteúdo atual da variável select:
        // <select name = "selproduto"></select>

        // Criamos um elemento (tag) <option> e guardamos na variável homônima
        var option = document.createElement("option");
        // Setamos nesse novo select o atributo 'value' com o valor vazio
        option.setAttribute("value", " ");

        // Criamos um nó de texto "Escolha" e gravamos na variável 'texto'
        var texto = document.createTextNode("Escolha")
        // Colocamos o nó de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        // Conteúdo atual da variável option:
        // <option value=" ">Escolha </option>
        // Colocamos o option criado como "filho" da Tag select criada
    
        select.appendChild(option);
        // Conteúdo atual da variável select:
        // <select name "selproduto"><option value= " ">Escolha</option></select>select>

        var option = document.createElement("option");
        option.setAttribute("value","AR");

        var texto = document.createTextNode("Ar Condicionado")
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value","AQ");

        var texto = document.createTextNode("Aquecedor")
        option.appendChild(texto);
        select.appendChild(option);

        elemento.appendChild(select);
    }else{
        if(elemento.firstChild)
             elemento.removeChild(elemento.firstChild)
    }
}