import React, { useContext } from "react"

// components
import AdultDropdown from "../components/AdultsDropdown.js"
import KidsDropdown from "../components/KidsDropdown.js"
import CheckIn from "../components/CheckIn.js"
import CheckOut from "../components/CheckOut.js"
import { RoomContext } from "../context/RoomContext.js"

const BookForm = () => {
  const { handleClick } = useContext(RoomContext)
  return (
    <form className="h-[300px] w-full lg:h-[70px] ">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
        {/* btn */}
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary"
        >
          Check now
        </button>
      </div>
    </form>
  )
}

export default BookForm
