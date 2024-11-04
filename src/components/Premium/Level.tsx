import React, { useState, useEffect } from "react";

type Levels = {
  title: string;
  icons: string;
  descTitle: string;
  description: string;
  video: string;
};

const Level: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const levels: Levels[] = [
    {
      title: "Learn efficiently",
      icons: "/images/ICONS/shot.svg",
      descTitle: "Effective, hands-on learning",
      description:
        "Unlimited access to 70+ interactive courses with real-time feedback and simple explanations to make learning efficient.",
      video: "/images/Videos/learn-efficiently.mp4",
    },
    {
      title: "Master the essentials",
      icons: "/images/ICONS/Lamp.svg",
      descTitle: "Master concepts in 15 minutes a day",
      description:
        "Brilliant makes it easy to level up fast with fun, bite-sized lessons.",
      video: "/images/Videos/master-the-essentials.mp4",
    },
    {
      title: "Apply your learnings",
      icons: "/images/ICONS/bil.svg",
      descTitle: "Essentials to applications",
      description:
        "Get hands-on with cutting-edge applications, like building a simple neural network, hacking a password, and much more.",
      video: "/images/Videos/apply-your-learnings.mp4",
    },
    {
      title: "Stay on track",
      icons: "/images/ICONS/flag.svg",
      descTitle: "Stay motivated",
      description:
        "Form a real learning habit with game-like progress tracking and friendly reminders.",
      video: "/images/Videos/stay-on-track.mp4",
    },
  ];

  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % levels.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [levels.length]);

  return (
    <div className="flex flex-col items-center mb-20 w-10/12 lg:w-3/4 mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8">Level up with Premium</h1>

      <div className="flex flex-col-reverse md:flex-row gap-12 items-center ">
        <div className="flex flex-col  gap-6 lg:w-1/3 md:w-1/2">
          {levels.map((level, index) => (
            <div
              className={`flex flex-col p-2  hover:bg-[rgb(247,247,248)] ${
                activeIndex === index && "bg-[#f7f7f8]"
              }`}
            >
              <div
                key={index}
                className={`flex items-center gap-4 lg:p-4  rounded-lg cursor-pointer `}
                onClick={() => handleSetActiveIndex(index)}
                aria-label={`Select ${level.title}`}
              >
                <img
                  className="w-10 h-10"
                  src={level.icons}
                  alt={`${level.title} icon`}
                />
                <p className="text-lg text-nowrap font-medium">{level.title}</p>
              </div>

              <p className="lg:hidden">{level.description}</p>
            </div>
          ))}
        </div>

        <div
          className=" relative p-10 border-2 rounded-3xl  border-black lg:w-1/3 h-[75vh] md:w-1/2"
          style={{ boxShadow: "10px 5px 5px black" }}
        >
          <video
            autoPlay
            className="h-full w-full object-cover"
            src={levels[activeIndex].video}
          ></video>
        </div>

        <div className="hidden  gap-6 lg:flex lg:flex-col  lg:w-1/3 p-5 ">
          <p className="font-bold text-xl">{levels[activeIndex].descTitle}</p>
          <p className="text-gray-700">{levels[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Level;
