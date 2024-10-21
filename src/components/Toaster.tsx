import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useToast } from "../hooks/useToast";
import "../css/styles.css";

export const Toaster = () => {
  const { toasts, close } = useToast();

  useEffect(() => {
    if (toasts.length > 0) {
      const interval = setInterval(() => {
        close(toasts[0].id);
      }, toasts[0]?.timeoutSeconds);

      return () => clearInterval(interval);
    }
  }, [toasts, close]);

  return (
    <div className="toast_container">
      {toasts.length > 0 &&
        toasts.map((toast) => (
          <div
            key={toast.id}
            className="toast"
            style={{
              width: toast.toastWidth,
              backgroundColor: toast.backgroundColor,
              color: toast.color,
            }}
          >
            <div
              className="message"
              style={{
                width: toast.toastMsgWidth,
              }}
            >
              {typeof toast.message === "function"
                ? toast.message()
                : toast.message}
            </div>
            <button
              onClick={() => close(toast.id)}
              style={{
                color: toast.color,
              }}
            >
              <IoClose />
            </button>
          </div>
        ))}
    </div>
  );
};
