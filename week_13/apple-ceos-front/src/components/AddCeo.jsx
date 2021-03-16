import { useState } from "react";

const AddCeo = ({handleReload}) => {
    const [ceoName, setCeoName] = useState("");
    const [ceoYear, setCeoYear] = useState("");

    const _handleNameChange = (e) => {
        setCeoName(e.target.value);
    }

    const _handleYearChange = (e) => {
        setCeoYear(e.target.value);
    }

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const submitResponse = await fetch("http://127.0.0.1:3333/ceos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ceo_name: ceoName, ceo_year: ceoYear })
        }).then(
            (response) => response
        );
        console.log("submit response is: ", submitResponse);
        setCeoName("");
        setCeoYear("");

        if (submitResponse.status === 200) {
            handleReload(true);
        }
    }

    return (
        <form onSubmit={_handleSubmit}>
            <label>CEO Name 
                <input type="text" name="ceo_name" value={ceoName} onChange={_handleNameChange} />
            </label>
            <label>
                CEO Year
                <input type="text" name="ceo_year" value={ceoYear} onChange={_handleYearChange}/>
            </label>
            <button type="submit">Add CEO</button>
        </form>
    );
}

export default AddCeo;