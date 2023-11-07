"use client";

import * as React from 'react';
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

const CarritoDeCompra = ({ open, onClose }) => {
  
    // ACABA DEBES OBTENER LOS DATOS DEL CARRITO
    let carrito = {};

    const handleClose = () => {
      onClose(false);
    };
  
    return (
      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
        <DialogTitle><h3>Cart</h3></DialogTitle>
        <DialogContent dividers>
            <List sx={{ pt: 0 }}>
                {carrito?.items ? carrito.items?.map((item) => (
                    <ListItem key={item.id} disablePadding 
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
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
                )) : <h5>Your cart is empty</h5>}
            </List>
        </DialogContent>
        <DialogContent>
            <h5>Subtotal: $00.00</h5>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>CLOSE</Button>
          <Button variant="contained">CHECKOUT</Button>
        </DialogActions>

      </Dialog>
    );
  }
  
  CarritoDeCompra.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
  };

  export default CarritoDeCompra;