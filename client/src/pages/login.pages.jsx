import Logo from "../assets/Logo-Club.png";
import StyledButton from "../components/StyledButton"
import StyledInput from "../components/StyledInput"


function Login() {
    return (
        <div className="hero bg-green-700 min-h-screen">
            <div className="hero-content text-center flex flex-col">
                <img src={Logo} alt="" className="w-44 block drop-shadow-xl" />
                <form className="max-w-md" type="submit">
                    <StyledInput placeholder={"Ingrese su DNI"} BRLabel={"Sin puntos"} textColor={"text-white"}/>
                    <StyledInput placeholder={"Ingrese su contraseña"} BRLabel={"Olvide mi Contraseña"} type="password" textColor={"text-white"}/>
                    <StyledButton accept innerText={"Ingresar"} btnType={"submit"} />
                </form>
            </div>
        </div>
    );
}

export default Login;