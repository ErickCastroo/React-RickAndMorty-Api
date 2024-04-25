import ListaDePersonajes from './ListaDePersonajes'
function App() {


return (
  <div className='bg-slate-800 min-h-screen flex items-center justify-center'>
    <div className='bg-slate-800 text-white text-2xl p-4'>
    <h1 className='text-center text-6xl'>Rick and Morty API</h1>
      <ListaDePersonajes/>
    </div>
  </div>
);
}
export default App
