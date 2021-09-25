export default function LoginPage(props) {
    return (<div>
        <h2>Login</h2>
        <button onClick={() => { props.history.replace('/home'); }}>
            Go to Dashboard
        </button>
    </div>);
}