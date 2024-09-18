import timelineElements from "../assets/timelineElements";
import downChevron from "../assets/downChevron.svg";
import tick from "../assets/tick.svg";

function Timeline({ defaultColor, mySteps }) {
  return (
    <div>
      {timelineElements.map((element) => {
        let lastElement;
        let iconToUse;
        if (element.id === timelineElements.length) {
          lastElement = true;
          iconToUse = tick;
        } else {
          lastElement = false;
          iconToUse = downChevron;
        }

        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];
        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex m-4 relative text-white">
            <div className="hidden sm:flex items-start w-15 pt-0.5 relative">
              {lastElement ? null : (
                <div
                  className={`${color} w-px h-full translate-x-5 justify-center translate-y-10 opacity-30`}
                ></div>
              )}

              <img
                src={iconToUse}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg z-20`}
              />

              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </div>
            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 ">
              <div className="text-xl font-medium">{element.title}</div>
              <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                {element.importance}{" "}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <div className="mb-4 text-left ">{element.description}</div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.items.map((items, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                    >
                      {items}
                    </span>
                  );
                })}
              </div>

              <img
                src={iconToUse}
                alt="icon"
                className={`${color} w-10 mx-auto p-1 rounded-lg z-20 sm:hidden`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
