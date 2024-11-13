import { Typography, Button } from '@mui/material'
import React from 'react';
import { Grid } from '@mui/material';



const Footer = () => {
  return (
    <div>
        <Grid container className="bg-black text-white text-center mt-10"
          sx={{bgcolor:"black", color:"white",py:3}}>
            <Grid item sm={6} xs={12} md={3}>
                <Typography className='pb-5'>
                    {" "}
                    Company
                    {" "}
                </Typography>
                <div>
                <Button className='pb-5' variant='h6' >About</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >About</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >About</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >About</Button>
         </div>
                
              
            </Grid>
            <Grid item sm={6} xs={12} md={3}>
                <Typography className='pb-5'>
                    {" "}
                  Social Sites
                    {" "}
                </Typography>
                <div>
                <Button className='pb-5' variant='h6' >Instagram</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >Contact Us</Button>
         </div>

              
            </Grid>
            <Grid item sm={6} xs={12} md={3}>
                <Typography className='pb-5'>
                    {" "}
                   Policies
                    {" "}
                </Typography>
                <div>
                <Button className='pb-5' variant='h6' >Terms of use</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >Privacy Policy</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >Exchange & Return</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >Delivery Policy</Button>
         </div>
                
                
              
            </Grid>
            <Grid item sm={6} xs={12} md={3}>
                <Typography className='pb-5'>
                    {" "}
                    Company
                    {" "}
                </Typography>
                <div>
                <Button className='pb-5' variant='h6' >About</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >About</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >About</Button>
         </div>
                <div>
                <Button className='pb-5' variant='h6' >About</Button>
         </div>
                
              
            </Grid>
            <Grid className='pt-20' item xs={12}>
            <Typography variant='body2' component='p' align='center'>
                &copy; 2020 Appalifestyle . All rights reserved
            </Typography>
        
        
  
        </Grid>
        </Grid>
       

    </div>
  )
}

export default Footer