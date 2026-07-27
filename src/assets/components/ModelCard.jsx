import { useState } from "react";

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

const ModelCard = ({ model, carts, setCarts }) => {
  const [ordered, setOrdered] = useState(false);

  // FIXED and gork er theke support niyechi
  const handleOrder = () => {
    setOrdered(true);
    setCarts([...carts, model]);
  };

  return (
    <div
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
          whitespace-pre-line
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
          onClick={handleOrder}
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
          {ordered ? "ORDER PLACED" : "ORDER NOW"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;