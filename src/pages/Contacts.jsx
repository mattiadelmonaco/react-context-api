import { Link } from "react-router-dom";
import { useAlertContext } from "../context/AlertContext";
import { useEffect } from "react";

export default function Contacts() {
  const { setAlertData } = useAlertContext();

  const getPosition = () => {
    setAlertData({
      type: "info",
      message: "Per raggiungerci verrai reindirizzato sul tuo navigatore",
    });
    setTimeout(() => setAlertData({ type: "", message: "" }), 3000);
  };

  const sendEmail = () => {
    setAlertData({
      type: "success",
      message: "Sarai reindirizzato nella tua mail per scriverci",
    });
    setTimeout(() => setAlertData({ type: "", message: "" }), 3000);
  };

  const callUs = () => {
    setAlertData({
      type: "success",
      message: "Stai per chiamarci",
    });
    setTimeout(() => setAlertData({ type: "", message: "" }), 3000);
  };

  const visitWebSite = () => {
    setAlertData({
      type: "info",
      message: "Sarai reindirizzato al nostro sito web",
    });
    setTimeout(() => setAlertData({ type: "", message: "" }), 3000);
  };

  const socials = {
    facebook: "Facebook",
    instagram: "Instagram",
    youtube: "YouTube",
  };

  const visitSocial = (socialName) => {
    setAlertData({
      type: "danger",
      message: `Stai per essere reindirizzato su ${socialName}`,
    });
    setTimeout(() => setAlertData({ type: "", message: "" }), 3000);
  };

  useEffect(() => {
    setAlertData({
      type: "",
      message: "",
    });
  }, [setAlertData]);

  return (
    <div className="ms-container">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold my-5">I NOSTRI CONTATTI</h1>
        <ul>
          <li className="mb-4">
            <h2 className="text-2xl font-bold">📍Indirizzo:</h2>
            <a
              href="#"
              onClick={getPosition}
              className="text-lg text-red-800 font-semibold"
            >
              Via da Qui, 123 67039 Sulmona(AQ), Italia
            </a>
          </li>
          <li className="mb-4">
            <h2 className="text-2xl font-bold">📧 Email:</h2>
            <a
              onClick={sendEmail}
              href="#"
              className="text-lg text-red-800 font-semibold"
            >
              contatti@emailinventata.it
            </a>
          </li>
          <li className="mb-4">
            <h2 className="text-2xl font-bold">📞 Telefono:</h2>
            <a
              onClick={callUs}
              href="#"
              className="text-lg text-red-800 font-semibold"
            >
              +39 0864 1234 5678
            </a>
          </li>
          <li className="mb-4">
            <h2 className="text-2xl font-bold">🌐 Sito Web:</h2>
            <a
              onClick={visitWebSite}
              className="text-lg text-red-800 font-semibold"
              href="#"
            >
              www.sitoacaso.it
            </a>
          </li>
          <li>
            <ul>
              <h2 className="text-2xl font-bold">📱 Social Media:</h2>
              <li className="my-1">
                <strong>🔸 Facebook: </strong>
                <a
                  onClick={() => visitSocial(socials.facebook)}
                  className="text-lg text-red-800 font-semibold"
                  href="#"
                >
                  facebook.com/paginasocial
                </a>
              </li>
              <li className="my-1">
                <strong>🔸 Instagram: </strong>
                <a
                  onClick={() => visitSocial(socials.instagram)}
                  className="text-lg text-red-800 font-semibold"
                  href="#"
                >
                  {" "}
                  instagram.com/paginasocial
                </a>
              </li>
              <li className="my-1">
                <strong>🔸 Youtube:</strong>
                <a
                  onClick={() => visitSocial(socials.youtube)}
                  className="text-lg text-red-800 font-semibold"
                  href="#"
                >
                  {" "}
                  youtube.com/paginasocial
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <Link to="/" className="under-costruction__btn">
          Torna alla Homepage
        </Link>
      </div>
    </div>
  );
}
