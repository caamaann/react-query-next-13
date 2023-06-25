'use client'

import {useGetListLineup} from '@/services/lineup/query'
import Image from 'next/image'
import React from 'react'

export default function Example() {
  const {isLoading, error, data, isFetching} = useGetListLineup()

  if (isLoading || isFetching) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <div className="grid grid-cols-[repeat(auto-fit,300px)] px-6 py-4 gap-6 justify-center bg-slate-200">
      {data.map((item: any, i: number) => (
        <div className="card-lineup" key={i}>
          <div className="aspect-square relative overflow-hidden">
            <Image src={item.lineup?.image?.mediaItemUrl} fill style={{objectFit: 'cover'}} alt="" />
          </div>
          <div className="card-title">
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
