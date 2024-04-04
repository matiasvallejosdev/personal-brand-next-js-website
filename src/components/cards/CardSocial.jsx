import { Card, CardContent } from '../ui/card';
import SocialBar from '@/features/SocialBar';

export default function CardSocial() {
  return (
    <Card className="h-auto shadow-none">
      <CardContent className="p-4">
        <div className=" flex flex-col gap-4">
          <SocialBar isIcon={true} isQuick={false} customClass={"gap-6"} />
        </div>
      </CardContent>
    </Card>
  );
}
