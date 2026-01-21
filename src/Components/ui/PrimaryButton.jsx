import { Button } from "antd";

export default function PrimaryButton({
  text,
  icon,
  onClick,
  className,
  style,
  htmlType = "button",
  loading = false,
}) {
  return (
    <Button
      type="primary"
      size="large"
      htmlType={htmlType}
      loading={loading}
      className={`flex items-center gap-2 ${className}`}
      style={{
        backgroundColor: "#00963F",
        borderColor: "#00963F",
        height: "auto",
        ...style,
      }}
      onClick={onClick}
    >
      <span className="flex items-center gap-2 py-2 px-4">
        {icon}
        {text}
      </span>
    </Button>
  );
}
