import { FiClock } from "react-icons/fi";
import React from 'react'

export const NoteCard = () => {
    return (
        <div className="flex flex-col items-start jusitify-start ">

            <div className=" rounded-md w-full flex flex-col items-start justify-start p-4  bg-indigo-50 shadow shadow-indigo-100 -rotate-1 hover:ring-2 hover:ring-indigo-500 hover:ring-offset-4 duration-75 cursor-pointer  ">
                <h1 className=" text-indigo-800 font-semibold tracking-wide text-sm mb-2 ">Create Team and prototype test with clients</h1>

                <div className="flex flex-row items-center justify-between mt-2" >
                    <FiClock className="text-indigo-800 mr-2 size-4" />
                    <h1 className="text-indigo-800 text-xs tracking-wide font-medium">06:00 AM </h1>
                </div >
            </div>
        </div >
    )
}
