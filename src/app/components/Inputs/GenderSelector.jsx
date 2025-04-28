import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function GenderSelector({ selectedGender, setSelectedGender }) {
  const handleChange = (event, newGender) => {
    if (newGender !== null) {
      setSelectedGender(newGender);
    }
  };

  return (
    <div className="w-full">
      <Typography variant="subtitle1" fontWeight="600" gutterBottom>
        Gender
      </Typography>

      <div className="flex w-full justify-center">
        <ToggleButtonGroup
          value={selectedGender}
          exclusive
          onChange={handleChange}
          aria-label="gender selection"
          className="w-full flex justify-center"
        >
          <ToggleButton
            value="male"
            aria-label="male"
            className="flex-1 min-w-[100px]"
          >
            Male
          </ToggleButton>
          <ToggleButton
            value="female"
            aria-label="female"
            className="flex-1 min-w-[100px]"
          >
            Female
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
