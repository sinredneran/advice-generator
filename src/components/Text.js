const Text = (props) => {
    return (
        <div className="text">
            <p id="adviceId">ADVICE #{props.adviceId}</p>
            <p id="advice">
                &ldquo;{props.advice}&rdquo;</p>
        </div>
    );
}

export default Text;