export default function LoginPage() {
    return (<div>
        <h2>Login</h2>;
        <button onClick={() => { global.isLoggedIn = !global.isLoggedIn; }}>
            Go to Dashboard
        </button>
    </div>);
}