import React from "react";
type HintBoxProps = {
  mode: "hint";
  children: React.ReactNode;
};
type warningBoxProps = {
  mode: "warning";
  children: React.ReactNode;
  serverity: "low" | "medium" | "high";
};
type infoBoxProps = HintBoxProps | warningBoxProps;
function InfoBox(props: infoBoxProps) {
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${props.serverity}`}>
      <p>Warning</p>
      <p>{props.children}</p>
    </aside>
  );
}

export default InfoBox;
