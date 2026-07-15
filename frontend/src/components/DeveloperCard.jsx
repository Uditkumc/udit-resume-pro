import { useState } from "react";

const DeveloperCard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Corner Button */}
      <div
        onClick={() => setShow(!show)}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 9999,
          cursor: "pointer",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 15px rgba(102,126,234,0.5)",
        }}
      >
        <span style={{ fontSize: "20px" }}>👨‍💻</span>
      </div>

      {/* Card */}
      {show && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            left: "20px",
            zIndex: 9999,
            background: "linear-gradient(135deg, #1a1a2e, #16213e)",
            border: "1px solid rgba(102,126,234,0.3)",
            borderRadius: "20px",
            padding: "25px",
            width: "260px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            color: "white",
          }}
        >
          <img
            src="/developer.jpg"
            alt="Developer"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #667eea",
              marginBottom: "10px",
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />

          <p style={{ fontSize: "11px", color: "#667eea", margin: "0 0 4px" }}>
            Designed & Developed by
          </p>
          <h3 style={{ margin: "0 0 15px", fontSize: "18px" }}>Udit Kumar</h3>

          <div style={{ marginBottom: "15px", fontSize: "13px" }}>
            <a href="mailto:uditkumar969364@gmail.com"
              style={{ color: "#a0aec0", textDecoration: "none", display: "block", marginBottom: "6px" }}>
              📧 uditkumar969364@gmail.com
            </a>
            <a href="tel:+91XXXXXXXXXX"
              style={{ color: "#a0aec0", textDecoration: "none" }}>
              📱 +91 XXXXXXXXXX
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <a href="https://instagram.com/tumhara_username" target="_blank" rel="noreferrer"
              style={{ fontSize: "22px" }}>📸</a>
            <a href="https://linkedin.com/in/tumhara_username" target="_blank" rel="noreferrer"
              style={{ fontSize: "22px" }}>💼</a>
            <a href="https://github.com/tumhara_username" target="_blank" rel="noreferrer"
              style={{ fontSize: "22px" }}>🐙</a>
          </div>
        </div>
      )}
    </>
  );
};

export default DeveloperCard;