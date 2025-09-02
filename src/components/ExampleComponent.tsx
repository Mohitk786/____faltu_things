import React from 'react';

// Example component showing different ways to use CSS variables
export default function ExampleComponent() {
  return (
    <div className="p-8 space-y-6">
      {/* Method 1: Using Tailwind classes that reference your CSS variables */}
      <div className="bg-background text-foreground p-6 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Using Tailwind Classes
        </h2>
        <p className="text-muted-foreground">
          This uses Tailwind classes that automatically reference your CSS variables:
          bg-background, text-foreground, border-border, text-primary, etc.
        </p>
      </div>

      {/* Method 2: Using inline styles with CSS variables */}
      <div 
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--card-foreground)',
          padding: 'var(--spacing)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)',
          fontFamily: 'var(--font-sans)'
        }}
        className="p-6"
      >
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
          Using Inline Styles
        </h2>
        <p style={{ color: 'var(--muted-foreground)' }}>
          This uses inline styles with CSS variables: var(--card), var(--radius), etc.
        </p>
      </div>

      {/* Method 3: Using CSS modules or styled components */}
      <div className="custom-styled-component p-6">
        <h2 className="text-2xl font-bold mb-4">Custom Styled Component</h2>
        <p>This uses a custom CSS class that references your variables.</p>
      </div>

      {/* Method 4: Dynamic theming example */}
      <div className="bg-secondary text-secondary-foreground p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Theme Switching</h2>
        <p>
          This component automatically adapts to light/dark themes using your CSS variables.
          The colors will change when you switch between themes.
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--chart-1)' }}></div>
            <span>Chart Color 1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--chart-2)' }}></div>
            <span>Chart Color 2</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--chart-3)' }}></div>
            <span>Chart Color 3</span>
          </div>
        </div>
      </div>

      {/* Method 5: Using CSS variables for spacing and shadows */}
      <div 
        className="p-6 rounded-lg"
        style={{
          backgroundColor: 'var(--popover)',
          color: 'var(--popover-foreground)',
          boxShadow: 'var(--shadow-lg)',
          margin: 'var(--spacing)',
          letterSpacing: 'var(--tracking-wide)'
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Advanced Usage</h2>
        <p>
          This demonstrates using variables for shadows, spacing, and typography.
          The shadow and spacing will automatically adjust based on your theme.
        </p>
      </div>
    </div>
  );
}
