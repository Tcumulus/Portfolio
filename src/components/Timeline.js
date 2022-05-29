import React from "react"

const Timeline = () => {
  const style_light = "flex justify-center items-center h-80 bg-gray-300"
  const style_dark = "flex justify-center items-center h-80 bg-gray-400"

  return (
    <div className="flex flex-grow flex-col w-8 mt-8 mb-24">
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
      <div className={style_dark}>
        <p className="rotate-90 text-white font-mono">Mei</p>
      </div>
    </div>
  )
}

export default Timeline