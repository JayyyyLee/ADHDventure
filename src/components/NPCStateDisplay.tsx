const NPCStateDisplay = ({ state }: { state: number }) => {
  return (
    <div
      className="position-absolute top-0 end-0 m-2 p-2 bg-light border rounded text-center"
      style={{ width: "100px", right: "10px", top: "10px" }}
    >
      NPC State: {state}
    </div>
  );
};

export default NPCStateDisplay;
