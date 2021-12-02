import { useState, useMemo } from 'react';
import Restaurant from './restaurant';
import Tabs from './tabs';

export default function Restaurants({ props }) {
  const restos = props.slice();

  //initial state
  const [activeId, setActiveId] = useState(restos[0].id);

  const tabs = useMemo(
    () => restos.map(({ id, name }) => ({ id, label: name })),
    [restos]
  );

  const activeResto = useMemo(
    () => restos.find((resto) => resto.id === activeId),
    [activeId, restos]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Restaurant props={activeResto} />
    </div>
  );
}
