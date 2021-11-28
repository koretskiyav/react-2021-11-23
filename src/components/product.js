import counter from '../hocs/counter';

import {
  Card,
  CardPrimaryAction,
  CardActions,
  CardActionIcons,
  CardActionIcon,
  CardMedia,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';

import '@rmwc/card/styles';
import '@rmwc/typography/styles';
import '@rmwc/icon/styles';

import { ReactComponent as Remove } from '../icons/remove.svg';
import { ReactComponent as Add } from '../icons/add.svg';

function Product({ product, amount, decrement, increment }) {
  return (
    <Card>
      <CardPrimaryAction>
        <CardMedia
          sixteenByNine
          style={{
            backgroundImage: 'url(' + product.image + ')',
          }}
        />
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <Typography use="headline6" tag="h2">
            {product.name}
          </Typography>
          <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
            {product.ingredients.join(', ')}
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions style={{ padding: '0 1rem 1rem 1rem' }}>
        <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
          ${product.price}
        </Typography>
        <CardActionIcons>
          <CardActionIcon icon={<Remove />} onClick={decrement} />
          {amount}
          <CardActionIcon icon={<Add />} onClick={increment} />
        </CardActionIcons>
      </CardActions>
    </Card>
  );
}

export default counter(Product);
