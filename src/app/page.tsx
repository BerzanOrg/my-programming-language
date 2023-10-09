"use client"
import { Header } from '@/components/Header'
import { Repl } from '@/components/Repl'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <main className='flex flex-col self-center w-full max-w-2xl p-6'>
        <Repl />
      </main>
    </div>
  )
}

