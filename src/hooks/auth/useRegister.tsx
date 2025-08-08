// Import useMutation dari '@tanstack/react-query'
import { useMutation } from "@tanstack/react-query";
// Import service API
import Api from "../../services/api";

// Interface RegisterRequest
interface RegisterRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}

export const useRegister = () => {
    return useMutation({
        // Mutation untuk register
        mutationFn: async (data: RegisterRequest) => {
            // Menggunakan service API untuk register
            const response = await Api.post('/api/register', data);
            // Mengembalikan response data
            return response.data;
        }
    })
}