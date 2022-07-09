import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import styles from '../styles/Note.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

const Note: NextPage = () => {
  const date = new Date().toDateString();
  return (
    <div className={styles.container}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {date}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              The Milky Way is the galaxy that includes our Solar System, with the name describing the galaxy&apos;s appearance from Earth: a hazy band of light ...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Note
