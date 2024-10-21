import React, { createContext, ReactNode, useContext } from "react";

export interface Toast {
  id: number;
  message: string | (() => ReactNode);
  toastWidth?: string;
  toastMsgWidth?: string;
  backgroundColor?: string;
  timeoutSeconds?: number;
  color?: string;
}

export interface ToastOptions {
  toastWidth?: string;
  toastMsgWidth?: string;
  backgroundColor?: string;
  timeoutSeconds?: number;
  color?: string;
}

export interface ToastContextType {
  open: (
    message: string | (() => ReactNode),
    options?: ToastOptions
  ) => { id: number; message: string | (() => ReactNode) };
  close: (id: number) => void;
  toasts: Toast[];
}

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
