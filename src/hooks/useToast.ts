import { createContext, useContext } from "react";
import { ToastContextType } from "../@types/toastTypes";

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
