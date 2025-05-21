let count = 0;
const counterDisplay = document.getElementById('counter');
const counterLabel = document.getElementById('counter-label');
const bodyElement = document.body;

// Color schemes for different levels
const levels = [
  { min: 0, max: 4, level: 1, name: 'Level 1' },
  { min: 5, max: 9, level: 2, name: 'Level 2' },
  { min: 10, max: 14, level: 3, name: 'Level 3' },
  { min: 15, max: 19, level: 4, name: 'Level 4' },
  { min: 20, max: 24, level: 5, name: 'Level 5' },
  { min: 25, max: 29, level: 6, name: 'Level 6' },
  { min: 30, max: 34, level: 7, name: 'Level 7' },
  { min: 35, max: 39, level: 8, name: 'Level 8' },
  { min: 40, max: 44, level: 9, name: 'Level 9' },
  { min: 45, max: 49, level: 10, name: 'Level 10' },
  { min: 50, max: 54, level: 11, name: 'Level 11' },
  { min: 55, max: 59, level: 12, name: 'Level 12' },
  { min: 60, max: 64, level: 13, name: 'Level 13' },
  { min: 65, max: 69, level: 14, name: 'Level 14' },
  { min: 70, max: 74, level: 15, name: 'Level 15' },
  { min: 75, max: 79, level: 16, name: 'Level 16' },
  { min: 80, max: 84, level: 17, name: 'Level 17' },
  { min: 85, max: 89, level: 18, name: 'Level 18' },
  { min: 90, max: 94, level: 19, name: 'Level 19' },
  { min: 95, max: 99, level: 20, name: 'Level 20' },
  { min: 100, max: 104, level: 21, name: 'Level 21' },
  { min: 105, max: 109, level: 22, name: 'Level 22' },
  { min: 110, max: 114, level: 23, name: 'Level 23' },
  { min: 115, max: 119, level: 24, name: 'Level 24' },
  { min: 120, max: 124, level: 25, name: 'Level 25' },
  { min: 125, max: 129, level: 26, name: 'Level 26' },
  { min: 130, max: 134, level: 27, name: 'Level 27' },
  { min: 135, max: 139, level: 28, name: 'Level 28' },
  { min: 140, max: 144, level: 29, name: 'Level 29' },
  { min: 145, max: 149, level: 30, name: 'Level 30' },
  { min: 150, max: 154, level: 31, name: 'Level 31' },
  { min: 155, max: 159, level: 32, name: 'Level 32' },
  { min: 160, max: 164, level: 33, name: 'Level 33' },
  { min: 165, max: 169, level: 34, name: 'Level 34' },
  { min: 170, max: 174, level: 35, name: 'Level 35' },
  { min: 175, max: 179, level: 36, name: 'Level 36' },
  { min: 180, max: 184, level: 37, name: 'Level 37' },
  { min: 185, max: 189, level: 38, name: 'Level 38' },
  { min: 190, max: 194, level: 39, name: 'Level 39' },
  { min: 195, max: 199, level: 40, name: 'Level 40' },
];

