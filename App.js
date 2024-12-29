import logo from './logo.svg';
import './App.css';
import Greet from './componenents/Greet'
import Welcome from './componenents/Welcome'
import Hello from './componenents/Hello'
import Message from './componenents/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/*<ClassClick />*/}
      {/*<FunctionClick />*/}
      {/*<Counter />*/}
      {// <Message />}
      {/*<Greet name="Bruce" heroName="Batman">
        <p>This childrens props</p>
      </Greet>*/}
      {/*<Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder Women"></Greet> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/*<Welcome name="Clark" heroName="Superman" /> */} 
      {/*<Welcome name="Diana" heroName="Wonder Women" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
