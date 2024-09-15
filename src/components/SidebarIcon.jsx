function SidebarIcon({ icon, text, setSection }) {
  return (
    <div
      className="sidebar-icon group cursor-pointer"
      onClick={() => setSection(text)}
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}

export default SidebarIcon;
