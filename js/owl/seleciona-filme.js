var itemSelecionado = "";

function selecionaFilme(str) {

    $(document).ready(function() {
        $("#bttrailer").click();
    });
    itemSelecionado = str;
    trocaImagem(str);
    trocaTitulo(str);
    trocaDescricao(str);
}

function selecionaTrailer() {
    exibeTrailer(itemSelecionado);
}

function trocaImagem(str) {
    $(document).ready(function(){
        $(".filme-principal").css("background","linear-gradient(rgba(0,0,0,.50)");
        $(".filme-principal").css("background","rgba(0,0,0,.50)100%)");

        var src = $('#' + str).find('#capa').prop("src");

        $(".filme-principal").css("background","url"+ "(" + src +")");
    });
}

function trocaTitulo(str) {
    $(document).ready(function(){
        switch (str) {
            case 'item1' : 
                $(".filme-principal").find("h3").html('Bad Boys Para Sempre');
                break;
            case 'item2' :    
                $(".filme-principal").find("h3").html('Servant');
                break;
            case 'item3' :    
                $(".filme-principal").find("h3").html('Lupin');
                break;
            case 'item4' :    
                $(".filme-principal").find("h3").html('star wars');
                break;
            case 'item5' :    
                $(".filme-principal").find("h3").html('Vingadores');
            break;
            case 'item6' :    
                $(".filme-principal").find("h3").html('The Good Doctor');
                break;
            case 'item7' :    
                $(".filme-principal").find("h3").html('Cobra Kai');
                break;
            case 'item8' :    
                $(".filme-principal").find("h3").html('Vikings');
                break;
            case 'item9' :    
                $(".filme-principal").find("h3").html('Riverdale');
                break;
            case 'item10' :    
                $(".filme-principal").find("h3").html('Lucifer');
                break;
            default:
                $(".filme-principal").find("h3").html('Sem Título');
        }
    });
}

function trocaDescricao(str) {
    $(document).ready(function(){
        switch (str) {
            case 'item1' : 
                $(".filme-principal").find("p").html(`
                    Armando é um assassino de sangue frio com uma natureza cruel e provocadora.Ele está comprometido com o trabalho do cartel e é enviado por sua mãe para matar Mike (Smith).
                    Nuñez assumirá o papel de Rita, psicóloga criminal durona e engraçada que é recém-nomeada chefe da AMMO e é ex-namorada de Mike.
                `);
                break;
            case 'item2' : 
                $(".filme-principal").find("p").html(`
                A série de M. Night Shyamalan mostra o luto de um casal da Filadélfia depois que uma grande tragédia abala o casamento e permite que uma força misteriosa entre na casa da família.
                `);
                break;
            case 'item3' : 
                $(".filme-principal").find("p").html(`
                Na adolescência, a vida de Assane Diop dá uma guinada radical quando seu pai morre após ser acusado de um crime que não cometeu. Vinte e cinco anos depois, Assane se inspira em "Arsène Lupin, o Ladrão de Casaca" para vingá-lo.
                 `);
                break;
            case 'item4' : 
                $(".filme-principal").find("p").html(`
                Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra em conflito com seu passado e futuro, mas teme pelas respostas que pode conseguir a partir de sua complexa ligação com Kylo Ren (Adam Driver), que também se encontra em conflito pela Força.
                 `);
                break;
            case 'item5' : 
                $(".filme-principal").find("p").html(`
                Após os eventos devastadores de "Vingadores: Guerra Infinita", o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.
                 `);
                break;
            case 'item6' : 
                $(".filme-principal").find("p").html(`
                Um jovem médico com autismo começa a trabalhar em um famoso hospital. Além dos desafios da profissão, ele terá também que provar sua capacidade a seus colegas e superiores.
                 `);
                break;
            case 'item7' : 
                $(".filme-principal").find("p").html(`
                Esta sequência de Karate Kid pega 30 anos depois dos eventos do All Valley Karate Tournament de 1984 e encontra Johnny Lawrence em busca de redenção reabrindo o infame dojo de karate Cobra Kai . Isso reacende sua antiga rivalidade com o bem-sucedido Daniel LaRusso, que vem trabalhado para manter o equilíbrio em sua vida sem o seu mentor Miyagi.
                 `);
                break;
            case 'item8' : 
                $(".filme-principal").find("p").html(`
                Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que as riquezas sonhadas por seu povo encontram-se além do mar Báltico. Mas para conseguir conquistá-las ele precisa convencer Earl Haraldson, o líder de seu povo, a permitir que ele e seus guerreiros viagem em direção à Inglaterra.
                 `);
                break;
            case 'item9' : 
                $(".filme-principal").find("p").html(`
                Enquanto tentam lidar com problemas típicos da adolescência como amor, sexo, escola e família, Archie e sua turma se envolvem em um grande mistério.
                 `);
                break;
            case 'item10' : 
                $(".filme-principal").find("p").html(`
                Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.
                 `);
                break;
            default:   
                $(".filme-principal").find("p").html(`Sinopse não dispónível.`); 
        }
    });
}

function exibeTrailer(str) {
    $(document).ready(function(){
        $(".trailer").removeAttr("hidden");
        switch (str) {
            case 'item1' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/8zQhoiJfrvU");
                break;
            case 'item2' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/eR7-wDxFNjk");
                break; 
            case 'item3' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/FoiQ-Xr8NDI");
                 break; 
            case 'item4' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/W0squnw6Jp8");
                break; 
            case 'item5' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/g6ng8iy-l0U");
                break; 
            case 'item6' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/fYlZDTru55g");
                break; 
            case 'item7' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/xCwwxNbtK6Y");
                break; 
            case 'item8' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/9GgxinPwAGc");
                break; 
            case 'item9' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/HxtLlByaYTc");
                break; 
            case 'item10' :
                $(".trailer").find("iframe").attr("src", "http://www.youtube.com/embed/X4bF_quwNtw");
                break; 
           
                
        }
    }); 

}



