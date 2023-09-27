import './App.css';
import Header from './components/commons/header/header';
import Footer from './components/commons/footer/footer';


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div> 
      <p>Hello World</p>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
