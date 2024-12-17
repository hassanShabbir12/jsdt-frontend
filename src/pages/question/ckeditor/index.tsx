import { cn } from '@/lib/utils';
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
// eslint-disable-next-line no-restricted-syntax
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
// eslint-disable-next-line no-restricted-syntax
import 'ckeditor5/ckeditor5.css';

const RichTextEditor = ({
  value,
  onChange,
  showToolbar = true,
}: {
  value: string;
  onChange?: (content: string) => void;
  showToolbar?: boolean;
}): React.ReactNode => (
  <div className={cn(!showToolbar && 'ck-custome-editor')}>
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(_, editor) => {
        const data = editor.getData();

        onChange?.(data);
      }}
      config={{
        licenseKey:
          'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzU2MDMxOTksImp0aSI6IjViYWJkYzFkLTIxZmMtNDIyOC1hNzM0LTRhZDZlZDc3NDJmOSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImIxMDE2OTA3In0.r3YY7GTKcdPwkgxMORhn1GOq7nJBMD6I92IxDRGpDzMDJHX6hNjlmHo8Pj5ecsE038LZRevNej0CKrGN6m7whQ', // Or 'GPL'.
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
            'unlink',
            'blockQuote',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            // 'imageUpload',
            // 'mediaEmbed',
            'htmlEmbed',
            '|',
            'fontFamily',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'insertTable',
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

        // initialData: '<p>Hello from CKEditor 5 in React!</p>',
      }}
    />
  </div>
);

export default RichTextEditor;