// Expanded color palette (60 colors total)
const colorPalette = {
  // Original colors
  0: { primary: '#121212', glow: 'rgba(20, 20, 20, 0.4)', bg: '#000000' }, // Dark theme for zero
  1: { primary: '#ff7f50', glow: 'rgba(255, 127, 80, 0.4)' }, // Coral for level 1
  5: { primary: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' },
  10: { primary: '#10b981', glow: 'rgba(16, 185, 129, 0.4)' },
  15: { primary: '#9333ea', glow: 'rgba(147, 51, 234, 0.4)' },
  20: { primary: '#0284c7', glow: 'rgba(2, 132, 199, 0.4)' },
  25: { primary: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' },
  30: { primary: '#f43f5e', glow: 'rgba(244, 63, 94, 0.4)' },
  35: { primary: '#22c55e', glow: 'rgba(34, 197, 94, 0.4)' },
  40: { primary: '#1e40af', glow: 'rgba(30, 64, 175, 0.4)' },
  45: { primary: '#be185d', glow: 'rgba(190, 24, 93, 0.4)' },
  50: { primary: '#65a30d', glow: 'rgba(101, 163, 13, 0.4)' },
  55: { primary: '#2563eb', glow: 'rgba(37, 99, 235, 0.4)' },
  60: { primary: '#ea580c', glow: 'rgba(234, 88, 12, 0.4)' },
  65: { primary: '#0f766e', glow: 'rgba(15, 118, 110, 0.4)' },
  70: { primary: '#374151', glow: 'rgba(55, 65, 81, 0.4)' },
  75: { primary: '#e11d48', glow: 'rgba(225, 29, 72, 0.4)' },
  80: { primary: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' },
  85: { primary: '#fb923c', glow: 'rgba(251, 146, 60, 0.4)' },
  90: { primary: '#581c87', glow: 'rgba(88, 28, 135, 0.4)' },
  95: { primary: '#d946ef', glow: 'rgba(217, 70, 239, 0.4)' },
  100: { primary: '#f43f5e', glow: 'rgba(244, 63, 94, 0.4)' },
  105: { primary: '#0891b2', glow: 'rgba(8, 145, 178, 0.4)' },
  110: { primary: '#b7791f', glow: 'rgba(183, 121, 31, 0.4)' },
  115: { primary: '#4ade80', glow: 'rgba(74, 222, 128, 0.4)' },
  120: { primary: '#3b82f6', glow: 'rgba(59, 130, 246, 0.4)' },
  125: { primary: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' },
  130: { primary: '#ec4899', glow: 'rgba(236, 72, 153, 0.4)' },
  135: { primary: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)' },
  140: { primary: '#84cc16', glow: 'rgba(132, 204, 22, 0.4)' },
  145: { primary: '#eab308', glow: 'rgba(234, 179, 8, 0.4)' },
  150: { primary: '#14b8a6', glow: 'rgba(20, 184, 166, 0.4)' },

  // New additional colors (20 more)
  155: { primary: '#6366f1', glow: 'rgba(99, 102, 241, 0.4)' }, // Indigo
  160: { primary: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' }, // Violet
  165: { primary: '#d946ef', glow: 'rgba(217, 70, 239, 0.4)' }, // Fuchsia
  170: { primary: '#f472b6', glow: 'rgba(244, 114, 182, 0.4)' }, // Pink
  175: { primary: '#fb7185', glow: 'rgba(251, 113, 133, 0.4)' }, // Rose
  180: { primary: '#fca5a5', glow: 'rgba(252, 165, 165, 0.4)' }, // Light Red
  185: { primary: '#fdba74', glow: 'rgba(253, 186, 116, 0.4)' }, // Light Orange
  190: { primary: '#fde047', glow: 'rgba(253, 224, 71, 0.4)' }, // Light Yellow
  195: { primary: '#bef264', glow: 'rgba(190, 242, 100, 0.4)' }, // Light Lime
  200: { primary: '#86efac', glow: 'rgba(134, 239, 172, 0.4)' }, // Light Green
  205: { primary: '#5eead4', glow: 'rgba(94, 234, 212, 0.4)' }, // Light Teal
  210: { primary: '#67e8f9', glow: 'rgba(103, 232, 249, 0.4)' }, // Light Cyan
  215: { primary: '#93c5fd', glow: 'rgba(147, 197, 253, 0.4)' }, // Light Blue
  220: { primary: '#a5b4fc', glow: 'rgba(165, 180, 252, 0.4)' }, // Light Indigo
  225: { primary: '#c4b5fd', glow: 'rgba(196, 181, 253, 0.4)' }, // Light Purple
  230: { primary: '#e9d5ff', glow: 'rgba(233, 213, 255, 0.4)' }, // Light Violet
  235: { primary: '#0d9488', glow: 'rgba(13, 148, 136, 0.4)' }, // Deep Teal
  240: { primary: '#4338ca', glow: 'rgba(67, 56, 202, 0.4)' }, // Deep Indigo
  245: { primary: '#db2777', glow: 'rgba(219, 39, 119, 0.4)' }, // Deep Pink
  250: { primary: '#16a34a', glow: 'rgba(22, 163, 74, 0.4)' }, // Deep Green
};

// Get all available color levels as an array
const colorLevels = Object.keys(colorPalette).map((level) => parseInt(level));

// Function to get appropriate color for the current count
function getColorForCount(currentCount) {
  // If we have an exact match in our color palette
  if (colorPalette[currentCount]) {
    return colorPalette[currentCount];
  }

  // Find the closest color level below the current count
  const closestLevel = colorLevels
    .filter((level) => level <= currentCount)
    .sort((a, b) => b - a)[0];

  // If we found a level, return its color
  if (closestLevel !== undefined) {
    return colorPalette[closestLevel];
  }

  // Default to the level 1 color if no match found
  return colorPalette[1];
}

// Function to update the UI based on the count
function updateUI() {
  // Update the counter display
  counterDisplay.textContent = count;

  // Get the appropriate color for current count
  const currentColor = getColorForCount(count);

  // Determine the current level
  let currentLevel = null;
  for (const level of levels) {
    if (count >= level.min && count <= level.max) {
      currentLevel = level;
      break;
    }
  }

  // Update level label
  if (currentLevel) {
    counterLabel.textContent = currentLevel.name;
  } else if (count > levels[levels.length - 1].max) {
    counterLabel.textContent = `Master Level ${count}`;
  } else {
    counterLabel.textContent = 'Level 0';
  }

  // Apply the color to the UI
  document.documentElement.style.setProperty(
    '--current-primary',
    currentColor.primary
  );
  document.documentElement.style.setProperty(
    '--current-bg',
    currentColor.bg || '#f8fafc'
  );
  document.documentElement.style.setProperty(
    '--current-glow',
    currentColor.glow
  );

  // Add special transition effect when level changes (every 5 counts)
  if (count % 5 === 0 && count > 0) {
    counterDisplay.classList.add('level-up');

    // Remove animation class after it completes
    setTimeout(() => {
      counterDisplay.classList.remove('level-up');
    }, 700);
  }
}

// Increment function
function increment() {
  count++;
  updateUI();
}

// Decrement function - prevents going below 0
function decrement() {
  if (count > 0) {
    count--;
    updateUI();
  }
}

// Reset function
function reset() {
  count = 0;
  updateUI();
}

// Add keydown event listeners for keyboard control
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    increment();
  } else if (event.key === 'ArrowDown') {
    decrement();
  } else if (event.key === 'r' || event.key === 'R') {
    reset();
  }
});

// Initialize UI
updateUI();
