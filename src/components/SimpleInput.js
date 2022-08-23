import useInput from "../hooks/use-input";

const SimpleInput = () => {
    const {
        inputBlurHandler: nameBlurHandler,
        valueChangeHandler: nameChangeHandler,
        hasError: nameInputHasError,
        value: enteredName,
        isValid: enteredNameIsValid,
        reset: resetNameInput
    } = useInput((value) => value.trim() !== "")

    const {
        inputBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        hasError: emailInputHasError,
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        reset: resetEmailInput
    } = useInput((value) => value.includes("@"))

    let formIsValid;

    if (enteredEmailIsValid && enteredNameIsValid) {
        formIsValid = true
    }


    const formSubmissionHandler = (e) => {
        e.preventDefault()
        if (!formIsValid) {
            return
        }
        resetNameInput()
        resetEmailInput()
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && <p className="error-text">This is not a valid Email.</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
