import React from 'react';

const Footer = () => {

    // let style = "flex justify-center items-center text-slate-400 text-left";
    let style = "flex ml-5 text-slate-400 text-sm text-left";

    return(
        <div className="bg-slate-600 grid grid-rows-3">
            <div>
                <p> </p>
            </div>
            <div>
                <a href="https://isaaclee.org/" className={style} target="_blank">Created by Isaac Lee</a>
            </div>
            <div>
                <p> </p>
            </div>
            {/* <div className="px-10 pt-20 pb-14 grid grid-cols-2">
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
            </div> */}
        </div>
    )
}

export default Footer;