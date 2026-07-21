import React from "react";

export function ListofIndianPlayers(props) {

    return (

        <div>

            {
                props.IndianPlayers.map((item, index) => (

                    <div key={index}>
                        <li>Mr. {item}</li>
                    </div>

                ))
            }

        </div>

    );

}