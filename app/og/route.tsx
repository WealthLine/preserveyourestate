import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MSA Financial educational planning resource";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "MSA Financial";
const DEFAULT_TOPIC = "Educational Planning Resources";

function readText(value: string | null, fallback: string, limit: number) {
  const text = value?.trim().replace(/\s+/g, " ") || fallback;
  return text.slice(0, limit);
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topic = readText(searchParams.get("topic"), DEFAULT_TOPIC, 88);
  const label = readText(searchParams.get("label"), "Massachusetts financial coordination", 62);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8f5ef",
          color: "#1e3a5f",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#1e3a5f",
            display: "flex",
            height: "18px",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              alignItems: "center",
              background: "#e69f05",
              borderRadius: "8px",
              color: "#1e3a5f",
              display: "flex",
              fontSize: "26px",
              fontWeight: 700,
              height: "54px",
              justifyContent: "center",
              letterSpacing: "0.08em",
              width: "54px",
            }}
          >
            MSA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px", fontWeight: 700 }}>{BRAND}</span>
            <span style={{ fontSize: "18px", marginTop: "4px", opacity: 0.78 }}>Financial coordination for Massachusetts households</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
          <span style={{ color: "#9a6700", fontSize: "22px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {label}
          </span>
          <span style={{ fontFamily: "serif", fontSize: "64px", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.08, marginTop: "24px" }}>
            {topic}
          </span>
        </div>

        <div style={{ borderTop: "2px solid #d9d2c5", display: "flex", justifyContent: "space-between", paddingTop: "22px" }}>
          <span style={{ fontSize: "20px" }}>Educational resource</span>
          <span style={{ fontSize: "20px" }}>preserveyourestate.com</span>
        </div>
      </div>
    ),
    size,
  );
}
