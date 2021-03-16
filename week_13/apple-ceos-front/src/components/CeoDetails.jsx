import { useParams } from "react-router-dom";

const CeoDetails = ({ ceos }) => {
    const { ceo_slug } = useParams();
    const ceo = ceos.find((ceo) => {
        return ceo.slug === ceo_slug ? ceo : null;
    });

    return (
        <>
            <p>Name: {ceo.name}</p>
            <p>First Year Active: {ceo.year}</p>
        </>
    )
}

export default CeoDetails;