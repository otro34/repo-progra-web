"use client";

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Album';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';

import { DialogActions, DialogContent } from '@mui/material'

import carritoApi from '../api/carrito.js'
import ordenApi from '../api/orden.js'

const CarritoDeCompra = ({ open, onClose }) => {

    const [carrito, setCarrito] = useState({ items: [], subtotal: 0.00});

    const handleClose = () => {
      onClose(false);
    };

    const handleOnLoad = async () => {
        const rawCarrito = await carritoApi.findAll();
        setCarrito(rawCarrito.data);
    }

    const handleRemove = async (item) => {
      const result = await carritoApi.remove(item.id);
      if (result)
        {
          alert("Item removed from cart!");
          await handleOnLoad();
        }
    }

    const handleSave = async() => {
      const orden = {
        id : 1,
        fecha : new Date(),
        items : carrito.items
      }

      const result = await ordenApi.create(orden);
      
      if (result) {
        alert("Order saved!");
        await carritoApi.removeAll();
        handleClose();
      }
        
    }

    useEffect(() => {
      handleOnLoad();
    }, [open])
  
    return (
      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
        <DialogTitle><h3>Cart</h3></DialogTitle>
        <DialogContent dividers>
            <List sx={{ pt: 0 }}>
                {carrito?.items?.map((item) => (
                    <ListItem key={item.id} disablePadding 
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments" onClick={() => handleRemove(item)}>
                          <DeleteIcon />
                        </IconButton>
                      }>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: grey[50], color: grey[900] }}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.titulo + " ($" + item.precio + ")"} secondary={item.autor} />
                    </ListItem>
                ))}
            </List>
        </DialogContent>
        <DialogContent>
            <h5>Subtotal: ${carrito.subtotal}</h5>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" onClick={handleSave}>CHECKOUT</Button>
        </DialogActions>

      </Dialog>
    );
  }
  
  CarritoDeCompra.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
  };

  export default CarritoDeCompra;