import { LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center bg-blue-950 text-rose-50 p-2 gap-1 w-screen">
            <h1 className="text-lg font-semibold">Farmacia Generation | 2024</h1>
            <p>Acesse nossas redes</p>
            <div className="flex gap-4">
                <Link to={`https://www.linkedin.com/in/douglas-rosolini-correia-614677239/`}><LinkedinLogo size={40} weight="bold"></LinkedinLogo></Link>
                <Link to={`https://github.com/douglasrc8`}><GithubLogo size={40} weight="bold"></GithubLogo></Link>
                <Link to={`#`}><InstagramLogo size={40} weight="bold"></InstagramLogo></Link>
            </div>
        </div>
    )
}

export default Footer
