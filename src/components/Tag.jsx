import { Badge } from './ui/badge';

export default function Tag({ name, icon }) {
  return (
    <Badge variant="outline" className="rounded-full text-brand dark:bg-opacity-100">
      <span className="text-xs font-normal">{name}</span>
    </Badge>
  );
}
