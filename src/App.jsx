import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(null);
  const [item, setItem] = useState("");
  let [amount, setAmount] = useState(null);
  
  let itemList = [];
  const [List, setItemList] = useState(itemList);


  function handleAdd(){
    if(item && amount){
      amount = parseFloat(amount);
      let newItem = {
        item:item,
        price:amount
      };
      setItemList([...List, newItem]);
      if(total) setTotal(total+amount)
      else setTotal(amount)
    }
    else{
      alert("Please enter valid Item name and Amount")
    }
    setItem("");
    setAmount('');
  }

  const RemoveItem =()=>{

    const lastItem = List[List.length - 1];


    setTotal(total - parseInt(lastItem.price));
    setItemList(List.slice(0, -1));
  }

  return (
   <div className="container flex justify-center pt-10 bg-gray-400 h-dvh">
    <div className="flex flex-col mb-7  gap-3 bg-slate-500 rounded-md p-7 shadow-2xl shadow-pink-300">
    <h1 className='text-5xl text-transparent
      bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500
      font-serif hover:shadow-md hover:shadow-teal-300 hover:scale-105 duration-200 rounded-lg p-1
      hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 
      cursor-grab hover:contrast-200 brightness-125 hover:saturate-150
      hover:transition-all ease-in-out hover:animate-bounce'
      >
      Expense Tracker
      </h1>
    <label htmlFor="item" className='text-lg'>Item Name</label>

    <input
      type="text"
      id='item'
      placeholder='item'
      value={item}
      onChange={(e)=>setItem(e.target.value)}
      className="p-2 rounded-md"
    />

    <label htmlFor="amount" className='text-lg'>Amount</label>

    <input
      type="number"
      id="amount"
      placeholder='amount'
      value={amount}
      onChange={(e)=> setAmount(e.target.value)}
      className="p-2 rounded-md"
    />

    <div className="flex justify-around pt-2">
      <button onClick={handleAdd} className="bg-blue-400 px-7 py-2 rounded-lg text-white hover:bg-blue-800">Add</button>
      <button onClick={RemoveItem} className="bg-blue-400 px-7 py-2 rounded-lg text-white hover:bg-blue-800">Remove</button>
    </div>
    <div className="flex justify-around">
      <div className="item-list rounded-lg bg-slate-300 flex flex-col p-4 ">
        <h3>Item List:</h3>
        <ul >
              {
              List.map((item, index) => (
                <li key={index}>
                  {item.item}: {item.price}
                </li>
              ))
              }
        </ul>
      </div>
      <div className="total self-center p-2 rounded-lg self-start bg-white">
        <h3>Total:{total}</h3>
      </div>
    </div>
   </div>
   </div>
  )
}

export default App
