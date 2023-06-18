import "./form-input.styles.scss";
const FormInput = ({ label, ...others }) => {
    return (
        <div className="group">
            <input className="form-input" {...others} />
            {label && (
                <label
                    className={`${
                        others.value.length ? "shrink" : null
                    } form-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};
export default FormInput;
