export default function Tabs({ children, buttons, buttonsContainer }) {
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <buttonsContainer>{buttons}</buttonsContainer>
      {children}
    </>
  );
}
