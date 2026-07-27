import { use } from "react";
import { useState } from "react";





import ModelCard from"./ModelCard"




const Models = ({modelPromise,carts,setCarts }) => {


    const [ordered, setIsOrdered] =useState(false)

    const Models = use(modelPromise);






    
    return (
        <div className="
        relative
        pt-40
        pb-32
       bg-linear-to-b
from-[#1e293b]
via-[#162033]
to-[#020617]
        "> 


        <div className="relative text-center">


      <h2
className="
relative
text-5xl
md:text-6xl
font-extrabold
tracking-tight
font-['Playfair_Display']
text-transparent
bg-clip-text
bg-linear-to-r
from-white
via-gray-200
to-gray-400
drop-shadow-[0_10px_30px_rgba(255,255,255,.15)]
"
>
The Collection That Defines You
</h2>


<p
className="
mt-5
text-lg
md:text-xl
text-gray-400
font-['Inter']
tracking-[0.25em]
uppercase
"
>
Made for Moments That Matter
</p>

        </div> 



        <div className="
        grid 
        lg:grid-cols-3 
        md:grid-cols-2 
        gap-8 
        mt-10 
        max-w-7xl 
        mx-auto
        px-5
        ">


        {Models.map(model=> 
<ModelCard key={model.id} model={model}carts={carts} setCarts={setCarts}/>

        )}

        </div> 


        <div>


<p>ddd</p>



        </div>



        </div>
    );
}


export default Models;