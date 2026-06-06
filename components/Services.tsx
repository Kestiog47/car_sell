import { services } from "@/lib/data";
import RevealWrapper from "@/components/RevealWrapper";

export default function Services() {
  return (
    <section className="services" id="services">
      <RevealWrapper>
        <div className="section-header">
          <p className="section-label">Bespoke Services</p>
          <h2 className="section-title">尊享服务</h2>
          <div className="section-line" />
          <p className="section-desc">
            从选车到交付，我们提供全方位的尊贵服务体验。
          </p>
        </div>
      </RevealWrapper>

      <div className="services-grid">
        {services.map((svc, i) => (
          <RevealWrapper key={i}>
            <div className="service-card">
              <span className="service-icon">{svc.icon}</span>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
