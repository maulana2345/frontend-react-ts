// Import Js Cookie
import Cookies from 'js-cookie';

// Interface User
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const useAuthUser = (): User | null => {
    // Mengambil data User dari cookie
    const user = Cookies.get("user"); 
    // Jika ada data User, pake JSON dan kembalikan
    // Jika tidak ada, kembalikan null
    return user ? JSON.parse(user) : null;
}