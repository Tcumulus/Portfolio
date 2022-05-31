import React, {useState} from "react"
import Popup from "./Popup"

const Element = ({ title, type, image, date, link , description }) => {
  const [show, setShow] = useState(false)

  const onClick = (event) => {
    event.preventDefault()
    setShow(true)
  }

  return (
    <div className="w-fit">
      { type === 0 ? 
        // 0: fotografie
        <div onClick={onClick}
          className={`m-4 rounded-xl h-fit bg-amber-300 cursor-pointer hover:bg-amber-400 hover:shadow-md`}
        >
          <img src={image} alt="" className="p-2 rounded-xl w-40"/>
          <p className="px-2 pb-2 text-white text-sm font-mono">{title}</p>
        </div> : type === 1 ?
        // 1: taal en lectuur
        <div onClick={onClick}
          className={`m-4 rounded-xl h-fit bg-sky-300 cursor-pointer hover:bg-sky-400 hover:shadow-md`}
        >
          <img src={image} alt="" className="p-2 rounded-xl w-40"/>
          <p className="px-2 pb-2 text-white text-sm font-mono">{title}</p>
        </div> : type === 2 ?
        // 2: meteorologie
        <div onClick={onClick}
          className={`m-4 rounded-xl h-fit bg-lime-300 cursor-pointer hover:bg-lime-400 hover:shadow-md`}>
          <img src={image} alt="" className="p-2 rounded-xl w-40"/>
          <p className="px-2 pb-2 text-white text-sm font-mono">{title}</p>
        </div> : type === 3 ?
        // 3: programmeren
        <div onClick={onClick}
          className={`m-4 rounded-xl h-fit bg-rose-300 cursor-pointer hover:bg-rose-400 hover:shadow-md`}>
          <img src={image} alt="" className="p-2 rounded-xl w-40"/>
          <p className="px-2 pb-2 text-white text-sm font-mono">{title}</p>
        </div> :
        // 4: entertainment
        <div onClick={onClick}
          className={`m-4 rounded-xl h-fit bg-violet-300 cursor-pointer hover:bg-violet-400 hover:shadow-md`}>
          <img src={image} alt="" className="p-2 rounded-xl w-40"/>
          <p className="px-2 pb-2 text-white text-sm font-mono">{title}</p>
        </div>
      }
      { show ? 
        <Popup setShow={setShow} title={title} type={type} image={image} date={date} link={link} description={description}/> : null
      }
    </div>
  )
}

export default Element