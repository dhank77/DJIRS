import '../css/app.css'

import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import axios from "axios";

const pages = import.meta.glob("./pages/**/*.jsx");

document.addEventListener("DOMContentLoaded", () => {
  const csrfToken = document.querySelector("meta[name=csrf-token]").content;
  axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

  createInertiaApp({
    resolve: async (name) => {
      const page = (await pages[`./pages/${name}.jsx`]()).default;

      return page;
    },
    setup({ el, App, props }) {
      if (import.meta.env.DEV) {
        createRoot(el).render(<App {...props} />);
        return;
      }

      hydrateRoot(el, <App {...props} />);
    },
    progress: {
      color: '#4B5563',
    },
  });
});
