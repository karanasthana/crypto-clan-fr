export default function SignupPage() {
    return (
        <div className="bg-purple-400" style={{ padding: '200px', paddingTop: '100px', minHeight: '100vh' }}>
            <div className="grid grid-cols-2 divide-x divide-green-500 " style={{ backgroundColor: 'black', borderRadius: '10%'}}>
                <div style={{ backgroundColor: 'pink' }}>
                    <div>
                        CRYPTO CLAN
                    </div>
                    <div style={{ padding: '20px' }}>
                        <h2>Crypto Trading just became a team effort</h2>
                    </div>
                    <div style={{ padding: '50px' }}>
                        <img src={'https://img.freepik.com/free-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?size=626&ext=jpg'} />
                    </div>
                </div>
                <div style={{ backgroundColor: 'yellow' }}>
                    
                    <h2>Login</h2>
                    <button onClick={() => { props.history.replace('/home'); }}>
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>);
}