import React from 'react';
import './BlogLayout.css';

export default function BlogLayout({children}) {
  return (
    <div className="blogLayout">
      {children}
    </div>
  )
}
