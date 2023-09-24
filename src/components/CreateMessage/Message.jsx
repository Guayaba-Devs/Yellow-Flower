import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const Message = () => {
  const url = window.location.origin;
  const { t } = useTranslation();

  const [message, setMessage] = useState("");
  const [messageUrl, setMessageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleMessageChange = async (e) => {
    await setMessage(e.target.value);
  };

  const generateLink = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      toast.error(t("message.form.input.error"), {
        style: {
          background: "#242424",
          color: "#fff",
        },
      });
      return;
    }
    const generatedUrl = `${url}/message/${btoa(message)}`;
    console.log(generatedUrl);
    setMessageUrl(generatedUrl);
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
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
      <div>
        <Toaster />
      </div>
      <h1 className="text-3xl font-bold mb-6">
        {t("message.title")}
        <span role="img" aria-label="flower">
          🌻
        </span>
      </h1>

      <p className="text-xl mb-3">{t("message.description")}</p>

      <form
        action=""
        className="w-full flex items-center justify-center flex-col"
      >
        <textarea
          className="border-2 border-yellow-300 rounded-lg p-2 w-full h-24 mt-2 max-w-lg mb-3"
          onChange={handleMessageChange}
          placeholder={t("message.form.input.placeholder")}
        />
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg px-4 py-2 mt-2"
          onClick={generateLink}
        >
          {t("message.form.submit")}
        </button>
        {messageUrl && (
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 mt-2 w-32"
            onClick={copyToClipboard}
          >
            {copied ? t("message.copied") : t("message.copyLink")}
          </button>
        )}
      </form>

      {messageUrl && (
        <div className="flex flex-col gap-2 items-center mt-5 bg-slate-600 max-w-lg mx-auto rounded-sm p-4">
          <span>{t("message.generatedUrl")}:</span>
          <a
            className="bg-stone-400 break-all fit-content"
            href={messageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {messageUrl}
          </a>
        </div>
      )}
    </div>
  );
};
