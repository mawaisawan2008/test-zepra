import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-slate-200/80 bg-white/90 text-card-foreground shadow-soft backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-3 p-6", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("font-display text-xl font-semibold tracking-tight text-slate-950", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm leading-6 text-brand-slate", className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return <div className={cn("flex items-center px-6 pb-6 pt-2", className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
