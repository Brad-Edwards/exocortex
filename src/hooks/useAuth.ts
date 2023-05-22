import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch} from "../store/store";
import { login, logout } from "../store/slices/authSlice";

export const useAuth = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch<AppDispatch>();

    const loginUser = (username: string, password: string) => {
        dispatch(login({ id: '1', name: username, avatar: 'https://picsum.photos/200' })) // TODO: Implement login hook
    }

    const logoutUser = () => {
        dispatch(logout());
    }

    return { user, login: loginUser, logout: logoutUser };
};

export default useAuth;