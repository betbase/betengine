import { Navbar } from '@/components/Navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom';

export const PageLayout = () => {
  return (
    <>
      <Navbar />
      <div className="w-full p-4 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
          <div className="p-6 bg-primary/10 md:col-span-2 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Left Column</h2>
            <p>This column takes up 2/12 of the width on larger screens.</p>
          </div>

          <div className="p-6 bg-secondary/10 md:col-span-8 flex flex-col">
            <Outlet />
          </div>

          <div className="p-6 bg-primary/10 md:col-span-2 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Right Column</h2>
            <p>This column takes up 2/12 of the width on larger screens.</p>
          </div>
        </div>
      </div>
    </>
  );
};
