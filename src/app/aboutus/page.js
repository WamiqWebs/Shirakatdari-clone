export default function AboutUs() {
    const data = [
        {
            title: 'Transparency and Trust',
            para: 'We are committed to maintaining the highest level of transparency and trust in our operations...'
        },
        {
            title: 'Security and Integrity',
            para: 'We prioritize the security and integrity of our investors’ assets...'
        },
        {
            title: 'Exceptional User Experience',
            para: 'We strive to deliver an exceptional user experience through our intuitive platform...'
        },
        {
            title: 'Expert Support',
            para: 'Our dedicated customer support team is available to assist our investors every step of the way...'
        }
    ];

    return (
        <>
            <div className="p-10 flex flex-col m-1 px-0">
                <h1 className="text-4xl lg:text-5xl font-medium font-serif">About Us</h1>
                <div className="w-40 h-1 bg-[#00FF0D] my-5"></div>
                <p>
                    At Sherakatdari.com, we believe that gold ownership should be accessible to everyone...
                </p>
            </div>

            <div className="flex flex-col px-0 pb-10 m-1">
                <h1 className="text-3xl lg:text-4xl mb-5 font-serif font-medium">Our Vision</h1>
                <p>
                    Our vision is to revolutionize the way people invest in gold...
                </p>
            </div>

            <div className="flex flex-col px-0 mt-1">
                <h1 className="mb-5 font-medium font-serif text-3xl lg:text-4xl">Our Commitment</h1>

                {data.map((item, index) => (
                    <div className="mt-5" key={index}>
                        <li className="list-none">
                            <b>{item.title}</b>: {item.para}
                        </li>
                    </div>
                ))}
            </div>
        </>
    );
}
