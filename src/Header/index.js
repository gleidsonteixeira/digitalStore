import Busca from "./Busca"
import logo from "./Vector.png"

export default function Header(){
    let headerCSS = {
        padding: "34px 104px",
        display: "flex"
    }

    let logoCSS = {
        width: "400px",
        fontSize: "36px",
        fontWeight: "600",
        lineHeight: "44px",
        color: "#C92071",
        display: "flex",
        alignItems: "center"
    }

    let logoImgCSS = {
        marginRight: "8px"
    }

    let btnFillCSS = {
        minWidth: "115px", 
        lineHeight: "40px",
        borderRadius: "8px",
        backgroundColor: "#C92071",
        color: "#FFFFFF",
        display: "block",
        textAlign: "center",
        textDecoration: "none"
    } 


    return(
        <>
            <header style={headerCSS}>
                <div style={logoCSS}>
                    <img style={logoImgCSS} src={logo} alt="Logo" /> Digital Store
                </div>
                <Busca />
                <a href="">Cadastre-se</a>
                <a style={btnFillCSS} href="">Entrar</a>
            </header>
        </>
    );
}