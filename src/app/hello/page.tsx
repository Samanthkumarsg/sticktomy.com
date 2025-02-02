import { FiPlus, FiUser } from "react-icons/fi";
import { NoteCard } from "../components/Cards/NoteCard";


export default function Hello() {
    return (
        <div className="max-w-screen-lg border-indigo-300 rounded-xl my-8  mx-auto bg-white p-6">
            <div className="flex flex-row items-end justify-between  py-6 borde border-indigo-300 sticky top-0  z-10 ">
                <div className="flex flex-col items-start justify-start ">
                    <h1 className="text-md font-semibold text-indigo-800 tracking-wide">Hello, Samanth!</h1>
                    <h6 className="text-sm font-medium text-indigo-700">Friday , 31 January</h6>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <div className="">

                        <button className="border-2 border-indigo-800 bg-indigo-800 text-indigo-50 font-semibold text-sm px-4 py-2  rounded-lg flex items-center justify-center ">
                            <FiPlus className="text-indigo-50 mr-2 size-4" />

                            New Task</button>
                    </div>
                    <div className="ms-4">
                        <button className=" border-indigo-700 text-indigo-800 font-semibold text-sm px-4 py-2  rounded-lg flex items-center justify-center ">
                            <FiUser className="text-indigo-800 mr-2 size-4" />

                            Profile</button>
                    </div>
                </div>

            </div>
            <div className="">
                <h1 className="text-xl font-semibold text-indigo-800 my-4">Today</h1>
                <div className="ps-4 border-l-2 border-dashed border-indigo-200 sticky top-6 z-20">
                    <h1 className="text-base font-medium text-indigo-700 sticky top-0 ">Morning</h1>
                    <div className="h-full w-full  rounded-xl grid grid-cols-4 gap-4 py-4" >
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />

                    </div>
                </div>


                <div className="ps-4 border-l-2 border-dashed border-indigo-200 ">

                    <h1 className="text-base font-medium text-indigo-700">Afternoon</h1>
                    <div className="h-full w-full  rounded-xl grid grid-cols-4 gap-4 py-4" >
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />

                    </div>
                </div>

                <div className="ps-4 border-l-2 border-dashed border-indigo-200">

                    <h1 className="text-base font-medium text-indigo-700 ">Evening</h1>
                    <div className="h-full w-full  rounded-xl grid grid-cols-4 gap-4 py-4" >
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />

                    </div>
                </div>

            </div>
            <div className="">
                <h1 className="text-xl font-semibold text-indigo-800 mt-8">Upcoming Tasks</h1>
                <div className="h-full w-full  rounded-xl grid grid-cols-4 gap-4 py-4" >
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />

                </div>
            </div>
        </div>
    );
}
