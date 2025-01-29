const Popup = ({
  message,
  onSelect,
}: {
  message: string;
  onSelect: (choice: string) => void;
}) => {
  return (
    <div
      className="position-absolute top-50 start-50 translate-middle bg-white p-3 border border-dark shadow-lg"
      style={{ width: "300px", height: "200px" }}
    >
      <p>NPC: {message}</p>
      <button className="btn btn-primary me-2" onClick={() => onSelect("A")}>
        A
      </button>
      <button className="btn btn-secondary" onClick={() => onSelect("B")}>
        B
      </button>
    </div>
  );
};

export default Popup;
