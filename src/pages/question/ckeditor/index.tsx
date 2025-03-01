import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  CKFinder,
  CKFinderUploadAdapter,
  ClassicEditor,
  CloudServices,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Highlight,
  HorizontalLine,
  HtmlEmbed,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Title,
  TodoList,
  Underline,
  WordCount,
} from 'ckeditor5';
import { FormatPainter } from 'ckeditor5-premium-features';

import { cn } from '@/lib/utils';

const RichTextEditor = ({
  value,
  onChange,
  showToolbar = true,
  disabled = false,
}: {
  value: string;
  onChange?: (content: string) => void;
  showToolbar?: boolean;
  disabled?: boolean;
}): React.ReactNode => (
  <div className={cn(!showToolbar && 'ck-custome-editor')}>
    <CKEditor
      disabled={disabled}
      editor={ClassicEditor}
      data={value}
      onChange={(_, editor) => {
        const data = editor.getData();

        onChange?.(data);
      }}
      config={{
        licenseKey: import.meta.env.VITE_CKEDITOR_LICENSE_KEY,
        removePlugins: ['Title'],
        plugins: [
          Essentials,
          Paragraph,
          Bold,
          Italic,
          Alignment,
          Autoformat,
          BlockQuote,
          CKFinderUploadAdapter,
          CKFinder,
          CloudServices,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          Highlight,
          HorizontalLine,
          HtmlEmbed,
          Image,
          ImageCaption,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Link,
          List,
          MediaEmbed,
          PasteFromOffice,
          RemoveFormat,
          SourceEditing,
          SpecialCharacters,
          SpecialCharactersEssentials,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableCellProperties,
          TableProperties,
          TableToolbar,
          TextTransformation,
          Title,
          TodoList,
          Underline,
          WordCount,
          FormatPainter,
        ],
        toolbar: {
          items: [
            'undo',
            'redo',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'superscript',
            'subscript',
            'highlight',
            '|',
            'alignment',
            'removeFormat',
            '|',
            'link',
            'blockQuote',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'htmlEmbed',
            '|',
            'fontFamily',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'insertTable',
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
            '|',
            'specialCharacters',
            'horizontalLine',
            'sourceEditing',
          ],
          shouldNotGroupWhenFull: true,
        },
        heading: {
          options: [
            { model: 'paragraph', title: 'Normal', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
          ],
        },
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
          ],
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
          ],
        },
      }}
    />
  </div>
);

export default RichTextEditor;
