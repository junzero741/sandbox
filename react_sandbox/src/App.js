import { githubProvider, googleProvider } from './config/authMethods';
import socialMediaAuth from './service/auth';

function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    await console.log(res);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleOnClick(googleProvider)}>
          구글 로그인
        </button>
        <button onClick={() => handleOnClick(githubProvider)}>
          깃허브 로그인
        </button>
      </header>
    </div>
  );
}

export default App;
