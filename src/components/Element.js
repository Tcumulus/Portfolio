import React, {useState} from "react"
import Popup from "./Popup"

const Element = ({ title, type, image, date, link , description }) => {
  const [show, setShow] = useState(false)

  const onClick = (event) => {
    event.preventDefault()
    setShow(true)
  }

  return (
    <div>
      { type == 0 ?
        <div onClick={onClick}
          className={`m-4 rounded-xl h-fit bg-amber-300 cursor-pointer hover:bg-amber-400 hover:shadow-md`}
        >
          <img src={image} className="p-2 rounded-xl w-40"/>
          <p className="px-2 pb-2 text-white text-sm font-mono">{title}</p>
        </div> : type == 1 ? 
        <div className={`m-4 rounded-xl h-fit bg-sky-200/90 cursor-pointer hover:opacity-100 hover:shadow-md`}>
          <img src={image} className="p-2 rounded-xl w-40"/>
          <p className="px-2 pb-2 text-white text-sm font-mono">{title}</p>
        </div> : 
        <div className={`m-4 rounded-xl h-fit bg-sky-200/90 cursor-pointer hover:opacity-100 hover:shadow-md`}>
          <img src={image} className="p-2 rounded-xl w-40"/>
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