import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextForm from "./TextForm";
const apiUrl = process.env.REACT_APP_API_URL;
const rootUrl = process.env.REACT_APP_ROOT_URL;

const TextView = () => {
    const { url } = useParams();
    const navigate = useNavigate();
    const [textSnippet, setTextSnippet] = useState(null);
    const [generatedUrl, setGeneratedUrl] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchText = async () => {
            const response = await fetch(`${apiUrl}/text/${url}`);
            const data = await response.json();
            setTextSnippet(data);
            setGeneratedUrl(`${rootUrl}/t/${url}/`);
        };
        fetchText();
    }, [url]);

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

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
                generatedUrl={generatedUrl}
                showUrl={true}
                textCopied={copied}
                handleCopy={handleCopy}
                readOnly={true}
                buttonText="Edit"
            />
        </div>
    );
};

export default TextView;
