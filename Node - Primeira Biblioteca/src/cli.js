import pegaArquivo from './index.js'; 
import chalk from 'chalk';
import fs from 'fs';

// Método process node que captura o que foi passado para a linha de comando do cmd e retorna o caminho de um arquivo
const caminho = process.argv;

function imprimeLista(resultado, identificador = ''){
    console.log(
        chalk.yellow('Lista de links:'),
        chalk.black.bgGreen(identificador),
        resultado);
}

//A função processaTexto passa um caminho da const caminho que pega o valor do caminho digitado no cmd. 
//Em seguida a função processaTexto chama a função pegaArquivo passando como parâmetro a posição 2 do caminho digitado e exibe o resultado. 
//Como a função pegaArquivo é uma função assíncrona, é necessário que a função processaTexto seja assíncrona tbm para exibir o resultado. 
async function processaTexto(argumentos){
    const caminho = argumentos[2];
    //o bloco try{}catch(erro){} executa o que está em try, e se der erro pega o erro e executa uma ação para o erro
    try{
        fs.lstatSync(caminho);
    } catch (erro){
        if(erro.code === 'ENOENT'){
            console.log('Arquivo ou diretório não existe.');
            return;
        }
    }

    //fs.lstatSync().isFile() verifica se o caminho passado é um arquivo
    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(argumentos[2]);
        //console.log(chalk.yellow('Lista de links:'),resultado); 
        imprimeLista(resultado);
    //fs.lstatSync().isDirectory() verifica se o caminho é um diretório
    } else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            //console.log(chalk.yellow('Lista de links:'),lista);
            imprimeLista(lista, nomeDeArquivo); 
        })
    }
}

processaTexto(caminho); 


