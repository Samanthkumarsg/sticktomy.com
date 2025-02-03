import { FiTarget, FiSunrise, FiZap } from "react-icons/fi";
export default function Home() {
  const phrases = [
    "Because ‘I’ll Do It Later’ Is a Lifestyle, Not a Plan. ",
    "Helping You Level Up Without Hitting Snooze. ",
    "Make Your Goals Your Sidekick, Not Your Boss. ",
    "Where Procrastination Meets Productivity… And Pizza.",
    "For When You Need to Be Productive… But Also Need 5 More Minutes.",
    "Because You Can’t Keep Blaming Your Alarm Clock Forever.",
    "Turning 'I’ll Start Tomorrow' Into 'I Started Right Now'... Kinda! ",
    "Helping You Be a Goal-Getter, Not Just a Dreamer.",
    "Track Habits, Tackle Tasks, And Still Have Time for TikToks.",
    "For When You Want to Achieve Greatness, But Also Need a Nap. ",
    "Because Adulting is Hard, But Tracking Goals is Easy. ",
    "You Can’t Procrastinate If You’re Already Winning. ",
    "For When You’re Too Busy Being Awesome to Remember Everything.",
    "The Only Thing You Need to Track is Your Awesomeness. ",
    "Turning Your ‘Later’ Into ‘Done’ Without the Stress. ",
    "Because Your Goals Won’t Achieve Themselves... But We Can Help!",
    "Where Tracking Goals Is Easier Than Finding Wi-Fi. ",
    "Goals, Tasks, and Journals—Without the Boring Part. ",
    "Making Your Productivity As Cool As Your Playlist.",
    "No Excuses, Just Results (And Snacks).",
    "Because Even Couch Potatoes Can Crush Goals!"
  ];

  const random = phrases[Math.floor(Math.random() * phrases.length)];


  return (
    <div className="max-w-screen-lg border-indigo-300 rounded-xl my-8  mx-auto bg-white p-6">



      <div className="py-12  flex items-start justify-center flex-col ">
        <div className="flex flex-row items-center text-sm font-semibold z-10 rotate-12 -mb-6 px-4 py-2 shadow bg-indigo-50 text-indigo-900  cursor-pointer  transition-all duration-200   w-fit rounded-md tracking-widest ">
          STICK TO MY.COM
        </div>

        <div className="relative flex flex-col items-start text-base font-semibold p-8  shadow bg-yellow-50 text-stone-900  cursor-pointer -rotate-2  transition-all duration-200   w-full rounded-3xl tracking-widest">
          <h2 className="text-2xl font-medium  text-yellow-900 font-comingSoon tracking-wide leading-normal mt-4 ">{random}</h2>
          <h2 className="text-lg font-medium  text-yellow-800  tracking-wide leading-normal font-comingSoon  "> </h2>


        </div>



      </div>

      <div className=" flex flex-col items-center justify-center gap-4  py-8 ">

        <div className="w-fit flex items-center text-base font-semibold z-10  p-4 rounded-full  shadow bg-sky-50 rotate-12  text-stone-900    cursor-pointer  transition-all duration-200  tracking-widest ">
          <FiTarget className="text-sky-800 size-5 z-30 mr-2" />
          <h2 className="text-sm font-medium  text-sky-800  tracking-wide leading-normal font-comngSoon  "> Small steps today, big wins tomorrow.</h2>
        </div>

        <div className="w-fit flex items-center text-base font-semibold z-10  mt-8 p-4 rounded-full  shadow bg-sky-50 -rotate-12 text-stone-900    cursor-pointer  transition-all duration-200  tracking-widest">
          <FiSunrise className="text-sky-800 size-5 z-30 mr-2" />
          <h2 className="text-sm font-medium  text-sky-800  tracking-wide leading-normal font-comngSoon  "> Progress is built one habit at a time.</h2>
        </div>

        <div className="w-fit flex items-center text-base font-semibold z-10  mt-12 p-4 rounded-full  shadow bg-sky-50 rotate-[24deg]  text-stone-900    cursor-pointer  transition-all duration-200  tracking-widest">
          <FiZap className="text-sky-800 size-5 z-30 mr-2" />
          <h2 className="text-sm font-medium  text-sky-800  tracking-wide leading-normal font-comngSoon  "> Push yourself, progress follows.</h2>
        </div>

      </div>
    </div>
  );
}
