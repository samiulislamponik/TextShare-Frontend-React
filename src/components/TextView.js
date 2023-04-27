import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextForm from "./TextForm";

const TextView = () => {
    const { url } = useParams();
    const navigate = useNavigate();
    const [textSnippet, setTextSnippet] = useState(null);

    useEffect(() => {
        const fetchText = async () => {
            const response = await fetch(`/text/${url}`);
            const data = await response.json();
            setTextSnippet(data);
        };
        fetchText();
    }, [url]);

    const handleEditClick = (e) => {
        e.preventDefault();
        navigate(`/t/${url}/edit/`);
    };

    return (
        <div className="container mt-5">
            <TextForm
                textSnippet={textSnippet}
                onTextChange={() => {}}
                onSubmit={handleEditClick}
                buttonText="Edit"
            />
        </div>
    );
};

export default TextView;
