import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
const UserDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="!mt-10 !mr-8 !p-8 border-none text-lg font-extrabold  text-gray-500 hover:bg-gray-100 "
        >
          My Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-md !py-2  flex justify-center">
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-md !py-2  flex justify-center">
            Billing
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-md !py-2  flex justify-center">
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-md !py-2  flex justify-center">
            Log out
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
