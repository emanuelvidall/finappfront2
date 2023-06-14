import React, { useState } from "react";
import Cadastro from './ModalReg';

export default function Home() {

  const [modal, setModal] = useState(false);

  function handleCreateModal() {
    setModal(!modal);
  }

  return (
    <>
    <div className="mainCointainer w-screen h-screen flex flex-col items-center justify-center flex flex-column">
    {modal && <Cadastro modal={modal} handleCreateModal={handleCreateModal}/>}
      <div className="loginContainer w-2/6 h-4/6 bg-white flex flex-col items-center justify-center z-1">
        <div className="logo text-center flex items-center flex-col">
          <img
            src="/images/newlogo.png"
            width={100}
            height={100}
            alt="Logo"
          />
          <h1 className="font-bold text-2xl mt-4">FinApp.com</h1>
          <p className="text-xs">Solucoes financeiras</p>
        </div>
        <div className="inputsContainer mt-5">
          <div className="emailInput flex flex-col items-center">
            <h1 className="text-sm self-start ml-6">Email</h1>
            <input className="w-[80%] border border-slate-200 rounded-sm focus:outline-none focus:border-orange-500"></input>
          </div>
          <div className="passwordInput flex flex-col items-center mt-2">
            <h1 className="text-sm self-start ml-6">Password</h1>
            <input className="w-[80%] border border-slate-200 rounded-sm focus:outline-none focus:border-orange-500"></input>
          </div>
          <div className="forgotContainer flex items-center flex-col mt-4">
            <h1 className="text-xs text-orange-400 underline line-through	">
              Esqueceu sua senha?
            </h1>
            <h1 className="text-xs mt-4">
              Ainda nao possui conta?{" "}
                <span onClick={()=>handleCreateModal()} className="text-xs text-orange-400 underline cursor-pointer">
                  Cadastre-se agora
                </span>
            </h1>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <div className="footerDivider fixed bottom-0 left-0 right-0 border border-slate-200 h-16 items-center flex justify-evenly">
            <div className="texto1 flex">
              <h1 className="text-sm text-orange-400 mr-2">Professor</h1>
              <h1 className="text-sm text-orange-400 mr-2">Alunos</h1>
              <h1 className="text-sm text-orange-400 mr-2">Github</h1>
            </div>
            <div className="texto2 flex">
              <img
                className=""
                src="/images/unifor.png"
                width={20}
                height={20}
                alt="logo"
              />
              <h1 className="text-sm mr-2 ml-2 mt-1">UNIFOR 2023</h1>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
