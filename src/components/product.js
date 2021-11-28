import counter from '../hocs/counter';

import { Card } from '@rmwc/card';
import { CardPrimaryAction } from '@rmwc/card';
import { CardActions } from '@rmwc/card';
import { CardActionIcons } from '@rmwc/card';
import { CardActionIcon } from '@rmwc/card';
import { Typography } from '@rmwc/typography';

import '@rmwc/card/styles';
import '@rmwc/typography/styles';
import '@rmwc/icon/styles';

import styles from './product.module.css';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

function Product({ product, amount, decrement, increment }) {
  return (
    <Card className={styles.card}>
      <CardPrimaryAction>
        <Typography use="headline6" tag="h2">
          {product.name}
        </Typography>
        <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
          {product.ingredients.join(', ')}
        </Typography>
        <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
          {product.price} $
        </Typography>
      </CardPrimaryAction>
      <CardActions>
        <CardActionIcons>
          <CardActionIcon icon={<Minus />} onClick={decrement} />
          {amount}
          <CardActionIcon icon={<Plus />} onClick={increment} />
        </CardActionIcons>
      </CardActions>
    </Card>
  );
}

export default counter(Product);
