import React, {useState} from "react"
import Timeline from "./components/Timeline"
import Element from "./components/Element"

//images
import github from "./images/github.png"
import info from "./images/info.png"
import sweden from "./images/sweden.png"
import contributions from "./images/contributions.png"
import cs from "./images/cs.png"
import sep1 from "./images/sep1.png"
import sep2 from "./images/sep2.jpg"
import oct1 from "./images/oct1.png"
import oct2 from "./images/oct2.jpg"
import oct3 from "./images/oct3.png"
import nov1 from "./images/nov1.jpg"
import nov2 from "./images/nov2.jpg"
import nov3 from "./images/nov3.jpg"
import dec1 from "./images/dec1.jpg"
import dec2 from "./images/dec2.jpg"
import jan1 from "./images/jan1.jpg"
import jan2 from "./images/jan2.jpg"
import jan3 from "./images/jan3.png"
import jan4 from "./images/jan4.png"
import feb1 from "./images/feb1.jpg"
import feb2 from "./images/feb2.jpg"
import mar1 from "./images/mar1.jpg"
import mar2 from "./images/mar2.jpg"
import mar3 from "./images/mar3.png"
import apr1 from "./images/apr1.png"
import apr2 from "./images/apr2.jpg"
import apr3 from "./images/apr3.jpg"
import may1 from "./images/may1.png"
import may2 from "./images/may2.jpg"
import may3 from "./images/may3.png"
import may4 from "./images/may4.png"



