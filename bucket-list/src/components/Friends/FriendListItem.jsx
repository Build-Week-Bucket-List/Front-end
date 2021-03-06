import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    card: {
        width: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ListItem = props =>
{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {

    setExpanded(!expanded);
    }

    return (
        <Card className={classes.card} style={{ maxHeight: expanded ? '' : '382px'}}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {props.friendName ? props.friendName[0] : ''}
                </Avatar>
            }
            title={props.item.itemtitle}
            subheader={props.item.dateCreated}
            style={{paddingRight: '70px'}}
            />
            <CardMedia
            className={classes.media}
            image={props.item.image ? props.item.image : 'https://i.imgur.com/DqfeGXM.jpg'}
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.item.itemdesc}
            </Typography>
            </CardContent>
            <CardActions disableSpacing>         
            <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Journal:</Typography>
                <Typography paragraph>
                    {props.item.journal && props.item.journal.map((entry, i )=> <span key={i}>{entry.entry}</span>)}
                </Typography>
            </CardContent>
            </Collapse>
        </Card>
    )
}
export default ListItem