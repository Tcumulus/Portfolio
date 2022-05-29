import React from "react"
import Timeline from "./components/Timeline"
import Element from "./components/Element"

//images
import github from "./images/github.png"
import sweden from "./images/sweden.png"
import okt1 from "./images/okt1.jpg"
import nov1 from "./images/nov1.jpg"

function App() {
  return (
    <div className="flex flex-grow">
      <div className="flex flex-grow flex-col">

        {/* header */}
        <div className="flex h-40 justify-between items-center">
          <p className="ml-8 text-sm text-mono text-gray-500">Maarten Laureyssen | 6D</p>
          <h1 className="text-5xl font-mono font-semibold text-gray-600">Portfolio 2021-2022</h1>
          <img onClick={()=> window.open("https://github.com/Tcumulus/Portfolio", "_blank")} src={github} className="ml-20 mr-12 w-12 opacity-60 hover:opacity-100 cursor-pointer"/>
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
            <div className="flex justify-end h-80">

            </div>
            <div className="flex justify-end h-80">
              <Element title="Ree" type={0} image={okt1} date="02.10.2021" link=""
              description="Een ree brengt een bezoekje aan onze tuin"/>
            </div>
            <div className="flex justify-end h-80">
              <Element title="Statte" type={0} image={nov1} date="05.11.2021" link=""
              description="Op een herfstavond bij een riviertje in de Ardennen"/>
            </div>
            <div className="flex justify-end h-80">

            </div>
          </div>

          <Timeline/>

          {/* timeline right */}
          <div className="flex flex-grow w-1/3 mt-8">

          </div>

          {/* algemeen */}
          <div className="flex flex-col w-1/6 items-center border-l border-gray-200">
            <p className="mt-4 text-xl font-mono">Algemeen</p>
            <Element title="Zweeds" type={1} image={sweden} date="hele schooljaar" link=""
            description="Hallå, jag är Maarten. Af en toe leer ik wat Zweeds op Duolingo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
