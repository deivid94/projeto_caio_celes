const axios = require('axios');
const cheerio = require('cheerio');
const jquery = require('jquery');
const puppeteer = require ('puppeteer');

const url = "https://avisodesligamento.celesc.com.br/"




async function  getDados ( ){
    const { data }  = await axios.get(url)
    const $ = cheerio.load(data)

        //console.log(data)


        const element = await puppeteer.Page('form').text()
    

  

//         const content =  $('body td tr option').text() 
  //          var transforArray = [content]
    //        console.log(transforArray)


            
        
        //construir um seletor!
            // navegar ate o elemento HTML das informacacoes
                // get elementos
    // talvez for.each pegar todas localidades da mais
    // fluxo de verificacao de dados duplicados, 
    // verificar se retorno as informacoes para um array. 
             // E DEPOIS FRONT!!!


}

navegarPagina()
getDados()