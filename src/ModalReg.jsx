export default function Cadastro({modal, handleCreateModal}) {
    return (
        <>
        <div className="backdrop-blur-sm h-full w-full flex flex-col z-100 absolute items-center justify-center">
            <div className="bg-white h-[fit] pb-2 w-1/3 flex flex-col items-center justify-center gap-4 border border-slate-500 rounded-sm">
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
                <h1>Crie sua Conta</h1>
                <div>
                <h4>Email</h4>
                <input className="border border-orange-500 rounded-sm placeholder:text-xs" placeholder="seuemail@gmail.com"></input>
                </div>
                <div>
                <h4>Senha</h4>
                <input className="border border-orange-500 rounded-sm placeholder:text-xs" placeholder="sua senha segura"></input>
                </div>
                <button className="bg-orange-500 text-white w-[100px] p-1 font-bold rounded-sm">Criar</button>
            </div>
        </div>
        </>
    ) 
  }
  