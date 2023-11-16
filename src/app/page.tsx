'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import CoinSelectBox from '../components/CoinSelectBox'
import PriceSelectBox from '../components/PriceSelectBox';
import { CoinType, PriceType } from '@/types';
import { getCoins } from '@/utils';
import CoinCard from '@/components/CoinCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const prices = [
  { name: 'USD' },
]

export default function Home() {
  const [price, setPrice] = useState<number>(100)
  const [coins, setCoins] = useState<Array<PriceType> | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<PriceType>(prices[0])
  const [selectedCoin, setSelectedCoin] = useState<CoinType | any>('All Coins')

  useEffect(() => {
    getAllCoins()
  }, [])

  const getAllCoins = async () => {
    const _coins = await getCoins();
    setCoins(_coins)
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
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-10 py-10">
          {selectedCoin.name ? (
            <CoinCard key={selectedCoin.name} coin={selectedCoin} price={price} />
          ) : (
            coins && coins.map((coin: any) => (
              <CoinCard key={coin.name} coin={coin} price={price} />
            ))
          )}
        </div>
      </div>
    </main>
  )
}
