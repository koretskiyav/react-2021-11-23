import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

import '@rmwc/grid/styles';
import '@rmwc/typography/styles';

import Review from './review';

export default function Reviews({ reviews }) {
  return (
    <div>
      <Typography use="headline6" tag="h2">
        Reviews
      </Typography>
      <Grid>
        {reviews.map((review) => (
          <GridCell span={3}>
            <Review review={review} key={review.id} />
          </GridCell>
        ))}
      </Grid>
    </div>
  );
}
