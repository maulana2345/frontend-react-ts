// Import hook react
import { useContext } from "react";
// Import js-cookie
import Cookies from "js-cookie";
// Import hook useNavigate dari react-router
import { useNavigate } from "react-router";
// Import context
import { AuthContext } from "../../context/AuthContext";

// Custom hook useLogout
export const useLogout = (): (() => void) => {
    // Ambil setIsAuthenticated dari context
    const authContext = useContext(AuthContext);
    // Gunakan null assertion karena kita yakin AuthContext akan selalu tersedia
    const { setIsAuthenticated } = authContext!;
    // Inisialisasi navigate
    const navigate = useNavigate();
    // Fungsi Logout
    const logout = (): void => {
        // Hapus token dan user dari cookie
        Cookies.remove("token");
        Cookies.remove("user");
        // Ubah status autentikasi menjadi false
        setIsAuthenticated(false);
        // Redirect ke halaman login
        navigate("/login"); 
    };

    return logout;
}