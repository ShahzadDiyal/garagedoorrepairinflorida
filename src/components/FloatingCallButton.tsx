/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';

export const FloatingCallButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Track starting coords to distinguish clicks from drags
  const dragStartPos = useRef({ x: 0, y: 0, screenX: 0, screenY: 0 });
  const dragHasMoved = useRef(false);

  // Initialize position in bottom right
  useEffect(() => {
    const handleInitialPosition = () => {
      const padding = 24;
      const btnWidth = 60;
      const btnHeight = 60;
      setPosition({
        x: window.innerWidth - btnWidth - padding,
        y: window.innerHeight - btnHeight - padding
      });
    };

    handleInitialPosition();
    window.addEventListener('resize', handleInitialPosition);
    return () => window.removeEventListener('resize', handleInitialPosition);
  }, []);

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    dragStartPos.current = {
      x: position.x - clientX,
      y: position.y - clientY,
      screenX: clientX,
      screenY: clientY
    };
    dragHasMoved.current = false;
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    
    // Check if dragging has exceeded threshold to prevent false-click suppression
    const moveDist = Math.max(
      Math.abs(clientX - dragStartPos.current.screenX),
      Math.abs(clientY - dragStartPos.current.screenY)
    );
    if (moveDist > 6) {
      dragHasMoved.current = true;
    }

    const padding = 16;
    const btnWidth = 60;
    const btnHeight = 60;

    let nextX = clientX + dragStartPos.current.x;
    let nextY = clientY + dragStartPos.current.y;

    // Boundaries
    const minX = padding;
    const maxX = window.innerWidth - btnWidth - padding;
    const minY = padding;
    const maxY = window.innerHeight - btnHeight - padding;

    if (nextX < minX) nextX = minX;
    if (nextX > maxX) nextX = maxX;
    if (nextY < minY) nextY = minY;
    if (nextY > maxY) nextY = maxY;

    setPosition({ x: nextX, y: nextY });
  };

  const handleEnd = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false);
    
    // If the movement was negligible, treat it strictly as a click
    if (!dragHasMoved.current) {
      window.location.href = 'tel:8005550199';
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Drag handlers for desktop
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only left-click
    handleStart(e.clientX, e.clientY);
  };

  // Drag handlers for mobile
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    const onMouseUp = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
        // If it barely moved, navigate to tel:
        const moveDist = Math.max(
          Math.abs(e.clientX - dragStartPos.current.screenX),
          Math.abs(e.clientY - dragStartPos.current.screenY)
        );
        if (moveDist <= 6) {
          window.location.href = 'tel:8005550199';
        }
      }
    };

    const onTouchEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, position]);

  return (
    <div
      ref={buttonRef}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
      }}
      className={`select-none draggable-touch-none ${isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab hover:scale-105'} transition-transform duration-150`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchEnd={handleEnd}
    >
      <div className="relative group">
        {/* Glowing ring animation with blue-700 brand glow */}
        <span className="absolute -inset-1.5 bg-blue-600 rounded-full opacity-60 blur-md group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-ping" />
        
        <div className="relative w-15 h-15 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(29,78,216,0.5)] hover:shadow-[0_12px_30px_rgba(29,78,216,0.6)] border border-white/20">
          <Phone className="w-7 h-7 fill-white stroke-white animate-bounce" />
        </div>

        {/* Small operational tooltip tag */}
        <div className="absolute right-18 top-4.5 bg-slate-900 border border-slate-700 text-white font-semibold text-[10px] uppercase tracking-wider py-1 px-2.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md hidden sm:block">
          Emergency Dispatch
        </div>
      </div>
    </div>
  );
};
