import React from "react";

export function Scorebelow70(props) {

    const players70 = [];

    props.players.forEach((item) => {

        if (item.score <= 70) {
            players70.push(item);
        }

    });

    return (

        <div>

            {
                players70.map((item) => (

                    <div key={item.name}>
                        <li>
                            Mr. {item.name}
                            <span> {item.score}</span>
                        </li>
                    </div>

                ))
            }

        </div>

    );

}