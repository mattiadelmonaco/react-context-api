import { useAlertContext } from "../context/AlertContext";

export default function Alert() {
  const { alertData, setAlertData } = useAlertContext();

  const closeAlert = () => {
    setAlertData({ message: "" });
  };

  const icons = {
    info: "fa-solid fa-circle-info",
    success: "fa-solid fa-circle-check",
    danger: "fa-solid fa-triangle-exclamation",
  };

  const classes = {
    info: "bg-blue-500",
    success: "bg-green-700",
    danger: "bg-red-900",
  };

  if (!alertData.message) return null;

  return (
    <div
      className={`text-white min-w-70 max-w-100 p-3 shadow-2xl fixed bottom-15 right-15 rounded-lg ${
        classes[alertData.type]
      }`}
    >
      <div className="flex justify-between items-center">
        <i className={icons[alertData.type]}></i>
        <p>{alertData.message}</p>
        <i
          onClick={closeAlert}
          className="fa-solid fa-xmark cursor-pointer"
        ></i>
      </div>
    </div>
  );
}
