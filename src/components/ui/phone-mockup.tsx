const APPOINTMENTS = [
  { time: "10:00", name: "Ahmet Yılmaz", service: "Saç Kesimi", duration: "30 dk", color: "#2563EB", status: "Onaylı", statusColor: "#34D399", statusBg: "rgba(52,211,153,0.12)" },
  { time: "11:30", name: "Zeynep Kaya", service: "Renk & Fön", duration: "60 dk", color: "#f59e0b", status: "Bekliyor", statusColor: "#f59e0b", statusBg: "rgba(245,158,11,0.12)" },
  { time: "14:00", name: "Can Demir", service: "Konsültasyon", duration: "45 dk", color: "#34D399", status: "Onaylı", statusColor: "#34D399", statusBg: "rgba(52,211,153,0.12)" },
];

const DAYS = [
  { label: "Pzt", num: 23, selected: true },
  { label: "Sal", num: 24, selected: false },
  { label: "Çar", num: 25, selected: false },
  { label: "Per", num: 26, selected: false },
  { label: "Cum", num: 27, selected: false },
  { label: "Cmt", num: 28, selected: false },
  { label: "Paz", num: 29, selected: false },
];

export function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center select-none" aria-hidden="true">
      {/* Glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "340px",
          height: "420px",
          background: "linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(52,211,153,0.2) 100%)",
          zIndex: 0,
        }}
      />

      {/* Phone shell */}
      <div
        className="relative animate-float"
        style={{
          width: "256px",
          borderRadius: "46px",
          background: "linear-gradient(160deg, #1e1e1e 0%, #111214 100%)",
          padding: "10px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 2px 0 1px rgba(255,255,255,0.04), 0 50px 100px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      >
        {/* Side buttons */}
        <div style={{ position: "absolute", right: "-3px", top: "96px", width: "3px", height: "56px", background: "#1a1a1a", borderRadius: "0 2px 2px 0" }} />
        <div style={{ position: "absolute", left: "-3px", top: "76px",  width: "3px", height: "32px", background: "#1a1a1a", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: "-3px", top: "116px", width: "3px", height: "32px", background: "#1a1a1a", borderRadius: "2px 0 0 2px" }} />

        {/* Screen */}
        <div
          style={{
            borderRadius: "38px",
            overflow: "hidden",
            background: "#0C1117",
            height: "510px",
            position: "relative",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "82px",
              height: "22px",
              background: "#000",
              borderRadius: "11px",
              zIndex: 10,
            }}
          />

          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 18px 0", paddingTop: "38px" }}>
            <span style={{ fontSize: "10px", fontWeight: 600, color: "#F0FDF4" }}>9:41</span>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <rect x="0" y="6" width="2" height="4" rx="0.5" fill="#F0FDF4" />
                <rect x="3" y="4" width="2" height="6" rx="0.5" fill="#F0FDF4" />
                <rect x="6" y="2" width="2" height="8" rx="0.5" fill="#F0FDF4" />
                <rect x="9" y="0" width="2" height="10" rx="0.5" fill="#F0FDF4" />
              </svg>
              <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
                <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="#F0FDF4" strokeOpacity="0.5" />
                <rect x="1.5" y="1.5" width="14" height="8" rx="1.5" fill="#F0FDF4" />
                <path d="M19.5 3.5V7.5" stroke="#F0FDF4" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 14px 8px" }}>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#F0FDF4", letterSpacing: "-0.2px" }}>Günaydın, Mert 👋</p>
              <p style={{ fontSize: "9px", color: "#64748B", marginTop: "2px" }}>Pazartesi, 23 Haziran</p>
            </div>
            <div style={{ width: "28px", height: "28px", borderRadius: "14px", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}>M</span>
            </div>
          </div>

          {/* Metric chips */}
          <div style={{ display: "flex", gap: "6px", padding: "0 12px 10px" }}>
            {[{ v: "3", l: "Bugün", hi: true }, { v: "12", l: "Hafta" }, { v: "1", l: "Bekleyen" }].map((m) => (
              <div key={m.l} style={{
                flex: 1, borderRadius: "10px", padding: "7px 4px", textAlign: "center",
                background: m.hi ? "#2563EB" : "#161D27",
              }}>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{m.v}</p>
                <p style={{ fontSize: "8px", color: m.hi ? "rgba(255,255,255,0.7)" : "#64748B", marginTop: "2px" }}>{m.l}</p>
              </div>
            ))}
          </div>

          {/* Week strip */}
          <div style={{ margin: "0 10px 10px", background: "#161D27", borderRadius: "12px", padding: "5px", display: "flex", gap: "2px" }}>
            {DAYS.map((d) => (
              <div key={d.label} style={{
                flex: 1, textAlign: "center", padding: "5px 0", borderRadius: "8px",
                background: d.selected ? "#2563EB" : "transparent",
              }}>
                <p style={{ fontSize: "7px", fontWeight: 600, color: d.selected ? "#fff" : "#64748B" }}>{d.label}</p>
                <p style={{ fontSize: "11px", fontWeight: 700, color: d.selected ? "#fff" : "#F0FDF4", marginTop: "1px" }}>{d.num}</p>
              </div>
            ))}
          </div>

          {/* Section title */}
          <p style={{ padding: "0 14px 8px", fontSize: "11px", fontWeight: 700, color: "#F0FDF4" }}>
            Bugünkü Randevular
          </p>

          {/* Appointment cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "0 10px" }}>
            {APPOINTMENTS.map((a) => (
              <div key={a.time} style={{ display: "flex", background: "#161D27", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ width: "3px", background: a.color, flexShrink: 0 }} />
                <div style={{ flex: 1, padding: "7px 8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3px" }}>
                    <span style={{ fontSize: "8px", fontWeight: 600, color: "#64748B", letterSpacing: "0.2px" }}>{a.time}</span>
                    <span style={{ fontSize: "7px", fontWeight: 600, color: a.statusColor, background: a.statusBg, padding: "1px 5px", borderRadius: "5px" }}>{a.status}</span>
                  </div>
                  <p style={{ fontSize: "10px", fontWeight: 700, color: "#F0FDF4", lineHeight: 1.2 }}>{a.name}</p>
                  <p style={{ fontSize: "8px", color: "#64748B", marginTop: "2px" }}>{a.service} · {a.duration}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tab bar */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "#161D27", borderTop: "1px solid #1E2D3D",
            padding: "8px 0 14px",
            display: "flex", justifyContent: "space-around",
          }}>
            {[
              { icon: "⊹", active: true },
              { icon: "📅", active: false },
              { icon: "👥", active: false },
              { icon: "📊", active: false },
              { icon: "⚙️", active: false },
            ].map((tab, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: i === 0 ? "16px" : "13px", opacity: tab.active ? 1 : 0.35, color: tab.active ? "#2563EB" : "#94A3B8" }}>
                  {tab.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
