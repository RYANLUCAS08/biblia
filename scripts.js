let tipoLivro=null
const velhoTestamento = [
    {
        nome: 'Gênesis', capitulos: [
            {
                versiculos: [
                    'No princípio, criou Deus os céus e a terra.',
                    'E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.',
                    'E disse Deus: Haja luz. E houve luz.'
                ]
            },
            {
                versiculos: [
                    'Assim, os céus, e a terra, e todo o seu exército foram acabados.',
                    'E, havendo Deus acabado no dia sétimo a sua obra, que tinha feito, descansou no sétimo dia de toda a sua obra, que tinha feito.',
                    'E abençoou Deus o dia sétimo e o santificou; porque nele descansou de toda a sua obra, que Deus criara e fizera.',
                ]
            },
            {
                versiculos: [
                    ' Ora, a serpente era mais astuta que todas as alimárias do campo que o Senhor Deus tinha feito. E esta disse à mulher: É assim que Deus disse: Não comereis de toda árvore do jardim?',
                    ' E disse a mulher à serpente: Do fruto das árvores do jardim comeremos,',
                    ' mas, do fruto da árvore que está no meio do jardim, disse Deus: Não comereis dele, nem nele tocareis, para que não morrais.',
                    ' Então, a serpente disse à mulher: Certamente não morrereis.',
                    'Porque Deus sabe que, no dia em que dele comerdes, se abrirão os vossos olhos, e sereis como Deus, sabendo o bem e o mal.',
                    ' E, vendo a mulher que aquela árvore era boa para se comer, e agradável aos olhos, e árvore desejável para dar entendimento, tomou do seu fruto, e comeu, e deu também a seu marido, e ele comeu com ela.',
                    'Então, foram abertos os olhos de ambos, e conheceram que estavam nus; e coseram folhas de figueira, e fizeram para si aventais.'
                ]
            },
            {
                versiculos: [
                    'E conheceu Adão a Eva, sua mulher, e ela concebeu, e teve a Caim, e disse: Alcancei do Senhor um varão.',
                    ' E teve mais a seu irmão Abel; e Abel foi pastor de ovelhas, e Caim foi lavrador da terra.',
                    'E aconteceu, ao cabo de dias, que Caim trouxe do fruto da terra uma oferta ao Senhor.',
                    ' E Abel também trouxe dos primogênitos das suas ovelhas e da sua gordura; e atentou o Senhor para Abel e para a sua oferta.',



                ]
            }, {
                versiculos: [
                    'Este é o livro das gerações de Adão. No dia em que Deus criou o homem, à semelhança de Deus o fez.',
                    ' Macho e fêmea os criou, e os abençoou, e chamou o seu nome Adão, no dia em que foram criados.',
                    ' E Adão viveu cento e trinta anos, e gerou um filho à sua semelhança, conforme a sua imagem, e chamou o seu nome Sete.',
                    'E foram os dias de Adão, depois que gerou a Sete, oitocentos anos, e gerou filhos e filhas.',

                ]
                
            },
            {versiculos:[
                'E aconteceu que, como os homens começaram a multiplicar-se sobre a face da terra, e lhes nasceram filhas,',
                'viram os filhos de Deus que as filhas dos homens eram formosas; e tomaram para si mulheres de todas as que escolheram.',
                'Então, disse o Senhor: Não contenderá o meu Espírito para sempre com o homem, porque ele também é carne; porém os seus dias serão cento e vinte anos.',
                'Havia, naqueles dias, gigantes na terra; e também depois, quando os filhos de Deus entraram às filhas dos homens e delas geraram filhos; estes eram os valentes que houve na antiguidade, os varões de fama.',

            ]}




        ]
    },
    { nome: 'Êxodo', capitulos: [
        {versiculos:[
            ' Estes, pois, são os nomes dos filhos de Israel, que entraram no Egito com Jacó; cada um entrou com sua casa:',
            'Rúben, Simeão, Levi e Judá;',
            ' Issacar, Zebulom e Benjamim;',
            ' Dã, Naftali, Gade e Aser.',


        ]},
        {versiculos:[
            'E foi-se um varão da casa de Levi e casou com uma filha de Levi.',
            ' E a mulher concebeu, e teve um filho, e, vendo que ele era formoso, escondeu-o três meses.',
            ' Não podendo, porém, mais escondê-lo, tomou uma arca de juncos e a betumou com betume e pez; e, pondo nela o menino, a pôs nos juncos à borda do rio.',
            '4 E a irmã do menino postou-se de longe, para saber o que lhe havia de acontecer.',



            ]},
        {versiculos:[
            ' E apascentava Moisés o rebanho de Jetro, seu sogro, sacerdote em Midiã; e levou o rebanho atrás do deserto e veio ao monte de Deus, a Horebe.',
            ' E apareceu-lhe o Anjo do Senhor em uma chama de fogo, no meio de uma sarça; e olhou, e eis que a sarça ardia no fogo, e a sarça não se consumia.',
            'E Moisés disse: Agora me virarei para lá e verei esta grande visão, porque a sarça se não queima.',
            'E Moisés disse: Agora me virarei para lá e verei esta grande visão, porque a sarça se não queima.',


        ]},
        {versiculos:[
            ' Então, respondeu Moisés e disse: Mas eis que me não crerão, nem ouvirão a minha voz, porque dirão: O Senhor não te apareceu.',
            ' E o Senhor disse-lhe: Que é isso na tua mão? E ele disse: Uma vara.',
            ' E ele disse: Lança-a na terra. Ele a lançou na terra, e tornou-se em cobra; e Moisés fugia dela.',
            'Então, disse o Senhor a Moisés: Estende a mão e pega-lhe pela cauda (E estendeu a mão e pegou-lhe pela cauda, e tornou-se em vara na sua mão.);',


        ]},
    ] },
    { nome: 'Levítico', capitulos: [
        {versiculos:[
            'E chamou o Senhor a Moisés e falou com ele da tenda da congregação, dizendo:',
            ' Fala aos filhos de Israel e dize-lhes: Quando algum de vós oferecer oferta ao Senhor, oferecereis as vossas ofertas de gado, de vacas e de ovelhas.',
            'Se a sua oferta for holocausto de gado, oferecerá macho sem mancha; à porta da tenda da congregação a oferecerá, de sua própria vontade, perante o Senhor.',
            ' E porá a sua mão sobre a cabeça do holocausto, para que seja aceito por ele, para a sua expiação.',
        ]}
    
            
            
    ] },
    { nome: 'Números', capitulos: [
        'O Senhor falou a Moisés na Tenda do Encontro, no deserto do Sinai, no primeiro dia do segundo mês do segundo ano, depois que os israelitas saíram do Egito. Ele disse:',
        '"Façam um recenseamento de toda a comunidade de Israel, pelos seus clãs e famílias, alistando todos os homens, um a um, pelo nome.',
        'Você e Arão contarão todos os homens que possam servir no exército, de vinte anos para cima, organizados segundo as suas divisões.',
        'Um homem de cada tribo, o chefe dos grupos de famílias, deverá ajudá-los.',
    ] },
    { nome: 'Deuteronômio', capitulos: [
        'Estas são as palavras ditas por Moisés a todo o Israel no deserto, a leste do Jordão, na Arabá, defronte de Sufe, entre Parã e Tofel, Labã, Hazerote e Di-Zaabe.',
        'Em onze dias se vai de Horebe a Cades-Barneia pelo caminho dos montes de Seir.',
        'No quadragésimo ano, no primeiro dia do décimo primeiro mês, Moisés proclamou aos israelitas todas as ordens do Senhor acerca deles.',
        'Isso foi depois que ele derrotou Seom, rei dos amorreus, que habitava em Hesbom, e, em Edrei, derrotou Ogue, rei de Basã, que habitava em Asterote.',

        
    ] },
    { nome: 'Josué', capitulos: [
        'Depois da morte de Moisés, servo do Senhor, disse o Senhor a Josué, filho de Num, auxiliar de Moisés:',
        'Meu servo Moisés está morto. Agora, pois, você e todo este povo preparem-se para atravessar o rio Jordão e entrar na terra que eu estou para dar aos israelitas.',
        'Como prometi a Moisés, todo lugar onde puserem os pés eu darei a vocês.',
        'Seu território se estenderá do deserto ao Líbano, e do grande rio, o Eufrates, toda a terra dos hititas até o mar Grande, no oeste.',

    ] },
    { nome: 'juíses', capitulos: [

    ] },
    { nome: 'Juíses', capitulos: [] },
    { nome: 'Rute', capitulos: [] },
    { nome: '1 Samuel', capitulos: [] },
    { nome: '2 Samuel', capitulos: [] },
    { nome: '1 Reis', capitulos: [] },
    { nome: '2 Reis', capitulos: [] },
    { nome: '1 Crônicas', capitulos: [] },
    { nome: '2 Crônicas', capitulos: [] },
    { nome: 'Esdras', capitulos: [] },
    { nome: 'Ester', capitulos: [] },
    { nome: 'jó', capitulos: [] },
    { nome: 'Salmos', capitulos: [] },
    { nome: 'Provérbios', capitulos: [] },
    { nome: 'Eclesiastes', capitulos: [] },
    { nome: 'Cantares', capitulos: [] },
    { nome: 'Isaías', capitulos: [] },
    { nome: 'Jeremias', capitulos: [] },
    { nome: 'Lamentações', capitulos: [] },
    { nome: 'Ezequiel', capitulos: [] },
    { nome: 'Daniel', capitulos: [] },
    { nome: 'Oséias', capitulos: [] },
    { nome: 'Joel', capitulos: [] },
    { nome: 'Amós', capitulos: [] },
    { nome: 'Obadias', capitulos: [] },
    { nome: 'Jonas', capitulos: [] },
    { nome: 'Miquéias', capitulos: [] },
    { nome: 'Naum', capitulos: [] },
    { nome: 'Habacuque', capitulos: [] },
    { nome: 'Sofonias', capitulos: [] },
    { nome: 'Ageu', capitulos: [] },
    { nome: 'Zacarias', capitulos: [] },
    { nome: 'Malaquias', capitulos: [] },
];

