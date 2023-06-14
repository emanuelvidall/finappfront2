import React, {useState} from 'react';
import Swal from 'sweetalert2'


export default function Cadastro({modal, handleCreateModal}) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLoginChange = (e) => {
      setLogin(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:3001/users/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ login, password }),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
    
          const data = await response.json();
          console.log(data);
          Swal.fire({
            title: 'Usuario criado com sucesso!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          handleCreateModal()
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <>
        <div className="backdrop-blur-sm h-full w-full flex flex-col z-100 absolute items-center justify-center">
            <div className="bg-white h-[fit] pb-2 w-1/3 flex flex-col items-center justify-center border border-slate-500 rounded-sm">
                <button className="bg-orange-500 rounded-sm ml-auto mt-[10px] mr-[10px]" onClick={handleCreateModal}><img
            src="/images/close.png"
            width={20}
            height={20}
            alt="Logo"
          /></button>
                    <img
            src="/images/registro.png"
            width={50}
            height={50}
            alt="Logo"
          />
          <form onSubmit={handleSubmit}>
                <h1>Crie sua Conta</h1>
                <div>
                <h4>Email</h4>
                <input className="border border-orange-500 rounded-sm placeholder:text-xs" placeholder="seuemail@gmail.com" type="text"
          id="login"
          value={login}
          onChange={handleLoginChange}></input>
                </div>
                <div>
                <h4>Senha</h4>
                <input className="border border-orange-500 rounded-sm placeholder:text-xs" placeholder="sua senha segura" type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}></input>
                </div>
                <button className="bg-orange-500 text-white w-[100px] p-1 font-bold rounded-sm" type="submit">Criar</button>
                </form>
            </div>
        </div>
        </>
    ) 
  }
  