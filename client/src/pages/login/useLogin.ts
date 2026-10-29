import { useQuery, useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/login.service";

export const useLoginUser = () => useMutation({
    mutationFn: loginUser
});