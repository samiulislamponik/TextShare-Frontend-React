import React from "react";

const TextForm = ({ textSnippet, onSubmit, onTextChange, buttonText }) => {
    return (
        <form onSubmit={onSubmit}>
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
                ></textarea>
            </div>
            <button type="submit" className="btn btn-dark my-3">
                {buttonText}
            </button>
        </form>
    );
};

export default TextForm;
