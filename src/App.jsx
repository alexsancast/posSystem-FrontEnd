import { Login } from "./components/Login";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Navbarhorizontal , Navbarvertical} from "./components/Navbars";


function App() {
  return (
    
     <>
        <Navbarhorizontal/>
          <Navbarvertical/>
     </>
  
      

    // <Login/>
  );
}

export default App;
