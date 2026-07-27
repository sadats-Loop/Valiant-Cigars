
import './App.css'
import Banner from './assets/components/banner'
import Footer from './assets/components/footer'
import NavBar from './assets/components/navbar'
import Models from './assets/components/models'



const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels()


function App() {
 

  return (
    <>
      <NavBar></NavBar>
      
      <Banner></Banner>


       <Models modelPromise ={modelPromise} /> 

      <Footer></Footer>

   
      
      
    </>
  )
}

export default App
