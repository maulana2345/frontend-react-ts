// Import useMutation dari '@tanstack/react-query'
import { useMutation } from "@tanstack/react-query";
// Import service API
import Api from "../../services/api";

// Interface LoginRequest
interface LoginRequest {
    username: string;
    password: string;
}

export const useLogin = () => {
    return useMutation({
        // Mutation untuk login
        mutationFn: async (data: LoginRequest) => {
            // Menggunakan service API untuk Login
            const response = await Api.post('/api/login', data);
            // Mengembalikan response data
            return response.data;
        }
    });
};