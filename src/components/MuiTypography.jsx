import { Typography } from "@mui/material";
function MuiTyprography(){
 return(
     <>
       <div className="app">
         <Typography variant='h1'>
            h1 heading
         </Typography>
         <Typography variant='h2'>
            h2 heading
         </Typography>
         <Typography variant='h3'>
            h3 heading
         </Typography>
         <Typography variant='h4' component="h1" gutterBottom>
            {/*Component property is to make the tag semantic */}
            {/*gutterBottom is used to give a margin bottom by default its value is false */}
            h4 heading
         </Typography>
         <Typography variant='h5'>
            h5 heading
         </Typography>
         <Typography variant='h6'>
            h6 heading
         </Typography>
         <Typography variant="subtitle1">
            Subtitle 1
         </Typography>
         <Typography variant="subtitle2">
            Subtitle 2
         </Typography>
         <Typography variant="body1">{/*Body 1 is the default variant of typography*/}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla temporibus impedit qui doloremque ratione quos facere distinctio et dolorum ducimus, veniam, cupiditate aliquid culpa! Autem minus, in adipisci quaerat, distinctio exercitationem, soluta cumque corporis commodi nam voluptates ad quo nobis tempore explicabo repellendus sunt atque officiis? Architecto ex nihil, quis, consectetur asperiores nisi vero consequatur earum consequuntur, eius 
         </Typography>
         <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla temporibus impedit qui doloremque ratione quos facere distinctio et dolorum ducimus, veniam, cupiditate aliquid culpa! Autem minus, in adipisci quaerat, distinctio exercitationem, soluta cumque corporis commodi nam voluptates ad quo nobis tempore explicabo repellendus sunt a
         </Typography>
       </div>
     </>
)}
export default MuiTyprography;