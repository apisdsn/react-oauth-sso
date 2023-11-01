import { useNavigate } from "react-router-dom";

const Login = ({ auth, handleLogin }) => {
  const navigate = useNavigate();

  return (
    <div>
      {auth === null && <div>Loading...</div>}
      {auth === false && (
        <div>
          <h1>Welcome!</h1>
          <button
            onClick={() => {
              // Melakukan permintaan otorisasi, termasuk kode tantangan
              handleLogin();
            }}
          >
            Please log in.
          </button>
        </div>
      )}
      {auth && navigate("/home")}
    </div>
  );
};

export default Login;
