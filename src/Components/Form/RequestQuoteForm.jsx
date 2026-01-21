import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Select, ConfigProvider } from "antd";
import { requestQuoteSchema } from "../../Schema/requestQuoteSchema.jsx"; // تأكد من إنشاء السكيما المناسبة
import { VscSend } from "react-icons/vsc";
import PrimaryButton from "../ui/PrimaryButton.jsx";
import { useSendOffer } from "../../hooks/contactUs/useSendOffer.js";
import { toast } from "react-toastify";

export default function RequestQuoteForm() {
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

  const { mutate: sendOffer, isPending } = useSendOffer();

  const onSubmit = (data) => {
    sendOffer(data, {
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
          colorPrimaryHover: "#007a33",
          controlOutline: "rgba(0, 150, 63, 0.1)",
          borderRadius: 4,
        },
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-right w-full p-6"
        dir="rtl"
      >
        {/* الاسم بالكامل */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            الاسم بالكامل
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

        {/* اسم الجهة / الشراكة */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            اسم الجهة / الشراكة
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

        {/* رقم الهاتف */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            رقم الهاتف
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

        {/* البريد الإلكتروني */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            البريد الالكتروني
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

        {/* نوع الخدمة */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            نوع الخدمة
          </label>
          <Controller
            name="serviceType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                size="large"
                options={[
                  { value: "financial", label: "القوائم الماليه" },
                  { value: "facility", label: "اداره المرافق" },
                  { value: "integration", label: "تكامل الانظمه" },
                ]}
              />
            )}
          />
          {errors.serviceType && (
            <p className="text-red-500 text-xs">{errors.serviceType.message}</p>
          )}
        </div>

        {/* الميزانية التقديرية */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            الميزانية التقديرية
          </label>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                size="large"
                options={[
                  { value: "small", label: "1,000 - 5,000" },
                  { value: "medium", label: "5,000 - 10,000" },
                  { value: "large", label: "أكثر من 10,000" },
                ]}
              />
            )}
          />
          {errors.budget && (
            <p className="text-red-500 text-xs">{errors.budget.message}</p>
          )}
        </div>

        {/* وصف المشروع */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-gray-700 font-medium text-sm">
            وصف المشروع الخاص بك
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

        {/* زر الإرسال */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <PrimaryButton
            text="ارسال طلب السعر"
            htmlType="submit"
            loading={isPending}
            icon={<VscSend size={20} className="rotate-180" />}
          />
        </div>
      </form>
    </ConfigProvider>
  );
}
