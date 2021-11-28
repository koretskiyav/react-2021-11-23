import Rate from './rate';

import { Card } from '@rmwc/card';
import { CardPrimaryAction } from '@rmwc/card';
import { CardActions } from '@rmwc/card';
import { CardActionIcons } from '@rmwc/card';
import { CardActionIcon } from '@rmwc/card';
import { Typography } from '@rmwc/typography';

import '@rmwc/card/styles';
import '@rmwc/typography/styles';
import '@rmwc/icon/styles';

export default function Review({ review }) {
  return (
    <Card key={review.id}>
      <CardPrimaryAction>
        <Typography use="headline6" tag="h2">
          {review.user}
        </Typography>
        <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
          {review.text}
        </Typography>
      </CardPrimaryAction>
      <CardActions>
        <Rate value={review.rating} />
      </CardActions>
    </Card>
  );
}
