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








const Cart = ({ carts, setCarts }) => {
  // Calculate total price
  const total = carts.reduce((sum, item) => sum + item.price, 0);

  // Remove item
  const handleRemove = (id) => {
    const remaining = carts.filter((item) => item.id !== id);
    setCarts(remaining);
  };














  return (
    <div
      className="
      min-h-screen
      bg-linear-to-b
      from-[#1e293b]
      via-[#162033]
      to-[#020617]
      py-20
      px-5
      "
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}

        <h1
          className="
          text-5xl
          font-bold
          text-white
          mb-10
          font-['Farro']
          "
        >
          Your Cart
        </h1>

        {/* Empty Cart */}

        {carts.length === 0 ? (
          <div
            className="
            text-center
            py-20
            rounded-3xl
            bg-white/5
            border
            border-white/10
            "
          >
            <h2 className="text-3xl text-white font-bold">
              Your cart is empty
            </h2>

            <p className="text-gray-400 mt-3">
              Add some premium editions from The Vault.
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}

            <div className="space-y-5">
              {carts.map((item) => (
                <div
                  key={item.id}
                  className="
                  flex
                  items-center
                  justify-between
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-5
                  "
                >
                  {/* Left */}

                  <div className="flex items-center gap-5">
                    <img  className="w-24 h-24 rounded-2xl object-cover" src={imageMap[item.image]} />
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {item.title}
                      </h2>

                      <p className="text-gray-400 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right */}

                  <div className="text-right">
                    <h2
                      className="
                      text-3xl
                      font-bold
                      text-orange-400
                      "
                    >
                      ${item.price}
                    </h2>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="
                      mt-4
                      px-5
                      py-2
                      rounded-xl
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      transition
                      "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}

            <div
              className="
              mt-10
              bg-[#0B1120]
              rounded-3xl
              p-8
              flex
              justify-between
              items-center
              "
            >
              <h2 className="text-4xl font-bold text-white">
                Total
              </h2>

              <h2
                className="
                text-4xl
                font-bold
                text-orange-400
                "
              >
                ${total}
              </h2>
            </div>

            {/* Checkout */}

            <button
              className="
              mt-10
              w-full
              py-5
              rounded-3xl
              bg-linear-to-r
              from-orange-500
              to-yellow-400
              text-black
              font-bold
              text-xl
              hover:scale-[1.02]
              transition-all
              duration-300
              "
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;