const novoTestamento = [{
     nome: 'Mateus', capitulos :
     [{versiculos:
        [
            ' Livro da geração de Jesus Cristo, Filho de Davi, Filho de Abraão.',
            ' Abraão gerou a Isaque, e Isaque gerou a Jacó, e Jacó gerou a Judá e a seus irmãos',
            ' e Judá gerou de Tamar a Perez e a Zerá, e Perez gerou a Esrom, e Esrom gerou a Arão.',
            'Arão gerou a Aminadabe, e Aminadabe gerou a Naassom, e Naassom gerou a Salmom',
        ]}
    ]},
    { nome: 'Marcos' },
    { nome: 'Lucas' },
    { nome: 'Atos' },
    { nome: 'Romanos' },
    { nome: '1 Coríntos' },
    { nome: '2 Coríntos' },
    { nome: 'Gálatas' },
    { nome: 'Efésios' },
    { nome: 'Filipenses' },
    { nome: 'Colossences' },
    { nome: '1 Tesssanolissences' },
    { nome: '2 Tesssanolissences' },
    { nome: '1 Timótio' },
    { nome: '2 Timótio' },
    { nome: 'Tito' },
    { nome: 'Filomon' },
    { nome: 'Hebreus' },
    { nome: 'Tiago' },
    { nome: '1 Pedro' },
    { nome: '2 Pedro' },
    { nome: ' 1 João' },
    { nome: '2 João' },
    { nome: '3 João' },
    { nome: 'Judas' },
    { nome: 'Apocalipse' },
    ];


