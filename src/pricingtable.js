import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export function PricingTable() {
 
  return (
       <Card sx={{ maxWidth: 345, borderRadius:'20px'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          $0/month
        </Typography>
        <Typography variant="body2" color="text.secondary">Single User</Typography>
        <Typography variant="body2" color="text.secondary">5GB Storage</Typography>
        <Typography variant="body2" color="text.secondary">Unlimited Public Projects</Typography>
        <Typography variant="body2" color="text.secondary">Community Access</Typography>
        <Typography variant="body2" color="text.secondary">Unlimited Private Projects</Typography>
        <Typography variant="body2" color="text.secondary">Dedicated Phone Support</Typography>
        <Typography variant="body2" color="text.secondary">Free Subdomain</Typography>
        <Typography variant="body2" color="text.secondary">Monthly Status Reports</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large">Button</Button>
      </CardActions>
    </Card>
  );
}