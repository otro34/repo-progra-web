import BsAlert from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Alert = () => {
    const [show, setShow] = useState(true);

    return (
        <>
        <BsAlert variant="success" show={show}>
            <BsAlert.Heading>Hey, nice to see you</BsAlert.Heading>
                <p>
                        The Playstation store is full of content you can browse!
                        We hope you enjoy your experience here and share it with others. 
                        Invite all your friends!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me y'all!
                    </Button>
                </div>
                </BsAlert>
                {!show && <Button onClick={() => setShow(true)}>Show Alert!</Button>}
        </>
    )
}

export default Alert;