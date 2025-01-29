const BottomUI = ({
  message,
  showPopup,
  onInteract,
  onSelect,
  showNextButton,
  choices = [], // Default empty array to avoid errors
}: {
  message: string;
  showPopup: boolean;
  onInteract: () => void;
  onSelect: (choice: string) => void;
  showNextButton: boolean;
  choices?: string[];
}) => {
  return (
    <div className="position-absolute bottom-0 w-100 bg-light border-top p-3 d-flex flex-column align-items-center">
      <div
        className="mb-2 p-2 border rounded w-100 text-center"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        {message}
      </div>
      {showNextButton ? (
        <button className="btn btn-lg btn-dark w-100" onClick={onInteract}>
          Next
        </button>
      ) : (
        <div className="d-flex flex-wrap w-100">
          {choices.map((choice, index) => (
            <button
              key={index}
              className="btn btn-primary flex-fill m-1"
              onClick={() => onSelect(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BottomUI;
