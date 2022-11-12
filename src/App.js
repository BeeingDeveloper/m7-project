import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleName = (e)=>{
      setName(e.target.value);
    }
    const handleEmail = (e)=>{
      setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
      setPassword(e.target.value);
    }
    const handleConfirmPassword = (e)=>{
      setConfirmPassword(e.target.value);
    }

    const onSubmit = (e)=>{
      e.preventDefault();
          if(name.length<3 || 
                              name.includes("1") || 
                              name.includes("2") ||
                              name.includes("3") ||
                              name.includes("4") ||
                              name.includes("5") ||
                              name.includes("6") ||
                              name.includes("7") ||
                              name.includes("8") ||
                              name.includes("9") ||
                              name.includes("0") ||
                              name.includes("!") ||
                              name.includes("@") ||
                              name.includes("#") ||
                              name.includes("$") ||
                              name.includes("%") ||
                              name.includes("^") ||
                              name.includes("&") ||
                              name.includes("*") ||
                              name.includes("(") ||
                              name.includes(")") ||
                              name.includes("-") ||
                              name.includes("+") ||
                              name.includes("_") ||
                              name.includes("=")) 
                              {
                              setIsValid(false);
        }
        else if(email.length<10 || !email.includes("@") || !email.includes(".") ){
          setIsValid(false);
        }
        else if(password.length <6){
          setIsValid(false);
        }
        else if(confirmPassword !== password){
          setIsValid(false);
        }
        else{
          setIsValid(true);
        }

      

    }



  return (
  
    <div className="App text-white">
      <Navbar />
      <div className=' h-screen w-full bg-slate-800'>
        <div className='text-left m-auto w-[45%] h-fit relative top-10  rounded-lg' >
        <form>
            <h1 className=' text-2xl'>Signup</h1>
            <div className='pt-5'>
              <input  className='h-8 mb-3 w-full outline-none bg-transparent border-b-2' 
                      placeholder='Full Name' 
                      value={name}
                      onChange={handleName} />

              <input  className='h-8 mb-3 w-full outline-none bg-transparent border-b-2' 
                      placeholder='Email'
                      value={email} 
                      onChange={handleEmail}/>

              <input className='h-8 mb-3 w-full outline-none bg-transparent border-b-2' 
                      placeholder='Password'
                      value={password}
                      onChange={handlePassword}/>

              <input className='h-8 mb-3 w-full outline-none bg-transparent border-b-2' 
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={handleConfirmPassword} />
                      {isValid ? (<h2 className=' text-green-500' >Successfully Signed Up</h2>) : (<h2 className='text-red-500'>Error: All the feilds are manadatory</h2>)}
              
              <button className='h-fit w-fit bg-white text-black p-1 relative top-10'
              onClick={onSubmit}
              >Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default App;
