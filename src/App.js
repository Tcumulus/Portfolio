import React from "react"
import Timeline from "./components/Timeline"
import Element from "./components/Element"

//images
import herfst1 from "./images/herfst1.jpg"

function App() {
  return (
    <div className="flex flex-grow">
      <div className="flex flex-grow flex-col">
        <div className="flex h-40 justify-center items-center">
          <p className="">Portfolio</p>
        </div>
        <div className="flex flex-grow flex-row">
          <div className="flex flex-row w-1/6">

          </div>
          <div className="flex flex-grow flex-col w-1/3">
            <div className="flex justify-end h-80">
              <Element title="Statte" type={0} image={herfst1} date="05.11.2021" link=""
              description="Op een herfstavond bij een riviertje in de Ardennen"/>
            </div> 
          </div>

          <Timeline/>

          <div className="flex flex-grow w-1/2">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
