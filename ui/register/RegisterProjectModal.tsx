import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/banner/modal.module.css";

interface RegisterProjectModalProps {
  show: boolean;
  onHide: () => void;
}

export default function RegisterProjectModal({
  show,
  onHide,
}: RegisterProjectModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered className={styles.mainModal}>
      <Modal.Body
        className={`${styles.modalContent} d-flex flex-column align-items-center`}
      >
        <h3>Register Project</h3>
        <h5 className={`${styles.modalTitle} text-center mb-3`}>
          You already have an Account. Would you like to continue?
        </h5>
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={onHide}
            className={`${styles.button} ${styles.secondaryButton} rbt-btn btn-sm`}
          >
            Cancel
          </button>
          <button
            className={`${styles.button} ${styles.primaryButton} rbt-btn btn-sm`}
          >
            Register
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
