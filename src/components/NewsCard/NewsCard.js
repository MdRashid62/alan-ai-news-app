import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  return (
    <card>
      <CardActionArea>
        <CardMedia
          image={
            urlToImage ||
            "https://www.bing.com/images/search?view=detailV2&ccid=OMs0%2bG41&id=3F0807B3F60DEB2A3B7DF23574BD9B0614B2A576&thid=OIP.OMs0-G41pSvQR2ndH6EZNwHaFg&mediaurl=http%3a%2f%2f2.bp.blogspot.com%2f-0k2zBsKQNcQ%2fTaYmaM6kfZI%2fAAAAAAAAAA0%2ffDH8FP8jSQw%2fs1600%2fnews.jpg&exph=1000&expw=1344&q=news+images&simid=608032696154786066&ck=48A882FE09718EBF81B0B75E9644E01A&selectedIndex=0&FORM=IRPRST&ajaxhist=0"
          }
        />
        <div>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn more
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </card>
  );
};

export default NewsCard;
