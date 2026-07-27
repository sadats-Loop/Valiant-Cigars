import { use } from "react";

import black from "../black.png";
import silver from "../silver.png";
import blue from "../blue.png";
import gold from "../gold.png";
import midnight from "../midnight.png";
import platinum from "../platinum.png";


const imageMap = {
    black,
    silver,
    blue,
    gold,
    midnight,
    platinum,
};



const models = ({modelPromise}) => {

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

        <div 
        key={model.title}
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-linear-to-b
        from-[#1e293b]
        to-[#020617]
        border
        border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        transition-all
        duration-700
        hover:-translate-y-3
        hover:shadow-[0_35px_80px_rgba(0,0,0,.65)]
        "
        >


        {/* Premium glow */}

        <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-700
        bg-linear-to-br
        from-blue-500/10
        via-transparent
        to-orange-500/10
        "
        />


        {/* Product Image */}

        <div
        className="
        relative
        flex
        justify-center
        items-center
        pt-8
        pb-5
        bg-linear-to-b
        from-white/10
        to-transparent
        "
        >

        <img  
        className="
        w-64
        h-72
        object-cover
        rounded-3xl
        transition-all
        duration-700
        ease-out
        group-hover:scale-105
        group-hover:-translate-y-3
        drop-shadow-[0_25px_30px_rgba(0,0,0,.6)]
        "   
        src={imageMap[model.image]} 
        alt={model.title} 
        />

        </div>



        {/* Card Content */}

        <div className="relative p-6">


            <h2 
            className="
            text-3xl
            font-black
            text-white
            font-['Farro']
            tracking-tight
            "
            >
            {model.title}
            </h2>


            <p 
            className="
            mt-3
            text-gray-400
            leading-relaxed
            font-['Farro']
            text-sm
            "
            >
            {model.description}
            </p>



            <div 
            className="
            mt-6
            text-2xl
            font-bold
            text-transparent
            bg-clip-text
            bg-linear-to-r
            from-orange-400
            to-yellow-300
            "
            >
            ${model.price}
            </div>



            <button 
            className="
            mt-6
            w-full
            rounded-2xl
            py-4
            bg-white
            text-black
            font-bold
            tracking-wide
            transition-all
            duration-500
            hover:bg-orange-500
            hover:text-white
            hover:scale-[1.03]
            hover:shadow-[0_15px_40px_rgba(249,115,22,.4)]
            "
            >
            ORDER NOW
            </button>


        </div>


        </div>

        )}

        </div> 


        <div>


<p>ddd</p>



        </div>



        </div>
    );
}


export default models;