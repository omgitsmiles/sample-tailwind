import { useEffect } from 'react';

const Calendar = () => {
  useEffect(() => {
    document.body.onmousemove = (e) => {
      const boxes = document.getElementsByClassName("box");
      for (const date of boxes) {
        const rect = date.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (date as HTMLDivElement).style.setProperty("--mouse-x", `${x}px`);
        (date as HTMLDivElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  return (
    <div>
      <style>
        {`
          .bg-gradient::after {
            background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.6), transparent 20%);
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900">
        <h1 className="text-2xl font-bold text-center text-white">Calender</h1>
        <div className="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto mt-6">
          <p className="flex items-center justify-center h-16 text-blue-300">Sa</p>
          <p className="flex items-center justify-center h-16 text-blue-300">Fr</p>
          <p className="flex items-center justify-center h-16 text-blue-300">Th</p>
          <p className="flex items-center justify-center h-16 text-blue-300">We</p>
          <p className="flex items-center justify-center h-16 text-blue-300">Tu</p>
          <p className="flex items-center justify-center h-16 text-blue-300">Mo</p>
          <p className="flex items-center justify-center h-16 text-blue-300">Su</p>
        </div>
        <div className="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto">
          {[...Array(31).keys()].map((day) => (
            <div
              key={day}
              className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white"
            >
              <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">
                {day + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
