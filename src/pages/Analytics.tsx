import { mockUserStats, mockContinueLearning } from "../data/mockData";

export default function Analytics() {
  const totalMinutes = mockUserStats.weeklyProgress.reduce(
    (sum, p) => sum + p.time,
    0
  );

  const averageXP = Math.round(
    mockUserStats.weeklyProgress.reduce((sum, p) => sum + p.xp, 0) / 7
  );

  return (
    <div
      className="panel big"
      style={{
        background: "#171821",
        color: "#fff",
        padding: "28px",
        borderRadius: "16px",
        border: "1px solid #2f303e",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #2f303e",
          paddingBottom: "16px",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ fontSize: "20px" }}>
          📊 Advanced Learning Analytics
        </h2>

        <p
          style={{
            color: "#7a7a85",
            fontSize: "13px",
            marginTop: "4px",
          }}
        >
          Deep dive into your weekly efficiency and subject mastery.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            background: "#21222d",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #2f303e",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "#7a7a85",
              textTransform: "uppercase",
            }}
          >
            Weekly Focus Time
          </span>

          <h3
            style={{
              fontSize: "24px",
              color: "#2196f3",
              margin: "6px 0 0 0",
            }}
          >
            {totalMinutes} mins
          </h3>
        </div>

        <div
          style={{
            background: "#21222d",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #2f303e",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "#7a7a85",
              textTransform: "uppercase",
            }}
          >
            Daily XP Average
          </span>

          <h3
            style={{
              fontSize: "24px",
              color: "#4caf50",
              margin: "6px 0 0 0",
            }}
          >
            {averageXP} XP / day
          </h3>
        </div>

        <div
          style={{
            background: "#21222d",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #2f303e",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "#7a7a85",
              textTransform: "uppercase",
            }}
          >
            Current Streak Status
          </span>

          <h3
            style={{
              fontSize: "24px",
              color: "#ff9800",
              margin: "6px 0 0 0",
            }}
          >
            {mockUserStats.streak} Days Active
          </h3>
        </div>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <h3
          style={{
            fontSize: "16px",
            marginBottom: "16px",
          }}
        >
          📚 Subject Breakdown & Completion Rate
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {mockContinueLearning.map((course) => (
            <div
              key={course.id}
              style={{
                background: "#21222d",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #2f303e",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                <span style={{ fontWeight: "600" }}>
                  {course.title} ({course.category})
                </span>

                <span
                  style={{
                    color: "#8c52ff",
                    fontWeight: "bold",
                  }}
                >
                  {course.progress}%
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background: "#171821",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${course.progress}%`,
                    height: "100%",
                    background:
                      course.progress > 80
                        ? "#4caf50"
                        : "#8c52ff",
                    borderRadius: "4px",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
