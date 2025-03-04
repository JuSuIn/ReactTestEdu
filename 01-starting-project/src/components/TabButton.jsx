function TabButton({ children, onSelect }) {
  // function TabButton({ label }) {
  //   document.querySelector.addEventListener("click", () => {
  //   });

  console.log("TABBUTTON COMPONENT EXECUTING");

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
      {/* <button>{label}</button> */}
    </li>
  );
}

export default TabButton;
