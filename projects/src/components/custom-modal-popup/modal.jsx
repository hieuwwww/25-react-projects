export default function Modal() {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header"></div>
        <div className="body"></div>
      </div>
    </div>
  );
}
