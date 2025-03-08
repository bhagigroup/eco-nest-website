export const formatPrice = (value: number | string): string => {
    if (!value && value !== 0) return ''; // Handle empty values
  
    // Convert value to a float (in case it's a string)
    const number = typeof value === 'string' ? parseFloat(value) : value;
  
    // If the value is NaN or invalid, return empty
    if (isNaN(number)) return '';
  
    // Format number with thousand separators and two decimal places
    const formatted = number.toLocaleString('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  
    // Add rupee symbol at the beginning
    return `₹ ${formatted}`;
  };
  