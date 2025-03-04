function TabButton({ children, onSelect, isSelected }) {
  // function TabButton({ label }) {
  //   document.querySelector.addEventListener("click", () => {
  //   });

  console.log("TABBUTTON COMPONENT EXECUTING");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
      {/* <button>{label}</button> */}
    </li>
  );
}

export default TabButton;
