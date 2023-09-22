import "../../responsive.css";
import "../faqsModal/faqsModal.css";
import React from "react";
import { HiXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";

type modalInfoType = {
  title: string;
  text: string;
};
type FaqsModalProps = {
  modalInfo: modalInfoType;
  setModal: (arg: boolean) => void;
};
const FaqsModal: React.FC<FaqsModalProps> = ({ modalInfo, setModal }) => {
  const forStop = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className="faqs_modal_bg" onClick={() => setModal(false)}>
      <AnimatePresence>
        <motion.div
          initial={{
            scale: "0.8",
          }}
          animate={{
            scale: "1",
          }}
          exit={{
            scale: "0.8",
          }}
          className="faqs_modal"
          onClick={forStop}
        >
          <div className="faqs_modal_hero">
            <h2>{modalInfo.title}</h2>
            <p>{modalInfo.text}</p>
          </div>
          <div className="modal_close_btn" onClick={() => setModal(false)}>
            <HiXMark />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FaqsModal;
