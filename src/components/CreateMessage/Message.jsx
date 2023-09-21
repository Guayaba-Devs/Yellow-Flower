import { useState } from "react"


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
            <h1 className='text-3xl'>Envia una flor amarilla!
                <span role='img' aria-label='flower'>🌻</span>
            </h1>

            <p className='text-xl'>Escribe un mensaje y envíalo a tu persona favorita!</p>

            <form action="" >

                <textarea className='border-2 border-yellow-300 rounded-lg p-2 w-full h-24 mt-2' onChange={handleMessageChange}/>

                <button className='bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg px-4 py-2 mt-2' onClick={generateLink}>Generar Link</button>

            </form>


            <p>

                <a href="">
            </p>


        </div>
    )
}