import React from "react";
import { createRoot } from "react-dom/client";
import { App, ErrorBoundary } from "@/app";

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
