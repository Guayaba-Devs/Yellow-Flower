import { useState } from "react"
import { Link } from "react-router-dom"


export const Message = () => {

    const [message, setMessage] = useState('')

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const generateLink = (e) => {
        e.preventDefault();
        console.log('generating link', message)
    }

    return (
        <div>
            <h1 className='text-3xl font-bold mb-6  '>Envia una flor amarilla!
                <span role='img' aria-label='flower'>🌻</span>
            </h1>

            <p className='text-xl mb-3'>Escribe un mensaje y envíalo a tu persona favorita!</p>

            <form action="" className="w-full flex items-center justify-center flex-col">

                <textarea className='border-2 border-yellow-300 rounded-lg p-2 w-full h-24 mt-2 max-w-lg mb-3' onChange={handleMessageChange} placeholder="Ingresa tu mensaje para esa persona :D"/>

                <button className='bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg px-4 py-2 mt-2 w-32' onClick={generateLink}>Generar Link</button>

            </form>


        </div>
    )
}