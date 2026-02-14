import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Select, ConfigProvider } from "antd";
import { requestQuoteSchema } from "../../Schema/requestQuoteSchema.jsx";
import { VscSend } from "react-icons/vsc";
import PrimaryButton from "../ui/PrimaryButton.jsx";
import { useSendOffer } from "../../hooks/contactUs/useSendOffer.js";
import { toast } from "react-toastify";
import { useBudgetQuery } from "../../hooks/contactUs/useBudgetData.js";
import { useTranslation } from "react-i18next";

export function RequestQuoteForm() {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(requestQuoteSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      serviceType: "",
      budget: "",
      projectDescription: "",
    },
  });
  const { data: budgetData, isLoading } = useBudgetQuery();
  const { mutate: sendOffer, isPending } = useSendOffer();

  const budgetOptions =
    budgetData?.data?.map((item) => ({
      value: item.id,
      label: item.label,
    })) || [];

  const onSubmit = (data) => {
    sendOffer(data, {
      onSuccess: () => {
        toast.success(t("Message Sent Success"));
        reset();
      },
      onError: () => {
        toast.error(t("Message Sent Error"));
      },
    });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00963F",
          colorPrimaryHover: "#007a33",
          controlOutline: "rgba(0, 150, 63, 0.1)",
          borderRadius: 4,
        },
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-start w-full p-6"
      >
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            {t("Full Name")}
          </label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => <Input {...field} size="large" />}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            {t("Entity Name Label")}
          </label>
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => <Input {...field} size="large" />}
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs">{errors.companyName.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            {t("Phone Number Label")}
          </label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <Input {...field} size="large" />}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            {t("Email Label")}
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} size="large" />}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Service Type */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            {t("Service Type Label")}
          </label>
          <Controller
            name="serviceType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                size="large"
                options={[
                  { value: "financial", label: t("Financial Statements") },
                  { value: "facility", label: t("Facility Management Service") },
                  { value: "integration", label: t("System Integration") },
                ]}
              />
            )}
          />
          {errors.serviceType && (
            <p className="text-red-500 text-xs">{errors.serviceType.message}</p>
          )}
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            {t("Estimated Budget Label")}
          </label>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                size="large"
                placeholder={t("Choose Budget")}
                loading={isLoading}
                options={budgetOptions}
              />
            )}
          />
          {errors.budget && (
            <p className="text-red-500 text-xs">{errors.budget.message}</p>
          )}
        </div>

        {/* Project Description */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            {t("Project Description Label")}
          </label>
          <Controller
            name="projectDescription"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                showCount
                maxLength={1000}
                style={{ height: 120, resize: "none" }}
              />
            )}
          />
          {errors.projectDescription && (
            <p className="text-red-500 text-xs">
              {errors.projectDescription.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <PrimaryButton
            text={t("Send Quote Request")}
            htmlType="submit"
            loading={isPending}
            icon={<VscSend size={20} className="rtl:rotate-180" />}
          />
        </div>
      </form>
    </ConfigProvider>
  );
}
