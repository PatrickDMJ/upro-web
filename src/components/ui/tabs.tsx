"use client";

import { ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
  defaultValue: string;
  className?: string;
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
  className?: string;
}

interface TabsContentProps {
  children: ReactNode;
  value: string;
  activeValue: string;
  className?: string;
}

export function Tabs({ children, className = "" }: TabsProps) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children, className = "" }: TabsListProps) {
  return (
    <div
      className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  children,
  value,
  isActive,
  onClick,
  className = "",
}: TabsTriggerProps) {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "hover:bg-muted-foreground/10"
      } ${className}`}
      onClick={() => onClick(value)}
      type="button"
    >
      {children}
    </button>
  );
}

export function TabsContent({
  children,
  value,
  activeValue,
  className = "",
}: TabsContentProps) {
  if (value !== activeValue) return null;

  return (
    <div
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  );
}
