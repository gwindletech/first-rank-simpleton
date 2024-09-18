import content from "../data/data";

const inactiveClasses =
  "py-2 px-4 bg-orange-300 rounded-3xl hover:bg-orange-400 hover:scale-110 transition-transform duration-100 ease-linear cursor-pointer";
const activeClasses =
  "py-2 px-4 bg-orange-500 rounded-3xl transition-transform duration-100 ease-linear cursor-pointer text-white";

function PageNav({ topic, setTopic, setSection }) {
  function handleClickTopic(e) {
    setTopic(e.target.innerText);
    setSection("");
  }

  return (
    <nav className="bg-blue-900 p-4 shadow h-20 fixed w-full top-0 left-0 z-50">
      <ul className="flex items-center">
        <div>
          <li>
            <img src="/brain-8-svgrepo-com.png" alt="Brain" className="w-14" />
          </li>
        </div>

        <div className="flex-auto">
          <div className="flex justify-center gap-10">
            {content.map((el) => (
              <li
                key={el.title}
                className={el.title === topic ? activeClasses : inactiveClasses}
                onClick={(e) => handleClickTopic(e)}
              >
                {el.title}
              </li>
            ))}
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default PageNav;
