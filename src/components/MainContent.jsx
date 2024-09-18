import content from "../data/data";
import VerticalLinearStepper from "./VerticalLinearStepper";
import AccordionUsage from "./AccordionUsage";
import Timeline from "./Timeline";

function MainContent({ topic, section, mySteps }) {
  const currentTopic = topic
    ? content.filter((item) => item.title === topic)[0]
    : "";
  const currentHeading = section
    ? section.charAt(0).toUpperCase() + section.slice(1)
    : "";

  return (
    <div className="p-10 flex flex-col items-center justify-center relative">
      <div className="bg-[#88beff] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[8rem] sm:w-[68.75rem] -z-10"></div>
      <div className="bg-[#ffe888] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
      <Timeline mySteps={mySteps} />
      {/* {mySteps.map((step, index) => (
        <AccordionUsage
          label={step["label"]}
          description={step["description"]}
          key={index}
        />
      ))} */}
    </div>
  );
}

export default MainContent;
