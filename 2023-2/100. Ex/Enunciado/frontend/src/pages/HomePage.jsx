"use client";
import React, { useState } from 'react';

import './HomePage.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CarritoDeCompra from '../app/components/CarritoDeCompra.jsx'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function HomePage() {
    
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleAddToCart = () => {
        setSnackbarOpen(true);
    }

    //ACA DEBE AGREGAR CODIGO PARA LLAMAR AL API Y OBTENER LOS DATOS DE LOS DISCOS

    return (
        <>
        <div>
            <h1>My tiny little music store</h1>
            <p>This is some stuff I have for sale. Feel free to add it to your cart.</p>
            <h3>Items in your cart: 0</h3>
            <h3>Previous orders: 0</h3>
            <button onClick={handleOpen}>Open your cart</button>
            <br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Country</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>

        <CarritoDeCompra open={open} onClose={setOpen}/>
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={() => setSnackbarOpen(false)}
        >
            <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                Added to the cart!
            </Alert>
        </Snackbar>
        </>
    );
}

export default HomePage;
