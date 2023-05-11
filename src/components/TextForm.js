import React from "react";

const TextForm = ({
    textSnippet,
    onSubmit,
    onTextChange,
    buttonText,
    readOnly,
    generatedUrl,
    showUrl,
    textCopied,
    handleCopy,
}) => {
    return (
        <form onSubmit={onSubmit}>
            {/* text area for url */}
            {showUrl && (
                <div className="form-group mb-4">
                    <label htmlFor="url">
                        <h4>Url: </h4>
                    </label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="url"
                            name="url"
                            value={generatedUrl}
                            readOnly={true}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={handleCopy}
                        >
                            {textCopied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            )}

            {/* Text Area for Text Snippet */}
            <div className="form-group">
                <label htmlFor="text">
                    <h3>Text Area: </h3>
                </label>
                <textarea
                    className="form-control"
                    id="text"
                    name="text"
                    rows="20"
                    onChange={onTextChange}
                    defaultValue={textSnippet?.content}
                    readOnly={readOnly}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-dark my-4">
                {buttonText}
            </button>
        </form>
    );
};

export default TextForm;
