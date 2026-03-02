function Button ({text, icon, ...props}) {
    return (
        <button {...props}>{icon}  {text} </button>
    );
}

export default Button;