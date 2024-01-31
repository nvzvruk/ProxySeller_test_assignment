import { Suspense } from "react";
import { AppRouter } from "./AppRouter";
import { Header } from "@/widgets/Header";
import { Loader } from "@/shared/components/Loader";
import "./index.css";

export const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-background">
      <Header />
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  );
};
