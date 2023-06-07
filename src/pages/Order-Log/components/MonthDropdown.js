import React from 'react';
import { Select, Box } from '@chakra-ui/react';

const MonthDropdown = () => {
  const months = [
    { label: 'January', value: 'jan' },
    { label: 'February', value: 'feb' },
    { label: 'March', value: 'mar' },
    // Add more months...
  ];

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    console.log('Selected Month:', selectedMonth);
  };

  return (
    <Box width="200px">
      <Select placeholder="Select a month" onChange={handleMonthChange}>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default MonthDropdown;




