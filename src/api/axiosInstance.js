import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "https://admin.thiqaaljazera.com/public",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      toast.error(
        "فشل الاتصال: السيرفر لا يستجيب في الوقت المحدد (30 ثانية). يرجى التأكد من تشغيل XAMPP.",
      );
    } else if (error.message === "Network Error") {
      toast.error("خطأ في الشبكة: تأكد من أن السيرفر المحلي (Laravel) يعمل.");
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
