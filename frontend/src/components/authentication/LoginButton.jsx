import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';

export function LoginButton() {
    return (
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                const token = credentialResponse.credential;
                if (token) {
                    Cookies.set('auth_token', token, { 
                        expires: 7,
                    });
                    console.log('Login Successful:', token);
                }
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
}