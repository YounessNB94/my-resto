import { useContext } from "react";
import "./Modal.css";
import { FavoritesContext } from "../context/FavoritesContext";

export const Modal = (props: { showModal: boolean }) => {
  const { setShowModal, removeFavorite } = useContext(FavoritesContext);
  console.log(props);
  if (!props.showModal) return null;
  return (
    <div className="container-modal-container">
      <div className="modal-container">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        Do you really want to remove this restaurant from your favorites?{" "}
        <div className="buttons">
          <button
            onClick={() => {
              removeFavorite();
              setShowModal(false);
            }}
            className=""
          >
            Yes
          </button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      </div>
    </div>
  );
};
