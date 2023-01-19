import React from "react";

const Confirmation = ({ previousStep, nextStep, handleChange, values }) => {
        const Continue = e => {
            e.preventDefault();
            nextStep();
        }

        const Previous = e => {
            e.preventDefault();
            previousStep();
        } 
        return (
        <>
        
        <button onClick={ Previous }>Previous</button> 
        <button onClick={ Continue }>Continue</button>
        </>
    )
}

export default Confirmation