import styled from "styled-components";
import "./App.css";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;

export const WrapperBox = styled.div`
  // max-width: ;
  width: calc(100% - 5px);
  margin: 0 auto;
`;