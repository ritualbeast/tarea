import Header from "@/components/Header"
import Link from "next/link"
import Image from 'next/image'

import Imagen from "../public/img/descarga.png"


export default function AuthLayout ({ children }) {
  return (
    <div className=" text-red-400">
      <Header />
      <main>
        <div>
          <Image src={Imagen} width={200} height={200} alt="  " />
          <p className='text-2xl text-center font-light p-3'>Elige y personaliza</p> 
          <Link href="/Login" passHref>
            Iniciar sesión
          </Link>          
        </div>
        { children }
      </main>   
    </div>
  )
}


