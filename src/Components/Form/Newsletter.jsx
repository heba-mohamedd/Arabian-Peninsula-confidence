import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, ConfigProvider } from "antd";
import { MdOutlineMailOutline } from "react-icons/md"; // أيقونة البريد
import PrimaryButton from "./../ui/PrimaryButton";
import { useEnterEmailQuery } from "../../hooks/contactUs/useEnterEmailQuery";
import * as yup from "yup";
import { toast } from "react-toastify";

const newsletterSchema = yup.object().shape({
  email: yup.string().email("بريد غير صحيح"),
});

export default function Newsletter() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newsletterSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const { mutate: enterEmail, isPending } = useEnterEmailQuery();

  const onSubmit = (data) => {
    enterEmail(data.email, {
      onSuccess: () => {
        toast.success("تــم الارســـال بنجاح");
        reset();
      },
      onError: (error) => {
        const serverMessage =
          error?.response?.data?.message ||
          "حــدث خطأ اثناء الارسال حاول مرة اخرى";
        toast.error(serverMessage);
      },
    });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00963F",
          borderRadius: 8,
        },
      }}
    >
      <section
        className=" relative
    bg-secondary
    py-12 px-6 mx-4 w-full
    overflow-hidden
"
        dir="rtl"
      >
        <div
          className="
      pointer-events-none
      absolute inset-y-0 left-0
      w-full
      bg-gradient-to-r
      from-[#00963F55]
      via-[#00963F22]
      to-transparent
    "
        />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* النصوص جهة اليمين */}
          <div className="text-white text-right">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              ابقَ على اطلاع
            </p>
            <p className="text-light-grey text-sm md:text-base leading-relaxed">
              اشترك ليصلك آخر المستجدات المتعلقة بخدماتنا،{" "}
              <br className="hidden md:block" />
              المشاريع، والتحديثات التشغيلية ذات الصلة.
            </p>
          </div>

          {/* حقل الإدخال والزر */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-auto flex flex-col gap-2"
          >
            <div className="flex items-center bg-[#0A1F16] rounded-xl p-1 border border-gray-800">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      {...field}
                      variant="borderless"
                      placeholder="ادخل بريدك الالكتروني"
                      status={error ? "error" : ""}
                      prefix={
                        <MdOutlineMailOutline className="text-light-grey text-xl ml-2" />
                      }
                      className="custom-input bg-transparent [&_input]:!text-white w-full md:w-[300px] [&_input]:placeholder:!text-gray-400 text-white"
                    />
                  </>
                )}
              />
              <PrimaryButton
                text="ارسال"
                htmlType="submit"
                loading={isPending}
              />
            </div>
            {/* Error Message */}
            {errors.email && (
              <p className="text-red-500 text-sm text-right px-2 animate-pulse">
                {errors.email.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </ConfigProvider>
  );
}
