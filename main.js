

//PROGRAMOS LA MUESTRA DE LA CARTA

var imgUnoRemoved = false;
var imgDosRemoved = false;
var turnos = 0;


function flip(event){ 
    var arr = [
        {
            "pregunta": "(1) ¿Yo, Tú y Él/Ela para verbo EMPEZAR?",
            "respuesta": "(1)Yo empiezo - Tú empiezas - Él/Ella empieza"
        },
        {
            "pregunta":"(2) ¿Yo, Tú y Él/Ella para verbo JUGAR?",
            "respuesta":"(2) Yo juego - Tú juegas - Él/Ella juega"
        },
        {
            "pregunta": "(3) ¿Yo, Tú y Él/Ella para verbo VOLVER?",
            "respuesta": "(3) Yo vuelvo - Tú vuelves - Él/Ella vuelve"
        },
        {
            "pregunta": "(4) ¿Yo, Tú y ÉL/Ella para verbo PEDIR?",
            "respuesta": "(4) Yo pido - Tú pides - Él/Ella pide"
        },
        {
            "pregunta": "(5) ¿Yo, Tú y Él/Ella para verbo ENCONTRAR?",
            "respuesta": "(5) Yo encuentro - Tú encuentras - Él/Ella encuentra"
        },
        {
            "pregunta": "(6) ¿Yo, Tú y Él/Ella para verbo MENTIR?",
            "respuesta": "(6) Yo miento - Tú mientes - Él/Ella miente"
        },
        {
            "pregunta": "(7) ¿Yo, Tú y Él/Ella para verbo RECORDAR?",
            "respuesta": "(7) Yo recuerdo - Tú recuerdas - Él/Ella recuerda"
        },
        {
            "pregunta": "(8) ¿Yo, Tú y Él/Ella para verbo DORMIR?",
            "respuesta": "(8) Yo duermo - Tú duermes - Él/Ella duerme"
        },
        {
            "pregunta": "(9) ¿Yo, Tú y Él/Ella para verbo PENSAR?",
            "respuesta": "(9) Yo pienso - Tú piensas - Él/Ella piensa"
        },
        {
            "pregunta": "(10) ¿Yo, Tú y Él/Ella para verbo REPETIR?",
            "respuesta": "(10) Yo repito - Tú repites - Él/Ella repite"
        },
        {
            "pregunta": "(11) ¿Yo, Tú y Él/Ella para verbo CERRAR?",
            "respuesta": "(11) Yo cierro - Tú cierras - Él/Ella cierra"
        },
        {
            "pregunta": "(12) ¿Yo, Tú y Él/Ella para verbo ENTENDER?",
            "respuesta": "(12) Yo entiendo - Tú entiendes - Él/Ella entiende"
        },
        {
            "pregunta": "(13) ¿Yo, Tú y Él/Ella para verbo VESTIRSE?",
            "respuesta": "(13) Yo me visto - Tú te vistes - Él/Ella se viste"
        },
        {
            "pregunta": "(14) ¿Yo, Tú y Él/Ella para verbo QUERER?",
            "respuesta": "(14) Yo quiero - Tú quieres - Él/Ella quiere"
        },
        {
            "pregunta": "(15) ¿Yo, Tú y Él/Ella para verbo VOLAR?",
            "respuesta": "(15) Yo vuelo - Tú vuelas - Él/Ella vuela"
        },
        {
            "pregunta": "(16) ¿Yo, Tú y Él/Ella para verbo SENTIR?",
            "respuesta": "(16) Yo siento - Tú sientes - Él/Ella siente "
        },
        {
            "pregunta": "(17) ¿Yo, Tú y Él/Ella para verbo PODER?",
            "respuesta": "(17) Yo puedo - Tú puedes - Él/Ella puede"
        },
        {
            "pregunta": "(18) ¿Yo, Tú y Él/Ella para verbo ALMORZAR?",
            "respuesta": "(18) Yo almuerzo - Tú almuerzas- Él/Ella almuerza"
        },
        {
            "pregunta": "(19) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo EMPEZAR?",
            "respuesta": "(19)Nosotros(as) empezamos - Vosotros(as) empezáis - Ellos(as) empiezan"
        },
        {
            "pregunta":"(20) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo JUGAR?",
            "respuesta":"(20) Nosotros(as) jugamos - Vosotros(as) juegáis - Ellos(as) juegan"
        },
        {
            "pregunta": "(21) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo VOLVER?",
            "respuesta": "(21) Nosotros(as) volvemos - Vosotros(as) volvéis - Ellos(as) vuelven"
        },
        {
            "pregunta": "(22) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo PEDIR?",
            "respuesta": "(22) Nosotros(as) pedimos - Vosotros(as) pedís - Ellos(as) piden"
        },
        {
            "pregunta": "(23) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo ENCONTRAR?",
            "respuesta": "(23) Nosotros(as) encontramos - Vosotros(as) encontráis - Ellos(as) encuentran"
        },
        {
            "pregunta": "(24) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo MENTIR?",
            "respuesta": "(24) Nosotros(as) mentimos - Vosotros(as) mentís - Ellos(as) mienten"
        },
        {
            "pregunta": "(25) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo RECORDAR?",
            "respuesta": "(25) Nosotros(as) recordamos - Vosotros(as) recordáis - Ellos(as) recuerdan"
        },
        {
            "pregunta": "(26) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo DORMIR?",
            "respuesta": "(26) Nosotros(as) dormimos - Vosotros(as) dormís - Ellos(as) duermen"
        },
        {
            "pregunta": "(27) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo PENSAR?",
            "respuesta": "(27) Nosotros(as) pensamos - Vosotros(as) pensáis - Ellos(as) piensan"
        },
        {
            "pregunta": "(28) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo REPETIR?",
            "respuesta": "(28) Nosotros(as) repetimos - Vosotros(as) repetís - Ellos(as) repiten"
        },
        {
            "pregunta": "(29) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo CERRAR?",
            "respuesta": "(29) Nosotros(as) cerramos - Vosotros(as) cerráis - Ellos(as) cierran"
        },
        {
            "pregunta": "(30) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo ENTENDER?",
            "respuesta": "(30) Nosotros(as) entendemos - Vosotros(as) entendéis - Ellos(as) entienden"
        },
        {
            "pregunta": "(31) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo VESTIRSE?",
            "respuesta": "(31) Nosotros(as) nos vestimos - Vosotros(as) os vestís - Ellos(as) se visten"
        },
        {
            "pregunta": "(32) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo QUERER?",
            "respuesta": "(32) Nosotros(as) queremos - Vosotros(as) queréis - Ellos(as) quieren"
        },
        {
            "pregunta": "(33) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo VOLAR?",
            "respuesta": "(33) Nosotros(as) volamos - Vosotros(as) voláis - Ellos(as) vuelan"
        },
        {
            "pregunta": "(34) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo SENTIR?",
            "respuesta": "(34) Nosotros(as) sentimos - Vosotros(as) sentís - Ellos(as) sienten "
        },
        {
            "pregunta": "(35) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo PODER?",
            "respuesta": "(35) Nosotros(as) podemos - Vosotros(as) podéis - Ellos(as) pueden"
        },
        {
            "pregunta": " (36) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo ALMORZAR?",
            "respuesta": "(36) Nosotros(as) almorzamos - Vosotros(as) almorzáis- Ellos(as) almuerzan"
        },
        {
            "pregunta": "(37) ¿Yo, Tú y Él/Ela para verbo ABRAZAR?",
            "respuesta": "(37)Yo abrazo - Tú abrazas - Él/Ella abraza"
        },
        {
            "pregunta": "(38) ¿Yo, Tú y Él/Ela para verbo DISCRIMINAR?",
            "respuesta": "(38)Yo discrimino - Tú discriminas - Él/Ella discrimina"
        },
        {
            "pregunta": "(39) ¿Yo, Tú y Él/Ela para verbo DESEAR?",
            "respuesta": "(39)Yo deseo - Tú deseas - Él/Ella desea"
        },
        {
            "pregunta": "(40) ¿Yo, Tú y Él/Ela para verbo DEPENDER?",
            "respuesta": "(40) Yo dependo - Tú dependes - Él/Ella depende"
        },
        {
            "pregunta": "(41) ¿Yo, Tú y Él/Ela para verbo NECESITAR?",
            "respuesta": "(41)Yo necesito - Tú necesitas - Él/Ella necesita"
        },
        {
            "pregunta": "(42) ¿Yo, Tú y Él/Ela para verbo MIRAR?",
            "respuesta": "(42)Yo miro - Tú miras - Él/Ella mira"
        },
        {
            "pregunta": "(43) ¿Yo, Tú y Él/Ela para verbo OPINAR?",
            "respuesta": "(43)Yo opino - Tú opinas - Él/Ella opina"
        },
        {
            "pregunta": "(44) ¿Yo, Tú y Él/Ela para verbo DIFUNDIR?",
            "respuesta": "(44)Yo difundo - Tú difundes - Él/Ella difunde"
        },
        {
            "pregunta": "(45) ¿Yo, Tú y Él/Ela para verbo PARTIR?",
            "respuesta": "(45)Yo parto - Tú partes - Él/Ella parte"
        },
        {
            "pregunta": "(46) ¿Yo, Tú y Él/Ela para verbo PERMITIR?",
            "respuesta": "(46)Yo permito - Tú permites - Él/Ella permite"
        },
        {
            "pregunta": "(47) ¿Yo, Tú y Él/Ela para verbo DESCANSAR?",
            "respuesta": "(47)Yo descanso - Tú descansas - Él/Ella descansa"
        },
        {
            "pregunta": "(48) ¿Yo, Tú y Él/Ela para verbo ACTUAR?",
            "respuesta": "(48)Yo actúo - Tú actúas - Él/Ella actúa"
        },
        {
            "pregunta": "(49) ¿Yo, Tú y Él/Ela para verbo ABURRIR(SE)?",
            "respuesta": "(49)Yo (me) aburro - Tú (te) aburres - Él/Ella (se) aburre"
        },
        {
            "pregunta": "(37) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo ABRAZAR?",
            "respuesta": "(37)Nosotros(as) abrazamos - Vosotros(as) abrazáis - Ellos(as) abrazan"
        },
        {
            "pregunta": "(38) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo DISCRIMINAR?",
            "respuesta": "(38)Nosotros(as) discriminamos - Vosotros(as) discrimináis - Ellos(as) discriminan"
        },
        {
            "pregunta": "(39) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo DESEAR?",
            "respuesta": "(39)Nosotros(as) deseamos - Vosotros(as) deseáis - Ellos(as) desean"
        },
        {
            "pregunta": "(40) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo DEPENDER?",
            "respuesta": "(40) Nosotros(as) dependemos - Vosotros(as) dependéis - Ellos(as) dependen"
        },
        {
            "pregunta": "(41) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo NECESITAR?",
            "respuesta": "(41)Nosotros(as) necesitamos - Vosotros(as) necesitáis - Ellos(as) necesitan"
        },
        {
            "pregunta": "(42) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo MIRAR?",
            "respuesta": "(42)Nosotros(as) miramos - Vosotros(as) miráis - Ellos(as) miran"
        },
        {
            "pregunta": "(43) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo OPINAR?",
            "respuesta": "(43)Nosotros(as) opinamos - Vosotros(as) opináis - Ellos(as) opinan"
        },
        {
            "pregunta": "(44) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo DIFUNDIR?",
            "respuesta": "(44) Nosotros(as) difundimos - Vosotros(as) difundís - Ellos(as) difunden"
        },
        {
            "pregunta": "(45) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo PARTIR?",
            "respuesta": "(45)Nosotros(as) partimos - Vosotros(as) partís - Ellos(as) parten"
        },
        {
            "pregunta": "(46) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo PERMITIR?",
            "respuesta": "(46)Nosotros(as) permitimos - Vosotros(as) permitís - Ellos(as) permiten"
        },
        {
            "pregunta": "(47) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo DESCANSAR?",
            "respuesta": "(47)Nosotros(as) descansamos - Vosotros(as) descansáis - Ellos(as) descansan"
        },
        {
            "pregunta": "(48) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo ACTUAR?",
            "respuesta": "(48)Nosotros(as) actuamos - Vosotros(as) actuáis - Ellos(as) actúan"
        },
        {
            "pregunta": "(49) ¿Nosotros(as), Vosotros(as) y Ellos(as) para verbo ABURRIR(SE)?",
            "respuesta": "(49)Nosotros(as) (nos) aburrimos - Vosotros(as) (os) aburrís - Ellos(as) (se) aburren"
        },
    ]
    
    var i = arr.length-1, j, temp;

    while(i > 0, i--){
        j = Math.floor(Math.random() * (arr.length));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    
    var respuesta = arr[0].respuesta;
    document.getElementById("button-respuesta").addEventListener("click", function() {
        document.getElementById("parrafo-dos").innerHTML = respuesta;
      });


    var randomCart = arr[0].pregunta;
    var textoCarta = document.getElementById("parrafo");
    textoCarta.innerHTML = randomCart; 
    
}




   document.getElementById("button-siguiente").addEventListener("click", function() {
        var portadaUno = document.getElementById("fondo-respuesta");
        var portadaDos = document.getElementById("portada-dos");
        portadaUno.style.backgroundColor = "#2F4F4F";
        document.getElementById("parrafo-dos").innerText = "RESPUESTA";
        portadaDos.style.backgroundColor = "#2F4F4F";
        document.getElementById("parrafo").innerText = "PREGUNTA";

    });
/*   
function siguientePregunta(){
        var portadaUno = document.getElementById("portada-uno");
        var portadaDos = document.getElementById("portada-dos");
        portadaUno.style.backgroundColor = "black";
    }
    setTimeout(() => siguientePregunta(), 9000);   

    

    






   




   



            

        
    
    
        



    


    












/*
const cardsArray = Array.from(cards);
console.log(cardsArray);
*/

/*
let cardsShuffle = function (cardsArray){
    let newPos;
    for (let i = cardsArray.lenght -1; i> 0; i--){
        newPos = Math.floor(Math.random()* ( i+1));
        temp = cardsArray[i];
        cardsArray[i]=cardsArray[newPos];
        cardsArray[newPos] = temp;
    }
    return cardsArray;
};
*/














    

  
   

 





