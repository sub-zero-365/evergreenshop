import { useState } from "react"
import Heading from '../components/Heading'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion"
export default function Accordians({ text, show, children, text2 }) {
    const [toggle, setToggle] = useState(show ?? false)
    return (<div className="w-full flex-1 px-1 pb-4 border-b">
        <div className="flex justify-between items-center cursor-pointer"
            onClick={() => setToggle(c => !c)}
        >
            <Heading
                text={text}
                className="!text-sm "

            />

            {
                !text2 ? toggle ? <span
                    className="block px-2"
                >
                    <AiOutlineMinus
                        size={20}
                    />
                </span> : <span
                    className="block px-2"
                >
                    <AiOutlinePlus
                        size={20}
                    />
                </span> : <Heading
                    text={text2}
                    className="!text-sm "

                />
            }
        </div>
        <div className={`overflow-hidden delay-0
        ${toggle ? "max-h-screen" : "max-h-0"}  transition-[max-height] duration-[0.8s]
        
        `}

        >
            {
                children
            }
        </div>

    </div>)

}