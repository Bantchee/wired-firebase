
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div
            className="flex gap-4 justify-center items-center"
        >
            <p
                className="text-4xl font-bold"
            >
                Made By J. Steven Jarrett
            </p>
            <a href="https://github.com/Bantchee" target={"_blank"} rel="noreferrer"
                className="hover:bg-neutral-200 rounded-full"
            >
                <FontAwesomeIcon icon={faGithub} size="4x"/>
            </a>
        </div>
    )
}

export default Footer;