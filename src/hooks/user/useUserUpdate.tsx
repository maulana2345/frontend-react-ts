// import useMutation dari '@tanstack/react-query'
import { useMutation } from "@tanstack/react-query";

// import service API
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

// interface UserRequest untuk update
interface UserRequest {
    name: string;
    username: string;
    email: string;
    password?: string; // password optional, karena bisa jadi tidak diubah
}

// Hook untuk update user
export const useUserUpdate = () => {
    return useMutation({
        // Mutation untuk update user
        mutationFn: async ({ id, data}: { id: number, data: UserRequest}) => {
            // ambil token dari cookies
            const token = Cookies.get('token');

            // gunakan service API untuk melakukan update user
            const response = await Api.put(`/api/users/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // mengembalikan response data
            return response.data;
        }
    });
};