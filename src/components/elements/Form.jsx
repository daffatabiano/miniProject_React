import Input from './Input';

const FormInput = () => {
    return (
        <>
            <div className="subscribe-form">
                <form action="#">
                    <Input type="text" placeholder="Email Address" />
                    <button>
                        <i className="fab fa-telegram-plane"></i>
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormInput;
