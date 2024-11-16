import { Card } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';

export const MatchesPage = () => {
  return (
    <>
      <Card className="p-2 w-full">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
          <div className="flex flex-row items-center gap-4">
            <img
              src="https://placehold.co/32x32"
              alt="Game Logo"
              className="rounded-full"
            />

            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">
                Jan 11, 4:05 AM
              </span>
              <div className="bg-red-500 px-2 py-0.5 rounded text-xs text-white font-medium w-fit">
                LIVE
              </div>
            </div>

            <div className="flex flex-col items-center">Major Championship</div>
          </div>

          <div className="grid grid-cols-2 gap-8 justify-center">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://placeholder.it/32x32"
                alt="Team 1 Logo"
                className="h-10 w-10"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">50%</span>
                <span className="text-xs text-purple-500">@1.95</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Team 2 Logo"
                className="h-10 w-10"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">50%</span>
                <span className="text-xs text-purple-500">@1.95</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-self-end">
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 hover:bg-blue-50">
              VOTE WINNER
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};
