import { FiUser, FiMapPin, FiClock } from "react-icons/fi";
import React from 'react'

export const NoteCard = () => {
    return (
        <div className="flex flex-col items-start jusitify-start hover:animate-pulse">
            <div className="flex flex-row rounded-t-md bg-indigo-50 p-2  ">
                < div className="flex flex-row items-center justify-between " >
                    <FiClock className="text-indigo-800 mr-2 size-4" />
                    <h1 className="text-indigo-800 text-xs tracking-wide font-medium">06:00 AM </h1>
                </div >
            </div >
            <div className=" rounded-b-lg w-full flex flex-col items-start justify-start p-4  bg-indigo-50 shadow-indigo-200  border-indigo-300 hover:animate-pulse duration-75 cursor-pointer  ">
                <h1 className=" text-indigo-800 font-semibold tracking-wide text-sm mb-2">Create Team and protype test with clients</h1>
            </div>
        </div >
    )
}
