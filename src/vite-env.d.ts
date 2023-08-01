/// <reference types="vite/client" />
import { React } from 'react';

declare module 'react-dom' {
  interface Root {
    render(element: React.ReactElement): void;
    unmount(): void;
  }

  function createRoot(
    container: Element | Document | ShadowRoot | DocumentFragment | null,
    options?: { hydrate?: boolean }
  ): Root;
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string;
  }
}
