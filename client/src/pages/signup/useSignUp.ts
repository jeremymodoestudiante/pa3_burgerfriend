import { useQuery, useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/signup.service";

export const useRegisterUser = () => useMutation({
    mutationFn: registerUser
})