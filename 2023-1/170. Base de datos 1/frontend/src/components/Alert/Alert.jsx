import BSAlert from 'react-bootstrap/Alert';

const Alert = ({ isVisible, message, variant, setIsVisible }) => {

  if (isVisible) {
    return (
      <BSAlert variant={variant} 
        onClose={() => setIsVisible()} 
        dismissible
        style={{margin: '10px'}}>
        <p>
          {message}
        </p>
      </BSAlert>
    );
  }
}

export default Alert;