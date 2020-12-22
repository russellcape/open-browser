import React from "react";
import { Link } from "react-router-dom";

function MainTab() {

    return (
    <div>
        <h2>
            This is the first page.
            <br />
            Click on the button below.
        </h2>
        <br />
        <Link to="/page2">
            <button>
                Go to Page 2 
            </button>
        </Link>
    </div>
    );
}

export default MainTab;