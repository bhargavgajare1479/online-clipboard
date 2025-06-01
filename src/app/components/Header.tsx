import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-40 py-3 border-b bg-background">
      <h1 className="text-xl font-bold">Online Clipboard</h1>
      <ThemeToggle />
    </header>
  );
}