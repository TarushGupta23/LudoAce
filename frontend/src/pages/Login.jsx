import { LoginButton } from "../components/authentication/LoginButton";
import Cookies from 'js-cookie';

export function Login() {
    const authToken = Cookies.get('auth_token');
    console.log(authToken);
    if (!authToken) {
        return <div>Please log in to access the dashboard.</div>;
    }
    return (
        <div>
            <LoginButton />
        </div>
    )
}