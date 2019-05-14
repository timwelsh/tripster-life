import React from "react";
import { Col } from "react-materialize";

export default function Footer() {

    const style = {
        position: "fixed",
        bottom: 0,
        width: "100%",
        margin: "0 auto"
    }

    return (
        <div>
            <footer 
                style={style} 
                copyrights="Tripster.Life | Copyright 2019"
                // moreLinks={<a />}
                // links={<ul />}
            >
                <h5 className="white-text">
                    Tripster Life
                </h5>
                <p className="grey-text text-lighten-4">
                    Mission statement lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                </p>
            </footer>
        </div>
    );
}