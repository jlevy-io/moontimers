import React from "react";
import usePortal from "react-useportal";
import Container, { ImageWrapper } from "./styles";

const Lightbox = ({ imageSrc, altText, isOpen, onClose }) => {
  const { Portal } = usePortal({
    bindTo: document && document.body,
    closeOnOutsideClick: true,
    closeOnEsc: true,
    isOpen,
  });
  return (
    <Portal>
      <Container onClick={onClose}>
        <ImageWrapper>
          <img src={imageSrc} alt={altText} />
        </ImageWrapper>
      </Container>
    </Portal>
  );
};

export default Lightbox;
