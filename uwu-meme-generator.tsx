import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Upload } from 'lucide-react';

const UwuMemeGenerator = () => {
  const [density, setDensity] = useState(50);
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const uwuEmojis = [
    '👉👈', '🥺', '✨', '🦄', '💖', '💝', '💕', '💫', '🌸', '✿',
    '🥰', '😳', '👀', '💅', '🌟', '⭐', '🎀', '🌺', '🍡', '🌈'
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setUploadedImage(img);
          generateMeme(img);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const generateMeme = (imageObj = uploadedImage) => {
    if (!imageObj) return;
    
    setIsGenerating(true);
    const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate aspect ratio and fit image to canvas
    const scale = Math.min(
      canvas.width / imageObj.width,
      canvas.height / imageObj.height
    );
    const x = (canvas.width - imageObj.width * scale) / 2;
    const y = (canvas.height - imageObj.height * scale) / 2;
    
    // Draw background image
    ctx.drawImage(
      imageObj,
      x, y,
      imageObj.width * scale,
      imageObj.height * scale
    );
    
    // Add emojis
    const numEmojis = Math.floor((density / 100) * 50);
    
    for (let i = 0; i < numEmojis; i++) {
      const emoji = uwuEmojis[Math.floor(Math.random() * uwuEmojis.length)];
      const posX = Math.random() * canvas.width;
      const posY = Math.random() * canvas.height;
      const rotation = (Math.random() - 0.5) * 0.5;
      const size = Math.random() * 30 + 20; // Slightly larger size range

      ctx.save();
      ctx.translate(posX, posY);
      ctx.rotate(rotation);
      ctx.font = `${size}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, 0, 0);
      ctx.restore();
    }
    
    setIsGenerating(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          UwU Meme Generator <Sparkles className="text-pink-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center gap-4">
          <canvas 
            id="memeCanvas" 
            width="400" 
            height="400" 
            className="border-4 border-pink-200 rounded-lg bg-pink-50"
          />
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          
          <div className="flex gap-2">
            <Button
              onClick={triggerFileInput}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Upload className="mr-2 h-4 w-4" /> Upload Image
            </Button>
            
            <Button
              onClick={() => generateMeme()}
              disabled={isGenerating || !uploadedImage}
              className="bg-pink-400 hover:bg-pink-500 text-white"
            >
              {isGenerating ? 'Generating...' : 'Regenerate Emojis ✨'}
            </Button>
          </div>

          <div className="w-full max-w-sm space-y-2">
            <label className="block text-sm font-medium">
              Emoji Density: {density}%
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={density}
              onChange={(e) => setDensity(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UwuMemeGenerator;
