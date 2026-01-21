import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button, ConfigProvider } from "antd";
import { contactSchema } from "../../Schema/contactSchema.jsx";
import PrimaryButton from "./../ui/PrimaryButton";
import { VscSend } from "react-icons/vsc";
import { useSendMessage } from "../../hooks/contactUs/useSendMessage.js";
import { toast } from "react-toastify";

export default function ContactForm() {
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
        toast.success("تــم الارســـال بنجاح");
        reset();
      },
      onError: () => {
        toast.error("حــدث خطأ اثناء الارسال حاول مرة اخرى ");
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right  w-full"
      >
        <div className="flex flex-col gap-2">
          <label className="text-black font-medium">الاسم بالكامل</label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input {...field} size="large" className="hover:border-primary" />
            )}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black font-medium">رقم الهاتف</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input {...field} size="large" className="hover:border-primary" />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black font-medium">البريد الإلكتروني</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} size="large" className="hover:border-primary" />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="md:col-span-3 flex flex-col gap-2">
          <label className="text-black font-medium">الرسالة</label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                showCount
                maxLength={1000}
                {...field}
                style={{ height: 120, resize: "none" }}
                className="hover:border-primary"
              />
            )}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <div className="md:col-span-3 flex justify-start">
          <PrimaryButton
            text="ارسال"
            htmlType="submit"
            loading={isPending}
            icon={<VscSend size={20} className="rotate-180" />}
          />
        </div>
      </form>
    </ConfigProvider>
  );
}
