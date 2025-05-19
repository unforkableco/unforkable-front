import { useState, useEffect } from 'react';
import contentData from '../data/content.json';

// Define the content structure to match our JSON
export interface Content {
  hero: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
  about: {
    overline: string;
    title: string;
    description: string;
    benefits: string[];
  };
  services: {
    overline: string;
    title: string;
    services: {
      title: string;
      description: string;
    }[];
  };
  projects: {
    overline: string;
    title: string;
    projects: {
      title: string;
      description: string;
      technologies: string[];
      logoSrc: string;
    }[];
    capabilities: {
      title: string;
      items: string[];
    };
  };
  social: {
    links: {
      platform: string;
      url: string;
      label: string;
    }[];
  };
  contact: {
    overline: string;
    title: string;
    description: string;
    formLabels: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submitButton: string;
    };
    contactInfo: {
      title: string;
      value: string;
    }[];
  };
  footer: {
    about: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      links: string[];
    };
    legal: {
      title: string;
      links: string[];
    };
    copyright: string;
  };
}

/**
 * Custom hook to access website content
 */
const useContent = (): Content => {
  const [content, setContent] = useState<Content>(contentData as Content);

  // This effect could be used to fetch content from an API in the future
  useEffect(() => {
    // For now, we're using the static JSON import
    // But this could be extended to fetch from a CMS or API
    setContent(contentData as Content);
  }, []);

  return content;
};

export default useContent; 