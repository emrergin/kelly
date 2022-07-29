interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  restartWithNewParameters: (
    e: React.MouseEvent<HTMLButtonElement>,
    inputRatio: HTMLInputElement,
    inputOdds: HTMLInputElement
  ) => void;
  currentOdds: number;
  currentRatio: number;
}

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid black",
  },
};

Modal.setAppElement("#root");

const ConfigModal = ({
  modalIsOpen,
  closeModal,
  restartWithNewParameters,
  currentOdds,
  currentRatio
}: Props) => {
  let inputRatio: HTMLInputElement;
  let inputOdds: HTMLInputElement;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Configuration"
      >
        <form className="flex flex-col">
          <button className="self-end" onClick={closeModal}>
            ✖
          </button>
          <div className="flex mt-5 items-baseline gap-4">
            <label htmlFor="ratio">Probability to win (1-100):</label>
            <input
              type="number"
              id="ratio"
              name="ratio"
              min="1"
              max="100"
              size={3}
              defaultValue={currentRatio}
              ref={(_input1) => (inputRatio = _input1 as HTMLInputElement)}
            />
          </div>
          <div className="flex mt-5 items-baseline gap-4">
            <label htmlFor="odds">Choose odds (x to 1) of the bet:</label>
            <input
              type="number"
              id="odds"
              name="odds"
              min="1"
              size={5}
              defaultValue={currentOdds}
              ref={(_input2) => (inputOdds = _input2 as HTMLInputElement)}
            />
          </div>
          <button
            className="btn self-center mt-5"
            onClick={(event) =>
              restartWithNewParameters(event, inputRatio, inputOdds)
            }
          >
            restart
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ConfigModal;
