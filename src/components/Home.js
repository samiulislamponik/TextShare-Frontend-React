import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextForm from "./TextForm";

const Home = () => {
    const navigate = useNavigate();
    const [textSnippet, setTextSnippet] = useState(null);

    const saveText = async () => {
        const response = await fetch("/text/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(textSnippet),
        });
        const data = await response.json();
        navigate(`/t/${data.url}/`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveText();
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
                textSnippet={textSnippet}
                onSubmit={handleSubmit}
                onTextChange={handleTextChange}
                buttonText="Save"
            />
        </div>
    );
};

export default Home;
