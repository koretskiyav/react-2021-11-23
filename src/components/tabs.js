import { Button } from '@rmwc/button';
import '@rmwc/button/styles';

export default function Tabs({ tabs, onChange }) {
  return (
    <div>
      {tabs.map(({ id, label }) => (
        <Button key={id} onClick={() => onChange(id)}>
          {label}
        </Button>
      ))}
    </div>
  );
}
