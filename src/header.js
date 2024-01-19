import React from 'react'
import '../src/header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Button, IconButton, TextField } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import pujaLogo from './puja-icon.jpg';
export default function Header() {
    return (
        <div>
            <div className='header'>
                <div className='left-header'>
                <img className='img-logo' src={pujaLogo} />

                {/* <input type='text' placeholder='Search here pujas...'/> <SearchIcon /> */}
                <TextField
                    id="input-with-icon"
                    // label="Username"
                    placeholder='Search here...'
                    InputProps={{
                        endAdornment: (
                            // <IconButton>
                            //     {/* <AccountCircleIcon /> */}
                            //     {/* <SearchIcon /> */}
                            // </IconButton>
                            <SearchIcon />
                        ),
                    }}
                />
                </div>
                <div className='right-header'>
                    <div>   </div>

                <Button
                    className='account'
                    variant="contained"
                    color='success'
                    startIcon={<AccountCircleIcon />}
                >
                    My Account
                </Button>
                
                
                <Button
                    variant="contained"
                    color='success'
                    className='cart'
                    startIcon={<ShoppingBasketIcon/>}
                >
                    Bookings
                </Button>

                <Button variant="contained" className='help' color='success' endIcon={<QuestionMarkIcon/>}>Help</Button>
                <Button
                    variant="contained"
                    color='success'
                    className='cart'
                    startIcon={<ShoppingCartIcon/>}
                >
                    Cart
                </Button>
                </div>
            </div>

        </div>
    )
}