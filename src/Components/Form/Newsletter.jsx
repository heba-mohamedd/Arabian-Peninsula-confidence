import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, ConfigProvider } from "antd";
import { MdOutlineMailOutline } from "react-icons/md";
import PrimaryButton from "./../ui/PrimaryButton";
import { useEnterEmailQuery } from "../../hooks/contactUs/useEnterEmailQuery";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export function Newsletter() {
  const { t } = useTranslation();

  const newsletterSchema = yup.object().shape({
    email: yup.string().email(t("Invalid Email")),
  });

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
        toast.success(t("Message Sent Success"));
        reset();
      },
      onError: (error) => {
        const serverMessage =
          error?.response?.data?.message || t("Message Sent Error");
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
    py-12 px-6 w-full
    overflow-hidden
"
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
          {/* Text Side */}
          <div className="text-white text-start">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              {t("Stay Updated")}
            </p>
            <p className="text-light-grey text-sm md:text-base leading-relaxed">
              {t("Newsletter Description")}
            </p>
          </div>

          {/* Input & Button */}
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
                      placeholder={t("Enter Email Placeholder")}
                      status={error ? "error" : ""}
                      prefix={
                        <MdOutlineMailOutline className="text-light-grey text-xl mx-2" />
                      }
                      className="custom-input bg-transparent [&_input]:!text-white w-full md:w-[300px] [&_input]:placeholder:!text-gray-400 text-white"
                    />
                  </>
                )}
              />
              <PrimaryButton
                text={t("Send")}
                htmlType="submit"
                loading={isPending}
              />
            </div>
            {/* Error Message */}
            {errors.email && (
              <p className="text-red-500 text-sm text-start px-2 animate-pulse">
                {errors.email.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </ConfigProvider>
  );
}
