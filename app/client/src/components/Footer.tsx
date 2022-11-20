import React from 'react';

const Footer = () => {

    let style = "flex justify-center items-center text-slate-400 text-left";

    return(
        <div className="bg-slate-600">
            <div className="px-10 pt-20 pb-14 grid grid-cols-5">
                <div className={style}>
                    <ul>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Longer Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
                <div className={style}>
                    <ul>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Longer Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
                <div className={style}>
                    <ul>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Longer Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
                <div className={style}></div>
                <div className={style}>
                    <ul>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Longer Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;