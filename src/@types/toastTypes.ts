import { ReactNode } from "react";

export type ToastStatus = "success" | "error" | "warning" | "notify" | "default";

export interface Toast {
    id: number;
    message: string | (() => ReactNode);
    toastWidth?: string;
    toastMsgWidth?: string;
    backgroundColor?: string;
    timeoutSeconds?: number;
    color?: string;
    toastStatus?: ToastStatus;
    showCloseBtn? : Boolean;
}

export interface ToastOptions {
    toastWidth?: string;
    toastMsgWidth?: string;
    backgroundColor?: string;
    timeoutSeconds?: number;
    color?: string;
    toastStatus?: ToastStatus;
    showCloseBtn? : Boolean;
}

export interface ToastContextType {
    open: (
        message: string | (() => ReactNode),
        options?: ToastOptions
    ) => { id: number; message: string | (() => ReactNode) };
    close: (id: number) => void;
    toasts: Toast[];
}

export interface AnimationComponentProps {
    toastStatus?: ToastStatus;
}