import React from "react";
import EmojiPicker, { IEmojiData } from "emoji-picker-react";
import "./emojiPicker.css";

type EpojiPickerProps={
  open:boolean;
  onEmojiClick:(emojiObject: IEmojiData,event: React.MouseEvent ) => void;
}
const EmojiPickerComponent = (props:EpojiPickerProps) => {
  return (
    <EmojiPicker
      open={props.open}
      onEmojiClick={props.onEmojiClick}
      previewConfig={{ showPreview: false }}
      // data={data}
      // onEmojiClick={addEmojiHandler}
    />
  );
};

export default EmojiPickerComponent;
