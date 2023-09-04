import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { HiXMark } from "react-icons/hi2";

type BlogModalProps = {
  setModal: (arg: boolean) => void;
  conp: any;
};
const BlogModal: React.FC<BlogModalProps> = ({ setModal, conp }) => {
  const closeModal = () => {
    setModal(false);
  };
  const forStop = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className="blog_modal_bg" onClick={closeModal}>
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
          className="blog_modal"
          onClick={forStop}
        >
          <div className="blog_modal_hero">
            {conp}
            <div className="modal_close_btn" onClick={closeModal}>
              <HiXMark />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BlogModal;
