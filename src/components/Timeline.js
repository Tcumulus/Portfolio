import React from "react"

const Timeline = () => {
  const style_light = "flex justify-center items-center h-80 w-10 bg-gray-300"
  const style_dark = "flex justify-center items-center h-80 w-10 bg-gray-400"

  return (
    <div className="flex flex-grow flex-col items-center w-8 mt-8 mb-24 mx-4">
      <div className={`rounded-t-md ${style_dark}`}>
        <p className="rotate-90 text-white font-mono">September</p>
      </div>
      <div className={style_light}>
        <p className="rotate-90 text-white font-mono">Oktober</p>
      </div>
      <div className={style_dark}>
        <p className="rotate-90 text-white font-mono">November</p>
      </div>
      <div className={style_light}>
        <p className="rotate-90 text-white font-mono">December</p>
      </div>
      <div className={style_dark}>
        <p className="rotate-90 text-white font-mono">Januari</p>
      </div>
      <div className={style_light}>
        <p className="rotate-90 text-white font-mono">Februari</p>
      </div>
      <div className={style_dark}>
        <p className="rotate-90 text-white font-mono">Maart</p>
      </div>
      <div className={style_light}>
        <p className="rotate-90 text-white font-mono">April</p>
      </div>
      <div className={`h-96 ${style_dark}`}>
        <p className="rotate-90 text-white font-mono">Mei</p>
      </div>
      <div className="w-0 h-0 border-b-gray-400 border-b-[100px] border-r-transparent border-r-[50px] border-l-transparent border-l-[50px] rotate-180 rounded-lg"></div>
    </div>
  )
}

export default Timeline