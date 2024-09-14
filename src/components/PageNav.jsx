import { NavLink } from "react-router-dom";

function PageNav() {
  const content = [
    {
      title: "Lithium",
      titration: "Step 1: ...",
      monitoring: "Look out for ...",
    },
    {
      title: "Clozapine",
      titration: "Step 1: ...",
      monitoring: "Look out for ...",
    },
    {
      title: "Valproate",
      titration: "Step 1: ...",
      monitoring: "Look out for ...",
    },
    {
      title: "ECT",
      titration: "Step 1: ...",
      monitoring: "Look out for ...",
    },
  ];

  return (
    <nav className="bg-blue-900 p-4 shadow">
      <ul className="flex items-center">
        <div>
          <li>
            <NavLink to="/">
              <img
                src="../../public/brain-8-svgrepo-com.png"
                alt="Brain"
                className="w-14"
              />
            </NavLink>
          </li>
        </div>

        <div className="flex-auto">
          <div className="flex justify-center space-x-20">
            {content.map((topic) => (
              <li key={topic.title}>
                <NavLink
                  to={`/${topic.title.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "navbar-heading-active" : "navbar-heading"
                  }
                >
                  {topic.title}
                </NavLink>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default PageNav;
