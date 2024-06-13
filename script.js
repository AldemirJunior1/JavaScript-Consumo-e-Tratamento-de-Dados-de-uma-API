async function buscarEndereco(cep) {
        var mensagemErro = document.getElementById('erro')
        mensagemErro.innerHTML = "";
    try  {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)  
        var consultarCepConvertida = await consultaCep.json();
        if (consultarCepConvertida.erro) {
            throw Error('CEP não existente!')  
        }           
        var cidade = document.getElementById('cidade');
        var bairro = document.getElementById('bairro')
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        
        cidade.value = consultarCepConvertida.localidade;
        bairro.value = consultarCepConvertida.bairro;
        logradouro.value = consultarCepConvertida.logradouro;
        estado.value = consultarCepConvertida.uf;

        console.log(consultarCepConvertida)
        return consultarCepConvertida;
        
    } catch (erro) {
        mensagemErro.innerHTML = '<p>CEP invalido. Tente novamente!</p>'
            console.log(erro);
        }
    }

    var cep = document.getElementById('cep');
    
    cep.addEventListener('focusout', ()=> buscarEndereco(cep.value));


//  let ceps =['06329240','06329220'];
// let conjutoDeCeps = ceps.map( valores => buscarEndereco(valores))
// Promise.all (conjutoDeCeps).then(respostas => console.log(respostas));
