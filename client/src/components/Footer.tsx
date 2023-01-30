import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    // let style = "flex justify-center items-center text-slate-400 text-left";
    let style = "flex ml-5 text-slate-400 text-sm text-left";

    return (
        <div className="bg-slate-600 p-5 flex justify-between">
            <div className="text-slate-300 text-sm">
                <p>Created by <a href="https://isaaclee.org/" target="_blank" className="hover:text-cyan-300"><strong>Isaac Lee </strong></a></p>
            </div>

            {/* <div className="border"></div> */}
            <div className="text-slate-400">
                <a href="https://twitter.com/isaacwonhalee" target="_blank"><FontAwesomeIcon className="faIcon fa-xl ml-3 hover:text-slate-200" icon={faTwitter}></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/isaac-lee-621873133/" target="_blank"><FontAwesomeIcon className="faIcon fa-xl ml-3 hover:text-slate-200" icon={faLinkedin}></FontAwesomeIcon></a>
                <a href="https://github.com/isaaclee12" target="_blank"><FontAwesomeIcon className="faIcon fa-xl ml-3 hover:text-slate-200" icon={faGithub}></FontAwesomeIcon></a>
                <a href="mailto:isaac.wonha.lee@outlook.com" target="_blank"><FontAwesomeIcon className="faIcon fa-xl ml-3 hover:text-slate-200" icon={faEnvelope}></FontAwesomeIcon></a>
            </div>
        </div>
    )
}

export default Footer;