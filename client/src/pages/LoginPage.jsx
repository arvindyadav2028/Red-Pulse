import LoginCard from '../components/LoginCard'
import loginImg from '../assets/loginImg.png'
export default function Login(){
    return(
        <>
            <div 
                className="h-screen bg-cover bg-center flex justify-center items-center"
                style={{
                    backgroundImage:
                    `url(${loginImg})`,
                }}
            >
                <LoginCard/>
            </div>
        </>
    );
}