import Card from './Components/Card';


function App() {


  return (
    <>
      <div className='bg-green-400 text-3xl font-bold p-7 rounded m-4 text-center'>
        <h1 className="text-3xl font-bold underline ">
          Hello world !!!!
        </h1>
      </div>

      <Card Title="Card" btnText='visit'/>
      <Card Title="Utsav" />
    </>
  )
}


export default App;
