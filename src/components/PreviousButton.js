import {BsChevronLeft} from 'react-icons/bs'
const PreviousButton = ({className}) => {
  return (
    <div className={`arrows arrow__left  ${className} `}> <BsChevronLeft size={20}/></div>
  )
}

export default PreviousButton