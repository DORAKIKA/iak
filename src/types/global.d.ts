import App from "@/lib/app";

declare namespace astroHTML.JSX {
  interface IntrinsticAttributes {
    [key: string]: any;
  }
}

declare global {
  interface Window {
    IakApp: typeof App;
  }
}
