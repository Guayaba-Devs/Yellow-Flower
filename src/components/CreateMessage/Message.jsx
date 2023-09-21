import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Message = () => {
  const url = window.location.origin;
  const { pathname } = useLocation();

  const [message, setMessage] = useState("");
  const [messageUrl, setMessageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleMessageChange = async (e) => {
    await setMessage(e.target.value);
  };

  const generateLink = (e) => {
    e.preventDefault();
    const generatedUrl = `${url}/message/${btoa(message)}`;
    console.log(generatedUrl);
    setMessageUrl(generatedUrl);
  };

  const copyToClipboard = (e) => {
    e.preventDefault()
    const textArea = document.createElement("textarea");
    textArea.value = messageUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Envía una flor amarilla!
        <span role="img" aria-label="flower">
          🌻
        </span>
      </h1>

      <p className="text-xl mb-3">
        Escribe un mensaje y envíalo a tu persona favorita!
      </p>

      <form action="" className="w-full flex items-center justify-center flex-col">
        <textarea
          className="border-2 border-yellow-300 rounded-lg p-2 w-full h-24 mt-2 max-w-lg mb-3"
          onChange={handleMessageChange}
          placeholder="Ingresa tu mensaje para esa persona :D"
        />
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg px-4 py-2 mt-2 w-32"
          onClick={generateLink}
        >
          Generar Link
        </button>
        {messageUrl && (
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 mt-2 w-32"
            onClick={copyToClipboard}
          >
            {copied ? "Copiado" : "Copiar el link"}
          </button>
        )}
      </form>

      <div className="mt-5">
        {messageUrl && (
          <p className="bg-slate-600 max-w-lg mx-auto rounded-sm p-4 overflow-hidden">
            URL generada:{" "}
            <a
              className="bg-stone-400 overflow-x-scroll"
              href={messageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {messageUrl}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

