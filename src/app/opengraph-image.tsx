import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#faf7ef",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "#f2c01e",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: -120,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "#28592f",
            opacity: 0.18,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#28592f",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {site.name}
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
            <div
              style={{
                color: "#12180f",
                fontSize: 72,
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              {site.title}
            </div>
            <div
              style={{
                marginTop: 24,
                color: "#5c6158",
                fontSize: 28,
                lineHeight: 1.35,
              }}
            >
              Grade A, B, C, dan Frozen Banana untuk ritel, F&B, dan UMKM.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              color: "#28592f",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Jombang, Jawa Timur
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
