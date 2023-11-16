'use client'
import React, { useEffect, useState } from 'react'
import CoinSelectBox from '../components/CoinSelectBox'
import PriceSelectBox from '../components/PriceSelectBox';
import { CoinType, PriceType } from '@/types';
import { getCoins } from '@/utils';
import CoinCard from '@/components/CoinCard';
import Loading from '@/components/Loading';
import { IoMdRefresh } from "react-icons/io";

const prices = [
  { name: 'USD' },
]

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const [price, setPrice] = useState<number>(100)
  const [coins, setCoins] = useState<Array<PriceType> | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<PriceType>(prices[0])
  const [selectedCoin, setSelectedCoin] = useState<CoinType | any>('All Coins')

  useEffect(() => {
    getAllCoins()
  }, [])

  const getAllCoins = async () => {
    if (loading) return null
    setLoading(true)
    const _coins = await getCoins();
    if (_coins) {
      setCoins(_coins)
    }
    setLoading(false)
  }

  if (!coins || !selectedCoin) return null
  return (
    <main className="bg-slate-900 min-h-screen ">
      <div className="container mx-auto px-10">
        <div className='flex flex-col'>
          <div className='flex flex-col mt-20 items-center'>
            <h2 className='text-white font-bold text-5xl text-center'>
              Free Coin Price Tracker
            </h2>
            <div className='mt-10 flex flex-col md:flex-row gap-4 items-center'>
              <div className='md:w-56 flex items-center bg-slate-800 rounded-lg shadow-md'>
                <input value={price} onChange={(e: any) => setPrice(e.target.value)} type="number" className='w-9/12 bg-transparent border-none py-3 px-4 leading-5 text-white focus:ring-0 focus:outline-none' />
                <div className='md:w-3/12'>
                  <PriceSelectBox prices={prices} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
                </div>
              </div>
              {coins && <CoinSelectBox coins={coins} selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />}
            </div>
            <button onClick={getAllCoins} className='w-full flex justify-center items-center gap-1 md:w-[464px] py-2 bg-slate-800 text-white hover:bg-indigo-500 duration-200 rounded-md shadow-md mt-4'>
              <IoMdRefresh className={`w-5 h-5 ${loading && 'animate-spin'}`} />
              {loading ? 'Refreshing' : 'Refresh'}
            </button>
          </div>
        </div>
        {loading ? (
          <div className='py-10'>
            <Loading />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 my-4">
            {selectedCoin.name ? (
              <CoinCard key={selectedCoin.name} coin={selectedCoin} price={price} />
            ) : (
              coins && coins.map((coin: any) => (
                <CoinCard key={coin.name} coin={coin} price={price} />
              ))
            )}
          </div>
        )}
      </div>
    </main>
  )
}
