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
          <div className="flex fixed justify-center inset-0 z-50">
            <div className="flex flex-col bg-white h-fit mt-8 w-1/2 rounded-3xl shadow-lg">
              <div className="flex w-full justify-end">
                <p onClick={() => setShow(false)}
                  className="px-4 py-2 text-4xl cursor-pointer text-gray-300 hover:text-gray-400"
                >&times;</p>
              </div>
              <div className="flex flex-col w-full items-center">
                <p className="mb-8 text-4xl font-mono text-gray-700">Inleiding</p>
                <p className="mb-8 mx-8 font-mono text-gray-500 text-justify">Welkom bij mijn portfolio van het schooljaar 2021-2022! Deze portfolio is eigenlijk een tijdslijn, met daarop al mijn bronnen uit het afgelopen jaar, zo is de evolutie duidelijk zichtbaar. De bronnen zijn in verschillende categoriën opgedeeld, de legende daarvoor vind je links. Soms overlappen de verschillende thema's wat, ik heb in die gevallen steeds het belangrijkste thema gekozen. Als je op een bron klikt krijg je meer informatie over die bron. Soms kan je de volledige tekst of nog meer info krijgen door op de afbeelding te klikken. Rechts vind je ook nog enkele algemene bronnen. Veel plezier met het ontdekken van mijn portfolio!</p>
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
              <div className="w-4 h-4 ml-8 rounded-full bg-amber-300"></div>
              <p className="mr-8 font-mono text-gray-600">fotografie</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-8 rounded-full bg-sky-300"></div>
              <p className="mr-8 font-mono text-gray-600 align-bottom">taal, lectuur</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-8 rounded-full bg-lime-300"></div>
              <p className="mr-8 font-mono text-gray-600">meteorologie</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-8 rounded-full bg-rose-300"></div>
              <p className="mr-8 font-mono text-gray-600">programmeren</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="w-4 h-4 ml-8 rounded-full bg-violet-300"></div>
              <p className="mr-8 font-mono text-gray-600">entertainment</p>
            </div>
          </div>

          {/* timeline left */}
          <div className="flex flex-grow flex-col w-1/3 mt-8">
            {/* sep */}
            <div className="flex flex-col items-end h-80">
              <Element title="Eerste React App" type={3} image={sep1} date="09.09.2021" link=""
              description="Mijn eerste app gemaakt met React, ook deze site is gemaakt met React"/>
            </div>
            {/* okt */}
            <div className="flex flex-col items-end h-80">
              <Element title="Ree" type={0} image={oct2} date="02.10.2021" link=""
              description="Een ree brengt een bezoekje aan onze tuin"/>
              <Element title="Recensie Essay" type={1} image={oct3} date="28.10.2021" link="https://docs.google.com/document/d/1nhKv4xPrvSdpVAbG4CWS56KcZ4mlYEsLsCFKqs_TkBM/edit?usp=sharing"
              description="Recensie/commentaartekst over het zomeressay van Thomasz Jedrowski"/>
            </div>
            {/* nov */}
            <div className="flex flex-col items-end h-80">
              <Element title="Statte" type={0} image={nov1} date="05.11.2021" link=""
              description="Op een herfstavond bij een riviertje in de Ardennen"/>
              <Element title="Bron" type={4} image={nov3} date="november" link="https://www.imdb.com/title/tt1733785/"
              description="Bron, Broen in het Deens, is een Zweeds-Deense detectivereeks met de ongeloofelijke hoofdrolspeelster Saga Norén"/>
            </div>
            {/* dec */}
            <div className="flex flex-col items-end h-80">
              <Element title="Eerste sneeuw" type={2} image={dec1} date="02.12.2021" link=""
              description="De eerste, en zo goed als enige sneeuw van het winterseizoen"/>
            </div>
            {/* jan */}
            <div className="flex flex-col items-end h-80">
              <Element title="Waterval" type={0} image={jan2} date="07.01.2022" link=""
              description="Een van de hoogste watervallen van België in de sneeuw"/>
              <Element title="Sneeuw" type={2} image={jan1} date="06.01.2022" link=""
              description="In de Hoge Ardennen lag er deze winter vaak sneeuw"/>
            </div>
            {/* feb */}
            <div className="flex flex-col items-end h-80">
              <Element title="Martha Nussbaum" type={1} image={feb2} date="03.02.2022" link=""
              description="Het koninkrijk van de Angst gelezen van Martha Nussbaum, een moeilijk maar interessant boek"/>
            </div>
            {/* mar */}
            <div className="flex flex-col items-end h-80">
              <Element title="Valencia" type={4} image={mar1} date="22.03.2022" link=""
              description="Bezoek aan Valencia gedurende het uitwisselingsproject met Spanje"/>
              <Element title="Grotten Hotton" type={0} image={mar2} date="27.03.2022" link=""
              description="Op een daguitstap naar de Ardennen hebben we de indrukwekkende grotten van Hotton bezocht"/>
            </div>
            {/* apr */}
            <div className="flex flex-col items-end h-80">
              <Element title="Onderzoek" type={1} image={apr1} date="hele schooljaar" link="https://docs.google.com/document/d/1v7s4Mrm_kjjNz38-6aFArSKggB0DWqhy_PhKFp0g0ss/edit?usp=sharing"
              description="Onderzoeksproject over de overstromingen in de zomer van 2021 in de Ardennen"/>
            </div>
            {/* may */}
            <div className="flex flex-col items-end h-80">
              <Element title="De Sneeuwman" type={1} image={may2} date="mei" link=""
              description="Een Noorse detective en bestseller, met een spannende storyline"/>
              <Element title="Les Bonnes" type={4} image={may4} date="12.05.2022" link=""
              description="Een diepgaand toneelstuk dat zeker de moeite was!"/>
            </div>
          </div>

          <Timeline/>

          {/* timeline right */}
          <div className="flex flex-grow flex-col items-start w-1/3 mt-8">
            {/* sep */}
            <div className="flex flex-col items-end h-80">
              <Element title="Line of Duty" type={4} image={sep2} date="september" link="https://www.imdb.com/title/tt2303687/"
              description="In september keek ik het laatste (6e) seizoen van mijn favoriete serie: Line of Duty"/>
            </div>
            {/* okt */}
            <div className="flex flex-col items-end h-80">
              <Element title="Klimaatrapport" type={2} image={oct1} date="10.10.2022" link="https://docs.google.com/presentation/d/1uxyC345S1ElrMv3cY3uN0KK_530xcjl8BKlIzCdQytg/edit?usp=sharing"
              description="Presentatie over het meest recente klimaatrapport van de IPCC"/>
            </div>
            {/* nov */}
            <div className="flex flex-col items-end h-80">
              <Element title="Kaas" type={1} image={nov2} date="09.11.2021" link=""
              description="Ik las de treurige roman Kaas (Willem Elschot)"/>
            </div>
            {/* dec */}
            <div className="flex flex-col items-end h-80">
              <Element title="Unforgotten" type={4} image={dec2} date="januari" link="https://www.imdb.com/title/tt4192812/?ref_=nv_sr_srsg_0"
              description="Ik ban fan van detectives, deze Britse detective vind ik een van de beste"/>
            </div>
            {/* jan */}
            <div className="flex flex-col items-end h-80">
              <Element title="Zonsondergang" type={0} image={jan4} date="11.01.2022" link="https://www.youtube.com/watch?v=vyjPOSG88mU"
              description="Een timelapse van een mooie zonsondergang door de aanwezige middelbare bewolking"/>
              <Element title="Knal" type={1} image={jan3} date="29.01.2022" link="https://docs.google.com/presentation/d/1Ud-Pa_m_8WPUKZwasQ0XwD9knitcdC6jcTfVVpqoJPo/edit?usp=sharing"
              description="Bezoek aan de Knal tentoonstelling in M Leuven"/>
            </div>
            {/* feb */}
            <div className="flex flex-col items-end h-80">
              <Element title="Tentoonstelling" type={4} image={feb1} date="19.02.2022" link=""
              description="Bezoek aan kunsttentoonstelling met kunst van mijn zus"/>
            </div>
            {/* mar */}
            <div className="flex flex-col items-end h-80">
              <Element title="Neerslagkaarten" type={3} image={mar3} date="maart" link=""
              description="Het was een hele klus om de neerslagkaartjes voor het onderzoeksproject te maken, maar het is uiteindelijk gelukt"/>
            </div>
            {/* apr */}
            <div className="flex flex-col items-end h-80">
              <Element title="Brugge" type={4} image={apr2} date="06.04.2022" link="https://github.com/Tcumulus/july-floods"
              description="Ik was nog nooit in Brugge geweest, als Belg moet je Brugge toch eens gezien hebben"/>
              <Element title="Geo-Olympiade" type={2} image={apr3} date="30.04-01.05.2022" link=""
              description="De intensieve finale van de Geo-Olympiade waaraan ik mocht deelnamen ging dit jaar door in Oostende"/>
            </div>
            {/* may */}
            <div className="flex flex-col items-end h-80">
              <Element title="Pleidooi" type={1} image={may1} date="mei" link="https://docs.google.com/document/d/1uOicTBvkgKEpilE2hKbD54LPTxGOb95XIy58jLMfgWE/edit?usp=sharing"
              description="Een pleidooi over het accepteren van onveranderbare dingen"/>
              <Element title="Deze site" type={3} image={may3} date="29.05.2022" link=""
              description="Ook deze site heb ik zelf geprogrammeerd met React en Tailwind"/>
            </div>
          </div>

          {/* algemeen */}
          <div className="flex flex-col w-1/6 items-center border-l border-gray-200">
            <p className="mt-4 text-xl font-mono">Algemeen</p>
            <Element title="Zweeds" type={1} image={sweden} date="hele schooljaar" link=""
            description="Hallå, jag är Maarten. Af en toe leer ik wat Zweeds op Duolingo" />
            <Element title="Programmeren" type={3} image={contributions} date="hele schooljaar" link="https://github.com/Tcumulus"
            description="Het hele jaar door heb ik me bezig gehouden met allerlei codeerprojecten, deze afbeelding geeft de contributions op GitHub weer" />
            <Element title="Cities: Skylines" type={4} image={cs} date="hele schooljaar" link=""
            description="Ik heb dit schooljaar meer dan 100h aan de stad Påfjellet (zie kaart) gebouwd, Cities Skylines is voor mij een medium om al mijn creativiteit vrij te laten" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
