import * as React from "react";
import Cropper from "react-easy-crop";
import { useState } from "react";
import { cropImage } from "../../utils/cropImage";
import { Modal } from "antd";

export default function DialogImage({
  image,
  onComplete,
  containerStyle,
  handleChange,
  handleApply,
  open,
  handleClickOpen,
  handleClose,
  ...props
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  return (
    <div>
      <Modal
        title="Crop Image"
        open={open}
        onCancel={handleClose}
        onOk={() =>
          onComplete(cropImage(image, croppedAreaPixels, console.log))
        }
        maskClosable={false}
      >
        <div style={containerStyle}>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={(_, croppedAreaPixels) => {
              setCroppedAreaPixels(croppedAreaPixels);
            }}
            onZoomChange={setZoom}
            {...props}
          />
        </div>
      </Modal>
    </div>
  );
}
