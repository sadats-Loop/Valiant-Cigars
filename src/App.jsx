
import './App.css'
import Banner from './assets/components/banner'
import Footer from './assets/components/footer'
import NavBar from './assets/components/navbar'
import Models from './assets/components/models'
import Cart from './assets/components/cart'
import { useState } from 'react'




const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels()


function App() {
 
 const [activeTab, setActiveTab] = useState("model");
 const [carts,setCarts]=useState([])
 console.log(carts)




  return (
    <>
      <NavBar></NavBar>
      
      <Banner></Banner>

     {/* Tab section for chutiyappa */}
<div
  className="
  relative
  flex
  justify-center
  items-center
  py-8

  bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,.18),transparent_45%),linear-gradient(to_bottom,#0B1120_0%,#111827_35%,#162033_70%,#1e293b_100%)]
"
>
  <div
    className="
    tabs
    tabs-box

    rounded-full
    p-2

    bg-white/5
    backdrop-blur-2xl

    border
    border-white/10

    shadow-[0_20px_60px_rgba(0,0,0,.45)]

    gap-2
    "
  >
    <input
      type="radio"
      name="vault_tabs"
      className="
      tab
      w-40
      h-14
      rounded-full

      text-gray-400
      font-semibold
      tracking-wide

      transition-all
      duration-500

      hover:text-white

      checked:text-white

      [--tab-bg:linear-gradient(180deg,#243247,#111827)]
      [--tab-border-color:transparent]
      "
      aria-label="The Vault"
      defaultChecked
      onClick={()=>setActiveTab("model")}
    />

    <input
      type="radio"
      name="vault_tabs"
      className="
      tab
      w-40
      h-14
      rounded-full

      text-gray-400
      font-semibold
      tracking-wide

      transition-all
      duration-500

      hover:text-white

      checked:text-white

      [--tab-bg:linear-gradient(180deg,#243247,#111827)]
      [--tab-border-color:transparent]
      "
      aria-label="Flex Picks"
      onClick={()=>setActiveTab("cart")}
    />
  </div>
</div>
     
      {activeTab === "model" && <Models modelPromise ={modelPromise}  carts={carts} setCarts={setCarts} /> }

 {activeTab === "cart" && <Cart carts={carts}   />}

      <Footer></Footer>

   
      
      
    </>
  )
}

export default App
