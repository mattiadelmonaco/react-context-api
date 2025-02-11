import { Link } from "react-router-dom";
import { useAlertContext } from "../context/AlertContext";
import { useEffect } from "react";

export default function Contacts() {
  const { setAlertData } = useAlertContext();

  useEffect(() => {
    setAlertData({
      type: "info",
      message: "Per raggiungerci verrai reindirizzato sul tuo navigatore",
    });
  }, [setAlertData]);

  // const getPosition = () => {
  //   useAlertContext({
  //     type: "info",
  //     message: "Per raggiungerci verrai reindirizzato sul tuo navigatore",
  //   });
  // };

  return (
    <div className="ms-container">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold my-5">I NOSTRI CONTATTI</h1>
        <ul>
          <li className="mb-4">
            <h2 className="text-2xl font-bold">📍Indirizzo:</h2>
            <p className="text-lg cursor-pointer">
              Via da Qui, 123 67039 Sulmona(AQ), Italia
            </p>
          </li>
          <li className="mb-4">
            <h2 className="text-2xl font-bold">📧 Email:</h2>
            <p className="text-lg cursor-pointer">contatti@emailinventata.it</p>
          </li>
          <li className="mb-4">
            <h2 className="text-2xl font-bold">📞 Telefono:</h2>
            <p className="text-lg cursor-pointer">+39 0864 1234 5678</p>
          </li>
          <li className="mb-4">
            <h2 className="text-2xl font-bold">🌐 Sito Web:</h2>
            <a className="text-lg text-red-800 font-semibold" href="#">
              www.sitoacaso.it
            </a>
          </li>
          <li>
            <ul>
              <h2 className="text-2xl font-bold">📱 Social Media:</h2>
              <li className="my-1">
                <strong>🔸 Facebook: </strong>
                <a className="text-lg text-red-800 font-semibold" href="#">
                  facebook.com/paginasocial
                </a>
              </li>
              <li className="my-1">
                <strong>🔸 Instagram: </strong>
                <a className="text-lg text-red-800 font-semibold" href="#">
                  {" "}
                  instagram.com/paginasocial
                </a>
              </li>
              <li className="my-1">
                <strong>🔸 YouTube: </strong>
                <a className="text-lg text-red-800 font-semibold" href="#">
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
