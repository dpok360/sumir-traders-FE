import { RefreshCcw } from 'lucide-react';

type LoaderSize = 'sm' | 'md' | 'lg' | 'xl';

const sizeMap: Record<LoaderSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

interface CircularArrowLoaderProps {
  size?: LoaderSize;
}

export default function CircularArrowLoader({
  size = 'md',
}: CircularArrowLoaderProps) {
  const sizeClass = sizeMap[size];

  return (
    <div className="flex items-center justify-center h-12">
      <RefreshCcw
        className={`${sizeClass} animate-[spin_1s_linear_infinite_reverse] text-black dark:text-white`}
      />
    </div>
  );
}
