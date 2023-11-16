'use client'
import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { PriceType } from '@/types';

type PriceSelectBoxProps = {
  prices: Array<PriceType>,
  selectedPrice: PriceType,
  setSelectedPrice: any
}

export default function PriceSelectBox({ selectedPrice, setSelectedPrice, prices }: PriceSelectBoxProps) {
  return (
    <div className="w-full">
      <Listbox value={selectedPrice} onChange={setSelectedPrice}>
        <div className="relative ">
          <Listbox.Button className="relative w-full cursor-default bg-slate-800 py-2 text-left">
            <span className="block truncate text-white font-medium">{selectedPrice.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
              <HiMiniChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-24 overflow-auto rounded-md bg-slate-800 py-1 text-base shadow-lg z-50">
              {prices.map((price, priceIndex) => (
                <Listbox.Option
                  key={priceIndex}
                  className={({ active }) =>
                    `relative cursor-default select-none text-sm py-2 pl-10 pr-4 text-white ${active && 'bg-indigo-500'
                    }`
                  }
                  value={price}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {price.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <FaCheck className="h-3 w-3" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
