import { Button, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [kilo,setKilo]= useState()
  const [mileage,setMileage]= useState()
  const [price,setPrice]=useState()
  const [fuel,setFuel] = useState(0)
  const [totalPrice,setFuelPrice]= useState(0)

  const [validateKilo,setValidateKilo] = useState(true)
  const [validateMileage,setValidateMileage] = useState(true)
  const [validatePrice,setValidatePrice] = useState(true)


  const validateData=(e)=>{
    const {name,value}= e.target
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=='kilometer'){
        setKilo(value)
        setValidateKilo(true)
      }else if(name==='mileage'){
        setMileage(value)
        setValidateMileage(true)
      }else if(name==='price'){
        setPrice(value)
        setValidatePrice(true)
      }
    }else{
      if(name=='kilometer'){
        setKilo(value)
        setValidateKilo(false)
      }else if(name==='mileage'){
        setMileage(value)
        setValidateMileage(false)
      }else if(name==='price'){
        setPrice(value)
        setValidatePrice(false)
      }
    }
  }
  const Calculate=(e)=>{
    e.preventDefault()
    if(!kilo || !mileage || !price){
      alert("Please fill the form completely")
    }else{
          const fuelt=kilo/mileage
          const lol=fuelt.toString()
          if(!!lol.match(/^[0-9]+$/)){
              setFuel(fuelt)
              setFuelPrice((fuelt*price))
          }else{
            const fuels= Math.floor(fuelt)+1
            setFuel(fuels)
            setFuelPrice((fuels*price))
          }
          
    }
  }
  const handleReset=(e)=>{
    e.preventDefault()
    setKilo("")
    setMileage("")
    setPrice("")
    setValidateKilo(true)
    setValidateMileage(true)
    setValidatePrice(truegit)
  }

  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center pt-5 bg-primary w-100">
    <div className=' w-25 bg-light text-center rounded pb-5'>
      <h1 className='mb-3 mt-5'>Fuel Calculator</h1>
      <div className='bg-primary m-3 pt-3 pb-3 rounded'>
        <h2>{fuel} litre</h2>
        <p>Approximate Price: {totalPrice}</p>
      </div>
      <form onSubmit={Calculate}>
        <TextField className='w-75 mb-5' id="standard-error-helper-text" placeholder='Enter Kilometer' helperText={validateKilo || kilo=='' || "Incorrect Entry"} error={!validateKilo && kilo!=''} variant="standard" name='kilometer' value={kilo || ""} onChange={(e)=>validateData(e)}/>
        <TextField className='w-75 mb-5' id="standard-error-helper-text" placeholder='Enter Average Mileage' helperText={validateMileage || mileage=='' || "Incorrect Entry"} error={!validateMileage && mileage!=''} variant="standard" value={mileage || ""} name='mileage' onChange={(e)=>validateData(e)}/>
        <TextField className='w-75 mb-5' id="standard-error-helper-text" placeholder='Enter Fuel Price per litre' helperText={validatePrice || price=='' || "Incorrect Entry"} error={!validatePrice && price!=''} variant="standard" value={price || ""} name='price' onChange={(e)=>validateData(e)}/><br />
        <Button disabled={validateKilo===false || validateMileage===false || validatePrice===false} type='submit' className='me-2' variant="contained">CALCULATE</Button>
        <Button onClick={handleReset} variant="outlined">RESET</Button>
      </form>
    </div>    
</div>
  );
}

export default App;
