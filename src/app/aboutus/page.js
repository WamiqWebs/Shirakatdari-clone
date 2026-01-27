
export default function AboutUs({ title, para }) {
    let Array = [
        { title: 'Transparency and Trust', para: 'We are committed to maintaining the highest level of transparency and trust in our operations. Our platform provides comprehensive information about the gold products available for fractional ownership, ensuring that our investors have a clear understanding of their investments.' },

        { title: 'Security and Integrity', para: 'We prioritize the security and integrity of our investors’ assets. We partner with trusted vaulting providers to securely store the gold holdings, implementing robust security measures to safeguard our investors’ interests.' },

        { title: 'Exceptional User Experience', para: 'We strive to deliver an exceptional user experience through our int className= mb-5 uitive platform, user-friendly interface, and personalized investor dashboard. Our aim is to make the inv className= mb-5 estment process seamless, informative, and enjoyable for our valued investors.' },

        { title: 'Expert Support', para: 'Our dedicated customer support team is available to assist our investors every step of the way. We are committed to providing timely and knowledgeable support, answering inquiries, and ensuring a smooth investing experience.' },
    ];
    return (
        <>
            <div className="p-10 flex flex-col m-1 px-0">
                <h1 className="text-4xl lg:text-5xl font-medium font-serif">
                    About Us
                </h1>
                <div className="w-40 h-1 bg-[#00FF0D] my-5"></div>
                <p>
                    At Sherakatdari.com, we believe that gold ownership should be accessible to everyone. We are a leading platform that offers fractional gold ownership, empowering individuals to invest in this timeless asset without the need to purchase a full bar. Our mission is to provide a convenient, transparent, and secure way for investors to participate in the gold market and diversify their investment portfolios.
                </p>
            </div>
            <div className="flex flex-col px-0 pb-10 m-1">
                <h1 className="text-3xl lg:text-4xl mb-5 font-serif font-medium">Our Vision</h1>
                <p>Our vision is to revolutionize the way people invest in gold, making it simpler, more affordable, and inclusive. We aim to democratize gold ownership, ensuring that individuals from all walks of life can benefit from the stability and value that gold has to offer.</p>
            </div>



            <div className="flex flex-col px-0 mt-1">

                <h1 className="mb-5 font-medium font-serif text-3xl lg:text-4xl">Our Commitment</h1>
                {Array.map((item, index) => (
                    <div className="mt-5" key={index}
                        title={item.title}
                        description={item.para}>
                        <li className="list-none"> <b>{item.title}</b>: {item.para} </li>
                    </div>
                ))}
                <div className="p-10 flex flex-col m-1 px-0">
                    <h1 className="text-3xl lg:text-4xl font-medium font-serif">
                        Our Offerings
                    </h1>
                    <p className="my-5">At Sherakatdari.com, we offer a wide range of gold products for fractional ownership. Investors can choose from various forms of gold, including bars, coins, and jewelry, allowing for diversification and flexibility in their investment portfolios. We provide detailed information about each product, including weight, purity, and market value, enabling our investors to make informed investment decisions.</p>

                    <p>
                        Join us at Sherakatdari.com and unlock the world of fractional gold ownership. Whether you are a seasoned investor looking to diversify your portfolio or a newcomer interested in exploring the potential of gold, we are here to guide you on your investment journey. Start investing in gold today and become a part of this enduring asset class that has stood the test of time.</p>
                </div>
            </div>
        </>
    )
}