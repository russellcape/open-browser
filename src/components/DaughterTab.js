import React from "react";
import { Link } from "react-router-dom";

function DaughterTab() {

    return (
        <div>
            <p>This is the second page.</p>
            <Link to="/">
                <button>
                    Go Back To Page 1 
                </button>
            </Link>
        </div>
    );
}

    export default DaughterTab;