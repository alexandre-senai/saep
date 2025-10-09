import React from "react";
import "./Table.css";

function Table({ columns, data }) {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index}>{col.header}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.length > 0 ? (
                    data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>{row[col.accessor]}</td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} style={{ textAlign: "center" }}>
                            Nenhum dado disponível
                        </td>
                    </tr>
                )}
            </tbody>

        </table>
    );
}

export default Table;