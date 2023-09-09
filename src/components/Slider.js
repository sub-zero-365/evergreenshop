
const Slider = ({ children, active, setActive, className,className2 }) => {
    return (
        <div
            onClick={e => setActive()}
            className={`${className} ${!active ? "invisible pointer-events-none  opacity-0" : "visible pointer-events-auto opacity-100 active"}
        fixed inset-0 w-full h-full bg-black/50 z-[500] group transtion-[visibility] duration-300 
            `}
        >
            <div
                onClick={e => e.stopPropagation()}

                className={`absolute shadow   w-[min(300px,calc(100vw-30px))] bg-white h-full
                group-[.active]:right-0 transition-[right]  duration-500
                -right-full z-10 ${className2}`}
            >
                {children}
            </div>
        </div>
    )
}

export default Slider