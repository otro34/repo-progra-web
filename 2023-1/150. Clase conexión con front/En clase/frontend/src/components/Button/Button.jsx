const Button = ({ onClick, value }) => {
    return (
        <button 
            
            onClick={() => onClick() }>{ value }</button>
    )
}

export default Button