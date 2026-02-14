import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button, ConfigProvider } from "antd";
import { contactSchema } from "../../Schema/contactSchema.jsx";
import PrimaryButton from "./../ui/PrimaryButton";
import { VscSend } from "react-icons/vsc";
import { useSendMessage } from "../../hooks/contactUs/useSendMessage.js";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export function ContactForm() {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  const { mutate: sendMessage, isPending } = useSendMessage();

  const onSubmit = (data) => {
    sendMessage(data, {
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
          borderRadius: 4,
        },
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start w-full p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
      >
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">{t("Full Name")}</label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input {...field} size="large" className="hover:border-primary py-2.5 rounded-lg" placeholder={t("Name Placeholder")} />
            )}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">{t("Phone Number Label")}</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input {...field} size="large" className="hover:border-primary py-2.5 rounded-lg" placeholder={t("Phone Placeholder")} />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">{t("Email Label")}</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} size="large" className="hover:border-primary py-2.5 rounded-lg" placeholder={t("Email Placeholder Form")} />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">{t("Message Label")}</label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                showCount
                maxLength={1000}
                {...field}
                style={{ height: 120, resize: "none" }}
                className="hover:border-primary rounded-lg"
                placeholder={t("Message Placeholder")}
              />
            )}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="md:col-span-2 flex justify-start pt-2">
          <PrimaryButton
            text={t("Send Message")}
            htmlType="submit"
            loading={isPending}
            icon={<VscSend size={18} className="rtl:rotate-180" />}
            className="w-full md:w-auto px-8"
          />
        </div>
      </form>
    </ConfigProvider>
  );
}
