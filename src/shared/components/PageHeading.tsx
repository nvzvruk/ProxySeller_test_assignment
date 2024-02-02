import { memo, ReactNode } from "react";
import { Portal } from "@/shared/components/Portal";
import { AppLink } from "@/shared/components/AppLink";
import { RoutePath } from "@/shared/config/routePaths";
import { useLocation } from "react-router-dom";

export const PageHeading = memo(({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <Portal element={document.getElementById("pageHeading")}>
      <div className="flex w-full gap-2 justify-between">
        <h2 className="font-semibold text-white">{children}</h2>
        {location.pathname !== RoutePath.Users && (
          <AppLink path={RoutePath.Users} className="text-white">
            &larr; Back to users page
          </AppLink>
        )}
      </div>
    </Portal>
  );
});

PageHeading.displayName = "PageHeading";
