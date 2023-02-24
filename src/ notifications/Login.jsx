
import { toast } from 'react-toastify';

export const notify = () =>toast.error('Error al iniciar sesión. Verifique sus credenciales.!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});