
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div>
            <p>Made By J. Steven Jarrett</p>
            <a href="https://github.com/Bantchee" target={"_blank"} rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    )
}

export default Footer;