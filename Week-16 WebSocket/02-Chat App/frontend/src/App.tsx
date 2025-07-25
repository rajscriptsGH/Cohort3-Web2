
import './App.css'

function App() {

  return (
    <div className='h-screen bg-black flex justify-center flex-col p-2'>
      <h1 className='fixed top-0 left-48 bg-orange-500 h-10 rounded-lg text-white px-5 py-2 text-center font-semibold'>Chat App</h1>

      <div className='h-[80vh] bg-slate-700 rounded-xl p-5 mb-2'>

      </div>
      <div className='flex justify-center gap-3'>
        <input className='w-full bg-purple-800 text-white px-3 py-2 rounded-lg' type="text" placeholder='Write message' />
        <button className='bg-blue-500 text-white px-7 py-2 rounded-lg'>Send</button>
      </div>
    </div>
  )
}

export default App
