"use client";

import { useState, useEffect, useRef, FormEvent, useCallback } from "react";
import { contactInfo, brandOptions } from "@/lib/data";
import RevealWrapper from "@/components/RevealWrapper";

function getLocalDatetimeString(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Set default appointment time
  useEffect(() => {
    const input = document.getElementById(
      "appointment"
    ) as HTMLInputElement | null;
    if (input) {
      const formatted = getLocalDatetimeString();
      input.value = formatted;
      input.setAttribute("min", formatted);
    }
  }, []);

  // Handle select floating label
  const onSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value) {
        e.target.classList.add("has-value");
      } else {
        e.target.classList.remove("has-value");
      }
    },
    []
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
      // Remove .has-value from selects after reset
      formRef.current
        ?.querySelectorAll("select.has-value")
        .forEach((s) => s.classList.remove("has-value"));
      // Reset appointment time
      const input = document.getElementById(
        "appointment"
      ) as HTMLInputElement | null;
      if (input) {
        input.value = getLocalDatetimeString();
      }
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <RevealWrapper>
        <div className="section-header">
          <p className="section-label">Private Viewing</p>
          <h2 className="section-title">预约品鉴</h2>
          <div className="section-line" />
          <p className="section-desc">
            私密展厅，一对一专属顾问服务，为您开启非凡座驾之旅。
          </p>
        </div>
      </RevealWrapper>

      <RevealWrapper>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>联系我们</h3>
            {contactInfo.map((item, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-text">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">您的姓名</label>
            </div>
            <div className="form-group">
              <input type="tel" id="phone" placeholder=" " required />
              <label htmlFor="phone">联系电话</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">电子邮箱</label>
            </div>
            <div className="form-group">
              <select
                id="brand"
                defaultValue=""
                required
                onChange={onSelectChange}
              >
                <option value="" disabled>
                  {" "}
                </option>
                {brandOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <label htmlFor="brand">意向品牌</label>
            </div>
            <div className="form-group">
              <input
                type="datetime-local"
                id="appointment"
                placeholder=" "
                required
              />
              <label htmlFor="appointment">预约时间</label>
            </div>
            <div className="form-group">
              <textarea id="message" placeholder=" " required />
              <label htmlFor="message">您的需求</label>
            </div>
            <button
              ref={btnRef}
              type="submit"
              className="btn btn-primary"
              style={
                submitted
                  ? { background: "#4CAF50", width: "100%", marginTop: "1rem" }
                  : { width: "100%", marginTop: "1rem" }
              }
            >
              {submitted ? "✓ 申请已提交" : "提交预约申请"}
            </button>
          </form>
        </div>
      </RevealWrapper>
    </section>
  );
}
