import { Separator } from "@radix-ui/react-separator";
import { AppBreadCrumb } from "./app-breadcrumb";
import { ColorThemeDropdown } from "./color-theme-dropdown";
import { DarkModeToggle } from "./dark-mode-toggle";
import { NotificationsDropdown } from "./notifications-dropdown";
import { SidebarTrigger } from "./ui/sidebar";

export function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center justify-between gap-2 px-4">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <AppBreadCrumb />
        </div>
        <div className="flex items-center">
          <NotificationsDropdown />
          <span className="mr-2" />
          <DarkModeToggle />
          <span className="mr-2" />
          <ColorThemeDropdown />
        </div>
      </div>
    </header>
  );
}
