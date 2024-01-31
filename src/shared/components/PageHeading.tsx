import { memo, ReactNode } from "react";
import { Portal } from "@/shared/components/Portal";

export const PageHeading = memo(({ children }: { children: ReactNode }) => {
  return (
    <Portal element={document.getElementById("pageHeading")}>
      <h2 className="font-semibold text-white">{children}</h2>
    </Portal>
  );
});

PageHeading.displayName = "PageHeading";
