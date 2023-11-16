import { CoinType } from '@/types'
import React from 'react'

function CoinCard({ coin, price }: { coin: CoinType, price: number }) {
    return (
        <div className="border-2 border-slate-800 w-full md:w-[464px] rounded-lg shadow-md text-white px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex gap-2 items-center flex-col md:flex-row">
            <img src={coin.iconUrl} alt="Bitcoin" className="w-6 h-6" />
            <h3 className="text-xl font-bold text-center md:text-start">{coin?.name}</h3>
          </div>
          <span className="font-semibold text-lg">{price / parseFloat(coin?.price)}</span>
        </div>
    )
}

export default CoinCard
