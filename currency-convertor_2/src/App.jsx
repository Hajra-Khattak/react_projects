import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  // const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currenctInfo = useCurrencyinfo(from)
  const options = Object.keys(currenctInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }


  const convert = () =>{
  setconvertedAmount(amount * currenctInfo[to])

  }
  return (
    <>
    
<div className=" h-screen flex items-center justify-center bg-cover bg-no-repeat " style={{
  background: `url('https://images.pexels.com/photos/29067690/pexels-photo-29067690.jpeg')`
}}>
  <div className="w-full  flex items-center justify-center">

<div className="  rounded-md flex items-center justify-center p-3  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
    
<form onSubmit={(e) => {
  e.preventDefault();
  convert()
}

}>

  <div className="w-full mb-1">
    <InputBox
    label = "From"
    amount={amount}
    currencyOption={options}
    onCurrencyChange={(currency)=> setAmount(amount)}
    selectedCurrency={from}
    onAmountChange={(amount) => setAmount(amount)}
    />
  </div>

  <div className="relative w-full h-0 5">
    <button 
    type='button'
    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4  py-0.5 '
    onClick={swap}>
      swap
    </button>
  </div>

  <div className="w-full mt-1 mb-4">
    <div className="w-full mb-1">
    <InputBox
    label = "To"
    amount={convertedAmount}
    currencyOption={options}
    onCurrencyChange={(currency)=> setTo(currency)}
    selectedCurrency={to}
    amountDisable
    />
  </div>

  </div>

  <button type='submit' className='w-full bg-blue-800 px-4 py-3 rounded-lg'>
    Convert {from.toUpperCase()} to {to.toLowerCase()}

  </button>
</form>
</div>
</div>
</div>


    </>
  )
}

export default App
