// src/custom.d.ts
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module 'emoji-picker-react' {
  import { Component } from 'react';

  export interface IEmojiData {
    unified: string;
    names: string[];
    emoji: string;
    activeSkinTone: string;
  }

  export interface EmojiPickerProps {
    open:boolean;
    onEmojiClick?: (emojiObject: IEmojiData,event: React.MouseEvent) => void;
    disableSearchBar?: boolean;
    disableSkinTonePicker?: boolean;
    preload?: boolean;
    previewConfig?:{
      defaultEmoji?: string; // defaults to: "1f60a"
      defaultCaption?: string; // defaults to: "What's your mood?"
      showPreview?: boolean; // defaults to: true
    }
  }

  export class Picker extends Component<EmojiPickerProps, any> {}
  export default Picker;
}
