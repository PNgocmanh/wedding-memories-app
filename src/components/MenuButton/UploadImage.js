import React, { useEffect, useState } from "react";

import DialogImage from "./DialogImage";
import * as S from './Menu.style'

const dialogImageStyle = {
  position: "relative",
  width: "100%",
  height: 300,
  background: "#333",
};

function UploadBanner({ uploadFile, setUploadFile }) {
  const [image, setImage] = useState([]);
  const [croppedImage, setCroppedImage] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
    setImage([]);
    setCroppedImage(croppedImage);
  };

  const handleDelete = () => {
    setImage([]);
    setCroppedImage(null);
    setUploadFile("image", null);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const files = e.target.files[0];
      files.preview = URL.createObjectURL(files);
      setImage(files.preview);
      setUploadFile("image", files);
      setDialogOpen(true);
    }
  };

  useEffect(
    () => () => {
      uploadFile && URL.revokeObjectURL(image);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [uploadFile]
  );

  useEffect(() => {
    if (uploadFile === null) setCroppedImage(null);
  }, [uploadFile]);

  return (
    <div>
      <DialogImage
        open={dialogOpen}
        image={image}
        handleClose={handleClose}
        onComplete={(imagePromisse) => {
          imagePromisse.then((image) => {
            setCroppedImage(image);
            setUploadFile("image", image);
            setDialogOpen(false);
          });
        }}
        containerStyle={dialogImageStyle}
      />
      <div>
        <label htmlFor="uploadAvatar">
          {croppedImage === null ? (
            <>
              <S.BoxImageUpload>
                <img
                  alt=""
                  width={100}
                  height={80}
                  src="https://res.cloudinary.com/de3dpb9o4/image/upload/v1688975700/icon_camera_4683487_jnhxac.png"
                />
                <h5>Upload image</h5>
              </S.BoxImageUpload>
            </>
          ) : (
            <>
              <S.BoxImageUpload>
                <img
                  src={croppedImage}
                  alt="memories"
                  width={"100%"}
                  height={"auto"}
                />
              </S.BoxImageUpload>
            </>
          )}
        </label>
        <input
          id="uploadAvatar"
          type="file"
          title="Upload file"
          onChange={handleChange}
          hidden
        />
      </div>
    </div>
  );
}

export default UploadBanner;
