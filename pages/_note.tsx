import { Button } from '@mui/material'
import type { NextComponentType, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { NoteType } from './interfaces/note.interface';

interface PropTypes {
  content: NoteType
}

const Note: NextPage<PropTypes> = (props:PropTypes) => {
  const { content } = props;

  return (
    <div className={styles.container}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { content.title }
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              { content.body }
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
