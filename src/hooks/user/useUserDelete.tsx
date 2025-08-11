// import mutation dari '@tanstack/react-query'
import { useMutation } from "@tanstack/react-query";

// import service API
import Api from "../../services/api";   

// import js-cookie
import Cookies from "js-cookie";

// Hook untuk delete user
export const useUserDelete = () => {
    return useMutation({
        // Mutation untuk delete user
        mutationFn: async (id: number) => {
            // Ambil token dari cookies
            const token = Cookies.get('token');

            // Lakukan request DELETE ke endpoint API
            const response = await Api.delete(`/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        }
    });
};