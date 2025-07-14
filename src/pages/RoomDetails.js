import React, { useContext } from "react"
import { useParams } from "react-router-dom"
// components
import AdultDropdown from "../components/AdultsDropdown"
import KidsDropdown from "../components/KidsDropdown"
import CheckIn from "../components/CheckIn"
import CheckOut from "../components/CheckOut"
// scrool to top
import ScroolToTop from "../components/ScrollToTop"
// context
import { RoomContext } from "../context/RoomContext"
// icons
import { FaCheck } from "react-icons/fa"

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext)
  const { id } = useParams()
  console.log(id)
  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id)
  })
  // destructure room
  const { name, description, facilities, imageLg, price } = room
  return (
    <section>
      {/* Banner */}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* title */}
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} />
            {/* facilities */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                hello i am khadak this is too long text description anything to
                say ... you can say here :Laugh
              </p>
              {/* grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  //destructure items
                  const { name, icon } = item
                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[40%]">
            {/* reservation */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3 className="h3">Your reservation</h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
              </div>
              <button className="btn btn-lg btn-primary w-full">
                Book now for ${price}
              </button>
            </div>
            <div>
              <h3 className="h3">Hotel rules</h3>
              <p className="mb-6">
                your hotel roles belongs here ... married couples are not
                allowed in our hotel because they always fight and broke our
                hotel's inventory :Laugh other rules are below also hehehehe
                :laugh
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex item-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00pm -9:00pm
                </li>
                <li className="flex item-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out: 11:30am
                </li>
                <li className="flex item-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No pets
                </li>
                <li className="flex item-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomDetails
