import Rate from './rate';

import { Card, CardPrimaryAction, CardActions } from '@rmwc/card';
import { Typography } from '@rmwc/typography';

import '@rmwc/card/styles';
import '@rmwc/typography/styles';
import '@rmwc/icon/styles';

export default function Review({ review }) {
  return (
    <Card>
      <CardPrimaryAction style={{ padding: '0 1rem 1rem 1rem' }}>
        <Typography use="headline6" tag="h2">
          {review.user}
        </Typography>
        <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
          {review.text}
        </Typography>
      </CardPrimaryAction>
      <CardActions style={{ padding: '0 1rem 1rem 1rem' }}>
        <Rate value={review.rating} />
      </CardActions>
    </Card>
  );
}
