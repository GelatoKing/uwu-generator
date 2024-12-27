# UwU Meme Generator

A React-based meme generator that overlays cute "uwu" style emojis on uploaded images. Perfect for creating kawaii memes and adding playful decorations to your pictures! ✨

## Features

- Image upload and processing
- Random emoji placement with varying sizes and rotations
- Adjustable emoji density control
- Mobile-responsive design
- Built with React and Tailwind CSS
- Uses shadcn/ui components for a modern look

## Dependencies

- React
- @shadcn/ui components
- Lucide React (for icons)
- Tailwind CSS

## Installation

1. First, ensure you have the required shadcn/ui components:

```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add button
```

2. Copy the component code into your project
3. Import and use the component:

```jsx
import { UwuMemeGenerator } from './components/UwuMemeGenerator';

function App() {
  return (
    <div>
      <UwuMemeGenerator />
    </div>
  );
}
```

## Usage

1. **Upload an Image**
   - Click the "Upload Image" button
   - Select any image file from your device
   - The image will automatically be resized to fit the canvas

2. **Adjust Emoji Density**
   - Use the slider to control how many emojis appear
   - Range: 10% to 100%
   - Higher density means more emojis

3. **Generate Memes**
   - Click "Regenerate Emojis" to create new emoji arrangements
   - Each generation creates a unique pattern
   - Right-click on the canvas to save your creation

## Component Props

The component currently doesn't require any props, but can be extended to accept:

- `initialDensity`: Number (10-100)
- `customEmojis`: Array of strings
- `canvasSize`: { width: number, height: number }

## Emoji Set

Current emoji set includes:
```javascript
[
  '👉👈', '🥺', '✨', '🦄', '💖', '💝', '💕', '💫', 
  '🌸', '✿', '🥰', '😳', '👀', '💅', '🌟', '⭐', 
  '🎀', '🌺', '🍡', '🌈'
]
```

## Technical Details

### Canvas Operations

The component uses HTML Canvas for rendering:
- Maintains aspect ratio of uploaded images
- Centers images in the canvas
- Applies random rotations to emojis
- Handles dynamic emoji sizing

### Image Processing

- Automatically scales images to fit the canvas
- Preserves aspect ratio
- Supports common image formats (PNG, JPG, GIF)

## Customization

### Styling

The component uses Tailwind CSS classes and can be customized by modifying:
- Card styles
- Button colors
- Canvas border
- Background colors

### Adding Custom Emoji Sets

Modify the `uwuEmojis` array in the component to add or change emojis:

```javascript
const uwuEmojis = [
  // Add your custom emojis here
];
```

## Browser Support

Supports all modern browsers with HTML5 Canvas support:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

Possible improvements:
- Draggable emoji positioning
- Custom emoji themes
- Image filters and effects
- Text overlay support
- Save/load functionality
- Animation effects

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use in your own projects!
