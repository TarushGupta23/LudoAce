export function LogoutButton() {
    const handleLogout = () => {
        Cookies.remove('auth_token'); // Remove token cookie
        console.log('Logged out successfully');
    };

    return <button onClick={handleLogout}>Logout</button>;
}