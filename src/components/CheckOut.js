import React, { useState } from "react"
// datepicker
import DatePicker from "react-datepicker"
//date picker css
import "react-datepicker/dist/react-datepicker.css"
import "../datepicker.css"
import { BsCalendar } from "react-icons/bs"

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false)
  return (
    <div className="relative flex items-center justify-end h-full">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <div className="text-accent text-base">
          <BsCalendar />
        </div>
      </div>
      <DatePicker
        className="w-full h-full "
        selected={endDate}
        placeholderText="Check out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  )
}

export default CheckOut
