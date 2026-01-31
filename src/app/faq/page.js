export default function Faq() {
  let Array = [
    { Title: 'What is fractional gold ownership?', Para: 'Fractional gold ownership allows you to invest in a fraction or share of a larger unit of gold. Instead of purchasing a whole gold bar or coin, you can buy a smaller portion, which gives you the benefits of owning gold without the need for a large capital outlay.' },

    { Title: 'How does fractional gold ownership work?', Para: 'When you invest in fractional gold ownership, you purchase a specified fraction or percentage of a gold asset. The ownership is recorded electronically, and the value of your investment fluctuates based on the current market price of gold. You can track the performance of your investment through your personalized investor dashboard.' },

    { Title: 'How is the value of my fractional gold ownership calculated?', Para: 'The value of your fractional gold ownership is calculated based on the current market price of gold and the fraction or percentage of the gold asset that you own. As the price of gold fluctuates, the value of your investment will correspondingly change.' },

    { Title: 'Can I take physical possession of the gold I invest in?', Para: 'Shirakatdari.com primarily offers fractional ownership of gold for investment purposes. The physical gold is securely stored in trusted vaulting facilities. However, if you have specific requirements or larger investment holdings, please contact our customer support team to discuss possible options.' },

    { Title: 'Is my investment in fractional gold ownership secure?', Para: 'At Shirakatdari.com, we prioritize the security and integrity of our investors assets. The gold is stored in trusted vaulting facilities with robust security measures in place. We also employ advanced encryption and authentication methods to protect your personal and financial information.' },

    { Title: 'What fees are associated with fractional gold ownership?', Para: 'Shirakatdari.com charges a nominal fee for facilitating fractional gold ownership. The fee structure is transparent and will be clearly communicated during the investment process. Additionally, please note that there may be other fees associated with certain transactions, such as buying or selling gold shares, which will also be outlined before you confirm your transactions.' },

    {
      Title: 'How do I track the performance of my fractional gold ownership?',
      Para: 'You can track the performance of your fractional gold ownership through your personalized investor dashboard on Shirakatdari.com. The dashboard provides real-time updates on the value of your holdings, historical performance data, and other relevant information to help you monitor your investment.'
    },

    {
      Title: 'What is the audit process for the gold held in custody?',
      Para: 'To ensure transparency and accountability, we conduct regular audits of the gold held in custody. Independent auditors verify the existence and purity of the gold assets in our vaulting facilities. These audits help maintain the integrity of the fractional gold ownership program and provide assurance to our investors.'
    },

    {
      Title: 'Is fractional gold ownership a good investment?',
      Para: 'Fractional gold ownership can be a valuable addition to an investment portfolio. Gold has a long history of maintaining its value and acting as a hedge against inflation and market volatility. However, as with any investment, it is important to conduct your own research, assess your risk tolerance, and consult with a financial advisor to determine if fractional gold ownership aligns with your investment goals.'
    },

    {
      Title: 'Can I buy and sell fractional gold shares at any time?',
      Para: 'Yes, you can buy and sell fractional gold shares at any time during our business hours 9:00 AM to 6:00 PM PK Time. Our platform provides you with the flexibility to manage your investments according to your needs and market conditions.'
    },


  ]
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center px-0 pt-10 pb-5">
       <h1 className="font-serif text-5xl">FAQ&apos;s</h1>
        <div className="w-40 h-1 my-5 bg-amber-300"></div>
      </div>

      <div className="py-10">
        {Array.map((item, index) => (
          <ul key={index} className="mb-6">
            <li className="font-semibold text-2xl font-sans mb-5">{item.Title}</li>
            <p>{item.Para}</p>
          </ul>
        ))}
      </div>

    </>
  )
}