//Função para carregar os capítulos
const carregaCapitulos = (livro) => {

}


// Ela é executando quando a página
// é carregada.
window.onload = () => {
    // Como buscar um elemento html no js
    // podemos utilizar o id
    const select = document.getElementById('velho')

    //adicionando um evento no select: Este evento é disparado
    //sempre que um option é selecionado
    select.addEventListener('change', (event) => {

        tipoLivro='velho'
        // Quem foi o option selecionado?
        const livro = event.target.value

        //precisamos pegar o select do capitulo
        const capitulo = document.getElementById('capitulo');

        //vamos garantir que ele esteja vazio para começar
        capitulo.innerHTML = '';

        //precisamos guardar os capitulos do livro selecionado
        let capitulos = []

        // precisamos achar o livro correto
        for (let i = 0; i < velhoTestamento.length; i++) {
            if (velhoTestamento[i].nome == livro)
                capitulos = velhoTestamento[i].capitulos
        }

        // Quantos capitulos o livro tem? O tamanho do vetor



        for (let i = 0; i < capitulos.length; i++) {
            // Precisamos criar um elemento dentro do select
            // vamos criar uma tag option
            const option = document.createElement('OPTION')
            // Precisamos mostrar o número do capítulo
            option.innerHTML = i + 1
            // Precisamos adicionar o option como filho do select
            capitulo.appendChild(option)
        }
    })




    for (let i = 0; i < velhoTestamento.length; i++) {
        // Precisamos criar um elemento dentro do select
        // vamos criar uma tag option
        const option = document.createElement('OPTION')
        // Precisamos acessar a propriedade nome do 
        // elemento que está no  vetor
        option.innerHTML = velhoTestamento[i].nome

        //precisamos definir um valor
        option.setAttribute('value', velhoTestamento[i].nome);

        // Precisamos adicionar o option como filho do select
        select.appendChild(option)
    }

    // Tarefas para o Ryan
    // 1) Preencher o vetor com os nomes dos livros
    //  tanto velho quanto novo testamento
    // 2) remover os options do select
    // 3) Você irá desenvolver a lógica para 
    // montar o select do novo testamento


    // Tarefa para o Ryan
    // 1) Preencher o vetor  com os capítulos e versículos
    // 2) Trazer as dúvidas que surgiram durante o desenvolvimento



    const selectNovo = document.getElementById('novo')

    selectNovo.addEventListener('change', (event) => {
        
        // 3) você irá desenvolver a lógica para montar o select do capítulo
        // quando o novo testamento for selecionado.	
            tipoLivro='novo'

            const livro = event.target.value
            
            const capitulo = document.getElementById('capitulo');
            capitulo.innerHTML='';
            let capitulos = []
            
            for (let i = 0;i<novoTestamento.length; i++){
                if(novoTestamento[i].nome== livro) {
                    capitulos= novoTestamento[i].capitulos
                }
            }
            for (let i = 0; i < capitulos.length; i++){
                const option = document.createElement('OPTION')
                option.innerHTML = i + 1
                capitulo.appendChild(option)
                

            }



    })

    for (let i = 0; i < novoTestamento.length; i++) {    
        capitulos= novoTestamento [i].capitulos
        const option = document.createElement('OPTION')
        option.innerHTML = novoTestamento[i].nome
        option.setAttribute('value', novoTestamento[i].nome);
        selectNovo.appendChild(option)
    }
    const selectcapitulo = document.getElementById('capitulo')
    const selectVersiculo = document.getElementById('versiculo')
    selectcapitulo.addEventListener('change', (event) => {
        const capituloAtual=selectcapitulo.value-1

        let contversiculo
        let livroAtual
        if(tipoLivro=='novo'){     
            livroAtual = document.getElementById("novo").selectedIndex - 1
            contversiculo = novoTestamento[livroAtual]['capitulos'][capituloAtual]['versiculos'].length
        }
        else{
            livroAtual = document.getElementById("velho").selectedIndex - 1
            contversiculo = velhoTestamento[livroAtual]['capitulos'][capituloAtual]['versiculos'].length
        }

        // Fazer uma repetição igual a essa, mas para preencher os versículos
        // em vez de "capitulo.appendChild" vai ser "selectVersiculo.appendChild" ....
        // em vez de "capitulos.length" vai ser "contversiculo"
        //
        // for (let i = 0; i < capitulos.length; i++){
        //     const option = document.createElement('OPTION')
        //     option.innerHTML = i + 1
        //     capitulo.appendChild(option)
        // }



        for(let i=0;i < contversiculo; i++){
            const option = document.createElement('OPTION')
            option.innerHTML = i + 1
            selectVersiculo.appendChild (option)
            
        }


        //console.log(`tipoLivro: ${tipoLivro}, livro: ${livroAtual}, capitulo: ${capituloAtual}, contagem: ${contversiculo}`)
       
    });

    // Fazer um eventlistener igual, mas para o selectVersiculo
    //selectcapitulo.addEventListener('change', (event) => {
    
    selectVersiculo.addEventListener('change', (event) => {
        const capituloAtual=selectcapitulo.value-1
        const versiculoAtual=selectVersiculo.value-1
        let versiculoTela
        if(tipoLivro=='novo'){     
            livroAtual = document.getElementById("novo").selectedIndex - 1
            versiculoTela = novoTestamento[livroAtual]['capitulos'][capituloAtual]['versiculos'][versiculoAtual]
        }
        else{
            livroAtual = document.getElementById("velho").selectedIndex - 1
            versiculoTela = velhoTestamento[livroAtual]['capitulos'][capituloAtual]['versiculos'][versiculoAtual]
        }

        document.getElementById('mostrarVersiculo').innerHTML=versiculoTela
        
    });



}
//Observações:lembrar de colocar vírgula depois de fechar versículo; conferir fechamentos das chaves e colchetes.

/*
Tarefa
1 - Criar uma constante para capturar o elemento "capitulo" igual foi feito na linha 286
2 - Criar uma constate para capturar o elemento "versiculo"
3 - Criar um eventListener para "change" nessa constante de capítulo
4 - Realizar a contagem de versículos dentro do capítulo
*/
