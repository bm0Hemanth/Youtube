
import { Provider } from "react-redux";
import Body from "./components/Body"
import Header from "./components/Header"
import Appstor from "./utils/Appstor";

function App() {

  return (
       <Provider store={Appstor}>
      <>
        <Header />
        <Body />
      </>
      </Provider>
      )
}

      export default App;
