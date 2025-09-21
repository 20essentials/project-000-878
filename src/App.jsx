import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider, Center } from "@mantine/core";

function Logo() {
  return (
    <svg className="am-logo" width="530" viewBox="0 0 800 200">
      <g
        fontFamily="Tahoma"
        fontSize="100"
        fontWeight="bold"
        fill="black"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        letterSpacing="8"
      >
        <text x="110" y="150">L</text>
        <text x="190" y="150">O</text>
        <text x="280" y="150">A</text>
        <text x="370" y="150">D</text>
        <text x="460" y="150">I</text>
        <text x="510" y="150">N</text>
        <text x="590" y="150">G</text>
      </g>
    </svg>
  );
}

export default function App() {
  return (
    <MantineProvider>
      <Center
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
        }}
      >
        <Logo />
      </Center>
      <style>
        {`
          .am-logo {
            fill-opacity: 0;
            stroke-dasharray: 1300;
            stroke-dashoffset: 1300;
            animation: effectDash 2s ease-in forwards;
          }
          @keyframes effectDash {
            70% { fill-opacity: 0; }
            100% { fill-opacity: 100%; stroke-dashoffset: 0; stroke-width: 1; }
          }
        `}
      </style>
    </MantineProvider>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
createRoot(rootEl).render(<App />);
