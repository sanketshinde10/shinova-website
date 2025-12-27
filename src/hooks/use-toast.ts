"use client";

import * as React from "react";

type Toast = {
  title?: string;
  description?: string;
};

export function useToast() {
  const toast = React.useCallback((toast: Toast) => {
    alert(`${toast.title}\n\n${toast.description}`);
  }, []);

  return { toast };
}
