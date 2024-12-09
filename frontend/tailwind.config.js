module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 15px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.7)',
        glowGrow: '0 0 20px rgba(255, 99, 71, 0.8), 0 0 40px rgba(255, 99, 71, 0.6)',
      },
      colors: {
        neon: '#39FF14', // Neon green color
        neonOrange: '#FF6347', // Tomato red for the "fruit" feel
        neonYellow: '#FFEB3B', // Vibrant yellow for fruit like bananas
      },
      animation: {
        pulse: 'pulse 1s infinite',
      },
    },
  },
  plugins: [],
}
