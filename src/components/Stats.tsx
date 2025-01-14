const Stats = ({transactions}: {transactions:number;}) => {
  return (    
  <div className="bg-[#2C2C2C] py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-playfair mb-2">${transactions.toLocaleString()}</p>
              <p className="text-secondary font-montserrat">Daily Transactions</p>
            </div>
            <div>
              <p className="text-4xl font-playfair mb-2">127K+</p>
              <p className="text-secondary font-montserrat">Token Holders</p>
            </div>
            <div>
              <p className="text-4xl font-playfair mb-2">$2.1B</p>
              <p className="text-secondary font-montserrat">Market Cap</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Stats;