import { TextField, MenuItem, Typography } from "@mui/material";
import React from "react";

const HeightInput = React.memo(function HeightInput({
  height,
  setHeight,
  error,
  helperText,
}) {
  const handleCombinedChange = (e) => {
    const value = e.target.value;
    const regex = /^(\d+)'(\d{0,2})?$/;
    const match = value.match(regex);

    if (match) {
      const feet = parseInt(match[1], 10);
      const inches = parseInt(match[2] || "0", 10);
      setHeight({ ...height, feet, inches });
    }
  };

  const renderHeightField = () => {
    switch (height.unit) {
      case "ft":
        return (
          <TextField
            fullWidth
            label="(e.g. 5'8)"
            value={`${height.feet || ""}'${height.inches || ""}`}
            onChange={handleCombinedChange}
            error={!!error}
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
      case "cm":
        return (
          <TextField
            fullWidth
            label="Centimeters"
            type="number"
            value={height.cm}
            onChange={(e) => setHeight({ ...height, cm: e.target.value })}
            error={!!error}
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
              "& .MuiInputBase-input": {
                fontSize: "16px", // Default font size for larger screens
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
                "& .MuiInputBase-input": {
                  fontSize: "14px", // Reduced font size for mobile screens
                },
              },
            }}
          />
        );
      case "in":
        return (
          <TextField
            fullWidth
            label="Inches"
            type="number"
            value={height.inchesOnly}
            onChange={(e) =>
              setHeight({ ...height, inchesOnly: e.target.value })
            }
            error={!!error}
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
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <Typography variant="p" fontWeight="500" gutterBottom>
        Height
      </Typography>
      <div className="flex flex-col sm:flex-row gap-4 max-md:gap-2 mt-2 w-full">
        <div className="flex-1">{renderHeightField()}</div>
        <div className="w-full sm:w-40">
          <TextField
            select
            label="Unit"
            fullWidth
            value={height.unit}
            onChange={(e) => setHeight({ ...height, unit: e.target.value })}
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
          >
            <MenuItem value="ft">ft-in</MenuItem>
            <MenuItem value="cm">cm</MenuItem>
            <MenuItem value="in">in</MenuItem>
          </TextField>
        </div>
      </div>
    </div>
  );
});

export default HeightInput;
