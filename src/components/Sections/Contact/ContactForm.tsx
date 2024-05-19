"use client";

import DoubleButton from "@/components/Button/DoubleButton";
import Text from "@/components/Text/Text";
import { useScopedI18n } from "@/locales/client";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export default function ContactForm() {
  // const initialFormData = { name: "", email: "", subject: "", message: "" };
  const initialFormData = {
    name: "Pasztor Istvan",
    email: "isticsek@gmail.com",
    subject: "Szia",
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const t = useScopedI18n("contactPage");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const promise = await addDoc(collection(db, "messages"), formData);

      if (promise) {
        setFormData(initialFormData);
        setLoading(false);
      }
    } catch (error) {}
  };

  const labelStyles = "text-dark font-bold cursor-pointer uppercase";
  const inputStyles =
    "rounded-2xl border border-dark bg-white text-dark p-[10px] disabled:opacity-50 w-full outline-none md:hover:border-primaryDark md:focus:border-primaryDark transition-all duration-300";

  return (
    <div className="mt-6">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <Text className="mb-[5px]">
            <label htmlFor="name" className={labelStyles}>
              {t("name")}
            </label>
          </Text>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder={t("namePlaceholder")}
            className={inputStyles}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div>
          <Text className="mb-[5px]">
            <label htmlFor="email" className={labelStyles}>
              {t("email")}
            </label>
          </Text>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder={t("emailPlaceholder")}
            className={inputStyles}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div>
          <Text className="mb-[5px]">
            <label htmlFor="subject" className={labelStyles}>
              {t("subject")}
            </label>
          </Text>
          <input
            required
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            placeholder={t("subjectPlaceholder")}
            className={inputStyles}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div>
          <Text className="mb-[5px]">
            <label htmlFor="message" className={labelStyles}>
              {t("message")}{" "}
            </label>
          </Text>
          <textarea
            required
            id="message"
            name="message"
            placeholder={t("messagePlaceholder")}
            value={formData.message}
            className={inputStyles}
            rows={6}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="w-full">
          <DoubleButton
            type="submit"
            className="border border-primary bg-primary"
            withIcon
          >
            {loading ? t("sending") : t("submit")}
          </DoubleButton>
        </div>
      </form>
    </div>
  );
}
