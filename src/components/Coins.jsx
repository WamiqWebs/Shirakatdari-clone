export default function Coins() {
  return (
    <>
      <section className="w-screen ml-[calc(50%-50vw)]">
        <div
          className="p-10 md:p-15 lg:p-20 bg-fixed bg-cover relative"
          style={{ backgroundImage: `url('/coins_img.jpg')` }}
        >
          <div className="p-5 md:p-10 lg:p-15 flex flex-col justify-center items-center bg-black/60 border-2 border-[#00FF0D] max-w-6xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-white font-medium lg:text-4xl">
              GROW YOUR PORTFOLIO BY USING GOLD AS A HEDGE AGAINST THE FROTHY MARKET.
            </p>
            <button className="px-4 py-3 border-2 mt-4 border-[#00FF0D] bg-transparent text-white font-bold">
              Create Account
            </button>
          </div>
        </div>
      </section>

    </>
  )
}