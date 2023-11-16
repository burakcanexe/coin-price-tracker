'use client'
import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { CoinType } from '@/types';


type CoinSelectBoxProps = {
  coins: any,
  selectedCoin: any,
  setSelectedCoin: any
}

export default function CoinSelectBox({ coins, selectedCoin, setSelectedCoin }: CoinSelectBoxProps) {
  const [query, setQuery] = useState('')

  const filteredCoins =
    query === ''
      ? coins
      : coins.filter((coin: any) =>
        coin.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <div className="w-full md:w-56">
      <Combobox value={selectedCoin} onChange={setSelectedCoin}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-slate-800 text-left shadow-md">
            <Combobox.Input
              className="w-full bg-slate-800 border-none py-3 pl-4 pr-10 leading-5 text-white focus:ring-0 focus:outline-none"
              displayValue={(coin: any) => coin.name ? coin.name : 'All Coins'}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiMiniChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-800 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredCoins.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-white">
                  Nothing found.
                </div>
              ) : (
                <>
                  <Combobox.Option
                    key={'all'}
                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-indigo-600 text-white' : 'text-white'}`}
                    value={'All'}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          All Coins
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-indigo-500'}`}
                          >
                            <FaCheck className="h-3 w-3 text-white" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                  {filteredCoins.map((coin: any) => (
                    <Combobox.Option
                      key={coin.name}
                      className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-indigo-600 text-white' : 'text-white'}`}
                      value={coin}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                          >
                            {coin.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-indigo-500'}`}
                            >
                              <FaCheck className="h-3 w-3 text-white" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </>
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
