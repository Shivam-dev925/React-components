import { toast, ToastOptions } from 'react-toastify';

// Define the ToastHelper class
class ToastHelper {
  // Show a toast with a given message and type
  static showToast(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info', options: ToastOptions = {}) {
    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'info':
        toast.info(message, options);
        break;
      case 'warning':
        toast.warn(message, options);
        break;
      default:
        toast(message, options);
        break;
    }
  }

  // Convenience method for success toast
  static showSuccess(message: string, options: ToastOptions = {}) {
    this.showToast(message, 'success', options);
  }

  // Convenience method for error toast
  static showError(message: string, options: ToastOptions = {}) {
    this.showToast(message, 'error', options);
  }

  // Convenience method for info toast
  static showInfo(message: string, options: ToastOptions = {}) {
    this.showToast(message, 'info', options);
  }

  // Convenience method for warning toast
  static showWarning(message: string, options: ToastOptions = {}) {
    this.showToast(message, 'warning', options);
  }
}

export default ToastHelper;
