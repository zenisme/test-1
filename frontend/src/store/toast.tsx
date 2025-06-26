'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Toast types
export type ToastType = 'success' | 'error' | 'warning' | 'info';

// Toast interface
export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  title?: string;
  duration?: number;
  isVisible: boolean;
}

// Toast state interface
interface ToastState {
  toasts: Toast[];
}

// Toast action types
type ToastAction =
  | { type: 'ADD_TOAST'; payload: Omit<Toast, 'id' | 'isVisible'> }
  | { type: 'REMOVE_TOAST'; payload: string }
  | { type: 'HIDE_TOAST'; payload: string }
  | { type: 'CLEAR_ALL_TOASTS' };

// Toast context interface
interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id' | 'isVisible'>) => void;
  removeToast: (id: string) => void;
  hideToast: (id: string) => void;
  clearAllToasts: () => void;
  showSuccess: (message: string, title?: string, duration?: number) => void;
  showError: (message: string, title?: string, duration?: number) => void;
  showWarning: (message: string, title?: string, duration?: number) => void;
  showInfo: (message: string, title?: string, duration?: number) => void;
}

// Create context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Initial state
const initialState: ToastState = {
  toasts: [],
};

// Toast reducer
function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case 'ADD_TOAST':
      const newToast: Toast = {
        ...action.payload,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        isVisible: true,
      };
      return {
        ...state,
        toasts: [...state.toasts, newToast],
      };

    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };

    case 'HIDE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.payload ? { ...toast, isVisible: false } : toast
        ),
      };

    case 'CLEAR_ALL_TOASTS':
      return {
        ...state,
        toasts: [],
      };

    default:
      return state;
  }
}

// Toast provider props
interface ToastProviderProps {
  children: ReactNode;
}

// Toast provider component
export function ToastProvider({ children }: ToastProviderProps) {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const addToast = (toast: Omit<Toast, 'id' | 'isVisible'>) => {
    dispatch({ type: 'ADD_TOAST', payload: toast });
  };

  const removeToast = (id: string) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  };

  const hideToast = (id: string) => {
    dispatch({ type: 'HIDE_TOAST', payload: id });
  };

  const clearAllToasts = () => {
    dispatch({ type: 'CLEAR_ALL_TOASTS' });
  };

  const showSuccess = (message: string, title?: string, duration = 1000) => {
    addToast({ type: 'success', message, title, duration });
  };

  const showError = (message: string, title?: string, duration = 1000) => {
    addToast({ type: 'error', message, title, duration });
  };

  const showWarning = (message: string, title?: string, duration = 1000) => {
    addToast({ type: 'warning', message, title, duration });
  };

  const showInfo = (message: string, title?: string, duration = 1000) => {
    addToast({ type: 'info', message, title, duration });
  };

  const value: ToastContextType = {
    toasts: state.toasts,
    addToast,
    removeToast,
    hideToast,
    clearAllToasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

// Custom hook to use toast context
export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