function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div className="flex flex-grow">
      { show ?
        <>
          <div className="flex fixed justify-center inset-0 z-50 overflow-auto">
            <div className="flex flex-col bg-white h-fit mt-8 w-2/3 rounded-3xl shadow-lg">
              <div className="flex w-full justify-end">
                <p onClick={() => setShow(false)}
                  className="px-4 py-2 text-4xl cursor-pointer text-gray-300 hover:text-gray-400"
                >&times;</p>
              </div>
              <div className="flex flex-col w-full items-center">
                <p className="mb-8 text-4xl font-mono text-gray-700">Inleiding</p>
                <p className="mb-8 mx-12 font-mono text-gray-500 text-justify">Welkom bij mijn portfolio van het schooljaar 2021-2022! Deze portfolio is opgesteld als een tijdslijn, met daarop al mijn bronnen uit het afgelopen jaar, zo is de evolutie duidelijk zichtbaar. De bronnen zijn in verschillende categoriën opgedeeld, de legende daarvoor vind je links. Soms overlappen de verschillende thema's, ik heb in die gevallen steeds het belangrijkste thema gekozen. Als je op een bron klikt krijg je meer informatie over die bron. Soms kan je de volledige tekst of nog meer info krijgen door op de afbeelding te klikken. Rechts vind je ook nog enkele algemene bronnen. Veel plezier met het ontdekken van mijn portfolio!</p>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-30 bg-black"/>
        </>
        : null
      }
      <div className="flex flex-grow flex-col">

        {/* header */}
        <div className="flex h-40 justify-between items-center">
          <div className="flex flex-col ml-8">
            <p className="text-sm text-mono text-gray-500">Maarten Laureyssen | 6D</p>
            <a href="https://dzjerry.wixsite.com/start" target="blank_" className="text-sm text-mono text-gray-500 underline"
            >Portfolio 2020-2021</a>
          </div>
          <h1 className="text-5xl font-mono font-semibold text-gray-600">Portfolio 2021-2022</h1>
          <div className="flex flex-row">
            <img onClick={() => setShow(true)} src={info} alt="info" className="w-12 opacity-60 hover:opacity-100 cursor-pointer" />
            <img onClick={()=> window.open("https://github.com/Tcumulus/Portfolio", "_blank")} src={github} alt="github" className="ml-8 mr-12 w-12 opacity-60 hover:opacity-100 cursor-pointer"/>
          </div>
        </div>

        <div className="flex flex-grow flex-row border-t border-gray-200">
          {/* legende */}
          <div className="flex flex-col w-1/6 items-center border-r border-gray-200">
            <p className="my-4 text-xl font-mono">Legende</p>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-4 rounded-full bg-amber-300"></div>
              <p className="mr-4 font-mono text-gray-600">fotografie</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-4 rounded-full bg-sky-300"></div>
              <p className="mr-4 font-mono text-gray-600 align-bottom">taal, lectuur</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-4 rounded-full bg-lime-300"></div>
              <p className="mr-4 font-mono text-gray-600">meteorologie</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-4 rounded-full bg-rose-300"></div>
              <p className="mr-4 font-mono text-gray-600">programmeren</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-4 rounded-full bg-violet-300"></div>
              <p className="mr-4 font-mono text-gray-600">entertainment</p>
            </div>
          </div>

          {/* timeline left */}
          <div className="flex flex-grow flex-col w-1/3 mt-8">
            {/* sep */}
            <div className="flex flex-col items-end h-80">
              <Element title="Eerste React App" type={3} image={sep1} date="09.09.2021" link=""
              description="Mijn eerste web applicatie die ik gemaakt heb met React. React is een Javascript framework om web apps te maken. Zo een framework maakt het gemakkelijker om zowel statische als dynamische sites te maken. Ook deze site is gemaakt met React, ik heb bij mezelf een heuse evolutie waargenomen doorheen het schooljaar, begin dit schooljaar moest ik nog elke stap van tutorials volgen, nu kan ik op een vrij korte tijd zelf een web app coderen."/>
            </div>
            {/* okt */}
            <div className="flex flex-col items-end h-80">
              <Element title="Ree" type={0} image={oct2} date="02.10.2021" link=""
              description="Onze tuin grenst aan een stukje bos, daardoor komen er regelmatig wat wilde beesten een bezoekje brengen. Ze zorgen voor leuke fotomomenten, door de zoom functie op mijn camera kan ik ze vrij goed fotograferen overdag. Maar het is niet allemaal rozegeur en maneschijn, de reeën eten de planten op en de everzwijnen woelen delen van onze tuin om."/>
              <Element title="Recensie Essay" type={1} image={oct3} date="28.10.2021" link="https://docs.google.com/document/d/1nhKv4xPrvSdpVAbG4CWS56KcZ4mlYEsLsCFKqs_TkBM/edit?usp=sharing"
              description="Begin dit schooljaar kregen we de opdracht om een commentaartekst te schrijven over een zomeressay uit De Standaard. Ik schreef er een over het essay van Thomasz Jedrowski. Dit was overigens niet de enige keer dat we dit jaar een commentaartekst moeten schrijven, ik zal de 3 A's niet meer vergeten: aanvullen, aanvaarden en aanvallen. In mijn eerste commentaartekst had ik dat aanvallen een beetje te serieus genomen."/>
            </div>
            {/* nov */}
            <div className="flex flex-col items-end h-80">
              <Element title="Statte" type={0} image={nov1} date="05.11.2021" link=""
              description="Deze foto is gemaakt op een herfstavond nabij het Ardeens riviertje: de Statte. We maakten die dag een wandeling langs de Hoëgne en Statte, voor België is dit best specaculaire natuur. Het was een bewolkte dag, desondanks brachten de herfstkleuren toch nog wat kleur en fleur. Er waren wel meerder bruggen weggespoeld door de overstromingen van afgelopen zomer, avontuurlijk was het zeker. Deze foto is gemaakt toen het begon te schemeren, het laatste stuk van de wandeling hebben we in het donker afgelegd."/>
              <Element title="Bron" type={4} image={nov3} date="november" link="https://www.imdb.com/title/tt1733785/"
              description="Omdat ik alle seizoenen van Line of Duty gezien had, was ik opzoek naar een nieuwe serie. Bron is een Deens-Zweedse serie. Bron betekent 'de brug' in het Zweeds, in het deens is het broen. De serie gaat over een Zweedse detective Saga Norén (ländskrim Malmö), die lijdt aan het syndroom van Asperger. De hoofdrol is prachtig gespeeld, de verhaallijn is vrij donker, maar goed uitgedacht. Zeker een van mijn lievelingsseries."/>
            </div>
            {/* dec */}
            <div className="flex flex-col items-end h-80">
              <Element title="Eerste sneeuw" type={2} image={dec1} date="02.12.2021" link=""
              description="De eerste sneeuw van het winterseizoen viel dit jaar op 2 december, veel was het niet en het bleef ook niet lang liggen. Het was een voorbode van de zachte en sneeuwarme winter die ons te wachten stond in Vlaanderen."/>
            </div>
            {/* jan */}
            <div className="flex flex-col items-end h-80">
              <Element title="Sneeuw" type={2} image={jan1} date="06.01.2022" link=""
              description="In het laagland viel het flink tegen met de sneeuwhoeveelheden dit winterseizoen, maar op de hoogste toppen was het vaak raak dit seizoen. Wat hier in Leuven als regen valt, valt 600m hoger al snel als sneeuw, de lucht wordt kouder met 0.6°C/100m in natte omstandigheden. Bovendien valt er in de Ardennen, met name in de Hoge Venen een pak meer neerslag dan in Vlaanderen door het stuwingseffect van de heuvels. Deze foto werd gemaakt op het plateau van de Hoge Venen, op een mistige en koude ochtend."/>
              <Element title="Waterval" type={0} image={jan2} date="07.01.2022" link=""
              description="België staat niet direct bekend om zijn natuur, maar er zijn zeker enkele mooie plekjes te vinden. In januari verbleven we een weekendje in de Hoge Venen om de sneeuw te gaan bezichtigen. Op het plateau was het al prachtig, maar in de dalen zitten ook enkele pareltjes verstopt, zoals deze waterval: Cascade de Bayehon, een van de weinige watervallen in België. In combinatie met de sneeuw was het een perfecte plek voor een foto."/>
            </div>
            {/* feb */}
            <div className="flex flex-col items-end h-80">
              <Element title="Martha Nussbaum" type={1} image={feb2} date="03.02.2022" link=""
              description="Een denkster is ze zeker: Martha Nussbaum. Haar boek 'Het Koninkrijk van de Angst' gaat over angst in een democratisch systeem. Een gemakkelijk boek was het zeker niet om te lezen, maar ik ben ervan overtuigd dat het zeker niet slecht is om eens iets moeilijker te proberen."/>
            </div>
            {/* mar */}
            <div className="flex flex-col items-end h-80">
              <Element title="Valencia" type={4} image={mar1} date="22.03.2022" link=""
              description="In maart gingen we met een groepje leerlingen naar Spanje op uitwisseling. We hebben daar allerlei activiteiten gedaan, en op die manier de regio ontdekt. Maar ik vond het vooral speciaal om de cultuur te leren kennen vanuit een gastgezin, ondanks dat de communicatie soms stroef verliep. Op de foto staat een van de moderne gebouwen in de nieuwe buurt van Valencia, gebouwd op de vroegere rivierbedding. De rivier die vroeger door Valencia liep hebben ze omgeleid, omdat deze wel eens overstroomde."/>
              <Element title="Grotten Hotton" type={0} image={mar2} date="27.03.2022" link=""
              description="Het was niet de eerste keer dit schooljaar dat we naar de Ardennen trokken (ook niet de laatste keer), deze keer maakte we een wandeling en bezochten we de grotten van Hotton. Een indrukwekkend grottenstelsel met mooie geologische structuren. Er waren ook structuren in de vorm van bloemenkolen, de gids die haar best deed om Nederlands te spreken zei 'bloemenkolen' in plaats van bloemkolen."/>
            </div>
            {/* apr */}
            <div className="flex flex-col items-end h-80">
              <Element title="Onderzoek" type={1} image={apr1} date="hele schooljaar" link="https://docs.google.com/document/d/1v7s4Mrm_kjjNz38-6aFArSKggB0DWqhy_PhKFp0g0ss/edit?usp=sharing"
              description="Vorig jaar zag ik bij documenten staan dat de zesdes een onderzoeksproject schreven. Ik dacht dat onze klas dit jaar M. Frits zouden hebben en dat project dus niet gingen doen. Gelukkig was dat niet het geval, ik vond het oprecht leuk om iets te onderzoeken en over iets te schrijven dat mij interesseert."/>
            </div>
            {/* may */}
            <div className="flex flex-col items-end h-80">
              <Element title="De Sneeuwman" type={1} image={may2} date="mei" link=""
              description="Gezien ik best wel fan ben van detectives leek me het boek 'Snömannen' wel leuk. Een boek is anders dan een serie of film, maar ik heb ontekt dat het daarom niet slechter hoeft te zijn, dit boek is oprecht soms even spannend als een serie. Om de Scandinavische lijn wat door te trekken: deze bestseller is geschreven door de Noorse schrijver Jo Nesbø, en valt onder de categorie 'Nordic Noirs'."/>
              <Element title="Les Bonnes" type={4} image={may4} date="12.05.2022" link=""
              description="Ik ga normaal niet vaak naar toneelstukken of theatervoorstellingen kijken, maar deze uitnodiging kon ik toch moeilijk negeren. Ik wist niet goed wat te verwachten vooraf, maar de kracht en emotie van het toneelstuk heeft me toch wel verbaasd. Je zat er echt middenin, het was echt!"/>
            </div>
          </div>

          <Timeline/>

          {/* timeline right */}
          <div className="flex flex-grow flex-col items-start w-1/3 mt-8">
            {/* sep */}
            <div className="flex flex-col items-end h-80">
              <Element title="Line of Duty" type={4} image={sep2} date="september" link="https://www.imdb.com/title/tt2303687/"
              description="Vorig schooljaar heb ik de serie 'Line of Duty' ontdekt. Line of Duty is een legendarische Britse detective serie. In de serie volgen we een anti-corruptie eenheid van de Britse politie: AC12. Een eenheid die corruptie binnen de politie aanpakt, AC12 staat recht tegenover de OCG (organized crime group) die zich stevig gezadeld heeft in de fictieve Britse stad. Alles tot en met de soundtrack is in deze serie quasi perfect naar mijn mening, het is tot op de dag van vandaag mijn lievelingsserie. In september keek ik het voorlopig laatste (6e) seizoen. Normaal kijk ik geen twee films of series opnieuw, maar hier ga ik dat denk ik wel doen."/>
            </div>
            {/* okt */}
            <div className="flex flex-col items-end h-80">
              <Element title="Klimaatrapport" type={2} image={oct1} date="10.10.2022" link="https://docs.google.com/presentation/d/1uxyC345S1ElrMv3cY3uN0KK_530xcjl8BKlIzCdQytg/edit?usp=sharing"
              description="Voor godsdienst moeten we elk jaar een bezinningsmoment doen, in de praktijk betekend dat dat je een presentatie doet over eender het welk onderwerp. Dit jaar koos ik voor het nieuwste klimaatrapport van de IPCC (international panel on climate change). Iedereen weet ondertussen wel af van klimaatverandering, maar ik vind het belangrijk dat ook de actuele cijfers overgebracht worden om zo de urgentie van de zaak te benadrukken."/>
            </div>
            {/* nov */}
            <div className="flex flex-col items-end h-80">
              <Element title="Kaas" type={1} image={nov2} date="09.11.2021" link=""
              description="Kaas is een roman geschreven door Willem Elschot, best een depressief boek eigenlijk. Desondanks dat zit er ook een positieve noot in. Ik denk dat het verhaal vrij relatable is en ons ook een belangrijke les kan leren: projecten kunnen mislukken, maar dit kan de attentie brengen naar dingen die je eerst niet had gezien, en die dingen meer waarderen."/>
            </div>
            {/* dec */}
            <div className="flex flex-col items-end h-80">
              <Element title="Unforgotten" type={4} image={dec2} date="januari" link="https://www.imdb.com/title/tt4192812/?ref_=nv_sr_srsg_0"
              description="Nog een serie: Unforgotten. De naam zegt eigenlijk al vrij veel, detectives Cassie Stuart en Sunny Khan duiken terug in het verleden om oude moordzaken op te lossen. Deze serie bevat niet zoveel actie, maar de structuur en verhaallijn zijn geweldig!"/>
            </div>
            {/* jan */}
            <div className="flex flex-col items-end h-80">
              <Element title="Zonsondergang" type={0} image={jan4} date="11.01.2022" link="https://www.youtube.com/watch?v=vyjPOSG88mU"
              description="(Klik op de afbeelding om de timelapse te bekijken). Door de aanwezigheid van middelhoge bewolking ging de zon mooi onder op deze januari avond. Middelhoge bewolking weerkaatst het zonlicht langs de onderkant, nadat de zon eigenlijk al onder is, doordat de wolken zich op enkele kilometers hoogte bevinden."/>
              <Element title="Knal" type={1} image={jan3} date="29.01.2022" link="https://docs.google.com/presentation/d/1Ud-Pa_m_8WPUKZwasQ0XwD9knitcdC6jcTfVVpqoJPo/edit?usp=sharing"
              description="Eind januari hebben Jorrit, Floris, Robbe en ik de KNAL tentoonstelling in M Leuven bezocht. De tentoonstelling beschreef de geschiedenis van het heelal in de kunst en wetenschap, van de prehistorie tot Galileo. Het was deel van het KNAL stadsfestival ter ere van Georges Lemaître, een Leuvense priester die de basis legde voor de theorie van de oerknal."/>
            </div>
            {/* feb */}
            <div className="flex flex-col items-end h-80">
              <Element title="Tentoonstelling" type={4} image={feb1} date="19.02.2022" link=""
              description="De kunstacademie waar mijn zus kunstlessen volgt organiseerde een tentoonstelling met kunst van alle leerlingen. Ik ging samen met mijn ouders en zus een kijkje nemen, vooral voor de tekeningen en knutselwerken van mijn zus natuurlijk. Het thema van de tentoonstelling was: planten en kruiden, om het 200 jarig bestaan van de kruidentuin te vieren."/>
            </div>
            {/* mar */}
            <div className="flex flex-col items-end h-80">
              <Element title="Neerslagkaarten" type={3} image={mar3} date="maart" link="https://github.com/Tcumulus/july-floods"
              description="Het ziet er misschien simpel uit, zo'n kaartje, maar het is een hele klus om ze te maken. Stap 1: gebruik de Wunderground API om alle weerstations in het gebied te indexeren. Stap 2: vraag alle neerslagdata van die stations op voor de desbetreffende dagen. Stap 3: filter de data om de foute metingen weg te filteren. Stap 4: maak een kaartje van de data punten. Al dit werk heb ik gedaan met behulp van de programmeertaal Python, perfect voor zo'n dingen. De kaartjes hebben we gebruikt in ons onderzoeksproject."/>
            </div>
            {/* apr */}
            <div className="flex flex-col items-end h-80">
              <Element title="Brugge" type={4} image={apr2} date="06.04.2022" link=""
              description="Ik was nog nooit in Brugge geweest. Als Belg moet je deze toeristische hotspot toch wel eens gezien hebben. Het is een mooi stadje met veel water en enkele hoge torens, maar toch iets te veel toeristen naar mijn zin."/>
              <Element title="Geo-Olympiade" type={2} image={apr3} date="30.04-01.05.2022" link="https://vonw.be/index.php/olympiade-geografie/2022-procl-vgo"
              description="Voor de finale van de Geo-Olympiade nam ik de trein naar Oostende. Daar hadden we twee dagen aan proeven en testen om ons kennen en kunnen te testen. Het was een intensief weekend, maar de moeite bleek te lonen toen ik in mei te horen kreeg dat ik de finale gewonnen had."/>
            </div>
            {/* may */}
            <div className="flex flex-col items-end h-80">
              <Element title="Pleidooi" type={1} image={may1} date="mei" link="https://docs.google.com/document/d/1uOicTBvkgKEpilE2hKbD54LPTxGOb95XIy58jLMfgWE/edit?usp=sharing"
              description="Ik vond het helemaal niet gemakkelijk om een pleidooi te schrijven, niet alleen het onderwerp verzinnen, maar ook het schrijven van de tekst waren uitdagend. Zonder uitdaging geraak je niet ver (eigenlijk is dit nog een best goede raad om een pleidooi over te schrijven)."/>
              <Element title="Deze site" type={3} image={may3} date="29.05.2022" link="https://github.com/Tcumulus/Portfolio"
              description="Begin dit jaar maakte ik mijn eerste React web app. Toen ik twee dagen voor de deadline begon met het zoeken naar een idee voor mijn portfolio, kwam ik dus op het idee om deze 'skill' nog eens te gebruiken. Op een dag tijd was het gelukt om de site te bouwen, iets wat ik nooit had gekunnen begin dit jaar. Dan moesten wel nog alle bronnen toegevoegd worden. Gelukkig kan je met React herbruikbare elementen programmeren, de bronnen toevoegen viel dus ook nog mee. Voor het design gebruik ik tegenwoordig Tailwind in plaats van CSS, dat maakt het allemaal wat eenvoudiger, dat terwijl de code er net moeilijker uitziet."/>
            </div>
          </div>

          {/* algemeen */}
          <div className="flex flex-col w-1/6 items-center border-l border-gray-200">
            <p className="mt-4 text-xl font-mono">Algemeen</p>
            <Element title="Zweeds" type={1} image={sweden} date="hele schooljaar" link=""
            description="Hallå, jag är Maarten, jag är sjuton år och tack så mycket för besöket min portfolio. Soms doe ik eens een lesje Zweeds op Duolingo. Waarom? Ik heb er eigenlijk geen reden voor. Door de rare volgorde van de lessen op Duolingo, kon ik 'Jag har inte byxor på mig' (ik heb geen broek aan) zeggen voordat ik tot drie kon tellen in het Zweeds." />
            <Element title="Programmeren" type={3} image={contributions} date="hele schooljaar" link="https://github.com/Tcumulus"
            description="Het hele jaar door heb ik me bezig gehouden met allerlei codeerprojecten, van websites met React en Tailwind en decentralised apps (dApps) met Solidity en React tot data-analyse en machine learning in Python. Ik vind het leuk om nieuwe dingen te leren en maken met behulp van code, vandaar ook dat ik volgend jaar informatica ga studeren. Deze afbeelding geeft mijn activiteiten doorheen het schooljaar weer op Github: een platform voor het opslaan van open source code."/>
            <Element title="Cities: Skylines" type={4} image={cs} date="hele schooljaar" link=""
            description="Cities Skylines is by far mijn lievelingsgame. Het is geen actiespel met wapens en gevechten, maar een simulatiespel waar je je creativeit los kan laten. Het nadenken over snelwegknooppunten, stedelijke structuur en treinnetwerken zijn nog maar enkele redenen die bijdragen aan het feit dat ik al meer dan 120h Cities Skylines gespeeld heb dit jaar. De wereld die ik de afgelopen maanden aan het bouwen ben is Zweeds geinspireerd: Påfjellet (zie kaart), met meerdere steden en dorpen tussen de bergen, meren en rivieren." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
