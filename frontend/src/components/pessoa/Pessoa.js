import React, { useEffect, useState } from "react";

function Pessoa({nome,idade,documento}) {
    // EU ESCREVO JAVASCRIPT

    return (
        // HTML EU ESCREVO HTML
        <div style= {{border:'1px solid' }} >
            <h1>{nome}</h1>
            <h1>{idade}</h1>
            <h1>{documento}</h1>
        </div>
    )
}

export default Pessoa;