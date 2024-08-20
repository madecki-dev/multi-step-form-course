import { createBrowserRouter } from "react-router-dom";
import VerificationForm from "./views/VerificationForm/VerificationForm";
import BusinessStructure from "./views/VerificationForm/BusinessStructure/BusinessStructure";
import BusinessAddress from "./views/VerificationForm/BusinessStructure/Address/BusinessAddress";
import BusinessRepresentative from "./views/VerificationForm/BusinessStructure/Representative/BusinessRepresentative";
import BankDetails from "./views/VerificationForm/BankDetails/BankDetails";
import BusinessDetails from "./views/VerificationForm/BusinessStructure/Details/BusinessDetails";

const routes = [
  {
    path: "/",
    element: <VerificationForm />,
    children: [
      {
        path: "/business-structure",
        element: <BusinessStructure />,
        children: [
          {
            path: "/business-structure",
            element: <BusinessAddress />,
          },
          {
            path: "/business-structure/representative",
            element: <BusinessRepresentative />,
          },
          {
            path: "/business-structure/details",
            element: <BusinessDetails />,
          },
        ],
      },
      {
        path: "/bank-details",
        element: <BankDetails />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
