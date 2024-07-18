import React from "react";
type InfoBosProps = {
  mode: "hint" | "warning";
  children: React.ReactNode;
};
function InfoBox({ children, mode }: InfoBosProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className="infobox infobox-warning warning--medium">
      <p>Warning</p>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
