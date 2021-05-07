import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Card, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 350,
        marginLeft: "15px",
        marginBottom: "75px",
        padding: "10px",
        backgroundColor: "#efe9db",
    },
    images: {
        height: "350px",
        length: "350px",
        margin: "15px",
    },
    typography: {
        marginBottom: "20px",
        marginTop: "10px",
        padding: "10px",
        fontSize: "24px"
        
    }
})

function PhotoCard(props) {
    const styles = useStyles();
    return (
        <Grid item>
            <Card className={styles.root}>
                <div className={styles.images}>
                    <img className="card-img" src={props.project.image} alt={props.project.alt}/>
                    <Typography className={styles.typography}>
                    <h3>{props.project.title}</h3>
                    </Typography>               
                </div>
            </Card>
        </Grid>
    )
}

export default PhotoCard