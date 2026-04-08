import { siteConfig, siteStats } from "@/lib/site";

export function renderSocialCard() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 12% 18%, rgba(56,189,248,0.22), transparent 30%), radial-gradient(circle at 82% 16%, rgba(59,130,246,0.16), transparent 26%), linear-gradient(135deg, #020617 0%, #0f172a 52%, #111827 100%)",
        color: "#f8fafc",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 36,
          borderRadius: 34,
          border: "1px solid rgba(255,255,255,0.1)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          boxShadow: "0 28px 80px rgba(2,6,23,0.38)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          padding: "72px 76px",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 680 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "rgba(186,230,253,0.95)",
                fontSize: 26,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: "#38bdf8",
                  boxShadow: "0 0 24px rgba(56,189,248,0.65)",
                }}
              />
              India vehicle registration
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 24,
                fontSize: 76,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.06em",
              }}
            >
              <span>Search India</span>
              <span>RTO codes fast.</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 22,
                maxWidth: 590,
                color: "rgba(226,232,240,0.92)",
                fontSize: 30,
                lineHeight: 1.45,
                fontWeight: 500,
              }}
            >
              Browse {siteStats.totalCodes} registration marks across {siteStats.totalStates} states and union territories with a map-first, shareable lookup.
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["MH", "DL", "KA", "TN", "TS / TG", "GJ"].map((chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(226,232,240,0.92)",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            width: 340,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(226,232,240,0.9)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              padding: 24,
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.64) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "rgba(148,163,184,0.92)",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              <span>Preview plate</span>
              <span>RTO.codes</span>
            </div>

            <div
              style={{
                display: "flex",
                position: "relative",
                overflow: "hidden",
                alignItems: "center",
                width: "100%",
                height: 112,
                borderRadius: 24,
                background: "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
                border: "3px solid #111827",
                boxShadow: "0 18px 30px rgba(15,23,42,0.28)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 8,
                  borderRadius: 18,
                  border: "2px solid rgba(15,23,42,0.72)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 62,
                  marginLeft: 18,
                  color: "#184f9c",
                  fontWeight: 700,
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 999,
                    border: "2px solid currentColor",
                    marginBottom: 8,
                  }}
                />
                <div style={{ fontSize: 18, letterSpacing: "0.08em" }}>IND</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 18,
                  color: "#111111",
                  fontWeight: 800,
                  fontSize: 46,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                XX 28 PK 1310
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 16,
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: "linear-gradient(180deg, #f8fafc 0%, #cbd5e1 100%)",
                  border: "1px solid #334155",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 16,
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: "linear-gradient(180deg, #f8fafc 0%, #cbd5e1 100%)",
                  border: "1px solid #334155",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: 18,
                justifyContent: "space-between",
                color: "#e2e8f0",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ fontSize: 14, letterSpacing: "0.16em", textTransform: "uppercase", color: "#94a3b8" }}>
                  Coverage
                </div>
                <div style={{ display: "flex", fontSize: 28, fontWeight: 800 }}>
                  {siteStats.totalStates} states / UTs
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, textAlign: "right" }}>
                <div style={{ fontSize: 14, letterSpacing: "0.16em", textTransform: "uppercase", color: "#94a3b8" }}>
                  Codes listed
                </div>
                <div style={{ display: "flex", fontSize: 28, fontWeight: 800 }}>
                  {siteStats.totalCodes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 58,
          bottom: 42,
          display: "flex",
          alignItems: "center",
          gap: 14,
          color: "rgba(148,163,184,0.92)",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        Social preview image generated in-app
      </div>
    </div>
  );
}
