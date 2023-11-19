export function SessionInfo({
  setState,
  type,
}: {
  type: string;
  setState: (val: "enter-dialog") => void;
}) {
  return (
    <div
      style={{
        zIndex: 2,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: "blur(5px)",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "30rem",
          display: "flex",
          rowGap: "2rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <h2 style={{ margin: 0 }}>{type} not available</h2>
          <span
            onClick={() => setState("enter-dialog")}
            style={{
              marginTop: "-0.5rem",
              cursor: "pointer",
              fontSize: "2rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        </div>
        <h3 style={{ margin: 0 }}>
          Please use a compatible browser or a compatible device, such as a Meta
          Quest 2.
        </h3>
      </div>
    </div>
  );
}
