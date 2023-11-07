"use client";
import React, { useState, useEffect } from 'react';

import './HomePage.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CarritoDeCompra from '../app/components/CarritoDeCompra.jsx'

import albumApi from '../app/api/album.js'
import ordenApi from '../app/api/orden.js'
import carritoApi from '../app/api/carrito.js'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function HomePage() {

    
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [nroOrdenes, setNroOrdenes] = useState(0);
    const [itemsCarrito, setItemsCarrito ] = useState(0)

    const handleOnLoad = async () => {
        const rawAlbums = await albumApi.findAll();
        const rawOrdens = await ordenApi.findAll();
        const rawCarrito = await carritoApi.findAll();
        setAlbums(rawAlbums.data);
        setNroOrdenes(rawOrdens.data.length);
        setItemsCarrito(rawCarrito.data.items?.length)

    }

    useEffect(() => {
        handleOnLoad();
    }, [])

    const handleOpen = () => {
        setOpen(true);
    }

    const handleAddToCart = async (album) => {
        const result = await carritoApi.addItem(album);
        if (result) {
            setSnackbarOpen(true);
            await handleOnLoad();
        }
            
    }

    return (
        <>
        <div>
            <h1>My tiny little music store</h1>
            <p>This is some stuff I have for sale. Feel free to add it to your cart.</p>
            <h3>Items in your cart: {itemsCarrito}</h3>
            <h3>Previous orders: {nroOrdenes}</h3>
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
                    {albums.map((album) => (
                        <tr key={album.id}>
                            <td><img src={album.cover} alt={album.titulo} width="100" height="100"/></td>
                            <td>{album.titulo}</td>
                            <td>{album.autor}</td>
                            <td>{album.año}</td>
                            <td>{album.precio}</td>
                            <td>{album.pais}</td>
                            <td><button onClick={() => handleAddToCart(album)}>Add to cart</button></td>
                        </tr>
                    ))}
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
