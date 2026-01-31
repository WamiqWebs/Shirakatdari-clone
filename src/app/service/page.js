export default function Service(){
    let Array = [
       {title:'Gold Bars:', description:'At Shirakatdari.com, Investing in gold bars offers a tangible and secure way to own fractional units of this precious metal. We offer a variety of gold bar sizes, ranging from small bars to larger ones, allowing you to tailor your investment to your budget and goals.'},

       {title:'Buy Back', description:'At Shirakatdari.com, Investing in gold bars offers a tangible and secure way to own fractional units of this precious metal. We offer a variety of gold bar sizes, ranging from small bars to larger ones, allowing you to tailor your investment to your budget and goals.'},

       {title:'Gold Jewelry:', description:'At Shirakatdari.com, convert your gold bars into stunning jewelry pieces. Our expert craftsmen will skillfully transform your valuable gold bars into exquisite and personalized jewelry designs. Experience the joy of wearing a unique piece of jewelry that holds both investment value and sentimental significance. With meticulous attention to detail, we will create a beautiful and timeless piece that reflects your personal style. Trust our craftsmanship and turn your gold bars into cherished jewelry that will be treasured for years to come. At Shirakatdari.com, we take pride in offering a seamless and personalized Gold to jewelry conversion service. Our dedicated team of experts will guide you through each step, ensuring that your vision is brought to life with precision and artistry. Experience the joy of wearing a unique piece of jewelry that holds both sentimental and investment value.'},

       {title:'Gold Jewelry:', description:'At Shirakatdari.com, convert your gold bars into stunning jewelry pieces. Our expert craftsmen will skillfully transform your valuable gold bars into exquisite and personalized jewelry designs. Experience the joy of wearing a unique piece of jewelry that holds both investment value and sentimental significance. With meticulous attention to detail, we will create a beautiful and timeless piece that reflects your personal style. Trust our craftsmanship and turn your gold bars into cherished jewelry that will be treasured for years to come. At Shirakatdari.com, we take pride in offering a seamless and personalized Gold to jewelry conversion service. Our dedicated team of experts will guide you through each step, ensuring that your vision is brought to life with precision and artistry. Experience the joy of wearing a unique piece of jewelry that holds both sentimental and investment value.'},
    ]
    
    return(
        <>
         <div className="flex flex-col justify-center items-center pt-10 pb-5 px-0 text-center">
        <h1 className=" font-serif text-5xl">Services</h1>
        <div className="w-40 h-1 bg-[#00FF0D] my-5"></div>
        <p>Get Started Today with a minimum Rs 1,000 only</p>
         </div>
         <section className="grid grid-cols-1 lg:grid-cols-2 w-full py-10 px-0">

  {Array.map((item, index) => (
    <div
        key={index}
        className={`p-10 ${index % 2 === 1 ? 'bg-gray-900 text-white' : 'bg-lime-600 text-black'}`}
    >
        <h1 className="font-serif text-3xl">{item.title}</h1>
        <div className="w-40 h-1 bg-[#00FF0D] my-5"></div>
        <p>{item.description}</p>
    </div>
))}
         </section>
         <section className="w-screen ml-[calc(50%-50vw)] bg-cover bg-fixed relative flex justify-center items-center py-10"
          style={{ backgroundImage:`url('/coins_img.jpg')`}}>
       <div className="w-[80%] p-5 sm:py-20 text-center border border-[#00FF0D] text-3xl bg-black/60 lg:text-4xl font-serif text-white">
        NO MATTER HOW MUCH YOU INVEST, REST ASSURED WE ARE NOT WASTING YOUR MONEY ON SENSELESS FEES.
       </div>
         </section>
        </>
    )
}