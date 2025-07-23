import React from 'react';

/**
 * SEO-optimized image component with lazy loading
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for the image (important for SEO)
 * @param {string} title - Optional title attribute
 * @param {string} width - Optional width
 * @param {string} height - Optional height
 * @param {string} className - Optional CSS classes
 * @param {Object} imgProps - Any additional image props
 */
const ImageWithSeo = ({ 
  src, 
  alt, 
  title,
  width,
  height,
  className = '',
  structuredData,
  ...imgProps 
}) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        className={className}
        loading="lazy" // Lazy load images for better performance
        {...imgProps}
      />
      
      {/* Add structured data for images when provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "contentUrl": src,
            "name": alt,
            "description": alt,
            ...structuredData
          })}
        </script>
      )}
    </>
  );
};

export default ImageWithSeo; 