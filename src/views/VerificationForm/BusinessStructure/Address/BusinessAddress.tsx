import Input from "../../../../components/Input";
import {
  AccountVerificationForm,
  Fieldset,
  FormSectionHeading,
} from "../../VerificationFormItems";
import Button from "../../../../components/Button";
import useTableOfContent from "../../../../components/TableOfContent/useTableOfContent";
import { useForm } from "react-hook-form";

type BusinessAddressFields = {
  registeredBusinessAddress: string;
  typeOfBusiness: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  zip: string;
};

export default function BusinessAddress() {
  const { register, handleSubmit } = useForm<BusinessAddressFields>({
    defaultValues: JSON.parse(localStorage.getItem("businessAddress") || "{}"),
  });
  const { proceed } = useTableOfContent();

  const submitAndProceed = (formData: BusinessAddressFields) => {
    localStorage.setItem("businessAddress", JSON.stringify(formData));
    proceed(true);
  };

  return (
    <AccountVerificationForm onSubmit={handleSubmit(submitAndProceed)}>
      <Fieldset>
        <FormSectionHeading>Business Address</FormSectionHeading>
        <Input
          label="Registered business address"
          placeholder="Registered business address"
          required
          {...register("registeredBusinessAddress")}
        />
      </Fieldset>

      <Fieldset>
        <FormSectionHeading>Type</FormSectionHeading>
        <Input
          label="Type of business"
          placeholder="Type of business"
          required
          {...register("typeOfBusiness")}
        />
      </Fieldset>

      <Fieldset>
        <FormSectionHeading>Address</FormSectionHeading>
        <Input
          label="Address line 1"
          placeholder="Address line 1"
          required
          {...register("addressLine1")}
        />
        <Input
          label="Address line 2"
          placeholder="Address line 2"
          required
          {...register("addressLine2")}
        />
        <Input label="City" placeholder="City" required {...register("city")} />
        <Input label="Zip" placeholder="Zip" required {...register("zip")} />
      </Fieldset>

      <Button>Continue</Button>
    </AccountVerificationForm>
  );
}
