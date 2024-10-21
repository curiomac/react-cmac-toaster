import React, { ReactNode, useCallback, useState } from "react";
import { Toast, ToastContext, ToastOptions } from "../hooks/useToast";
import { Toaster } from "./Toaster";

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = (props: ToastProviderProps) => {
  const { children } = props;
  const [toasts, setToasts] = useState<Toast[]>([]);

  const open = useCallback(
    (
      message: string | (() => ReactNode),
      {
        toastWidth = "330px",
        toastMsgWidth = "298px",
        backgroundColor = "#ffffff",
        color = "#000000",
        timeoutSeconds = 3000,
      }: ToastOptions = {}
    ) => {
      const newToast: Toast = {
        id: toasts.length + 1,
        message,
        toastWidth,
        toastMsgWidth,
        backgroundColor,
        timeoutSeconds,
        color,
      };

      setToasts((prevToasts) => [newToast, ...prevToasts]);
      return { id: newToast.id, message };
    },
    [toasts]
  );

  // Function to close a toast by its ID
  const close = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ open, close, toasts }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};
