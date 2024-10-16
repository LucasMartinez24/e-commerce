import "./Badge.css"; // Archivo de estilos
interface BadgeProps {
  text: string;
  variant?: "default" | "neutral" | "success" | "error" | "warning";
  darkMode?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "default",
  darkMode = false,
}) => {
  const baseClass = `badge-${variant}`;
  const darkClass = darkMode ? `${baseClass}-dark` : baseClass;

  return <span className={`badge ${darkClass}`}>{text}</span>;
};

export default Badge;