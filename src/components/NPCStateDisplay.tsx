const NPCStateDisplay = ({ state }: { state: number }) => {
  return (
    <div className="position-absolute top-0 w-100 bg-dark text-white text-center p-2">
      NPC State: {state}
    </div>
  );
};

export default NPCStateDisplay;
