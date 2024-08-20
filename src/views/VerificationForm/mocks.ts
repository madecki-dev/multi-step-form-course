import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const API_URL = process.env.REACT_APP_API_URL!;

export const ENDPOINTS = {
  BUSINESS_ADDRESS: `${API_URL}/verification/business-address`,
};

export const worker = setupWorker(
  http.post(ENDPOINTS.BUSINESS_ADDRESS, () => {
    setTimeout(() => {
      return HttpResponse.json(
        {
          message: "Mocked response",
        },
        {
          status: 202,
          statusText: "Mocked status",
        }
      );
    }, 2000);
  })
);
