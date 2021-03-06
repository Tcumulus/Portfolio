import React from "react"

const Popup = ({ setShow, title, type, image, date, link, description }) => {

  return (
    <div>
      <div className="flex fixed justify-center inset-0 z-50 overflow-auto">
        <div className="flex flex-col bg-white h-fit my-8 w-2/3 rounded-3xl shadow-lg">
          <div className="flex w-full justify-end">
            <p onClick={() => setShow(false)}
              className="px-4 py-2 text-4xl cursor-pointer text-gray-300 hover:text-gray-400"
            >&times;</p>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="flex w-full mb-4 justify-between items-end">
              <p className="ml-12 text-4xl font-mono text-gray-700">{title}</p>
              { type === 0 ?
                <div className="bg-amber-300 p-2 mr-12 rounded-md">
                  <p className="text-sm font-mono text-white">fotografie</p>
                </div>
                : type === 1 ?
                <div className="bg-sky-300 p-2 mr-12 rounded-md">
                  <p className="text-sm font-mono text-white">taal, lectuur</p>
                </div>
                : type === 2 ?
                <div className="bg-lime-300 p-2 mr-12 rounded-md">
                  <p className="text-sm font-mono text-white">meteorologie</p>
                </div>
                : type === 3 ?
                <div className="bg-rose-300 p-2 mr-12 rounded-md">
                  <p className="text-sm font-mono text-white">programmeren</p>
                </div>
                :
                <div className="bg-violet-300 p-2 mr-12 rounded-md">
                  <p className="text-sm font-mono text-white">entertainment</p>
                </div>
              }
            </div>
            
            { link ?
              <img onClick={() => window.open(link, "_blank")} src={image} alt="" className="mx-4 h-[22rem] rounded-xl cursor-pointer"/>
              :
              <img src={image} alt="" className="mx-4 h-[22rem] rounded-xl"/>
            }

            <div className="flex flex-col w-5/6 mt-4 mb-8 border border-gray-300 rounded-xl">
              <div className="flex justify-between">
                <p className="my-2 mx-4 font-mono">Datum</p>
                <p className="my-2 mx-4 font-mono">{date}</p>
              </div>
              <div className="flex justify-between">
                <p className="my-2 ml-4 mr-6 font-mono">Beschrijving</p>
                <p className="my-2 mx-4 font-mono text-sm text-justify">{description}</p>
              </div>
              { link ? 
                <a href={link} target="blank_" className="my-2 mx-4 font-mono text-cyan-800 underline">Bron</a>
                : null
              }
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-30 bg-black"/>
    </div>
  )
}

export default Popup