import React from "react";

const OtherInformation = ({ previousStep, nextStep, handleChange, values }) => {
    
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
        <form>
            <label>Country
                <input 
                type="text" 
                placeholder="country" 
                value={values.country} 
                onChange={handleChange('country')}
                />
            </label>
            <label>Sex
                <input 
                type="text" 
                placeholder="sex" 
                value={values.sex} 
                onChange={handleChange('sex')}
                />
            </label>
            <label>Age
                <input 
                type="number" 
                placeholder="age" 
                value={values.age} 
                onChange={handleChange('age')}
                />
            </label>
            <button onClick={ Previous }>Previous</button> 
            <button onClick={ Continue }>Next</button>
        </form>
        </>
    )
}

export default OtherInformation