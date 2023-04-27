import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextForm from "./TextForm";
const apiUrl = process.env.REACT_APP_API_URL;

const UpdateText = () => {
    const { url } = useParams();
    const navigate = useNavigate();
    const [textSnippet, setTextSnippet] = useState(null);

    useEffect(() => {
        const fetchText = async () => {
            const response = await fetch(`${apiUrl}/text/${url}`);
            const data = await response.json();
            setTextSnippet(data);
        };
        fetchText();
    }, [url]);

    const updateText = async () => {
        await fetch(`${apiUrl}/text/${url}/edit/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(textSnippet),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateText();
        navigate(`/t/${url}/`);
    };

    const handleTextChange = (e) => {
        setTextSnippet({
            ...textSnippet,
            content: e.target.value,
        });
    };

    return (
        <div className="container mt-5">
            <TextForm
                onSubmit={handleSubmit}
                onTextChange={handleTextChange}
                textSnippet={textSnippet}
                buttonText="Save"
            />
        </div>
    );
};

export default UpdateText;
