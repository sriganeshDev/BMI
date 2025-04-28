import { TextField } from "@mui/material";

export default function CommonInput({
  label,
  type,
  value,
  onChange,
  error,
  helperText,
}) {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      margin="normal"
      error={error}
      helperText={helperText}
      sx={{
        // Default styling (for larger screens)
        "& .MuiInputBase-root": {
          height: 50, // Default height
          padding: "8px 16px", // Default padding
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px", // Default rounded corners
        },
        // Apply only on mobile screens (max-width: 640px)
        "@media (max-width: 640px)": {
          "& .MuiInputBase-root": {
            height: 40, // Reduced height for mobile
            padding: "4px 8px", // Reduced padding for mobile (top/bottom and left/right)
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "6px", // Smaller border-radius for mobile
          },
        },
      }}
    />
  );
}
