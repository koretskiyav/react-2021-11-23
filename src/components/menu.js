import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

import '@rmwc/grid/styles';
import '@rmwc/typography/styles';

import Product from './product';

export default function Menu({ menu }) {
  return (
    <div>
      <Typography use="headline6" tag="h2">
        Menu
      </Typography>
      <Grid>
        {menu.map((product) => (
          <GridCell span={2} key={product.id}>
            <Product key={product.id} product={product} />
          </GridCell>
        ))}
      </Grid>
    </div>
  );
}
